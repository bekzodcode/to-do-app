import React, { useState, useEffect, useReducer } from 'react';
import RemoveAll from './RemoveAll';
import ActionsList from './ActionsList';
import AddAction from './AddAction';
import actionsReducer from '../reducers/actions';
import ActionsContext from '../context/actions-context';

const Actions = () => {
  const [actions, dispatch] = useReducer(actionsReducer, []);

  useEffect(() => {
    const actions = JSON.parse(localStorage.getItem('actions'));

    if (actions) {
      dispatch({
        type: 'POPULATE_ACTIONS',
        actions,
      });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('actions', JSON.stringify(actions));
  }, [actions]);

  return (
    <ActionsContext.Provider value={{actions, dispatch}} className='actions container'>
      <RemoveAll />
      <ActionsList />
      <AddAction />
    </ActionsContext.Provider>
  )
};

export default Actions;