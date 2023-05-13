import './Skill.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import "aos/dist/aos.css"
import { useEffect, useRef, useState } from 'react'


const Skill = () => {
    const [html, setHtml] = useState(0);
    const [css3, setCss3] = useState(0);
    const [javaScript, setJavaScript] = useState(0);
    const [react, setReact] = useState(0);
    const [mySql, setMySql] = useState(0);
    const [python, setPython] = useState(0);

    const htmlRef = useRef(null)
    const css3Ref = useRef(null)
    const javaScriptRef = useRef(null)
    const reactRef = useRef(null)
    const mySqlRef = useRef(null)
    const pythonRef = useRef(null)
    

    useEffect (() => {
        const fillBars = () => {
            setHtml(100);
            setCss3(90);
            setJavaScript(75);
            setReact(80);
            setMySql(70);
            setPython(60);

            htmlRef.current.style.width = `${html}%`
            css3Ref.current.style.width = `${css3}%`
            javaScriptRef.current.style.width = `${javaScript}%`
            reactRef.current.style.width = `${react}%`
            mySqlRef.current.style.width = `${mySql}%`
            pythonRef.current.style.width = `${python}%`
        }
        fillBars();
        
    }, [html, css3, javaScript, react, mySql, python]) 
    
 
    return (
        <section id='Skills' className="skills">
            <div className="container" data-aos="fade-up">

                <div className="section-title">
                    <h2 className='titulo-principal'>Skills</h2>
                    <p>Estos son algunos de mis conocimientos y habilidades</p>
                </div>

                <div className="row skills-content">

                    <div className="col-lg-6">
                        <div className="progress-container">
                            <span className="skill">HTML5<i className="val">{html}%</i></span>
                            <div className="progress-bar-wrap">
                                <div className="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" ref={htmlRef}></div>
                            </div>
                        </div>

                        <div className="progress-container">
                            <span className="skill">CSS3<i className="val">90%</i></span>
                            <div className="progress-bar-wrap">
                                <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" ref={css3Ref}></div>
                            </div>
                        </div>

                        <div className="progress-container">
                            <span className="skill">JavaScript <i className="val">75%</i></span>
                            <div className="progress-bar-wrap">
                                <div className="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" ref={javaScriptRef}></div>
                            </div>
                        </div>
                    </div>


                    <div className="col-lg-6">

                        <div className="progress-container">
                            <span className="skill">React <i className="val">80%</i></span>
                            <div className="progress-bar-wrap">
                                <div className="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" ref={reactRef}></div>
                            </div>
                        </div>

                        <div className="progress-container">
                            <span className="skill">MySQL<i className="val">70%</i></span>
                            <div className="progress-bar-wrap">
                                <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" ref={mySqlRef}></div>
                            </div>
                        </div>

                        <div className="progress-container">
                            <span className="skill">Python<i className="val">55%</i></span>
                            <div className="progress-bar-wrap">
                                <div className="progress-bar" role="progressbar" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100" ref={pythonRef}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skill
