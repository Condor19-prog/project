import React from 'react';
import {useTranslation} from "react-i18next";
import {BugButton} from "app/providers/ErrorBoundary";

const MainPage = () => {
  const {t} = useTranslation()
  return (
    <div>
      {t('MainPage')}
    </div>
  );
};

export default MainPage