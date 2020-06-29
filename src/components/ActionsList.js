import React, { useContext } from 'react';
import Action from './Action';
import ActionsContext from '../context/actions-context';
import {uuid} from 'uuidv4';

const ActionsList = () => {
  const { actions, dispatch } = useContext(ActionsContext);
  const onRemoveAction = (actionIndex) => {
    dispatch({
      type: 'REMOVE_ACTION',
      actionIndex,
    });
  };

  return (
    <div>
      {actions.map((action, index) => {
        return (
          <Action
            action={action}
            key={uuid()}
            onRemoveAction={() => onRemoveAction(index)}
          />
        )})}
    </div>
  )
};

export default ActionsList;