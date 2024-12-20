import style from "../main/MainSection.module.css"

const MainSection = () => {


    return(
        <>
        <div className={style.image}>
        </div>

        <div id={style.lets}>
            <h1>Let us find your</h1>
            <h2>Forever Food</h2>
            <p id={style.pp}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. <pre></pre>Nesciunt illo tenetur fuga ducimus numquam ea!</p>

            <div className={style.butt}>
                <button className={style.button1}>Search Now</button>
                <button className={style.button2}>Know more</button>
            </div>
        </div>

        <section id={style.secondSec}>
        <div id={style.leftimg}></div>
            <div id={style.rightLorem}>
             <h3>Lorem ipsum dolor sit amet, <pre></pre>  consectetur adipisicing elit. Tempore, <pre></pre> debitis.</h3>
             <br />
             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, molestiae!   Quidem est esse numquam odio deleniti, beatae, magni dolores provident quaerat totam eos, aperiam architecto eius quis quibusdam fugiat dicta.</p> <br />
             <button id={style.get}>Get in Touch</button>
            </div>
           
        </section>
        </>
    )
}

export default MainSection