import React, { useState, useEffect } from 'react'
import ChatPanel from './sub/chatPanel'
import './adminChatBox.css'
import axios from 'axios'
import Loader from '../../components/utils/loader/loader'
import { useHistory } from 'react-router-dom'
export default function AdminChat() {
    const [id, setId] = useState()
    const [render, setRender] = useState()
    const history = useHistory()
    useEffect(() => {
        const token = localStorage.getItem('token')
        if (!token) history.push('/login')
        axios.get(`${process.env.REACT_APP_DOMAIN}/adminInfo`, {
            headers: {
                Authorization: "Bearer " + token
            }
        }).then((res) => {
            if (!res) history.push('/login')
            if (!res.data) history.push('/login')
            setId(res.data)
            setRender(true)
        }).catch((err) => {
            history.push('/login')
        })
    },[])
    if (!render) return <Loader />
    return <ChatPanel id={id} />
}

