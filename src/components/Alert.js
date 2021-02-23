import React from 'react';
import Alert from '@material-ui/lab/Alert';

export const Alerts = ({ text, typeAlert }) => <Alert severity={typeAlert}>{text}</Alert>;
