import './style.css';
import image from '../../images/Image1.png';
import Star from '../Star';
import Socials from '../Socials';

const About = () => {
    return (
        <section className='about flx_col g_80'>
            <div className='about__head flx_row al_cen jc_sb'>
                <div className="flx_col g_4">
                    <p className='step_text'>about</p>
                    <p className='head_text'>I am Egor</p>
                </div>
                <a href='#' className='grey_button'>Know More&ensp;&#8594;</a>
            </div>
            <div className='about__body flx_row g_30 al_cen'>
                <img className='body_image' src={image} alt="image" />
                <div className="about__container flx_col">
                    <div className="container__item flx_col g_20" style={{ borderBottom: '1px solid var(--dark08)' }}>
                        <div className='flx_row g_10 al_cen'>
                            <Star />
                            <p className='grey_info_text'>Introduction</p>
                        </div>
                        <p className='g70_text'>My journey as a photographer has been a lifelong quest to capture the extraordinary in the ordinary, to freeze fleeting moments in time, and to share the world's beauty as I see it. Based in the enchanting landscapes of the USA, I find inspiration in every corner of this diverse and vibrant country. Join me as we embark on a visual odyssey, where each photograph tells a story, and every frame is a piece of my heart.</p>
                    </div>
                    <div className='container__item flx_col g_40'>
                        <div className='flx_row g_10 al_cen'>
                            <Star />
                            <p className='grey_info_text'>Contact Information</p>
                        </div>
                        <div className='flx_row js_sb flx_wrp'>
                            <div className="about__info flx_col g_10">
                                <p className='g90_text'>Email</p>
                                <p className='g70_text'>damienbraun@gmail.com</p>
                            </div>
                            <div className="about__info flx_col g_10">
                                <p className='g90_text'>Phone Number</p>
                                <p className='g70_text'>+00 000000000</p>
                            </div>
                        </div>
                        <div className='flx_row g_60 al_cen flx_wrp'>
                            <Socials />
                            <div className="about__buttons flx_row g_20">
                                <a className='grey_button flx_row al_cen jc_cen'>Let’s Work</a>
                                <a className='grey_button flx_row al_cen jc_cen'>Download CV</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;