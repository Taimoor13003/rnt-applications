import React, { useState } from 'react'
import axios from "axios"
export default function Login({ reload }) {
    const [email, setEmail] = useState()
    const [number, setNumber] = useState()
    const [msg, setmsg] = useState()
    const [loading, setLoading] = useState(false)
    function handleSubmit(e) {
        e.preventDefault()
        if (!email) return  setmsg('Kindly Enter a Valid Email')
        if (!number) return setmsg('Kindly Enter a Valid Phone-Number')
        setLoading(true)
        axios.post(`${process.env.REACT_APP_DOMAIN}/userChat`, { email, number }).then((res) => {
            setLoading(false)
            if (!res.data.success) return setmsg(res.data.msg)
            localStorage.setItem('token', res.data.token)
            reload(true)
        }).catch(err => {
            if (err) setmsg('Connection Err')
            setLoading(false)
        })
    }

    return (
        <form id="" className="form-group m-1" onSubmit={handleSubmit} >
                {msg ? <h6 className="text-warning roboto-font font-weight-bold text-center mt-2 " >{msg }<hr/></h6> : null}
            <input onChange={e => setEmail(e.target.value)} placeholder="Enter your Email" type="email" className="form-control p-3  my-4 " />
            <input onChange={e => setNumber(e.target.value)} placeholder="Enter your Phone-number" type="number" className="form-control my-4 p-3 " />
            <button type="submit" disabled={loading} className="btn btn-outline-warning roboto-font  font-weight-bold  w-100 p-3 my-2 " >
                {loading ? <div className="spinner-border"></div> : "Chat with us"}
            </button>
        </form>
    )
}
