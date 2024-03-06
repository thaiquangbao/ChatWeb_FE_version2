import React, { useRef } from 'react'
import './ui.scss'
import Item from '../../component/item-mess/item'
import { Link } from 'react-router-dom';

export const UiFirst = () => {
    const formRef = useRef(null);
    //1 dong moi
    const overla = useRef(null);
    const formRefTT = useRef(null);
    const formRefG = useRef(null);


    const handleButtonClickGroup = () => {
        if (formRefG.current.style.display === 'block') {
            //1 dong moi
            overla.current.style.display = 'none';
            formRefG.current.style.display = 'none';
        } else {
            //1 dong moi
            overla.current.style.display = 'block';
            formRefG.current.style.display = 'block';
        }
    };
    //doi doan nay
    const handleButtonClickTT = () => {
        if (formRefTT.current.style.display === 'block') {
            overla.current.style.display = 'none';
            formRefTT.current.style.display = 'none';
        } else {
            overla.current.style.display = 'block';
            formRefTT.current.style.display = 'block';
        }
    };
    //
    const handleButtonClick = () => {
        if (formRef.current.style.display === 'block') {
            //1 dong moi
            overla.current.style.display = 'none';
            formRef.current.style.display = 'none';
        } else {
            overla.current.style.display = 'block';
            formRef.current.style.display = 'block';

        }
    };
    const handleButtonDe = () => {
        formRef.current.style.display = 'none';
        //1 dong moi
        overla.current.style.display = 'none';
    };
    const handleButtonDeTT = () => {
        formRefTT.current.style.display = 'none';
        //1 dong moi
        overla.current.style.display = 'none';
    };
    const handleButtonDeG = () => {
        formRefG.current.style.display = 'none';
        overla.current.style.display = 'none';
    };
    return (
        <div className='container'>
            {/* 1 dong moi */}
            <div id="overlay" ref={overla}></div>
            <div className='wrapper'>
                <div className='section-one'>
                    <div className='list-icon'>
                        {/* doi 5 dong nay */}
                        <Link><i className='bx bx-home'></i></Link>
                        <Link to={'/contact'}> <i className='bx bxs-contact' ></i></Link>
                        <Link><i className='bx bx-cog' ></i></Link>
                        <Link to={'/cloud'}> <i className='bx bx-cloud' ></i></Link>
                        <Link> <i className='bx bx-briefcase'></i></Link>



                    </div>
                    <div className='avt'>
                        <button className='btn-avt' onClick={handleButtonClickTT}><img src="https://th.bing.com/th/id/OIP.dOTjvq_EwW-gR9sO5voajQHaHa?rs=1&pid=ImgDetMain" alt="" style={{ width: '80%', borderRadius: "50px" }} /></button>

                        <span>tun anh</span>
                    </div>
                </div>
                <div className='section-two'>
                    <div className='bar-search'>
                        <i className='bx bx-search-alt-2' ></i>
                        <input type="search" placeholder='search' />
                        <button onClick={handleButtonClick}><i className='bx bx-user-plus' ></i></button>
                        <button onClick={handleButtonClickGroup}><i className='bx bx-group'></i></button>
                    </div>
                    <div id='myForm' ref={formRef}>
                        <form >
                            <div className='titleadd'>
                                <h2>Add friend</h2>
                            </div>
                            <div>
                                <span className='ttadd'>+84<input type="tel" placeholder='Number phone' required></input></span>
                            </div>
                            <div className='endAdd'>
                                <button onClick={handleButtonDe} >Cancel</button>
                                <input type="submit" value="Search" className='timKiem' />
                            </div>

                        </form>
                    </div>


                    <div id='myFormG' ref={formRefG}>
                        <form >
                            <div className='titleaddG'>
                                <h2>Add group</h2>
                            </div>
                            <div>
                                <span className='ttaddG'><i className='bx bx-image' ></i><input type="text" placeholder='Name group' required></input></span>
                            </div>
                            <div className='ctaddG'>
                                <div className='ctaddG1'>
                                    <div className='dladd'>
                                        <input type="checkbox" value='tuananh' />TUAN ANH
                                    </div>
                                    <div className='dladd'>
                                        <input type="checkbox" value='bảo' />BAO
                                    </div>

                                </div>
                                <div className='ctaddG2'>
                                    <div>
                                        Đã chọn 1/100
                                    </div>
                                    <div>

                                    </div>
                                </div>
                            </div>
                            <div className='endAddG'>
                                <button onClick={handleButtonDeG} >Cancel</button>
                                <input type="submit" value="Search" className='timKiem' />
                            </div>

                        </form>
                    </div>
                    {/* doi het cai form nay */}
                    <div id='myFormTT' ref={formRefTT}>
                        < h3>Personal Information <button className='btn-off' onClick={handleButtonDeTT}><i className='bx bx-x'></i></button></h3>

                        <form >
                            <img id='background' src='https://th.bing.com/th/id/OIP.dOTjvq_EwW-gR9sO5voajQHaHa?rs=1&pid=ImgDetMain' alt="" />
                            <div className='image-name'>
                                <img src='https://th.bing.com/th/id/OIP.dOTjvq_EwW-gR9sO5voajQHaHa?rs=1&pid=ImgDetMain' alt="" style={{ width: '80px', borderRadius: "50px", border: '1px solid black' }} />
                                <span id='name'>Tuấn Anh</span><br /><br />
                            </div>
                            <div className='infor'>
                                <label >Gender:</label>
                                <span id='gender'>Male</span> <br /><br />
                                <label>Date of Birth:</label>
                                <span id='birthday'>25/6/2002</span> <br /><br />
                                <label >Phone Number:</label>
                                <span id='phone'>0919199199</span> <br /><br />
                            </div>

                        </form>
                        <button className='btn-update-infor'>Update </button>
                    </div>
                    {/* <div id='myFormTT' ref={formRefTT}>
                        <form >
                            <div>Personal Information </div>
                            <label for="name">Name:</label>
                            <input type="text" id="name" required /><br /><br />
                            <label for="gender">Gender:</label>
                            <select id="gender"  required>
                                <option value="">Select your gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select> <br />
                            <label for="birthday">Date of Birth:</label>
                            <input type="date" id="birthday" required /><br /><br />

                            <label for="phone">Phone Number:</label>
                            <input type="tel" id="phone" required /><br /><br />
                            <input type="submit" value='capnhat' />
                        </form>
                    </div> */}
                    <div className='list-tt'>
                        <Item link={'https://th.bing.com/th/id/OIP.dOTjvq_EwW-gR9sO5voajQHaHa?rs=1&pid=ImgDetMain'} name={'Tuan Anh'} tt={'ban'} action={'di choi'} time={'8h'} />
                        <Item link={'https://th.bing.com/th/id/OIP.dOTjvq_EwW-gR9sO5voajQHaHa?rs=1&pid=ImgDetMain'} name={'Tuan Anh'} tt={'ban'} action={'di choi'} time={'8h'} />
                        <Item link={'https://th.bing.com/th/id/OIP.dOTjvq_EwW-gR9sO5voajQHaHa?rs=1&pid=ImgDetMain'} name={'Tuan Anh'} tt={'ban'} action={'di choi'} time={'8h'} />
                        <Item link={'https://th.bing.com/th/id/OIP.dOTjvq_EwW-gR9sO5voajQHaHa?rs=1&pid=ImgDetMain'} name={'Tuan Anh'} tt={'ban'} action={'di choi'} time={'8h'} />
                        <Item link={'https://th.bing.com/th/id/OIP.dOTjvq_EwW-gR9sO5voajQHaHa?rs=1&pid=ImgDetMain'} name={'Tuan Anh'} tt={'ban'} action={'di choi'} time={'8h'} />
                        <Item link={'https://th.bing.com/th/id/OIP.dOTjvq_EwW-gR9sO5voajQHaHa?rs=1&pid=ImgDetMain'} name={'Tuan Anh'} tt={'ban'} action={'di choi'} time={'8h'} />
                        <Item link={'https://th.bing.com/th/id/OIP.dOTjvq_EwW-gR9sO5voajQHaHa?rs=1&pid=ImgDetMain'} name={'Tuan Anh'} tt={'ban'} action={'di choi'} time={'8h'} />
                        <Item link={'https://th.bing.com/th/id/OIP.dOTjvq_EwW-gR9sO5voajQHaHa?rs=1&pid=ImgDetMain'} name={'Tuan Anh'} tt={'ban'} action={'di choi'} time={'8h'} />
                        <Item link={'https://th.bing.com/th/id/OIP.dOTjvq_EwW-gR9sO5voajQHaHa?rs=1&pid=ImgDetMain'} name={'Tuan Anh'} tt={'ban'} action={'di choi'} time={'8h'} />
                        <Item link={'https://th.bing.com/th/id/OIP.dOTjvq_EwW-gR9sO5voajQHaHa?rs=1&pid=ImgDetMain'} name={'Tuan Anh'} tt={'ban'} action={'di choi'} time={'8h'} />
                        <Item link={'https://th.bing.com/th/id/OIP.dOTjvq_EwW-gR9sO5voajQHaHa?rs=1&pid=ImgDetMain'} name={'Tuan Anh'} tt={'ban'} action={'di choi'} time={'8h'} />
                        <Item link={'https://th.bing.com/th/id/OIP.dOTjvq_EwW-gR9sO5voajQHaHa?rs=1&pid=ImgDetMain'} name={'Tuan Anh'} tt={'ban'} action={'di choi'} time={'8h'} />
                        <Item link={'https://th.bing.com/th/id/OIP.dOTjvq_EwW-gR9sO5voajQHaHa?rs=1&pid=ImgDetMain'} name={'Tuan Anh'} tt={'ban'} action={'di choi'} time={'8h'} />
                        <Item link={'https://th.bing.com/th/id/OIP.dOTjvq_EwW-gR9sO5voajQHaHa?rs=1&pid=ImgDetMain'} name={'Tuan Anh'} tt={'ban'} action={'di choi'} time={'8h'} />
                        <Item link={'https://th.bing.com/th/id/OIP.dOTjvq_EwW-gR9sO5voajQHaHa?rs=1&pid=ImgDetMain'} name={'Tuan Anh'} tt={'ban'} action={'di choi'} time={'8h'} />
                        <Item link={'https://th.bing.com/th/id/OIP.dOTjvq_EwW-gR9sO5voajQHaHa?rs=1&pid=ImgDetMain'} name={'Tuan Anh'} tt={'ban'} action={'di choi'} time={'8h'} />

                    </div>

                </div>
                <div className='section-three'>
                    <div className='title' >
                        <div className='title-tt'>
                            <img src='https://th.bing.com/th/id/OIP.dOTjvq_EwW-gR9sO5voajQHaHa?rs=1&pid=ImgDetMain' alt="" style={{ width: '50px', borderRadius: "50px", marginLeft: "5px" }} />
                            <div className='inf-title'>
                                <span className='name-title'>Tuan Anh</span>
                                <div className='member'>
                                    <i className='bx bxs-group' ></i>
                                    <span>50 thành viên</span>
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
                        <div className='mess-you'>
                            <img src='https://th.bing.com/th/id/OIP.dOTjvq_EwW-gR9sO5voajQHaHa?rs=1&pid=ImgDetMain' alt="" style={{ width: '50px', borderRadius: "50px" }} />
                            <div className='inf-you'>
                                <div className='tt'>
                                    <span>Tuan Anh</span>
                                    <span>10h19</span>
                                </div>
                                <div className='content'>
                                    <p>con gsdddddddddddddddddddddddsdaffffffffffffffffà</p>
                                </div>
                            </div>
                        </div>

                        <div className='mess-you'>
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
                        <div className='mess-you'>
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
                        <div className='mess-you'>
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
                        <div className='mess-you'>
                            <img src='https://th.bing.com/th/id/OIP.dOTjvq_EwW-gR9sO5voajQHaHa?rs=1&pid=ImgDetMain' alt="" style={{ width: '50px', borderRadius: "50px" }} />
                            <div className='inf-you'>
                                <div className='tt'>
                                    <span>Tuan Anh</span>
                                    <span>10h19</span>
                                </div>
                                <div className='content'>
                                    <p>con gà </p>
                                </div>
                            </div>
                        </div>
                        <div className='mess-you'>
                            <img src='https://th.bing.com/th/id/OIP.dOTjvq_EwW-gR9sO5voajQHaHa?rs=1&pid=ImgDetMain' alt="" style={{ width: '50px', borderRadius: "50px" }} />
                            <div className='inf-you'>
                                <div className='tt'>
                                    <span>Tuan Anh</span>
                                    <span>10h19</span>
                                </div>
                                <div className='content'>
                                    <p>con ga </p>
                                </div>
                            </div>
                        </div>
                        <div className='mess-me'>
                            <img src='https://th.bing.com/th/id/OIP.dOTjvq_EwW-gR9sO5voajQHaHa?rs=1&pid=ImgDetMain' alt="" style={{ width: '50px', borderRadius: "50px" }} />
                            <div className='inf-you'>
                                <div className='tt'>
                                    <span>Tuan Anh</span>
                                    <span>10h19</span>
                                </div>
                                <div className='content'>
                                    <p>con safffffffffffffffffffff</p>
                                </div>
                            </div>
                        </div>
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
                        <div className='mess-me'>
                            <img src='https://th.bing.com/th/id/OIP.dOTjvq_EwW-gR9sO5voajQHaHa?rs=1&pid=ImgDetMain' alt="" style={{ width: '50px', borderRadius: "50px" }} />
                            <div className='inf-you'>
                                <div className='tt'>
                                    <span>Tuan Anh</span>
                                    <span>10h19</span>
                                </div>
                                <div className='content'>
                                    <p>con gà </p>
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
        </div>
    )
}