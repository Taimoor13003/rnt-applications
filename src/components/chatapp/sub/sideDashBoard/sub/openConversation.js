import React, { useState, useEffect } from 'react'
import { AiOutlineSend } from "react-icons/ai";
import io from 'socket.io-client'
import { DateTime } from 'luxon'
import axios from 'axios'
import { FaClock } from 'react-icons/fa'
export default function OpenConversation({ id, number }) {

    const [text, setText] = useState('')
    const [socket, setSocket] = useState()
    const [sender, setSender] = useState()

    const [convo, setConvo] = useState()
    const [newMsg, setNewMsg] = useState()
    function handleSubmit(e) {
        e.preventDefault()
        document.getElementById('editt').innerHTML = ""
        var utcTime = DateTime.utc().toISO()
        const recipient = process.env.REACT_APP_ADMIN
        const inc = {
            sender: id,
            msg: text,
            time: utcTime,
            number
        }
        setConvo([...convo, inc])
        socket.emit("send-chat-message", { text, recipient, utcTime, sender, number })

    }
    useEffect(() => {
        if (!id || !number) return
        axios.post(`${process.env.REACT_APP_DOMAIN}/clientInfo`, { id, number }).then((res) => {
            if (!res.data.convo) return setConvo([])
            setConvo(res.data.convo)
        })

    }, [id, number])

    useEffect(() => {
        var objDiv = document.getElementById("chat-msg-div");
        objDiv.scrollTop = objDiv.scrollHeight;
    }, [convo])

    function textInput(e) {
        const newText = document.getElementById('editt').innerText
        document.getElementById("editt").onkeypress = (e) => {
            if (e.key === "Enter") { document.getElementById('EnterSubmit').click() }
        };
        setText(newText)
    }

    useEffect(() => {
        const newSocket = io(`${process.env.REACT_APP_DOMAIN}`, { query: { id } })
        setSocket(newSocket)
        return () => newSocket.close()
    }, [id])
    useEffect(() => {
        if (localStorage.getItem('chat-unique-id') == 0) return
        setSender(id)
        if (!socket) return
        socket.on("chat-message", data => {
            const newData = {
                msg: data.text,
                time: data.utcTime,
                sender: data.sender,
            }
            setNewMsg(newData)
        })
    }, [socket])
    useEffect(() => {
        if (!newMsg) return
        if (!convo) return
        setConvo([...convo, newMsg])
        var objDiv = document.getElementById("chat-msg-div");
        objDiv.scrollTop = objDiv.scrollHeight;
    }, [newMsg])


    function formatAMPM(date) {
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0' + minutes : minutes;
        var strTime = hours + ':' + minutes + ' ' + ampm;
        return strTime;
    }
    var show;
    var tally;
    var today = new Date().toDateString()

    return (
        <div className="bg-light w-100 d-flex  small-width " style={{ height: "350px" }}  >
            <div className="justify-content-center  align-self-end "  >
                <div id="chat-msg-div" className="overflow-auto inside small-width" style={{ maxHeight: "300px" }} >
                    {convo ? convo.map((con, i) => {
                        var me = false
                        if (con.sender == sender) me = true
                        const msgDate = new Date(con.time)
                        if (show !== msgDate.toDateString()) show = msgDate.toDateString()
                        if (show === today) show = "Today"
                        var AmPm = formatAMPM(msgDate)
                        return (
                            <div className="d-block  " key={i} style={{ width:"calc(100% - 2px)" }}  >
                                <p style={{ height: "100px", clear: "right", borderRadius: "20px", }}
                                    className={` ${show != tally ? "  my-0 d-block text-white mx-5 roboto-font font-weight-bold  text-center " : "d-none"} `} >
                                    <span className="bov  rounded px-1 position-relative " style={{ top: "40px", transform: "translateY(-50%)", zIndex: "10" }} >
                                        {show != tally ? ({ tally }, tally = show) : null}
                                    </span>
                                    <hr style={{ top: "13px" }} className="position-relative bg-dark  z-2" />
                                </p>
                                <div style={{ whiteSpace: "normal", wordWrap: "break-word", borderRadius: "15px", clear: "right" }} className={` d-block mx-2 my-1 p-0   ${me ? "ml-auto  text-right" : null} `} >
                                    <p className={`bg-info  roboto-font font-weight-bold p-2 my-0 
                                     ${me ? "bg-warning  float-right my-1 " : " d-inline-block  bg-info"} `}
                                        style={{ maxWidth: "75%", whiteSpace: "normal", wordWrap: "break-word", borderRadius: "15px", clear: "right" }}>
                                        {con.msg}
                                        <span className={`d-block   ${me ? " text-left" : " text-right"} `} style={{ fontSize: "12px" }} > {AmPm} <FaClock /> </span>
                                    </p>
                                </div>

                            </div>
                        )
                    }) : null}
                </div>
                <form className="tel" id="tel" onSubmit={handleSubmit} >
                    <div className="screen small-width">
                        <div onInput={textInput} contentEditable="true" className="edit" id="editt" ></div>
                        <button type="submit" id="EnterSubmit" className=" voice border-0 ">
                            <i className="material-icons"><AiOutlineSend className="mb-1" /></i>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
