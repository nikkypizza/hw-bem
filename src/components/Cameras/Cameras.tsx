import React, { Component } from 'react';
import { cn } from '@bem-react/classname';
import './Cameras.scss';

const generateKey = (pre: string) => {
  return `${pre}_${new Date().getTime()}`;
}

const cnCameras = cn('Cameras');
const POSTER_LINKS = [
  {
    path: require('./assets/Cameras-poster-cat.png'),
    title: "Камера видеонаблюдения: cat"
  },
  {
    path: require('./assets/Cameras-poster-hall.png'),
    title: "Камера видеонаблюдения: hall"
  },
  {
    path: require('./assets/Cameras-poster-sosed.png'),
    title: "Камера видеонаблюдения: sosed"
  },
  {
    path: require('./assets/Cameras-poster-dog.png'),
    title: "Камера видеонаблюдения: dog"
  }];

const linksList = POSTER_LINKS.map((it: any) => {
  return (
    <li key={generateKey(it)} className={cnCameras('ListItem')}>
      <video muted={true} className={cnCameras('ListItemVideo')} poster={it.path} title={it.title}></video>
    </li>
  )
});

export default class Cameras extends Component {
  render() {
    return (
      <section className={cnCameras()}>
        <h1 className={cnCameras('Header')}>Все камеры видеонаблюдения</h1>
        <ul className={cnCameras('List')}>
          {linksList}
        </ul>
      </section>
    )
  }
}