import React from 'react';
import './Style.css';

function EmailLink({ email }) {
  return (
    <a href={`mailto:${email}`} className='email_link' >{email}</a>
  );
}

export default EmailLink;