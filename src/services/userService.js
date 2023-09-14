import axios from '../axios';

const handlerApi = async (email, password) => {

    return await axios.post('/api/login', { email, password });


}

const handlerApiRegiSter = async (email, password, repassword) => {

    return await axios.post('/api/Register', { email, password, repassword });


}
const handlerApiGetUsers = async (id) => {
    return await axios.get(`api/get-all-user/${id}`)
}
const handlerApiDeleteUser = async (id) => {
    return await axios.post('api/delete-user', { id: id })
}
const handlerApiUpdateUser = async (data) => {
    return await axios.post('api/update-user', data)
}
const handlerApiCreateUser = async (data) => {
    return await axios.post('api/create-user', data)
}
export default {
    handlerApi: handlerApi,
    handlerApiRegiSter: handlerApiRegiSter,
    handlerApiGetUsers: handlerApiGetUsers,
    handlerApiDeleteUser: handlerApiDeleteUser,
    handlerApiUpdateUser: handlerApiUpdateUser,
    handlerApiCreateUser: handlerApiCreateUser
};