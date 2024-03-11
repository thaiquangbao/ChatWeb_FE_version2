import React, { useState, useContext, useEffect}  from 'react'
import { getRoomsMessages } from '../../../untills/api';
import { AuthContext } from '../../../untills/context/AuthContext'
import { SocketContext } from '../../../untills/context/SocketContext';
export const Mess = ({ id, nameRoom, avatar }) => {
    const [messages, setMessages] = useState([]);
    const { user } = useContext(AuthContext);
    const socket = useContext(SocketContext);
    const timeChat = (dataTime) => {
        const time = dataTime.substring(11, 16);
        return time;
    }
    useEffect(() => {
        const RoomMessages = {
            roomsId: id
        }
        getRoomsMessages(RoomMessages)
        .then((data) => {
            setMessages(data.data);
        })
        .catch((err) => {
            console.log(err);
        })
    },[id])
    useEffect(() => {
        socket.on('connected', () => console.log('Connected'));
        // socket.on('onMessages', messages => {
        //     setMessages(messages);
        // })
        // socket.on('onRooms', rooms =>{
        //     console.log('Rooms Received');
        // })
        return () => {
            socket.off('connected');
            // socket.off('onMessages')
            // socket.off('onRooms')
        }
    },[])
    return (
        <div className='baoquat'>
            <div className='section-three'>
                <div className='title' >
                    <div className='title-tt'>
                        <img src={avatar} alt="" style={{ width: '50px', borderRadius: "50px", marginLeft: "5px" }} />
                        <div className='inf-title'>
                            <span className='name-title'>{nameRoom}</span>
                            <div className='member'>
                                <i className='bx bxs-group' ></i>
                            </div>
                        </div>
                    </div>
                    <div className='icon'>
                        <i className='bx bx-user-plus' ></i>
                        <i className='bx bx-search-alt-2' ></i>
                        <i className='bx bx-camera-movie'></i>
                    </div>
                </div>

                <div className='inf-mess'>
                        {messages.map((m) => (
                           
                            <div key={m._id} className='mess-you'>
                                <img src='https://th.bing.com/th/id/OIP.dOTjvq_EwW-gR9sO5voajQHaHa?rs=1&pid=ImgDetMain' alt="" style={{ width: '50px', borderRadius: "50px" }} />
                                <div className='inf-you'>
                                    <div className='tt'>
                                        <span>{m.author.fullName}</span>
                                        <span>{timeChat(m.createdAt)}</span>
                                    </div>
                                    <div className='content'>
                                        <p>{m.content} </p>
                                    </div>
                                </div>
                            </div>
                        ))}

                    <div className='mess-me'>
                        <img src='https://th.bing.com/th/id/OIP.dOTjvq_EwW-gR9sO5voajQHaHa?rs=1&pid=ImgDetMain' alt="" style={{ width: '50px', borderRadius: "50px" }} />
                        <div className='inf-you'>
                            <div className='tt'>
                                <span>Tuan Anh</span>
                                <span>10h19</span>
                            </div>
                            <div className='content'>
                                <p>con gà</p>
                            </div>
                        </div>
                    </div>

                </div>

                <div className='soan'>
                    <div className='nd'>
                        <input type="text" placeholder='Type a message here..' />
                    </div>
                    <div className='cachthuc'>
                        <i className='bx bx-smile'></i>
                        <i className='bx bx-image-alt' ></i>
                        <i className='bx bx-link-alt' ></i>
                        <i className='bx bxs-send'></i>
                    </div>

                </div>

            </div>
            <div className='section-four'>
                <div className='title'>
                    <h3>Thông tin</h3>
                </div>
                {/* them cai div section-four-cro bao het cac cai kia */}
                <div className='section-four-cro'>
                    <div className='avt'>
                        <img src="https://th.bing.com/th/id/OIP.dOTjvq_EwW-gR9sO5voajQHaHa?rs=1&pid=ImgDetMain" alt="" style={{ width: '70px', borderRadius: "50px" }} />
                    </div>
                    <div className='inf'>
                        <p>Tuấn Anh</p>
                        <i className='bx bx-edit-alt'></i>
                    </div>
                    <div className='thaotac'>
                        <div className='thaotac-one'>
                            <i className='bx bx-bell'></i>

                        </div>
                        <div className='thaotac-one'>
                            <i className='bx bx-group'></i>

                        </div>
                        <div className='thaotac-one'>
                            <i className='bx bxs-coffee-togo'></i>

                        </div>
                    </div>
                    <div className='thaotac'>
                        <div className='thaotac-two'>

                            <span>Tắt thông báo</span>
                        </div>
                        <div className='thaotac-two'>

                            <span>Thêm thành viên </span>
                        </div>
                        <div className='thaotac-two'>

                            <span>Xóa trò chuyện</span>
                        </div>
                    </div>
                    <div className='video'>
                        <div className='title-video'>
                            <span>Video</span>
                            <i className='bx bx-image' ></i>
                        </div>
                        <div className='videos'>
                            <img src="https://th.bing.com/th/id/OIP.dOTjvq_EwW-gR9sO5voajQHaHa?rs=1&pid=ImgDetMain" alt="" style={{ width: '90%' }} />
                            <img src="https://th.bing.com/th/id/OIP.dOTjvq_EwW-gR9sO5voajQHaHa?rs=1&pid=ImgDetMain" alt="" style={{ width: '90%' }} />
                            <img src="https://th.bing.com/th/id/OIP.dOTjvq_EwW-gR9sO5voajQHaHa?rs=1&pid=ImgDetMain" alt="" style={{ width: '90%' }} />
                        </div>
                    </div>
                    <div className='file'>
                        <div className='title-file'>
                            <span>File</span>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

