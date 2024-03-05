import React from 'react'
import './item.scss'
const Item = ({ link, name, action, time, tt }) => {
    return (
        <div className='item'>
            <div className='item-name'>
                <img src={link} alt="" style={{ width: '50px', borderRadius: "50px" }} />
                <div className='name'>
                    <span>{name}</span>
                    <div>
                        <span>{tt}</span>:
                        <span>{action}</span>
                    </div>
                </div>
            </div>
            <span>{time}</span>

        </div>

    )
}

export default Item