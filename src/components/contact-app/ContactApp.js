import React, { Component } from 'react'
import Axios from 'axios'
import ContactCard from './ContactCard'
import ContactList from './ContactList'

class ContactApp extends Component {
  state ={
    contacts : null,
    errMsg : null,
    selectedContact  : null
  }


  pullContact = (value) =>{
    this.setState({
      selectedContact : value
    })

  }

  componentDidMount(){
      Axios.get("https://gist.githubusercontent.com/Bharath1720/49d272f6bf3357362c7d6093238d15f9/raw/714de0753a03e54190bafde008d4f5019b2658b3/contacts-list-app.json").
      then((response)=>{
        this.setState({
          contacts : response.data
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
        {/* <pre>{JSON.stringify(this.state.contacts)}</pre> */}
        {/* <pre>{JSON.stringify(this.state.selectedContact)}</pre> */}
        <div className="container">
            <div className="row">
                <div className="col">
                    <p className="h4 text-primary">Contact App</p>
                    <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus vel doloribus quidem necessitatibus sint iure qui, nostrum beatae veniam suscipit? Fugiat ratione odit officiis, earum voluptatem impedit pariatur provident asperiores.</p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-9">

                {this.state.contacts ? <React.Fragment>
                  <ContactList pushContact = {this.pullContact} contacts={this.state.contacts} />

                </React.Fragment>:null}

                 
                </div>
                <div className="col-md-3">
                    <ContactCard selectedContact={this.state.selectedContact}/>
                </div>
            </div>

        </div>
      </React.Fragment>
    )
  }
}
export default ContactApp