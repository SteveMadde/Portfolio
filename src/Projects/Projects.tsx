import React from 'react';
import s from './Projects.module.css'
import SocialNetwork from './../9PDfSrV0g0U.jpg'
import TodoList from './../ToDo.jpg'

let img3 = 'https://sun9-88.userapi.com/impf/c845416/v845416656/e9477/lr5M0JiK144.jpg?size=600x600&quality=96&sign=f147075913529355758e615ef0d30957&type=album'

export const Projects = () => {
    return (
        <div>
            <div className={s.title}>
                Projects
            </div>
            <div className={s.projects}>
                <a href="https://github.com/SteveMadde/social-network">
                    <img src={SocialNetwork} alt="" className={s.img}/>
                </a>
                <a href="">
                    <img src={TodoList} alt="" className={s.img}/>
                </a>
                <a href="https://github.com/SteveMadde/kabzdakakprosto">
                    <img src={img3} alt="" className={s.img}/>
                </a>
            </div>
        </div>
    );
};

