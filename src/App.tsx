import React from 'react';
import ItemsProvider from './Context/Items';
import SettingsProvider from './Context/Settings';
import LoginProvider from './Context/Auth';
import Todo from './Components/Todo';
import Auth from './Components/Auth';
import Header from './Components/Header';
import Settings from './Components/Settings';
import { Tabs } from '@mantine/core';
import Login from './Components/Login';

export default class App extends React.Component {
  render() {
    return (
      <LoginProvider>
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
                <Login />
              </Tabs.List>
              <Auth>
                <Tabs.Panel value="Home">
                  <Header />
                  <Todo />
                  <Auth>
                    <div>Any valid user can see this</div>
                  </Auth>

                  <Auth capability="create">
                    <div>Users with create access can see this</div>
                  </Auth>

                  <Auth capability="update">
                    <div>Users with update access can see this</div>
                  </Auth>

                  <Auth capability="delete">
                    <div>Users with delete access can see this</div>
                  </Auth>

                </Tabs.Panel>
                <Tabs.Panel value="Setting">
                  <Settings />
                </Tabs.Panel>
              </Auth>
            </Tabs>
          </ItemsProvider>
        </SettingsProvider>
      </LoginProvider>
    );
  }
}
