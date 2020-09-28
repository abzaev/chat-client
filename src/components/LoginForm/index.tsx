import React from 'react';
import { TextField, Button, Grid } from '@material-ui/core';
import { UserLogin } from '../../types';

interface Props {
  sendData: (dataForLogin: UserLogin) => void;
}

export default (props: Props) => {
  const {
    sendData
  } = props;

  const [login, setLogin] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <form onSubmit={
      (event: React.FormEvent) => {
        event.preventDefault();
        sendData({login, password})
      }
    }>
      <Grid container direction={'column'} spacing={2}>
        <Grid item>
          <TextField
            label="Введите логин"
            variant="outlined"
            value={login}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => setLogin(event.target.value)}
          />
        </Grid>
        <Grid item>
          <TextField
            label="Введите пароль"
            type="password"
            variant="outlined"
            value={password}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => setPassword(event.target.value)}
          />
        </Grid>
        <Grid item>
          <Button variant="outlined" type="submit">Отправить</Button>
        </Grid>
      </Grid>
    </form>
  )
}
