import React from 'react';
import { Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import AllGleary from './AllGleary';
import Hajj from './Hajj';
import Tour from './Tour';
import Umrah from './Umrah';


const PackegTabs = () => {
    return (
        <div className="container py-5 mt-3">
             <div className="row">
                <Tabs>
                    <TabList>
                    <Tab>All</Tab>
                    <Tab>HAJJ</Tab>
                    <Tab>UMRAH</Tab>
                    <Tab>TOURS</Tab>
                    </TabList>

                    <TabPanel>
                     <AllGleary></AllGleary>
                    </TabPanel>
                    <TabPanel>
                     <Hajj></Hajj>
                    </TabPanel>
                    <TabPanel>
                     <Umrah></Umrah>
                    </TabPanel>
                    <TabPanel>
                     <Tour></Tour>
                    </TabPanel>
                </Tabs>
             </div>
        </div>
    );
};

export default PackegTabs;