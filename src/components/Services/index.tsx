import './style.css';
import image from '../../images/Image2.png';
import Star from '../Star';

const Services = () => {
    return (
        <section className='services flx_col g_80'>
            <div className='services__head flx_row al_cen jc_sb'>
                <div className="flx_col g_4">
                    <p className='step_text'>Services</p>
                    <p className='head_text'>My Photography Services</p>
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
                    <a href='#' className='grey_button'>View All Services&ensp;&#8594;</a>
                </div>
            </div>
            <div className='services__body flx_row g_50 al_cen'>
                <div className="group_buttons__second group_buttons flx_row">
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
                <div className='flx_col g_50'>
                    <div className="flx_col g_20">
                        <p className='services__title'>Events</p>
                        <p className='g70_text'>Our event photography service is dedicated to capturing the magic of your special occasions. Whether it's a wedding, corporate event, or milestone celebration, we're there to document every heartfelt moment. We blend into the background, ensuring natural and candid shots that reflect the emotions of the day.</p>
                    </div>
                    <div className="flx_col g_20">
                        <p className='g80_text'>Service Highlights</p>
                        <div className="service__block flx_col g_10">
                            <div className="flx_row g_10 al_cen">
                                <Star />
                                <p className='g70_text up'>Coverage for weddings, parties, corporate functions, and more.</p>
                            </div>
                        </div>
                        <div className="service__block flx_col g_10">
                            <div className="flx_row g_10 al_cen">
                                <Star />
                                <p className='g70_text up'>Skilled photographers who know how to seize the moment.</p>
                            </div>
                        </div>
                        <div className="service__block flx_col g_10">
                            <div className="flx_row g_10 al_cen">
                                <Star />
                                <p className='g70_text up'>A mix of candid and posed shots for a comprehensive story.</p>
                            </div>
                        </div>
                        <div className="service__block flx_col g_10">
                            <div className="flx_row g_10 al_cen">
                                <Star />
                                <p className='g70_text up'>Quick turnaround for you to relive the day's highlights.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <img className='body_image' src={image} alt="image" />
            </div>
        </section>
    )
}

export default Services;