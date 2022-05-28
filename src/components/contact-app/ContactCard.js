import React, { Component } from 'react'

import "../../../src/App.css"

class ContactCard extends Component {
  render() {
    return (
      <React.Fragment>
        {
                this.props.selectedContact ? 
                
                <React.Fragment>
                  <div className="card mt-2 sticky-top">
                    <div className="card-header bg-primary">
                      <div className='p-4'>

                      </div>

                    </div>
                    <div className="card-body text-center">
                      <img src={this.props.selectedContact.picture.large} className="img-fluid img-thumbnail rounded-circle w-50 contact-img" />
                      <ul className='list-group text-left mt-3'>
                        <li className='list-group-item list-group-item-primary'>
                          Name : {this.props.selectedContact.name.first}
                        </li>
                        <li className='list-group-item list-group-item-primary'>
                          Age : {this.props.selectedContact.dob.age} Yrs
                        </li>
                        <li className='list-group-item list-group-item-primary'>
                          Email : {this.props.selectedContact.email}
                        </li>
                        <li className='list-group-item list-group-item-primary'>
                          Address: : {this.props.selectedContact.location.city}
                        </li>

                      </ul>
                    </div>
                  </div>
                </React.Fragment> : null
        
        }

          {/* <h1>I am from ContactCard</h1> */}
          {/* <pre>{JSON.stringify(this.props.selectedContact)}</pre> */}
    
      </React.Fragment>
    )
  }
}
export default ContactCard


