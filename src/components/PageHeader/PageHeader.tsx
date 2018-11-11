import React, { Component } from 'react';
import { cn } from '@bem-react/classname';
import { isBrowser, isMobile } from "react-device-detect";

import './PageHeader.scss';
import HeaderNavList from './HeaderNavList/HeaderNavList';

const cnPageHeaderMobile = cn('PageHeaderMobile');
const cnPageHeaderBrowser = cn('PageHeaderBrowser');
const logoSvg = require('./assets/PageHeader-logo.svg');

export default class PageHeader extends Component {
  state = {
    mobileNavClassName: cnPageHeaderMobile('Nav', { closed: true })
  };

  toggleNavClassName = () => {
    if (this.state.mobileNavClassName === cnPageHeaderMobile('Nav', { closed: true })) {
      this.setState({
        mobileNavClassName: cnPageHeaderMobile('Nav', { open: true })
      })
    } else {
      this.setState({
        mobileNavClassName: cnPageHeaderMobile('Nav', { closed: true })
      })
    }
  };

  render() {
    if (isMobile) {
      return (
        <header className={cnPageHeaderMobile()}>
          <div className={cnPageHeaderMobile('LogoContainer')}>
            <a href="#" title="На главную" className={cnPageHeaderMobile('Logo')}>
              <img src={logoSvg} width="113" height="38" alt="Яндекс.Дом"></img>
            </a>
            <button type="button" onClick={this.toggleNavClassName} className={cnPageHeaderMobile('MenuToggler')} title="Открыть меню"></button>
            <nav className={this.state.mobileNavClassName}>
              <HeaderNavList />
            </nav>
          </div>
        </header>)
    } else if (isBrowser) {
      return (
        <header className={cnPageHeaderBrowser()}>
          <div className={cnPageHeaderBrowser('LogoContainer')}>
            <a href="#" title="На главную" className={cnPageHeaderBrowser('Logo')}>
              <img src={logoSvg} width="113" height="38" alt="Яндекс.Дом"></img>
            </a>
            <nav className={cnPageHeaderBrowser('Nav')}>
              <HeaderNavList />
            </nav>
          </div>
        </header>
      )
    }
  }
}