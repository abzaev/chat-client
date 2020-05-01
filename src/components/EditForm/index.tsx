import React, { useState } from 'react';
import { Grid, TextField, Button } from '@material-ui/core';
import { Message } from '../../types';

interface Props {
  initialValues: Message,
  onClick: (changedMessage: Message) => void,
  closeForm: () => void;
}

export const EditForm = (props: Props) => {
  const {
    onClick,
    initialValues,
    closeForm,
  } = props;
  const [messageText, setMessageText] = useState(initialValues.messageText);

  const onSubmitHandler = (event: any) => {
    event.preventDefault();
    const changedMessage = { ...initialValues, messageText };
    onClick(changedMessage);
    closeForm();
  }

  return (
    <form onSubmit={onSubmitHandler}>
      <Grid container spacing={1}>
        <Grid item>
          <TextField
            variant="outlined"
            value={messageText}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => setMessageText(event.target.value)}
          />
        </Grid>
        <Grid container direction="row" spacing={1} item>
          <Grid item>
            <Button type="submit">Send</Button>
          </Grid>
          <Grid item>
            <Button onClick={closeForm}>Cancel</Button>
          </Grid>
        </Grid>
      </Grid>
    </form>
  ) 
}
