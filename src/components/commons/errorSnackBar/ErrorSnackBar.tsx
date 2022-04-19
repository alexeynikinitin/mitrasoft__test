import React from 'react';

import { Alert } from 'react-bootstrap';

import { setErrorMessage } from 'store/app/actions/setErrorMessage';
import { selectErrorMessage } from 'store/app/selectors/selectErrorMessage';
import { useAppDispatch } from 'utils/useAppDispatch';
import { useAppSelector } from 'utils/useAppSelector';

import './ErrorSnackBar.css';

export const ErrorSnackBar = () => {
  const errorMessage = useAppSelector(selectErrorMessage);
  const dispatch = useAppDispatch();

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') return;
    dispatch(setErrorMessage(''));
  };
  if (errorMessage) {
    return (
      <Alert
        variant="danger"
        onClose={handleClose}
        dismissible
        className="error_snackBar"
      >
        <Alert.Heading>Hey! You got an error!</Alert.Heading>
        <p>{errorMessage}</p>
      </Alert>
    );
  }
  return <div />;
};
