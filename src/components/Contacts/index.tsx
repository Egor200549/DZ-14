import Socials from '../Socials';
import './style.css';

declare module "react" {
    interface CSSProperties {
        "--i"?: number;
    }
}

const Contacts = () => {
    return (
        <section className='contacts flx_row jc_sb al_cen'>
            <div className="contacts__step flx_row g_20" style={{ '--i': 1 }}>
                <a className='g70_text' href="#">Terms &amp; Conditions</a>
                <a className='g70_text' href="#">Privacy Policy</a>
            </div>
            <div className='contacts__step' style={{ '--i': 3 }}>
                <Socials />
            </div>
            <p className='contacts__step g50_text' style={{ '--i': 2 }}>&copy; 2024 Egor Chernaev. All rights reserved.</p>
        </section>
    )
}

export default Contacts;