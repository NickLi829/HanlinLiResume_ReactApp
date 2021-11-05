
import React, { Component } from 'react';
import styles from './home.module.scss';
import WorkLists from '../../components/WorkLists';
import worksData from '../works.json';

export default () =>{
    return <div className={ styles.wrap }>
        
        {/* 个人简介 */}
        <section className={ styles.brief }>
            <img src={ require("../../assets/images/nickCat.png") } />
            <h2>HanlinLi</h2>
            <ul>
                <li>Software engineer</li>
                <li>Full-stack Developer</li>
                <li>Game designer</li>
            </ul>
            <p>Committed to meeting deadlines with quality work</p>
            <p>Highly self-motivated, detailed-oriented and well-organized individual and eager to learn and be trained</p>
            <p>Productive and collaborative team player with strong interpersonal skills</p>
            <p>Good communication skills; fluent in English and Chinese </p>
            <p>Contact me at lhanlin@myseneca.ca or 546424068@qq.com</p>

            <div className={ styles.title }>
                <h3>Core Qualifications</h3>
            </div>
            <div className={ styles.qualifications }>
                <p>•Good experience in designing front end and data transfer techniques such as HTML5, CSS3, Angular JS, JavaScript, Typescript, React, JQuery, Json, XML, DOM.</p>
                <p>•Good experience in Node.js on the server side and to install necessary packages into the application.</p>
                <p>•Good experience in development utilizing Python</p>
                <p>•Strong understanding in Core Java concepts, such as Annotation, Multi-Threading, Exception Handling, Collections and other new features in JDK 1.6-1.8.</p>
                <p>•Good Experience in software design and development with strong Object-Oriented Programming (OOP) skills.</p>
                <p>•Experience in C and C++ development under Unix/Linux environment using Vi/Vim, etc. </p>
                <p>•Experience in Heroku cloud platform.</p>
                <p>•Experience in web services: RESTful. </p>
                <p>•Expertise in relational database SQL Server, MySQL and also Nosql database Mongo DB</p>
                <p>•Knowledge in Agile Methodology software development lifecycle (SDLC)</p>
            </div>
            <div className={ styles.title }>
                <h3>Technical Skills</h3>
            </div>
            <div className={ styles.skills }>
                <p>•Languages: C, C++, Java, JavaScript, Typescript, Python</p>
                <p>•Web-technology: HTML5, CSS3, React, Angular, XML, JSON, JQuery</p>
                <p>•Database: SQL Server, MySQL</p>
                <p>•Systems: Windows Server/XP/7/8/10, Linux(Red Hat, Ubuntu), Mac OS</p>
                <p>•Software: MS Visual Studio, MS Office, Unreal Engine 4, OpenMP</p>
            </div>
        </section>  

        {/* 作品列表 */}
        <section className={ styles.work }>
            <div className={ styles.title }>
                <h3>A selection of work exp</h3>
                <p>You can find more in the work exp overview.</p>
            </div>
            <WorkLists dataSource = { worksData.data } />
        </section>

    </div>
}
