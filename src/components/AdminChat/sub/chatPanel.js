import React, { useState, useEffect } from 'react'
import Left from './leftside'
import Right from './rightside'
import io from 'socket.io-client'
import axios from 'axios'
export default function ChatPanel({id}) {
    const [socket, setSocket] = useState()
    const [convo, setConvo] = useState([])
    const [refresh, setRefresh] = useState()
    const [reload, setReload] = useState(false)
    const [contact, setContact] = useState()
    const [merge, setMerge] = useState(false)

    useEffect(() => {
        const newSocket = io(`${process.env.REACT_APP_DOMAIN}`, { query: { id } })
        setSocket(newSocket)
        return () => newSocket.close()
    }, [])
    useEffect(() => {
        if (!socket) return
        document.getElementById("left-msg").scrollTop = 0
        socket.on("chat-message", data => {
            setRefresh(data)
        })
    }, [socket])
    useEffect(() => {
        if (refresh && contact) {
            if (refresh.sender == contact.client) {
                setMerge(true)
            } else setMerge(false)
        } else setMerge(false)
        setTimeout(() => {
            axios.get(`${process.env.REACT_APP_DOMAIN}/adminChat`).then((res) => {
                const contactsArray = res.data
                setConvo(contactsArray)
            })
        }, 1000);
    }, [refresh])
    useEffect(() => {
        if (!refresh || !contact) return
        setTimeout(() => {
            axios.get(`${process.env.REACT_APP_DOMAIN}/adminChat`).then((res) => {
                const contactsArray = res.data
                setConvo(contactsArray)
            })
        }, 2000);
    }, [reload])

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_DOMAIN}/adminChat`).then((res) => {
            const contactsArray = res.data
            setConvo(contactsArray)
        })
    }, [])
    const onId = (count) => {
        setContact(count)
    }
    const renderAgain = (count) => {
        setReload(count)
    }

    return (
        <div className="d-flex " style={{ minHeight: "100vh" }} >
            <div style={{ minWidth: "300px" }} className="col-4  p-0 m-0">
                <Left convo={convo} onId={onId} />
            </div>
            <div style={{ width: "100%" }} className="col-8 p-0 m-0" >
                <Right id={id} reload={reload} renderAgain={renderAgain} contact={contact} incMsg={refresh} merge={merge} />
            </div>
        </div>
    )
}
