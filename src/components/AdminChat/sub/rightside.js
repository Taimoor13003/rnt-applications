import React, { useState, useEffect } from 'react'
import axios from 'axios'
import io from 'socket.io-client'
import { DateTime } from 'luxon'
import { FaUser, FaClock } from 'react-icons/fa'
export default function Rightside({ contact, incMsg, merge, reload, renderAgain, id }) {
    const [client, setClient] = useState(contact)
    const [convo, setConvo] = useState()
    const [inp, setInp] = useState()
    const [socket, setSocket] = useState()
    const [sender, setSender] = useState()
    const [recipient, setRecipient] = useState()
    const senders = id
    const handleChange = (e) => {
        e.preventDefault()
        var utcTime = DateTime.utc().toISO()
        const text = inp
        const myMsg = {
            sender: senders,
            msg: text,
            time: utcTime
        }
        setConvo([...convo, myMsg])

        renderAgain(!reload)
        socket.emit("send-chat-message", { text, recipient, utcTime, sender: senders })
        document.getElementById('admin-form').reset()
    }
    useEffect(() => {
        if (!incMsg) return
        if (!merge) return
        const obj = {
            sender,
            msg: incMsg.text,
            time: incMsg.utcTime
        }
        setConvo([...convo, obj])
    }, [contact, incMsg, merge])

    useEffect(() => {
        if (!convo) return
        var objDiv = document.getElementById("right-msg");
        objDiv.scrollTop = objDiv.scrollHeight;
        document.getElementById("left-msg").scrollTop = 0
    }, [convo])

    useEffect(() => {
        const newSocket = io(`${process.env.REACT_APP_DOMAIN}`, { query: { id } })
        setSocket(newSocket)
        return () => newSocket.close()
    }, [])

    useEffect(() => {
        setClient(contact)
    }, [contact])

    useEffect(() => {
        if (!client) return
        axios.post(`${process.env.REACT_APP_DOMAIN}/admin/contact`, { client: client._id }).then((res) => {
            setConvo(res.data.convo)
            setSender(res.data.client)
            setRecipient(res.data.client)

        })
    }, [client])
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
        <div className="bov overflow-hidden  " style={{ height: "100vh" }} >
            <div className="position-absolute w-100 bov shadow" >
                <h1 className="text-truncate" ><span className="" > {client ? <FaUser className="text-white" /> : null}    {client ? <span className="text-white  " > {client.client} </span> : null} </span></h1>
            </div>

            <div id="right-msg" className="bov w-100  thin-scroll" style={{ height: "calc(100% - 120px)", marginBottom: "100px", marginTop: "55px", float: "left", overflowY: "auto" }} >
                {!convo ? null : convo.map((con, key) => {
                    var me = false
                    if (con.sender == senders) me = true
                    const msgDate = new Date(con.time)
                    if (show !== msgDate.toDateString()) show = msgDate.toDateString()
                    if (show === today) show = "Today"
                    var AmPm = formatAMPM(msgDate)
                    return (
                        <div className="d-block ">
                            <p style={{ height: "100px", clear: "right", borderRadius: "20px", }} className={` ${show != tally ? "  my-0 d-block text-white mx-5 roboto-font font-weight-bold  text-center " : "d-none"} `} >
                                <span className="bov  rounded px-1 position-relative " style={{ top: "40px", transform: "translateY(-50%)", zIndex: "10" }} >

                                    {show != tally ? ({ tally }, tally = show) : null}
                                    {/* { (show != tally && show == today) ? show != tally  ?  (null ,tally = show)  :  : ( {tally} , tally = show ) } */}
                                </span>
                                <hr style={{ top: "13px" }} className="position-relative bg-white  z-2" />
                            </p>
                            <div style={{ whiteSpace: "normal", wordWrap: "break-word", maxWidth: "500px", borderRadius: "15px", clear: "right" }} className={` d-block mx-2 my-1 p-0   ${me ? "ml-auto  text-right" : null} `}  >
                                <p className={`bg-info roboto-font font-weight-bold p-2 my-0  ${me ? "bg-light float-right my-1 " : " d-inline-block  bg-info"} `} style={{ maxWidth: "500px", whiteSpace: "normal", wordWrap: "break-word", borderRadius: "15px", clear: "right" }}>

                                    {con.msg} <span className={`d-block   ${me ? " text-left" : " text-right"} `} style={{ fontSize: "12px" }} > {AmPm} <FaClock /> </span>
                                </p>
                            </div>
                        </div>
                    )
                })}
            </div>
            {client ?
                <div className="justify-content-start position-absolute   w-100 z4 " style={{ top: "100%", transform: "translateY(-100%)" }}  >
                    <form id="admin-form" onSubmit={handleChange} className="form-group d-flex my-0 border-top " style={{ height: "60px" }} >

                        <input style={{ height: "40px", borderRadius: "20px", color: "black" }} placeholder="Enter Your Message..." className=" font-weight-bold border-0 shadow form-control mr-1 hovv rounded admin-inp  ml-5  my-2 " onChange={e => setInp(e.target.value)} />
                        <button style={{ height: "40px", borderRadius: "20px", }} type="submit" className="btn hovv text-white roboto-font mr-5  my-2 " > Submit</button>
                    </form>
                </div> : null}

        </div>
    )
}
