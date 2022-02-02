import React from 'react';
import s from './Contacts.module.css'
import IconLinkedIn from './../icons8-linkedin.svg'
import arrow from './../icons8-left-arrow-50.png'



export const Contacts = () => {
    return (
        <div className={s.contacts}>
            <a href="https://www.linkedin.com/in/ruslan-gonchar-6585a2228/">
                <img src={IconLinkedIn} alt="" className={s.img}/>
            </a>
            <p className={s.p}>
                <img src={arrow} alt="" className={s.img2}/>
                Contacts
            </p>
        </div>
    );
};

