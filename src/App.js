import React, { Component } from 'react'
import './App.css'
import Home from './components/homePage/home'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar/navbar'
import Footer from './components/footer/footer'
import Projects from './components/Projects/projects'
import Gallery from './components/Projects/Gallery/gallery'
import Designs from './components/Designs/designs'
import AdminChat from './components/AdminChat/adminChat'
import { connect } from 'react-redux'
import Scroll from './components/ScrollToTop/scroll'
import Chat from './components/chatapp/chat'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from './components/login/login'
import axios from 'axios'
class App extends Component {
  state = {
    warning: false
  }

  check = () => {
    axios.get(`${process.env.REACT_APP_DOMAIN}/userCheckToken`, {
      headers: { Authorization: `bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImJvb20iLCJudW1iZXIiOjEsInJvbGUiOjEsImlhdCI6MTYwODIzMDk2N30.D2LN4ObX_VlwilYxEWd0W6A4fs87LTOXFa6n5ZjCki4` }
    }).then((res) => {
      if (res.data.email) return
      alert("Internet connection might be slow. Performace might be affected!")
      this.setState({ warning: true })
    }).catch((err) => {
      alert("Internet connection might be slow. Performace might be affected!")
      this.setState({ warning: true })
    })
  }
  
  componentDidMount() {
    const token = localStorage.getItem("token")
    if (!token) return
    axios.get(`${process.env.REACT_APP_DOMAIN}/adminToken`, {
      headers: {
        Authorization: `bearer ${token}`
      }
    }).then((res) => {
      this.props.change(res.data)
    }).catch(() => {
      this.props.change(false)
    })
  }
  
  render() {
    const path = window.location.pathname !== "/AdminChat"
    return (
      <div>
        <Router >
            {path ? <Navbar  /> : null}
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/projects" component={Projects} exact />
              <Route path='/projects/gallery/:id' exact component={Gallery} />
              <Route path="/Designs" component={Designs} />
              <Route path="/AdminChat" component={AdminChat} />
              <Route path="/login" component={Login} />
              <Route path="*" render={() => <div style={{ minHeight: "100vh", background: "grey", color: "white" }}> <h1 className=" p-5  text-center">404 Error </h1>
                <h2 className="text-center " >  Page Not Found </h2>
              </div>} />
            </Switch>
        </Router>
        {path ? <Chat /> : null}
        {path ? <Scroll /> : null}
        {path && window.location.pathname !== "/login" ? <Footer /> : null}
      </div>
    )
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    change: (e) => { dispatch({ type: "ADMIN", payload: e }) }
  }
}
export default connect(null, mapDispatchToProps)(App)