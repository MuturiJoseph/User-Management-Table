import { Component } from "react";
import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/js/dist/dropdown';

const textSytle={
    textDecoration:"none",
    marginLeft:"15px"
}

class  UserTable extends Component {
    state = {  } 
    render() {
        const{users,userCount,onDelete} = this.props;

        return (
            <div className="container">
                <div className="table-responsive">
                    <div className="table-wrapper">
                        <div className="table-title">
                            <div className="row">
                                <div className="col-xs-5">
                                    <h3>User <b>Management</b></h3>
                                </div>
                                <div className="col-xs-7">
                                    <a className="btn btn-primary" href="/users/new"><i className="material-icons">&#xE147;</i> <span>Add New User</span></a>
                                </div>
                                <div className="col-xs-5">
                                    <h5 className="text-info" style={{textAlign:"center"}}>Showing {userCount} Users</h5>
                                </div>
                            </div>
                        </div>
                        <table className="table table-striped table-hover content" id="userTable">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Name</th>
                                    <th>Date Created</th>
                                    <th>Role</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map(user => <tr>
                                    <td>{user._id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.date}</td>
                                    <td>{user.role}</td>
                                    <td>{user.status}</td>
                                    <td>
                                            <div className="btn-group">
                                            <button type="button" className="btn btn-info dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" data-toggle="dropdown">
                                                Action
                                            </button>
                                            <ul className="dropdown-menu">
                                                <li><a className="text-primary dropdown-item" href="/users/new">New</a></li>
                                                <li><Link style={textSytle} to={`/users/${user._id}`}>Edit</Link></li>
                                                <li>
                                                    <a onClick={() => onDelete(user)} className="text-danger dropdown-item">Delete</a>
                                                    {/* <button onClick={() => onDelete(user)}className='btn btn-danger btn-sm'>Delete</button> */}
                                                </li>
                                            </ul>
                                        </div>
                                    </td>
                                </tr>)}
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        );
    }
}
 
export default UserTable;