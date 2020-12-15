import React from 'react';
import classes from './Project.module.css';
import constructionSign from '../../assets/imgs/construction.png';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const Project = props => {
    const existsInSessionStorage = localStorage.getItem(props.project) !== null;

    const likeClasses = existsInSessionStorage ? classes.Clicked : classes.notClicked;

    return (
        <div className={classes.Project}>
            <h2>{props.title}</h2>
            {!(props.description === "construction") 
            ? <div>
                <p>{props.description}</p>
                <div className={classes.Project_Icons}>
                    <a href={props.link} target="blank" title="Open project"><ExitToAppIcon fontSize="large"/></a>
                    <button className={likeClasses} title={existsInSessionStorage ? null : "Like this project"} onClick={existsInSessionStorage ? null : props.click}><ThumbUpAltIcon fontSize="large"/></button>
                </div>
                <div>
                   {"Total likes: " + props.likeCount}
                </div>
            </div>
            : <img src={constructionSign} alt="construction"/>}
        </div>
    );
};

export default Project;