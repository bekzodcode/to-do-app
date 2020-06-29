import React from 'react';

const Action = (props) => (
  <div className='action'>
    <p>{props.action}</p>
    <button onClick={props.onRemoveAction} title='delete'
    className='delete-button'>
      <img src='delete-forever.png' alt='delete-bin'/>
    </button>
  </div>
);

export default Action;