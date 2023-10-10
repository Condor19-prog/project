import {FC} from 'React'
import {Theme, useTheme} from "app/providers/ThemeProvider";
import React from "react";
import {classNames} from "shared/lib/classNames/classNames";
import cls from './ThemeSwitcher.module.scss'
import LightIcon from 'shared/assets/icons/fire_light.svg'
import DarkIcon from 'shared/assets/icons/fire_dark.svg'
import {Button, ThemeButton} from "shared/ui/Button/Button";

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({className}) => {
    const {theme, toggleTheme} = useTheme()
    return (
        <Button
            theme={ThemeButton.CLEAR}
            className={classNames(cls.ThemeSwitcher, {}, [className])}
            onClick={toggleTheme}
        >
            {theme === Theme.DARK ? <DarkIcon/> : <LightIcon/>}
        </Button>
    );
};