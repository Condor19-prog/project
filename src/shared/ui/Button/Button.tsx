import {ButtonHTMLAttributes, FC} from 'React'
import {classNames} from "shared/lib/classNames/classNames";
import cls from './Button.module.scss'

export enum ThemeButton {
    CLEAR = 'clear'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ThemeButton
}

export const Button: FC<ButtonProps> = ({className, children, theme, ...restProps}) => {
    return (
        <button className={classNames(cls.button, {[cls[theme]]: true}, [className])} {...restProps}>
            {children}
        </button>
    );
};