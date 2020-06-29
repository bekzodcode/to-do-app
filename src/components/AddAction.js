import React, { useState, useContext } from 'react';
import ActionsContext from '../context/actions-context';

const AddAction = () => {
  const { actions, dispatch } = useContext(ActionsContext);
  const [action, setAction] = useState();
  const [error, setError] = useState();

  const onAddAction = (e) => {
    e.preventDefault();

    if (actions.indexOf(action) > -1) {
      setError('Already exists');
    } else if (action === '' || e.target.elements.newAction.value === '') {
      setError('Enter valid value');
    } else {
      dispatch({
        type: 'ADD_ACTION',
        action,
      });
      e.target.elements.newAction.value = '';
      setError();
    }
  }

  const onInputChange = (e) => {
    setAction(e.target.value);
  };

  return(
    <div className='addAction'>
      <form onSubmit={onAddAction}>
        <input
          onChange={onInputChange}
          type='text' 
          name='newAction'
        />
        <button className='add-button'>Add</button>
      </form>
      {error && <p className='error-msg'>{error}</p>}
    </div>
  )
};

export default AddAction;