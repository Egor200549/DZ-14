import './style.css';
import image1 from '../../images/Image3.png';
import image2 from '../../images/Image4.png';
import image3 from '../../images/Image5.png';

const Portfolio = () => {
    return (
        <section className='portfolio flx_col g_80'>
            <div className='services__head flx_row al_cen jc_sb'>
                <div className="flx_col g_4">
                    <p className='step_text'>Portfolio</p>
                    <p className='head_text'>Explore My photography work</p>
                </div>
                <div className="flx_row g_30 jc_sb al_cen">
                    <div className="group_buttons__first group_buttons flx_row">
                        <button className='item_button flx_row al_cen jc_cen'>
                            <svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.25 1.5L1.75 10L10.25 18.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                        <button className='item_button flx_row al_cen jc_cen'>
                            <svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.75 1.5L10.25 10L1.75 18.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                    <a href='#' className='grey_button'>View All Works&ensp;&#8594;</a>
                </div>
            </div>
            <div className="portfolio__cards flx_row g_50">
                <div className="protfolio__project flx_col g_20">
                    <img className='portfolio__image' src={image1} alt="image" />
                    <div className="flx_row al_cen jc_sb g_4">
                        <div className="flx_col">
                            <p className='g80_text'>Faces of Resilience</p>
                            <p className='g70_text'>March 2022</p>
                        </div>
                        <a className='portfolio__link' href="#">View Project&ensp;&#8594;</a>
                    </div>
                </div>
                <div className="protfolio__project flx_col g_20">
                    <img className='portfolio__image' src={image2} alt="image" />
                    <div className="flx_row al_cen jc_sb g_4">
                        <div className="flx_col">
                            <p className='g80_text'>A Wedding Tale</p>
                            <p className='g70_text'>January 2020</p>
                        </div>
                        <a className='portfolio__link' href="#">View Project&ensp;&#8594;</a>
                    </div>
                </div>
                <div className="protfolio__project flx_col g_20">
                    <img className='portfolio__image' src={image3} alt="image" />
                    <div className="flx_row al_cen jc_sb g_4">
                        <div className="flx_col">
                            <p className='g80_text'>Product Elegance</p>
                            <p className='g70_text'>January 2020</p>
                        </div>
                        <a className='portfolio__link' href="#">View Project&ensp;&#8594;</a>
                    </div>
                </div>
            </div>
            <div className="group_buttons__second group_buttons flx_row" style={{width: 'fit-content',alignSelf: 'center'}}>
                <button className='item_button flx_row al_cen jc_cen'>
                    <svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.25 1.5L1.75 10L10.25 18.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
                <button className='item_button flx_row al_cen jc_cen'>
                    <svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.75 1.5L10.25 10L1.75 18.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
            </div>
        </section>
    )
}

export default Portfolio;