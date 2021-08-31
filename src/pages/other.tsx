import React from "react";
import {Typography} from "@alfalab/core-components/typography";
import "./other.css";

export const Other = () => {
    return    <>
        <Typography.Title view='medium' color='secondary' tag='div'>
            Остальное
        </Typography.Title>
        <img className="other-img" src='https://moscowteslaclub.ru/images/models/m_s.jpg'/>
    </>;
}