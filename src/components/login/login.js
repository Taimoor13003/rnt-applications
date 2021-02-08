import React, { useState } from 'react'
import './login.css'
import RadioPic from './sub/radio'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { BsEye, BsEyeSlash } from 'react-icons/bs'
export default function Login() {
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const [pic, setPic] = useState()
    const [message, setMessage] = useState()
    const [loader, setLoader] = useState(false)
    const history = useHistory()
    const [showPass, setShowPass] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!username) return setMessage('username incomplete')
        if (!password) return setMessage('Password incomplete')
        if (!pic) return setMessage('pic incomplete')
        setLoader(true)
        const dis = document.getElementById('login-btn')
        dis.disabled = true
        const data = {
            username, password, pic
        }
        axios.post(`${process.env.REACT_APP_DOMAIN}/login`, data).then((res) => {
            setLoader(false)
            dis.disabled = false
            const msg = res.data.msg
            if (!res.data.success) setMessage(msg)

            if (res.data.success) {
                localStorage.setItem("token", res.data.token)
                history.push('/AdminChat')
            }
            
        }).catch(err => {
            setMessage("Connection Failed")
            dis.disabled = false
            setLoader(false)
        })
    }
    const onPic = (count) => {
        setPic(count)
    }

    
    return (
        <div className="">
            <div className="sign"> </div>
            <div className="mx-auto  login-div">
                <h1 className="text-white mx-5 mt-5 display-4 text-center  " >RMT Enterprises...</h1>
                <p className="text-white mx-5 text-center sub-title ">Modern Marble Crafting Solution </p>
                {message ? <div class="alert alert-danger mx-5 roboto-font font-weight-bold text-capitalize "><strong>Alert!</strong> {message}</div> : null}
                <form className="form-group my-0 pb-5 mx-5" onSubmit={handleSubmit} >
                    <input onChange={e => setUsername(e.target.value.trim())} value={username} className="form-control my-4" placeholder="Enter your username..." />
                    <div className=" input-group my-4 rounded " style={{ backgroundColor: "#efefef" }} >
                        <input type={showPass ? "text" : "password"} onChange={e => setPassword(e.target.value.trim())} value={password} className="form-control" placeholder="Enter your Password..." />
                        <span className="input-group-append " onClick={() => setShowPass(!showPass)} > {showPass ? <BsEye className="pt-1  mx-2" style={{ fontSize: "35px" }} />
                            : <BsEyeSlash className="pt-1  mx-2" style={{ fontSize: "35px" }} />}</span>
                    </div>
                    <div ><RadioPic onPic={onPic} /></div>
                    <button type="submit" className="btn-lg roboto-font font-weight-bold text-white btn-warning btn-block " id="login-btn"  >
                        {loader ? <div className="spinner-border text-white"></div> : "Login"}</button>
                </form>
            </div>  
        </div>
    )
}
