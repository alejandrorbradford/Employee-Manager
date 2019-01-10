import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection, Input, Button, Spinner } from './common';
import { emailChange, passwordChange, loginUser } from '../actions';

class LoginForm extends Component {
  onEmailChange(text) {
    this.props.emailChange(text);
  }

  onPasswordChange(text) {
    this.props.passwordChange(text);
  }

  onSignInPress() {
    const { email, password } = this.props;

    this.props.loginUser(email, password);
  }

  renderErrorIfNeeded() {
    if (this.props.error) {
      return (
        <View style={{ backgroundColor: 'white' }}>
          <Text style={styles.errorTextStyle}>
            {this.props.error}
          </Text>
        </View>
      );
    }
  }

  renderLastSection() {
    if (this.props.loading) {
      return (
        <Spinner size='large' />
      );
    }

    return (
      <Button onPress={this.onSignInPress.bind(this)}>
        Login
      </Button>
    );
  }

  render() {
    return (
      <Card>
      <CardSection>
        <Input
          labelText="Email"
          placeholderText="email@email.com"
          onChangeText={this.onEmailChange.bind(this)}
          value={this.props.email}
        />
      </CardSection>

      <CardSection>
        <Input
          labelText="Password"
          placeholderText="password"
          secureTextEntry
          onChangeText={this.onPasswordChange.bind(this)}
          value={this.props.password}
        />
      </CardSection>

      {this.renderErrorIfNeeded()}

      <CardSection>
        {this.renderLastSection()}
      </CardSection>
      </Card>
    );
  }
}

const styles = {
    errorTextStyle: {
      fontSize: 20,
      alignSelf: 'center',
      color: 'red'
    }
};

const mapStateToProps = state => {
  return {
    email: state.auth.email,
    password: state.auth.password,
    error: state.auth.error,
    loading: state.auth.loading
  };
};

export default connect(mapStateToProps, { emailChange, passwordChange, loginUser })(LoginForm);
