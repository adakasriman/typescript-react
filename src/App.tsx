import React from 'react';
import './App.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import TSBaics from './components/TSBaics';

function App() {
  return (
    <div className="App">
      <Tabs>
        <TabList>
          <Tab>Typescript baics</Tab>
          <Tab>Title 2</Tab>
        </TabList>

        <TabPanel>
          <TSBaics />
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default App;
