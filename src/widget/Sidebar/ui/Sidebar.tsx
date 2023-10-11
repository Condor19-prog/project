import {FC} from 'React'
import {classNames} from "shared/lib/classNames/classNames";
import cls from './Sidebar.module.scss'
import React, {useState} from "react";
import {ThemeSwitcher} from "shared/ui/ThemeSwitcher";

interface SidebarProps {
    className?: string;
}

export const Sidebar: FC<SidebarProps> = ({className}) => {
    const [collapsed, setCollapsed] = useState(false)
    const onToggle = () => {
        setCollapsed(prevState => !prevState)
    }

    return (
        <div className={classNames(cls.sidebar, {[cls.collapsed]: collapsed}, [className])}>
            <button onClick={onToggle}>toggle</button>
            <div className={cls.switchers}>
                <ThemeSwitcher/>
            </div>
        </div>
    );
};