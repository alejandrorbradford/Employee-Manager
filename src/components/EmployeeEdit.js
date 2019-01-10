import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Communications from 'react-native-communications';
import EmployeeForm from './EmployeeForm';
import { employeeUpdate, employeeSave, employeeDelete } from '../actions';
import { Card, CardSection, Button, ConfirmModal } from './common';

class EmployeeEdit extends Component {
  state = { showModal: false };

  componentWillMount() {
    // Prepopulate form
    _.each(this.props.employee, (value, prop) => {
      this.props.employeeUpdate({ prop, value });
    });
  }

  onButtonPress() {
    const { name, phone, shift } = this.props;
    this.props.employeeSave({ name, phone, shift, uid: this.props.employee.uid });
  }

  onTextPressed() {
    const { phone, shift } = this.props;
    Communications.text(phone, `Your upcoming shift is on ${shift}`);
  }

  onFirePressed() {
    this.setState({ showModal: !this.state.showModal });
  }

  onAccept() {
    this.setState({ showModal: false });
    this.props.employeeDelete({ uid: this.props.employee.uid });
  }

  onDecline() {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <Card>
        <EmployeeForm />
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)} >
            Save Changes
          </Button>
        </CardSection>

        <CardSection>
          <Button onPress={this.onTextPressed.bind(this)} >
            Text Schedule
          </Button>
        </CardSection>

        <CardSection>
          <Button onPress={this.onFirePressed.bind(this)} >
            Fire Employee
          </Button>
        </CardSection>

        <ConfirmModal
          visible={this.state.showModal}
          onAccept={this.onAccept.bind(this)}
          onDecline={this.onDecline.bind(this)}
        >
          Are you sure you want to delete this?
        </ConfirmModal>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  const { name, phone, shift } = state.employeeForm;
  return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeUpdate, employeeSave, employeeDelete })(EmployeeEdit);
