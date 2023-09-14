import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import userService from '../../services/userService';
import ModalUser from './modalUser';
import './userManage.scss';
class UserManage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            users: [],
            editModal: false,
            userEdit: {}
        }
    }
    deleteUser = async (id) => {
        try {

            let response = await userService.handlerApiDeleteUser(id);
            alert(response.data.usersData.errMessage);
            await this.getAllUser();
        } catch (error) {
            console.log(error);
        }
    }
    handlerEditUser = (user) => {

        this.setState({

            editModal: true,
            userEdit: user
        })

    }
    handlerUpdateUser = async (userData) => {
        try {
            let respone = await userService.handlerApiUpdateUser(userData);
            alert(respone.data.usersData.errMessage);
            this.setState({
                editModal: false
            })
            await this.getAllUser();
        } catch (error) {
            console.log(error)
        }
    }
    toggleUserModal = () => {
        this.setState({
            editModal: !this.state.editModal
        })
    }
    getAllUser = async () => {
        try {

            let response = await userService.handlerApiGetUsers('ALL');
            this.setState({
                users: response.data.usersData.users
            })

        } catch (error) {
            console.log(error);
        }
    }
    componentDidMount() {
        this.getAllUser()
    }


    render() {
        let users = this.state.users;
        var stt = 1;
        return (
            <div className='users-container'>
                <div className='title text-center'>Manage With Phat Ho</div>
                <table className="table m-auto" style={{ width: '90%' }} >
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Email</th>
                            <th scope="col">FirtName</th>
                            <th scope="col">LastName</th>
                            <th scope="col">Adress</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.editModal &&
                            <ModalUser
                                modal={this.state.editModal}
                                toggleFromParent={this.toggleUserModal}
                                user={this.state.userEdit}
                                handlerUpdateUser={this.handlerUpdateUser}>
                            </ModalUser>}

                        {users.map((user) => {

                            return <tr>
                                <th scope="row">{stt++}</th>
                                <td>{user.email}</td>
                                <td>{user.firstName}</td>
                                <td>{user.lastName}</td>
                                <td>{user.address}</td>
                                <td>
                                    <div className='row'>
                                        <i class="far fa-trash-alt col btn btn-primary" onClick={() => { this.deleteUser(user.id) }} ></i>

                                        <i class="fas fa-edit col btn btn-primary" onClick={() => { this.handlerEditUser(user) }}></i>
                                    </div>
                                </td>

                            </tr>
                        })}


                    </tbody>
                </table>
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

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
