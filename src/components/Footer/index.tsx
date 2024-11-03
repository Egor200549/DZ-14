import './style.css';

const Footer = () => {
    return (
        <footer className='flx_row'>
            <div className="footer__part flx_col jc_sb g_20">
                <p className='g50_text up'>A more meaningful home for photography</p>
                <div className="flx_col g_10">
                    <div className='flx_col g_10' style={{ zIndex: 999 }}>
                        <div className='flx_row g_10'>
                            <p className='head_text footer__title'>LET'S</p>
                            <a href='#' className='intro__link flx_row al_cen'>&#8594;</a>
                        </div>
                        <p className='head_text footer__title'>WORK TOGETHER</p>
                    </div>
                </div>
            </div>
            <div className="footer__part flx_row jc_sb">
                <div className="footer__links flx_col g_20">
                    <p className='g50_text up'>Home</p>
                    <div className="flx_col g_6">
                        <a className='portfolio__link up' href="#">About me</a>
                        <a className='portfolio__link up' href="#">My works</a>
                        <a className='portfolio__link up' href="#">Testimonials</a>
                    </div>
                </div>
                <div className="footer__links flx_col g_20">
                    <p className='g50_text up'>Clients</p>
                    <div className="flx_col g_6">
                        <a className='portfolio__link up' href="#">Klovesto</a>
                        <a className='portfolio__link up' href="#">Nukeway</a>
                        <a className='portfolio__link up' href="#">Cloven’s</a>
                        <a className='portfolio__link up' href="#">MenVol</a>
                    </div>
                </div>
                <div className="footer__links flx_col g_20">
                    <p className='g50_text up'>Portfolio</p>
                    <div className="flx_col g_6">
                        <a className='portfolio__link up' href="#">Events</a>
                        <a className='portfolio__link up' href="#">Portrait</a>
                        <a className='portfolio__link up' href="#">Branding</a>
                        <a className='portfolio__link up' href="#">Commerciale</a>
                        <a className='portfolio__link up' href="#">Wedding</a>
                    </div>
                </div>
                <div className="footer__links flx_col g_20">
                    <p className='g50_text up'>Services</p>
                    <div className="flx_col g_6">
                        <a className='portfolio__link up' href="#">Portraits</a>
                        <a className='portfolio__link up' href="#">Events</a>
                        <a className='portfolio__link up' href="#">Commercial </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;