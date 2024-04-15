import React from 'react';
import './Title.scss'
import classNames from 'classnames';

export default function Title({ title, color, size = 'md', as }) {
  const Element = as;
  return (
    <Element className={classNames('Title', {
      [`Title-${color}`]: true,
      [`Title-${size}`]: true,
    })}>{title}</Element>
  )
}
