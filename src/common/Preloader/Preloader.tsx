import React, { ReactElement } from 'react';
import s from './Preloader.module.css';

interface IPreloaderProps {}

export default function Preloader({}: IPreloaderProps): ReactElement {
  return (
    <div className={s.preloaderContainer}>
      <div className={s.preloader}></div>
    </div>
  );
}
