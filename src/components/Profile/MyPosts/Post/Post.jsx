import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src='https://www.google.com/landing/2step/images/why-need-img-1.png' />
        { props.message }
          <div>
        <span>Лайк</span> { props.likesCount }
      </div>
    </div>
  )
}

export default Post;