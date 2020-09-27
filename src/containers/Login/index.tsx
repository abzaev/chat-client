import React from 'react';
import { AppBar, Tabs, Tab, Box } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { signUpCreator, signInCreator } from '../../store';
import LoginForm from '../../components/LoginForm';
import { AppState } from '../../types';
import Alert from '@material-ui/lab/Alert';
import { UserLogin } from '../../types';

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          {children}
        </Box>
      )}
    </div>
  );
}

const Login = () => {

  const dispatch = useDispatch();
  const userData = useSelector((state: AppState) => state.auth.userData);
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <div>
        {
          userData?.id && <Alert severity="info">Вы зарегистрированы. Войдите!</Alert>
        }
        <AppBar position="static">
          <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
            <Tab label="Войти" />
            <Tab label="Зарегистрироваться" />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          <LoginForm sendData={(userData: UserLogin) => dispatch(signInCreator(userData))}/>
        </TabPanel>

        <TabPanel value={value} index={1}>
          <LoginForm sendData={(userData: UserLogin) => dispatch(signUpCreator(userData))}/>
        </TabPanel>
      </div>
    </>
  )
}

export default Login;