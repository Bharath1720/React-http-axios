import React, { Component } from 'react'

class Digitalwatch extends Component {


  state = {
    currentTime : new Date().toLocaleTimeString()
  }

  componentDidMount(){
    this.timer = setInterval(()=>{
      this.setState({
        currentTime : new Date().toLocaleTimeString()
      })
    },1000)

  }

  componentWillUnmount(){
    clearInterval(this.timer)
  }



  render() {
    return (
      <React.Fragment>
        <div className="container mt-3">
          <div className="row">
            <div className="col-md-6">
              <div className="card text-center">
                <div className="card-header bg-primary text-white">
                  <div className="h4">Digital Watch</div>
                </div>
                <div className="body">
                  <p className='h1'>{this.state.currentTime}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}




export default Digitalwatch