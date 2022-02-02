import React from 'react';
import s from './Column.module.css'
let img ='https://sun9-87.userapi.com/impg/vP3kautub8_RavfPsACVcBy-6FJzPmCVBrFgbQ/DIsurMTPQ70.jpg?size=874x1008&quality=96&sign=20f899e09002ff62cd0a82c7c37c38fa&type=album'


export const Column = () => {
    return (
            <div className={s.column}>
                <img src={img} className={s.img}/>
                <div className={s.name}>
                <h1>Ruslan Gonchar</h1>
                <h3>Frontend Developer</h3>
                </div>
                <div className={s.address}>
                    <p>Residence: Belarus</p>
                    <p>City: Minsk</p>
                    <p>Age: 24</p>
                </div>
                <div className={s.languages}>
                    Languages
                    <div className={s.languagesBlock}>
                        <div>HTML</div>
                        <div>CSS</div>
                        <div>JS</div>
                    </div>
                </div>
            </div>
    );
};

