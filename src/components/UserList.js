import React, { Component } from 'react'

import Axios from 'axios'



class UserList extends Component {

    state ={
        users : null,
        errMsg : null
    }


//Axios get uses two things url second one is the promise object 

    componentDidMount(){
        Axios.get("https://jsonplaceholder.typicode.com/users").then((response)=>{
            this.setState({
                users : response.data
            })

        }).catch((err)=>{
            this.setState({
                errMsg : err
            })
        })

    }

  render() {
    return (
      <React.Fragment>
          <div className="container">
              <div className="row">
                  <div className="col">
                      <p className="h3 text-primary">User Information</p>
                      <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates aliquid veniam veritatis pariatur, blanditiis excepturi nihil illum dolore commodi modi minus quisquam, obcaecati nemo reiciendis quod facere, ipsa similique aut!</p>
                  </div>
              </div>
              <div className="row">
                  <div className="col">
                      <pre>{JSON.stringify(this.state.users)}</pre>
                      <table className='table table-primary table-hover text-center table-striped'>
                          <thead className='bg-primary text-white'>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Username</th>
                                <th>Email</th>
                                <th>Address</th>
                            </tr>
                          </thead>
                          <tbody>
                              {
                                  this.state.users ? <React.Fragment>
                                      {
                                          this.state.users.map((each)=>{
                                              return(
                                                  <tr>
                                                      <td>{each.id}</td>
                                                      <td>{each.name}</td>
                                                      <td>{each.username}</td>
                                                      <td>{each.email}</td>
                                                      <td>{each.address.street}</td>
                                                  </tr>
                                              )

                                          })
                                      }
                                  </React.Fragment> : null
                              }
                          </tbody>
                      </table>
                  </div>
              </div>
          </div>
         
      </React.Fragment>
    )
  }
}


export default UserList