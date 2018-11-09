import React, { Component } from 'react';
import { cn } from '@bem-react/classname';
import PageHeader from './PageHeader/PageHeader.tsx';
import PageFooter from './PageFooter/PageFooter.tsx';
import './global.scss';


const cnPage = cn('Page');
export default class App extends Component {
  render() {
    return (
      <div className={cnPage()}>
        <PageHeader />
        <PageFooter />
      </div>
    )
  }
}