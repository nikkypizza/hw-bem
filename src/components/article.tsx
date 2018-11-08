import React from 'react';
import { cn } from '@bem-react/classname';

const cnArticle = cn('Article');

function Article () {
    return (
      <article className={cnArticle()} style = {{color:'blue'}}> 
        <h2 className={cnArticle('Title')}>title</h2>
        <h3 className={cnArticle('Subtitle', { length: 'small' })}>body creation date: {(new Date()).toDateString()}</h3>
          <section className={cnArticle('Section')}>body</section>
      </article>
    )
}

export default Article;