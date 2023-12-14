import {FC} from "React";
import "./Loader.scss";
import {classNames} from "shared/lib/classNames/classNames";

interface LoaderProps {
  className?: string;
}

export const Loader: FC<LoaderProps> = ({className}) => {
  return (
    <div className={classNames('loadingio-spinner-dual-ring-0aktxn2i1pb', {}, [className])}>
      <div className="ldio-uddh0e0g52a">
        <div></div>
        <div>
          <div></div>
        </div>
      </div>
    </div>
  )
}