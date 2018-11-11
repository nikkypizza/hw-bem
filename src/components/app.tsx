import React, { Component } from 'react';
import { cn } from '@bem-react/classname';
import PageHeader from './PageHeader/PageHeader';
import Cameras from './Cameras/Cameras';
import PageFooter from './PageFooter/PageFooter';
import './global.scss';


const cnPage = cn('Page');
export default class App extends Component {
  render() {
    return (
      <div className={cnPage()}>
        <PageHeader />
        <main>
          <Cameras />
        </main>
        <PageFooter />
      </div>
    )
  }
}