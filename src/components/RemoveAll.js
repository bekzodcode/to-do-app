import React, { useContext } from 'react';
import ActionsContext from '../context/actions-context';

const RemoveAll = () => {
  const { actions, dispatch } = useContext(ActionsContext);
  
  const onRemoveAll = () => {
    dispatch({type: 'REMOVE_ALL'});
  };
  
  return(
    <button 
      onClick={onRemoveAll}
      className='removeAll-button'
      disabled={!actions.length || false}
    >
      Remove all
    </button>
  )
}

export default RemoveAll;


