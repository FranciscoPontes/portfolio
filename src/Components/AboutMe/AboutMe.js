import React, {useState, useEffect} from 'react';
import ava from '../../assets/imgs/imagem_2.jpg';
import classes from './AboutMe.module.css';
import ReactLogo from '../../assets/imgs/reactLogo.jpg';
import axios from '../../axiosSetup';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailIcon from '@material-ui/icons/Mail';
import GitHubIcon from '@material-ui/icons/GitHub';

const AboutMe = () => {
    const [infoState, setInfoState] = useState();

    useEffect(() => {
        const isMounted = true;
        axios.get('/AboutMe.json')
                    .then(response => {
                        if (isMounted) {
                            setInfoState(response.data);
                        }
                    })
                    .catch(error => {
                        console.log(error);
                    })
                }, [])
    

    return (
        <div>
            <div className={classes.AboutMe}> 
                <img src={ava} alt="ava"/>
                <h3>{infoState ? infoState.p : "Loading info..."}
                    <img src={ReactLogo} alt="reactLogo"/>
                </h3>
            </div>
            <div className={classes.SocialLinks}>
                <a href="https://www.linkedin.com/in/francisco-pontes-0ab0981a9/" target="blank" title="Go to my LinkedIn"><LinkedInIcon fontSize="large"/></a>
                <a href="mailto:franciscoluispontes@hotmail.com" target="blank" title="Mail me"><MailIcon fontSize="large"/></a>
                <a href="https://github.com/FranciscoPontes" target="blank" title="Go to my GitHub profile"><GitHubIcon fontSize="large"/></a>
            </div>
        </div>
    );
};

export default AboutMe;

