import React, {Suspense} from 'react';
import './styles/index.scss'
import {useTheme} from "app/providers/ThemeProvider";
import {classNames} from "shared/lib/classNames/classNames";
import {AppRouter} from "app/providers/router";
import {Navbar} from "widget/Navbar";
import {Sidebar} from "widget/Sidebar";
import {PageLoader} from "shared/ui/PageLoader/PageLoader";

export const App = () => {
  const {theme} = useTheme()

  return (
    <Suspense fallback={''}>
      <div className={classNames('app', {}, [theme])}>
        <Navbar/>
        <div className={'content-page'}>
          <Sidebar/>
          <AppRouter/>
        </div>
      </div>
    </Suspense>
  );
};