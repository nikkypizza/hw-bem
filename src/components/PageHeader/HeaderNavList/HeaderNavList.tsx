import React from 'react';
import { cn } from '@bem-react/classname';
import './HeaderNavList.scss';

const generateKey = (pre: string) => {
  return `${pre}_${new Date().getTime()}`;
}

const cnHeaderNavList = cn('HeaderNavList');
const currentLink = `Видеонаблюдение`;
const LINKS_TEXT_CONTENT = [`События`, `Сводка`, `Устройства`, `Сценарии`, `Видеонаблюдение`];

const linksList = LINKS_TEXT_CONTENT.map((it) => {
  return (
    <li key={generateKey(it)} className={cnHeaderNavList('Item')}>
      <a className={it === currentLink ? cnHeaderNavList('ItemLink', { current: true }) : cnHeaderNavList('ItemLink')} href="#">{it}</a>
    </li>
  )
});

export default function HeaderNavList() {
  return (
    <ul className={cnHeaderNavList()}>
      {linksList}
    </ul>
  )
}


