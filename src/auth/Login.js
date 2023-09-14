import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";

import * as actions from "../store/actions";
import { KeyCodeUtils, LanguageUtils } from "../utils";

import userIcon from '../../src/assets/images/user.svg';
import passIcon from '../../src/assets/images/pass.svg';
import './Login.scss';
import { FormattedMessage } from 'react-intl';

import adminService from '../services/adminService';
import userService from '../services/userService'
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            RePassword: "",
            isShowPassword: false,
            isLogin: true,
            errCode: 0
            ,
            errMessage: ""
        }
    }

    // initialState = {
    //     username: '',
    //     password: '',
    //     loginError: ''
    // }

    // state = {
    //     ...this.initialState
    // };


    handlerInputUser = (value) => {
        this.setState({
            username: value
        })
    }
    handlerInputPassword = (value) => {
        this.setState({
            password: value
        })
    }
    handlerInputRepeatPassword = (value) => {
        this.setState({
            RePassword: value
        })
    }
    ShowPassword = () => {
        // let isShowPassword = false;
        this.setState({
            isShowPassword: !this.state.isShowPassword
        })
    }
    showRegister = () => {
        this.setState({
            isLogin: !this.state.isLogin
        })
    }

    handlerLogin = async () => {
        try {
            this.setState({
                errMessage: ""
            })
            let data = await userService.handlerApi(this.state.username, this.state.password);

            if (data.data) {
                if (data.data.errCode !== 0) {
                    this.setState({
                        errMessage: data.data.errMessage

                    })
                } else {
                    this.props.userLoginSuccess(data.data.user);

                }

            }

        } catch (error) {

            this.setState({
                errMessage: error.response && error.response.data && error.response.data.message ? error.response.data.message : ""
            })
        }
    }
    handlerRegister = async () => {
        try {
            this.setState({
                errMessage: ""
            })
            let data = await userService.handlerApiRegiSter(this.state.username, this.state.password, this.state.RePassword);

            if (data.data) {

                this.setState({
                    errCode: data.data.userData.errCode,
                    errMessage: data.data.userData.errMessage

                })


            }

        } catch (error) {

            this.setState({
                errMessage: error.response && error.response.data && error.response.data.message ? error.response.data.message : ""
            })
        }
    }
    render() {


        return (
            <>
                {this.state.isLogin ?

                    <div className="login-wrapper">
                        <div className="container">
                            <label for="uname"><b>Username</b></label>
                            <input onChange={(e) => this.handlerInputUser(e.target.value)} type={"text"} placeholder="Enter Username" name="uname" required value={this.state.username} />

                            <label for="psw"><b>Password</b></label>
                            <div className='password'>

                                {!this.state.isShowPassword ?
                                    <>
                                        <input onChange={(e) => this.handlerInputPassword(e.target.value)} type="password" placeholder="Enter Password" name="psw" required value={this.state.password} />
                                        <i onClick={() => { this.ShowPassword() }} className="showpassword fas fa-eye-slash"></i>
                                    </>
                                    :
                                    <>
                                        <input onChange={(e) => this.handlerInputPassword(e.target.value)} type="text" placeholder="Enter Password" name="psw" required value={this.state.password} />
                                        <i onClick={() => { this.ShowPassword() }} className="showpassword fas fa-eye"></i>
                                    </>
                                }

                                {this.state.errCode ? <p className='errMessage' style={{ color: 'red' }}>{this.state.errMessage} </p>
                                    :
                                    <p className='errMessage' style={{ color: 'green' }}>{this.state.errMessage} </p>
                                }

                            </div>

                            <button onClick={() => this.handlerLogin()} className='btn' type="submit">Login </button>


                            <button type="button" className="cancelbtn ">Cancel</button>
                            <p>you dont have an account <a href='#' onClick={() => { this.showRegister() }}>Register</a> </p>


                        </div>
                    </div>
                    :
                    <div className="login-wrapper">
                        <div className="container">
                            <label for="uname"><b>Username</b></label>
                            <input onChange={(e) => this.handlerInputUser(e.target.value)} type={"text"} placeholder="Enter Username" name="uname" required value={this.state.username} />

                            <label for="psw"><b>Password</b></label>
                            <div className='password'>

                                {!this.state.isShowPassword ?
                                    <>
                                        <input onChange={(e) => this.handlerInputPassword(e.target.value)} type="password" placeholder="Enter Password" name="psw" required value={this.state.password} />


                                        <i onClick={() => { this.ShowPassword() }} className="showpassword fas fa-eye-slash"></i>
                                    </>
                                    :
                                    <>
                                        <input onChange={(e) => this.handlerInputPassword(e.target.value)} type="text" placeholder="Enter Password" name="psw" required value={this.state.password} />


                                        <i onClick={() => { this.ShowPassword() }} className="showpassword fas fa-eye"></i>
                                    </>
                                }


                            </div >
                            <label for="psw"><b>Repeat Password</b></label>
                            <div className='repeat password'>

                                {!this.state.isShowPassword ?
                                    <>
                                        <input onChange={(e) => this.handlerInputRepeatPassword(e.target.value)} type="password" placeholder="Repeat Password" name="psw" required value={this.state.RePassword} />


                                        <i onClick={() => { this.ShowPassword() }} className="showpassword fas fa-eye-slash"></i>
                                    </>
                                    :
                                    <>
                                        <input onChange={(e) => this.handlerInputRepeatPassword(e.target.value)} type="text" placeholder="Repeat Password" name="psw" required value={this.state.RePassword} />


                                        <i onClick={() => { this.ShowPassword() }} className="showpassword fas fa-eye"></i>
                                    </>
                                }
                                {this.state.errCode ? <p className='errMessage' style={{ color: 'red' }}>{this.state.errMessage} </p>
                                    :
                                    <p className='errMessage' style={{ color: 'green' }}>{this.state.errMessage} </p>
                                }

                            </div>
                            <button onClick={() => this.handlerRegister()} className='btn' type="submit">register </button>
                            <button type="button" className="cancelbtn ">Cancel</button>
                            <p>you have an account <a href='#' onClick={() => { this.showRegister() }}>login</a> </p>
                        </div >
                    </div >
                }
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        lang: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        navigate: (path) => dispatch(push(path)),
        userLoginFail: () => dispatch(actions.userLoginFail()),
        userLoginSuccess: (userInfo) => dispatch(actions.userLoginSuccess(userInfo))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
