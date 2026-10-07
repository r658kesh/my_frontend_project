import React from 'react';

export default function Button({ children, href, className = '', ...props }) {
  const classes = `button ${className}`;
  return href ? <a className={classes} href={href} {...props}>{children}</a> : <button className={classes} {...props}>{children}</button>;
}
