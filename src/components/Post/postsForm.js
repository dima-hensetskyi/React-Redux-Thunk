import React from 'react';
import { connect } from 'react-redux';
import { InputLabel, FormHelperText, FormControl, Select } from '@material-ui/core/';

import { showAlert } from '../../redux/actions/app-actions';
import { fetchUsers } from '../../redux/actions/add-user-actions';
import { createPost } from '../../redux/actions/add-post-actions';

import { Alerts } from '../Alert';

import { Card, CardColorAddUser, TextField, SubmitBtn } from '../StyleComponents/StyledComponents';
import './Post.css';

class PostForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      content: '',
      image: '',
      userId: '',
    };
  }
  componentDidMount() {
    if (!this.props.downloadUsers) {
      this.props.fetchUsers();
    }
  }

  changeInputHendler = (event) => {
    this.setState((prev) => ({
      ...prev,
      ...{ [event.target.name]: event.target.value },
    }));
  };
  resetInput = () => {
    this.setState({
      content: '',
      image: '',
      userId: '',
    });
  };

  submitHendler = (e) => {
    const { content, image, userId } = this.state;
    const validUrl = /^(ftp|http|https):\/\/[^ "]+$/.test(image);
    const validContent = content.length > 2;
    if (!validContent || !validUrl || !userId) {
      return this.props.showAlert(
        'The information you entered is incorrect. Try again with different info.',
        'warning'
      );
    }
    const newPost = {
      content,
      image,
      userId: +userId,
    };
    console.log(newPost);
    this.props.createPost(newPost);
    this.resetInput();
  };

  render() {
    return (
      <div className="post-form">
        <Card>
          <CardColorAddUser>
            <span className="material-icons">post_add</span>
          </CardColorAddUser>
          <h1>Add new Post</h1>
          <FormControl required className="select">
            <InputLabel htmlFor="user">User</InputLabel>
            <Select
              native
              value={this.state.user}
              onChange={this.changeInputHendler}
              name="userId"
              inputProps={{
                id: 'user',
              }}
            >
              <option aria-label="None" value="" />
              {this.props.users.map((user) => (
                <option value={user.id} key={user.id}>
                  {user.name}
                </option>
              ))}
            </Select>
            <FormHelperText>Pick user</FormHelperText>
          </FormControl>
          <TextField
            pattern=".{5,}"
            placeholder="Write you tweet*"
            value={this.state.content}
            onChange={this.changeInputHendler}
            name="content"
            required
          />
          <TextField
            placeholder="Link for image*"
            value={this.state.image}
            onChange={this.changeInputHendler}
            name="image"
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
  downloadUsers: state.app.downloadUsers,
  users: state.users.users,
  addUserSuccess: state.users.success,
  alert: state.app.alert,
  typeAlert: state.app.typeAlert,
});

const mapDispatchToProps = {
  createPost,
  showAlert,
  fetchUsers,
};
export default connect(mapStateToProps, mapDispatchToProps)(PostForm);
