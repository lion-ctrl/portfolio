import React from 'react'

const Contact = () => {
    return ( 
        <>
            <section className="section contact" id="contact">
                <h2 className="heading white">
                    Contact Me
                </h2>
                <div className="container">
                    <div className="social">
                        <div className="icon-container">
                            <a href="#"><img src="/img/facebook.png" /></a>
                        </div>
                        <div className="icon-container">
                            <a href="#"><img src="/img/instagram.png" /></a>
                        </div>
                    </div>
                    <div className="btn-container">
                        <a href="#" className="btn success radius">Resume (CV) <span>Download</span></a>
                    </div>
                </div>
            </section>
            <footer className="footer">
                <p>Leonardo Socorro. All right Reserved.</p>
            </footer>
        </>
    );
}

export default Contact;