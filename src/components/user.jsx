import React from "react";
import { Component } from "react";
import UserTable from './UserTable';
import Pagination from "./pagination";
import { paginate } from "../paginate";
import { getUsers } from "../services/FakeUsersService";

class Users extends Component {
    state = {
        users:[],
        currentPage :1,
        pageSize:5,
     } 

     componentDidMount(){
        this.setState({users : getUsers()});
    }

    handlePageChange = page => {
        this.setState({currentPage:page})
    };

    getPagedData = () => {
        const{pageSize,currentPage,users: allusers} = this.state
        const users = paginate(allusers,currentPage,pageSize);
        return {totalCount:allusers.length,data:users};
    }

    handleDelete = user => {
        const users = this.state.users.filter(m => m._id !==user._id);
        this.setState({users:users});
      };
    
    render() { 
        const {totalCount,data:users} = this.getPagedData();
        const{pageSize,currentPage} = this.state
        const {length : userCount} = this.state.users;

        return (
            <React.Fragment>
                <UserTable
                users = {users}
                userCount = {userCount}
                onDelete = {this.handleDelete}
                />
                <Pagination
                itemsCount = {totalCount}
                pageSize = {pageSize}
                currentPage = {currentPage}
                onPageChange = {this.handlePageChange}
                />
            </React.Fragment>
        );
    }
}
 
export default Users;