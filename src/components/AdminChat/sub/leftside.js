import React, { useState, useEffect } from 'react'
import { FaUser } from 'react-icons/fa'
import { BsChatDotsFill } from 'react-icons/bs'
export default function Leftside({ convo, onId }) {
    const [contacts, setContacts] = useState([])
    const [client, setClient] = useState()

    useEffect(() => {
        if (convo === []) return 
        setContacts(convo)
    }, [convo])

    useEffect(() => {
        if (!client) return
        onId(client)

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
    return (
        <div id="left-msg" className="overflow-auto bg-light bov thin-scroll " style={{ height: "100vh", zIndex: "10" }}>
            <div className="justify-content-center align-self-start  w-100 " style={{ height: "100vh" }} >
                <div style={{ position: "absolute", zIndex: "3", height: "100px", transform: "translate(-2px)" }} className="w-100 bov shadow ">
                    <h1 className="pl-5 text-white  mt-3 w-100  d-block display-4" style={{ textShadow: "white 1px 1px 2px" }}  > <span>Chats</span>  <BsChatDotsFill style={{ fontSize: "30px", bottom: "15px", right: "10px" }} className="position-relative pb-1 " /> </h1>
                </div>
                <div className="bov" style={{ height: "100px" }}></div>
                {contacts.map((contact, index) => {
                    const time = new Date(contact.convo[0].time)
                    var AmPm = formatAMPM(time)
                    var sel = false

                    if (client) if (contact.client === client.client) sel = true
                    return (
                        <div key={index} onClick={() => setClient(contact)} className=" left-side-chat" style={{ cursor: "pointer" }}>
                            <div className={`d-flex  text-center p-2 ${sel ? " hovv" : "hov"}`}   >
                                <div className="px-2 rounded mt-2 " style={{ height: "70px", backgroundColor: "lightgrey" }} >
                                    <div><FaUser className="text-dark mt-3" style={{ fontSize: "35px" }} /></div>
                                </div>
                                <div className=" flex-grow-1  ">
                                    <div className=" d-flex   " >
                                        <p className=" pl-3 pt-2 font-weight-bold roboto-font text-white text-truncate  " style={{ maxWidth: "170px" }}  >{contact.client}</p>
                                    </div>
                                    <div className="d-flex my-0" >
                                        <p className="text-white roboto-font pl-3 text-truncate " style={{ maxWidth: "200px" }} >{contact.convo[0].msg}</p>
                                    </div>
                                </div>
                                <div className=" " >
                                    <p className="text-white roboto-font ">{AmPm}</p>
                                </div>
                            </div>
                            <hr className="text-dark my-0" />
                        </div>
                    )
                })
                }
            </div>
        </div>
    )
}
