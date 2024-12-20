import style from "../footer/Footer.module.css";
import insta from "../../assets/insta.png"
import facebook from "../../assets/facebook_icon.png"
import twitter from "../../assets/twitter.png"
import github from "../../assets/github.png"
import xbox from "../../assets/xbox.png"
const Footer = () =>{
    

    return(
        <>
         <section id={style.containers} >
            <div id={style.logo}><img src="" alt="p" />
            <img src="" alt="p" /></div>
            <p id={style.ppp}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. <pre></pre> Incidunt consequuntur amet culpa cum itaque neque.</p>
            <div>
                <ul>
                    <li>About</li>
                    <li>Careers</li>
                    <li>History</li>
                    <li>Services</li>
                    <li>Projects</li>
                    <li>Blog</li>
                </ul>
            </div>
            <div id={style.logo}>
               <img src={facebook} alt="f" />
               <img src={insta} alt="i" />
               <img src={twitter} alt="g" />
               <img src={github} alt="x" />
               <img src={xbox} alt="t" />
            </div>
         </section>
        </>
    )
}

export default Footer