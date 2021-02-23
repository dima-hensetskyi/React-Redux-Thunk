import React from 'react';
import { connect } from 'react-redux';

import { Alerts } from '../Alert';
import { addUsers } from '../../redux/actions/add-user-actions';
import { showAlert } from '../../redux/actions/app-actions';

import { Card, TextField, SubmitBtn, CardColorAddUser } from '../StyleComponents/StyledComponents';
import './userForm.css';

class addUserForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      username: '',
      avatar: '',
    };
  }

  resetInput = () => {
    this.setState({
      name: '',
      username: '',
      avatar: '',
    });
  };

  changeInputHendler = (event) => {
    this.setState((prev) => ({
      ...prev,
      ...{ [event.target.name]: event.target.value },
    }));
  };

  submitHendler = (e) => {
    const { username, avatar, name } = this.state;
    const validUrl = /^(ftp|http|https):\/\/[^ "]+$/.test(avatar);
    const validUser = name.length > 2 || username.length > 2;
    if (!validUser || !validUrl) {
      return this.props.showAlert(
        'The information you entered is incorrect. Try again with different info.',
        'warning'
      );
    }
    const newUser = {
      name,
      username,
      avatar,
    };
    this.props.addUsers(newUser);
    this.resetInput();
  };

  render() {
    return (
      <div className="add-user-form">
        <Card>
          <CardColorAddUser>
            <span className="material-icons">manage_accounts</span>
          </CardColorAddUser>
          <h1>Add new user</h1>
          <TextField
            pattern=".{3,}"
            required
            type="name"
            placeholder="Name*"
            value={this.state.name}
            onChange={this.changeInputHendler}
            name="name"
          />
          <TextField
            pattern=".{3,}"
            placeholder="Nickname*"
            value={this.state.username}
            onChange={this.changeInputHendler}
            name="username"
            required
          />
          <TextField
            placeholder="Link for avatar*"
            value={this.state.avatar}
            onChange={this.changeInputHendler}
            name="avatar"
            type="url"
            required
          />
          <SubmitBtn onClick={this.submitHendler}>Submit</SubmitBtn>
        </Card>
        <div className="alert">
          {this.props.alert && <Alerts text={this.props.alert} typeAlert={this.props.typeAlert} />}
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  addUserSuccess: state.users.success,
  alert: state.app.alert,
  typeAlert: state.app.typeAlert,
});

const mapDispatchToProps = {
  addUsers,
  showAlert,
};

export default connect(mapStateToProps, mapDispatchToProps)(addUserForm);
