import React from 'react';
import { AppBar, Tabs, Tab, useScrollTrigger, Toolbar, Container } from '@material-ui/core';
import { TabPanel } from '../Tab';

interface Props {
  children: React.ReactElement;
}

function ElevationScroll(props: Props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

export const TabsPanel = () => {
  const [value, setValue] = React.useState(0);

  return (
    <>
      <ElevationScroll>
        <AppBar>
          <Toolbar>
            <Tabs value={value} onChange={(event: React.ChangeEvent<{}>, newValue: number) => setValue(newValue)}>
              <Tab label="Рабочий чат" />
              <Tab label="Флудилка" />
            </Tabs>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
      <Container>
        {
          value === 0
          ? <TabPanel roomId={value} />
          : <TabPanel roomId={value} />
        }
      </Container>
    </>
  );
}
