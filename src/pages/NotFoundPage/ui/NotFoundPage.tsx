import {FC} from "React";
import cls from "./NotFoundPages.module.scss";
import {classNames} from "shared/lib/classNames/classNames";
import {useTranslation} from "react-i18next";

interface NotFoundPageProps {
  className?: string;
}

export const NotFoundPage: FC<NotFoundPageProps> = ({className}) => {
  const {t} = useTranslation()
  return (
    <div className={classNames(cls.NotFoundPage, {}, [className])}>
      {t('notFound')}
    </div>
  )
}