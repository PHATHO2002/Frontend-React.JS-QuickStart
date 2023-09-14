import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import userService from '../../services/userService';
class ModalUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            email: '',
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
        let user = { ...this.props.user }
        this.setState({
            id: user.id,
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName,
            address: user.address
        })

    }


    render() {

        return (
            <div>
                <Modal isOpen={this.props.modal} toggle={() => { this.toggle() }} className={'abcClasName'}>
                    <ModalHeader toggle={() => { this.toggle() }}> Edit User</ModalHeader>
                    <ModalBody>

                        <div class="form-group">
                            <label for="exampleInputEmail1">Email </label>
                            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(event) => { this.handlerInputEmail(event.target.value) }} value={this.state.email} />

                        </div>

                        <div className='row'>
                            <div class="form-group col">
                                <label for="exampleInputEmail1">firstName</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(event) => { this.handlerInputFirstName(event.target.value) }} value={this.state.firstName} />

                            </div>

                            <div class="form-group col">
                                <label for="exampleInputEmail1">lastName</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(event) => { this.handlerInputLastName(event.target.value) }} value={this.state.lastName} />

                            </div>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputEmail1">address</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(event) => { this.handlerInputAddress(event.target.value) }} value={this.state.address} />

                        </div>


                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={() => { this.props.handlerUpdateUser(this.state) }}>Save</Button>{' '}
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

export default connect(mapStateToProps, mapDispatchToProps)(ModalUser);
