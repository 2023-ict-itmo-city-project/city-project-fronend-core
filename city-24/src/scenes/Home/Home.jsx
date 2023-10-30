import React from "react";
import { Divider } from "@mantine/core";

import classes from "./Home.module.css";

export const Home = () => {
    return (
        <>
            <div className={classes.root}>
                I <span>am</span> blue on mobile
            </div>
            <Divider />
        </>
    );
};
