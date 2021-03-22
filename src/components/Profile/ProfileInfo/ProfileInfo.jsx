import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img
                    src='https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350'/>
            </div>
            <div className={s.descriptionBlock}>
            <img src = "https://www.google.com/landing/2step/images/why-need-img-1.png"></img>
            <div className={s.description}>Описание</div>
            </div>
        </div>
    )
}

export default ProfileInfo;