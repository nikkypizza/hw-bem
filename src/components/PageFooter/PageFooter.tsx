import React from 'react';
import { cn } from '@bem-react/classname';
import './PageFooter.scss';
import ContactsList from './ContactsList/ContactsList';

export default function PageFooter() {
  const cnPageFooter = cn('PageFooter');
  
  return (
    <footer className={cnPageFooter()}>
      <ContactsList/>
      <span className={cnPageFooter(`Copyright`)}>© 2001–2017 ООО «Яндекс»</span>
    </footer>
  )
}
