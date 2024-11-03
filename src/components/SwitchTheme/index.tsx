import { useEffect, useState } from "react";

enum THEMES {
    DARK = "dark",
    LIGHT = "light"
}

const SwitchTheme = () => {

    const [theme, setTheme] = useState(document.documentElement.getAttribute("data-theme") || THEMES.DARK);

    const changeTheme = (theme: string) => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("color-theme", theme);
    };

    const changeThemeSettings = () => {
        if (theme === THEMES.DARK) {
            setTheme(THEMES.LIGHT)
        } else {
            setTheme(THEMES.DARK)
        }
    }

    useEffect(() => changeTheme(theme), [theme]);

    return (
        <button className="grey_button" onClick={changeThemeSettings}>Change theme</button>
    )
}

export default SwitchTheme