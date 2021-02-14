/*!

=========================================================
* Argon Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import {connect} from 'react-redux';
import {selectCurrentUser, selectCurrentUserLoginError} from '../../redux/user/user-selectors';
import {googleSignInStart, emailSignInStart} from '../../redux/user/user-actions';
//import SignUp from 'components/sign-up/sign-up';
//import './sign-in.scss';
import {createStructuredSelector} from 'reselect'; //bcoz we gonna be pulling stufff off the state
import SignUp from './SignUp'
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
  Modal
} from "reactstrap";
import classnames from "classnames";
// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import SimpleFooter from "components/Footers/SimpleFooter.js";
import Headroom from "headroom.js";
class SignIn extends React.Component {
      constructor(props) {
        super(props);
    
        this.state = {
          email: '',
          password: '',
          showPopUpSignUp: false,
          error: '',
          success: '',
          spinner: false,
        };
      }
    
      showPopUpSignUp(event) {
        this.setState({
          showPopUpSignUp: !this.state.showPopUpSignUp
        });
      }

      handleSubmit = async event => {
        event.preventDefault();
    
        const {emailSignInStart} = this.props; //destructure from props
        const {email, password} = this.state;
    this.setState({ spinner: true});
        emailSignInStart(email, password);
      };
    
      handleChange = event => {
        const { value, name } = event.target;
    
        this.setState({ [name]: value });
      };
  render() {
    const {googleSignInStart, currentUser, error} = this.props;
    //var spinner = googleSignInStart || currentUser || error ? false : this.state.spinner;

    return (
        
        <div className="modal-body p-0">
       
        {  !this.state.showPopUpSignUp?
          <Card className="bg-secondary shadow border-0">
          <CardHeader className="bg-white pb-5">
            <div className="text-muted text-center mb-3">
              <small>Sign in with</small>
            </div>
            <div className="btn-wrapper text-center">
              <Button
                className="btn-icon mt-2 mb-2 ml-0"
                color="neutral"
                onClick={googleSignInStart} 
              >
                <span className="btn-inner--icon mr-1">
                  <img
                    alt="..."
                    src={require("assets/img/icons/common/google.svg")}
                  />
                </span>
                <span className="btn-inner--text">Google</span>
              </Button>
            </div>
          </CardHeader>
          <CardBody className="px-lg-5 py-lg-5">
            <div className="text-center text-muted mb-4">
              <small>Or sign in with credentials</small>
            </div>
            <Form role="form" onSubmit={this.handleSubmit}>
              <FormGroup
                className={classnames("mb-3", {
                  focused: this.state.emailFocused
                })}
              >
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-email-83" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Email"
                    type="email"
                    name = 'email'
                    onChange={this.handleChange}
                    value={this.state.email}
                    onFocus={e => this.setState({ emailFocused: true })}
                    onBlur={e => this.setState({ emailFocused: false })}
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup
                className={classnames({
                  focused: this.state.passwordFocused
                })}
              >
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-lock-circle-open" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Password"
                    name='password'
                    type="password"
                    autoComplete="off"
                    value={this.state.password}
                    onChange={this.handleChange}
                    onFocus={e =>
                      this.setState({ passwordFocused: true })
                    }
                    onBlur={e =>
                      this.setState({ passwordFocused: false })
                    }
                  />
                </InputGroup>
              </FormGroup>
              <div className="text-center">


              { this.state.spinner && !this.props.currentUser?
                    this.props.error?           
                        <Button className="my-2" color="primary" type="button" type='submit'>
                            Error : Re-Submit
                        </Button>
                      : <Button className="my-4" color="primary" type="button">
                            Loading...
                        </Button>
                : this.props.currentUser?
                    <Button className="my-4" color="primary" type="button">
                    Signed In. Thank you
                    </Button>
                : <Button className="my-2" color="primary" type="button" type='submit'>
                            Sign In
                 </Button>
              }
              </div>
            </Form>
          </CardBody>
          <CardHeader className="bg-white pb-5">
            <div className="text-muted text-center mb-3">
              <small>Don't have Account?</small>
            </div>
            <div className="btn-wrapper text-center">

                <Button className="my-2" color="primary" type="button" onClick = {this.showPopUpSignUp.bind(this)} >
                Sign Up
                </Button>
            </div>
          </CardHeader>
        </Card>
        : <SignUp/>
        }
        </div>
    
    );
  }
}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({email, password}))
  });
  
  const mapStateToProps = createStructuredSelector ({
    currentUser : selectCurrentUser,
    error : selectCurrentUserLoginError
  });
  
  export default connect(mapStateToProps,mapDispatchToProps)(SignIn);
