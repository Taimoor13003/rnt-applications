import React, { useState, useEffect } from 'react'
import './chat.css'
import { BsChat } from "react-icons/bs";
import OpenConversation from './sub/sideDashBoard/sub/openConversation'
import Login from './sub/login/login'
import { useSelector , useDispatch } from 'react-redux'
import axios from 'axios'

const Chat = () => {
    const [toggle, settoggle] = useState(false)
    const Admin = useSelector(state => state.AdminPermission)
    const chat = useSelector(state => state.showChat)
    const [id, setId] = useState()
    const [num, setNum] = useState()
    const [reload, setReload] = useState()
    const dispatch = useDispatch()
    const toggleChat = () => {
        if(chat){
            dispatch({type:"CHAT_CHANGE" , payload:false})
            return settoggle(false)
        }
        settoggle(!toggle)
    }
    const token = localStorage.getItem('token')
    useEffect(() => {
        if (!token) return
        axios.get(`${process.env.REACT_APP_DOMAIN}/userCheckToken`, {
            headers: { Authorization: `bearer ${token}` }
        }).then((res) => {
            if (!res.data.email) return
            if (!res.data.number) return
            setId(res.data.email)
            setNum(res.data.number)
        }).catch((err) => {

        })
    }, [reload])

    return (
        <div style={{ zIndex: "100" }} className={`position-relative ${Admin ? "d-none" : null}`} >
            <div className="round-logo" id="pre-div"  >
                <BsChat className="pre-icon " onClick={toggleChat} />
            </div>
            <div className={`chat-box small-width  ${(toggle || chat) ? null : "d-none"} `} id="chat-box"  >
                <div className="box-heading " >
                    <span className="ml-2" style={{ display: "inline-block", width: "170px", fontSize: "18px" }} > RMT Enterprise Chat with us! </span> <BsChat style={{ transform: "scale(1.5)" }} className="float-right mt-3 mr-2" />
                </div>
                <div className="chat-msg ">
                    {id ? < OpenConversation id={id} number={num} /> : <Login reload={setReload} />}
                </div>
            </div>
        </div>
    )
}

export default Chat