import React from "react";
import { Component } from "react";
import { getUser, saveUser } from "../services/FakeUsersService";

const loginForm = {
    display:'flex',
    justifyContent:'center',
 }
 const shadows = {
    boxShadow: "0 .25rem .75rem grey",
    marginTop: "20px"
 }

class UserForm extends Component {
    state = { 
        data:{
            name:'',
            date:'',
            role:'',
            status:''
        },
        users:[],
     };

     componentDidMount(){
        const userId =this.props.match.params.id; //this.props.match.params.id;
        if(userId === 'new') return;
        // //if the new movie is not found,,redirect the user to notfound page
        const user = getUser(parseInt(userId));
        if(!user) return this.props.history.replace("/not-found");
        //after this we update the state with a viewModel method
        this.setState({data:this.mapToViewModel(user)});
      }
      mapToViewModel(user){
        return {
          _id:user._id,
          name:user.name,
          date:user.date,
          role:user.role,
          status:user.status
        }; 
      }
  
      doSubmit = () => {
        //here we call the save method to save the move in fakeusers
        saveUser(this.state.data);
  
        this.props.history.push("/users");
      }
 
     handleSubmit = e => {
         e.preventDefault();
         this.doSubmit();
     };
     handleChange = ({currentTarget:input}) => {
         const data = {...this.state.data};
         data[input.name] = input.value;
 
         this.setState({data});
     };
    render() { 
        const{data} = this.state;
        return (
            <div style={loginForm}>
            <div className="my-account">
                <div className="row" style={shadows}>
                    <div className="col-lg-6 col-md-12">
                        <div className="tabs-container"></div>
                            <form onSubmit={this.handleSubmit}>
                                        <div className="mb-3">
                                            <label htmlFor="name" className="form-label">Name</label>
                                            <input style={{width:250}} name="name" onChange={this.handleChange} className="form-control" id="name" aria-describedby="emailHelp" value={data.name}></input>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="date" className="form-label">Date</label>
                                            <input style={{width:250}} name="date" onChange={this.handleChange} className="form-control" id="date" value={data.date}></input>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="role" className="form-label">Role</label>
                                            <input style={{width:250}} name="role" onChange={this.handleChange} className="form-control" id="role" value={data.role}></input>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="status" className="form-label">Status</label>
                                            <input style={{width:250}} name="status" onChange={this.handleChange} className="form-control" id="status" value={data.status}></input>
                                        </div>
                                        <button type="submit" className="btn btn-primary" style={{marginBottom:"10px"}}>Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default UserForm;