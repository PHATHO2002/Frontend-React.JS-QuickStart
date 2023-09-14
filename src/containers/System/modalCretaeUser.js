import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import userService from '../../services/userService';
class ModalCreateUser extends Component {
    constructor(props) {
        super(props);
        this.state = {

            email: '',
            password: '',
            firstName: '',
            lastName: '',
            address: ''
        }
    }
    handlerInputEmail = (email) => {
        this.setState({
            email: email

        })

    }
    handlerInputPassword = (password) => {
        this.setState({
            password: password

        })

    }
    handlerInputFirstName = (firstName) => {
        this.setState({
            firstName: firstName

        })

    }
    handlerInputLastName = (lastName) => {
        this.setState({
            lastName: lastName

        })

    }
    handlerInputAddress = (address) => {
        this.setState({
            address: address

        })

    }

    toggle = () => {
        this.props.toggleFromParent()
    }
    async componentDidMount() {


    }


    render() {

        return (
            <div>
                <Modal isOpen={this.props.modal} toggle={() => { this.toggle() }} className={'abcClasName'}>
                    <ModalHeader toggle={() => { this.toggle() }}> Create User</ModalHeader>
                    <ModalBody>
                        <div className='row'>
                            <div class="form-group col-7">
                                <label for="exampleInputEmail1">Email </label>
                                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(event) => { this.handlerInputEmail(event.target.value) }} />

                            </div>
                            <div class="form-group col-5">
                                <label for="exampleInputEmail1">Password </label>
                                <input type="password" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(event) => { this.handlerInputPassword(event.target.value) }} />

                            </div>

                        </div>

                        <div className='row'>
                            <div class="form-group col">
                                <label for="exampleInputEmail1">firstName</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(event) => { this.handlerInputFirstName(event.target.value) }} />

                            </div>

                            <div class="form-group col">
                                <label for="exampleInputEmail1">lastName</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(event) => { this.handlerInputLastName(event.target.value) }} />

                            </div>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputEmail1">address</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(event) => { this.handlerInputAddress(event.target.value) }} />

                        </div>


                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={() => { this.props.handlerCreateUser(this.state) }}>Create</Button>{' '}
                        <Button color="secondary" onClick={() => { this.toggle() }}>Cancel</Button>
                    </ModalFooter>
                </Modal >
            </div >
        );
    }

}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalCreateUser);
