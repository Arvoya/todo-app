import React from 'react';
import ItemsProvider from './Context/Items';
import SettingsProvider from './Context/Settings';
import Todo from './Components/Todo';
import Header from './Components/Header';
import Settings from './Components/Settings';
import { Tabs } from '@mantine/core';

export default class App extends React.Component {
  render() {
    return (
      <SettingsProvider>
        <ItemsProvider>
          <Tabs defaultValue="Home">
            <Tabs.List>
              <Tabs.Tab value="Home">
                Home
              </Tabs.Tab>
              <Tabs.Tab value="Setting">
                Settings
              </Tabs.Tab>
            </Tabs.List>
            <Tabs.Panel value="Home">
              <Header />
              <Todo />
            </Tabs.Panel>
            <Tabs.Panel value="Setting">
              <Settings />
            </Tabs.Panel>
          </Tabs>
        </ItemsProvider>
      </SettingsProvider>
    );
  }
}
