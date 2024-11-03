import Star from '../Star';
import './style.css';

const Line = () => {
    return (
        <section className='line'>
            <div className="items-wrap">
                <div className="items marquee">
                    <div className='flx_row g_10 al_cen'>
                        <Star />
                        <p className='purple_text'>Event Photography</p>
                    </div>
                    <div className='flx_row g_10 al_cen'>
                        <Star />
                        <p className='purple_text'>Comercial Photography</p>
                    </div>
                    <div className='flx_row g_10 al_cen'>
                        <Star />
                        <p className='purple_text'>Product Photography</p>
                    </div>
                    <div className='flx_row g_10 al_cen'>
                        <Star />
                        <p className='purple_text'>Wedding Photography</p>
                    </div>
                    <div className='flx_row g_10 al_cen'>
                        <Star />
                        <p className='purple_text'>Landscape Photography</p>
                    </div>
                    <div className='flx_row g_10 al_cen'>
                        <Star />
                        <p className='purple_text'>Branding Photography</p>
                    </div>
                    <div className='flx_row g_10 al_cen'>
                        <Star />
                        <p className='purple_text'>Portrait  Photography</p>
                    </div>
                </div>
                <div aria-hidden="true" className="items marquee">
                    <div className='flx_row g_10 al_cen'>
                        <Star />
                        <p className='purple_text'>Event Photography</p>
                    </div>
                    <div className='flx_row g_10 al_cen'>
                        <Star />
                        <p className='purple_text'>Comercial Photography</p>
                    </div>
                    <div className='flx_row g_10 al_cen'>
                        <Star />
                        <p className='purple_text'>Product Photography</p>
                    </div>
                    <div className='flx_row g_10 al_cen'>
                        <Star />
                        <p className='purple_text'>Wedding Photography</p>
                    </div>
                    <div className='flx_row g_10 al_cen'>
                        <Star />
                        <p className='purple_text'>Landscape Photography</p>
                    </div>
                    <div className='flx_row g_10 al_cen'>
                        <Star />
                        <p className='purple_text'>Branding Photography</p>
                    </div>
                    <div className='flx_row g_10 al_cen'>
                        <Star />
                        <p className='purple_text'>Portrait  Photography</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Line;