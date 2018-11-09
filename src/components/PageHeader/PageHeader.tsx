import React from 'react';
import { cn } from '@bem-react/classname';

import './PageHeader.scss';
import HeaderNavList from '../HeaderNavList/HeaderNavList.tsx'; // Fix path

export default function PageHeader() {
  const logoSvg = require('./assets/PageHeader-logo.svg');
  const cnPageHeader = cn('PageHeader');

  return (
    <header className={cnPageHeader()}>
      <div className={cnPageHeader('LogoContainer')}>
        <a href="#" title="На главную" className={cnPageHeader('Logo')}>
          <img src={logoSvg} width="113" height="38" alt="Яндекс.Дом"></img>
        </a>
        <button type="button" className={cnPageHeader('MenuToggler')} title="Открыть меню"></button>
      </div>
      <nav className={cnPageHeader('Nav')}>
        <HeaderNavList/>
      </nav>
    </header>
  )
}
