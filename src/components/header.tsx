import React from "react";
import { Typography } from '@alfalab/core-components/typography';
import { Grid } from '@alfalab/core-components/grid';
import { Link as AlfaLink } from '@alfalab/core-components/link';
import { Link } from "react-router-dom";
import "./header.css";


export const Header = () => {
    return <div className="header-div">
            <Typography.Title view='xlarge' color='primary' tag='div'>
            Header
            </Typography.Title>
            <div className="header-grid">
                <Grid.Row gutter={{ mobile: 0, tablet: 16, desktop: { m: 24 } }} align="middle" justify="center">
                    <Grid.Col>
                        <Link to="/" style={{ textDecoration: 'none' }}>
                            <AlfaLink  pseudo={true}>Home</AlfaLink>
                        </Link>
                    </Grid.Col>
                    <Grid.Col>
                        <Link to="/other" style={{ textDecoration: 'none' }}>
                            <AlfaLink  pseudo={true}>Other</AlfaLink>
                        </Link>
                    </Grid.Col>
                    <Grid.Col>
                        <Link to="/about" style={{ textDecoration: 'none' }}>
                            <AlfaLink  pseudo={true}>About</AlfaLink>
                        </Link>
                    </Grid.Col>
                </Grid.Row>
            </div>
        </div>
}