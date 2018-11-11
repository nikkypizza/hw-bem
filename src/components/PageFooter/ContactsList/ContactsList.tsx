import React from 'react';
import { cn } from '@bem-react/classname';
import './ContactsList.scss';

const generateKey = (pre: string) => {
  return `${pre}_${new Date().getTime()}`;
}

const cnContactsList = cn('ContactsList');
const LINKS_TEXT_CONTENT = [`Помощь`, `Обратная Связь`, `Разработчикам`, `Условия использования`];

const linkItems = LINKS_TEXT_CONTENT.map((it) => {
  return (
    <li key={generateKey(it)} className={cnContactsList('Item')}>
      <a className={cnContactsList('ItemLink')} href="#">{it}</a>
    </li>
  )
});

export default function ContactsList() {
  return (
    <ul className={cnContactsList()}>
      {linkItems}
    </ul>
  )
}