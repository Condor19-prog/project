import React from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import cls from './Navvbar.module.scss'
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";
import {ThemeSwitcher} from "shared/ui/ThemeSwitcher";
import {useTranslation} from "react-i18next";

interface NavbarProps {
    className?: string;
}

export const Navbar = ({className}: NavbarProps) => {
    const {t} = useTranslation('navbar')
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink to={'/'} className={cls.mainLink} theme={AppLinkTheme.SECONDARY}>{t('MainPage')}</AppLink>
                <AppLink to={'/about'} theme={AppLinkTheme.RED}>{t(t('AboutPage'))}</AppLink>
            </div>
        </div>
    );
};