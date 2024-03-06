import React, { useState, useRef, useContext, useEffect } from 'react';
import verifiedImage from './verified.gif'; // Import image
import './OTPConfirmationForm.scss'; // Import SCSS file
import { Link, useNavigate } from 'react-router-dom';
import { Auth } from '../../untills/context/SignupContext';
import { postEmail, postValidRegister, removeCookie } from '../../untills/api';
export const OTPConfirmationForm = () => {
    const [isCorrectOTP, setIsCorrectOTP] = useState(false);
    const [otpValues, setOTPValues] = useState(['', '', '', '', '', '']);
    const navigate = useNavigate();
    const [focusedIndex, setFocusedIndex] = useState(-1); // Index của ô được focus
    const [errorMessage, setErrorMessage] = useState(null); // Thông báo lỗi
    const inputRefs = useRef([]);
    const { data } = useContext(Auth)
    useEffect(() => {
        const token = localStorage.getItem('token');
        const user = data.auth
        if (token && user) {

            navigate('/vertify');
        }
        else {
            navigate('/signup');
        }
    }, [localStorage.getItem('token'), data.auth])

    const handleInputChange = (index, value) => {
        // Kiểm tra xem giá trị mới là một số hay không
        if (!isNaN(value) && value !== '') {
            const newOTPValues = [...otpValues];
            newOTPValues[index] = value;
            setOTPValues(newOTPValues);

            // Tự động chuyển focus sang ô tiếp theo sau khi nhập một số
            if (index < otpValues.length - 1) {
                inputRefs.current[index + 1].focus();
            }
        }
    };
    // const handleInputChange = async (e) => {
    //     e.preventDefault();
    //     const validCode = data.auth;
    //     validCode.code = "772P2H"
    //     await postValidRegister(validCode)
    //     .then(res => {
    //        navigate('/login')
    //     })
    //     .catch(err =>{
    //         console.log(err);
    //     })
    // };
    const handleBackspace = (event, index) => {
        if (event.key === 'Backspace' && index > 0 && !otpValues[index]) {
            // Xóa giá trị của ô hiện tại
            const newOTPValues = [...otpValues];
            newOTPValues[index - 1] = '';
            setOTPValues(newOTPValues);

            // Chuyển focus đến ô trước đó
            inputRefs.current[index - 1].focus();
        }
    };

    const handleFocus = (index) => {
        setFocusedIndex(index);
    };

    const handleBlur = () => {
        setFocusedIndex(-1);
    };
    const handleSubmit = async (event) => {
        event.preventDefault();
        // Kiểm tra xem tất cả các ô đã được nhập và có giá trị hợp lệ không
        if (otpValues.every(val => val !== '' && !isNaN(val))) { // Kiểm tra xem các ô đã được nhập số hay chưa
            event.preventDefault();
            const validCode = data.auth;
            validCode.code = otpValues.join("");

            await postValidRegister(validCode)
                .then(res => {
                    if (res.status === 200) {
                        removeCookie()
                        setTimeout(() => navigate('/login'), 3000);
                    }
                    else {
                        navigate("/signup")
                    }

                })
                .catch(err => {
                    alert("Mã không đúng"); // mã không thành công
                })

            //
        } else {
            setErrorMessage("Please enter the full and valid OTP codes.");
        }
    };
    const handleSendMail = async (event) => {
        event.preventDefault();
        // Giai đoạn này sẽ kiểm tra xem mã OTP có chính xác không
        // Nếu đúng, đặt isCorrectOTP thành true
        // setIsCorrectOTP(true);
        // setTimeout(() => navigate('/page1'),3000);
        await postEmail(data.auth)
            .then((res) => {
                if (res.status === 200) {
                    alert("Gửi mail thành công")
                }
            })
            .catch(err => {
                alert("Gửi mail không thành công")
            })
    };
    const handleKeyPress = (event) => {
        // Ngăn chặn sự kiện mặc định của phím Enter
        if (event.key === 'Enter') {
            event.preventDefault();
        }
    };
    return (
        <section className='section-vertify'>
            {!isCorrectOTP ? (
                <div>
                    <h2 className="heading">Verify Account</h2>
                    <p className="message">Please enter the 6-digit verification code sent to email </p>
                    <div className="form" onKeyDown={handleKeyPress} tabIndex="0">
                        <div className="otp-inputs">
                            {otpValues.map((value, index) => (
                                <input
                                    key={index}
                                    type="text"
                                    pattern="[0-9]*"
                                    inputMode="numeric"
                                    value={value}
                                    onChange={(event) => handleInputChange(index, event.target.value)}
                                    onKeyDown={(event) => handleBackspace(event, index)}
                                    onFocus={() => handleFocus(index)}
                                    onBlur={handleBlur}
                                    onClick={() => inputRefs.current[index].focus()} // Chuyển focus đến ô được nhấp chuột vào
                                    required
                                    className={`input-vertify ${focusedIndex === index ? 'focused' : ''}`}
                                    ref={(input) => (inputRefs.current[index] = input)}
                                    maxLength={1} // Chỉ cho phép nhập một ký tự
                                    style={{ textAlign: 'center' }} // Canh giữa văn bản trong input
                                />
                            ))}
                        </div>
                        <button className='submit-button' onClick={handleSubmit}>Sign In</button>
                        {errorMessage && <div className="error-message">{errorMessage}</div>}
                    </div>

                    <button onClick={handleSendMail} >Send Code</button>

                </div>
            ) : (
                <div className="success">
                    <h2>Verification Successful</h2>
                    <img src={verifiedImage} alt="Verified" style={{ width: '100px' }} />
                </div>
            )}
        </section>
    );
}


