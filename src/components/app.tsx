import React from 'react';
import { cn } from '@bem-react/classname';
import Article from './article.tsx';

const cnPage = cn('Page');

function App () {
    return (
      <div className={cnPage()}>
        <h1 className={cnPage('Title')}>{React.version}</h1>
        <div className={cnPage('Content')}>
          <Article/>
        </div>
      </div>
    )
  } 

export default App