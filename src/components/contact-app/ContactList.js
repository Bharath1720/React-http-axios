import React, { Component } from 'react'

class ContactList extends Component {

  clickContact = (value) =>{
    this.props.pushContact(value)
  }
  render() {
    return (
      <React.Fragment>
          {/* <h1>Contact List</h1> */}
          {/* <pre>{this.props.contacts}</pre> */}
          <table className='table table-hover table-danger text-center table-striped'>
            <thead className='bg-danger texxt-white'>
              <tr>
                <th>S.No</th>
                <th>Image</th>
                <th>Name</th>
                <th>Age</th>
                <th>Email</th>
                <th>Location</th>
              </tr>
            </thead>
            <tbody>
              {
                Object.keys(this.props).length !== 0 ? <React.Fragment>
                  {
                  //  <pre>{this.props.contacts}</pre>
                  this.props.contacts.map((eachContact)=>{
                    return(
                      <tr key={eachContact.login.uuid} onClick={this.clickContact.bind(this,eachContact)}>
                        <td>{eachContact.login.uuid.substr(eachContact.login.uuid.length-4)}</td>
                        <td>
                          <img src={eachContact.picture.large} width="50" height="50"  />
                        </td>
                        <td>{eachContact.name.first} {eachContact.name.last}</td>
                        <td>{eachContact.dob.age}</td>
                        <td>{eachContact.email}</td>
                        <td>{eachContact.location.country}</td>
                      </tr>
                    )

                  })
                  }
                </React.Fragment> : null
              }
            </tbody>
          </table>
      </React.Fragment>
    )
  }
}
export default ContactList


