import React from "react";
import {Typography} from "@alfalab/core-components/typography";
import { TabsResponsive, Tab } from '@alfalab/core-components/tabs/responsive';
import './home.css';

export const Home = () => {
    const [selectedId, setSelectedId] = React.useState('tab-1');

    const handleChange = (event: any, {selectedId}: any) => setSelectedId(selectedId);

    return    <>
        <Typography.Title view='medium' color='secondary' tag='div'>
            Домашняя страница
        </Typography.Title>
        <div className="home-tabs">
            <TabsResponsive selectedId={selectedId} onChange={handleChange}>
                <Tab title='Таб 1' id='tab-1'>
                    Таб 1
                </Tab>
                <Tab title='Таб 2' id='tab-2'>
                    Таб 2
                </Tab>
                <Tab title='Таб 3' id='tab-3'>
                    Таб 3
                </Tab>
                <Tab title='Таб 4' id='tab-4'>
                    Таб 4
                </Tab>
                <Tab title='Таб 5' id='tab-5'>
                    Таб 5
                </Tab>
            </TabsResponsive>
        </div>
    </>;
}