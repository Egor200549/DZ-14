import { useRef } from "react";
import SwitchTheme from "../SwitchTheme";
import './style.css';

const Header = () => {
    const firstMenu = useRef<HTMLElement>(null!);
    const menu = useRef<HTMLElement>(null!);

    const openMenu = () => {
        menu.current?.classList.toggle('mvng_menu__closing');

        setTimeout(() => {
            menu.current?.classList.toggle('none');
            firstMenu.current?.classList.toggle('none');
        }, 500)

    };

    return (
        <header>
            <nav ref={firstMenu}>
                <a href="/" className="logo">EGOR</a>
                <div className="header__links header__first">
                    <a href="/" className="header__link">Home</a>
                    <a href="#" className="header__link">About me</a>
                    <a href="#" className="header__link">Portfolio</a>
                    <a href="#" className="header__link">Services</a>
                </div>
                <div className="header__button__theme header__first">
                    <SwitchTheme />
                </div>
                <button className="header__button" onClick={openMenu}>
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M3.5 7.875C3.5 7.39175 3.89175 7 4.375 7H23.625C24.1082 7 24.5 7.39175 24.5 7.875C24.5 8.35825 24.1082 8.75 23.625 8.75H4.375C3.89175 8.75 3.5 8.35825 3.5 7.875ZM3.5 14C3.5 13.5168 3.89175 13.125 4.375 13.125H23.625C24.1082 13.125 24.5 13.5168 24.5 14C24.5 14.4832 24.1082 14.875 23.625 14.875H4.375C3.89175 14.875 3.5 14.4832 3.5 14ZM13.125 20.125C13.125 19.6418 13.5168 19.25 14 19.25H23.625C24.1082 19.25 24.5 19.6418 24.5 20.125C24.5 20.6082 24.1082 21 23.625 21H14C13.5168 21 13.125 20.6082 13.125 20.125Z" fill="white" />
                    </svg>
                </button>
            </nav>
            <nav className="mvng_menu flx_col al_cen jc_cen none mvng_menu__closing g_30" ref={menu}>
                <div className="header__links">
                    <a href="/" className="header__link">Home</a>
                    <a href="#" className="header__link">About me</a>
                    <a href="#" className="header__link">Portfolio</a>
                    <a href="#" className="header__link">Services</a>
                </div>
                <div className="flx_row g_20">
                    <SwitchTheme />
                    <button onClick={openMenu} className="header__button__close">
                        <svg width="24" height="24" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M4.11 2.697L2.698 4.11 6.586 8l-3.89 3.89 1.415 1.413L8 9.414l3.89 3.89 1.413-1.415L9.414 8l3.89-3.89-1.415-1.413L8 6.586l-3.89-3.89z" fill="var(--grey50)"></path>
                        </svg>
                    </button>
                </div>
            </nav>
        </header>
    )
}

export default Header