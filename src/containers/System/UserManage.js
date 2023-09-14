import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import userService from '../../services/userService';
import ModaEditlUser from './modalEditUser';
import ModalCreateUser from './modalCretaeUser';

import './userManage.scss';
class UserManage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            users: [],
            editModal: false,
            createModal: false,
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
    handlerCreateModal = () => {
        console.log(1);
        this.setState({
            createModal: true
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
    handlerCreateUser = async (userData) => {
        try {
            let respone = await userService.handlerApiCreateUser(userData);

            if (respone) {

                alert(respone.data.errMessage);
                this.setState({
                    editModal: false
                })
                await this.getAllUser();
            } else {
                alert('some thing wrong')
            }
        } catch (error) {
            console.log(error)
        }

    }
    toggleUserModal = () => {
        this.setState({
            editModal: !this.state.editModal,


        })
    }
    toggleCreateUserModal = () => {
        this.setState({

            createModal: !this.state.createModal

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
                <div className="m-auto" style={{ width: '90%' }}>

                    <button className='create-user btn btn-primary' onClick={() => { this.handlerCreateModal() }}>  <i class="fas fa-plus"></i> Create New User</button>
                    <table className="table" style={{ marginTop: "10px" }}  >
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
                                <ModaEditlUser
                                    modal={this.state.editModal}
                                    toggleFromParent={this.toggleUserModal}
                                    user={this.state.userEdit}
                                    handlerUpdateUser={this.handlerUpdateUser}>
                                </ModaEditlUser>}
                            {this.state.createModal &&
                                <ModalCreateUser
                                    modal={this.state.createModal}
                                    toggleFromParent={this.toggleCreateUserModal}
                                    user={this.state.userEdit}
                                    handlerCreateUser={this.handlerCreateUser}
                                >
                                </ModalCreateUser>}

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
