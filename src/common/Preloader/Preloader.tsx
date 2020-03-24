import React, { ReactElement } from 'react';
import s from './Preloader.module.css';

interface Props {}

export default function Preloader({}: Props): ReactElement {
  return (
    <div className={s.preloaderContainer}>
      <div className={s.preloader}></div>
    </div>
  );
}
