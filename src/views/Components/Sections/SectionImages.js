import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";


import image from "assets/img/faces/avatar.jpg";

import styles from "assets/jss/material-kit-react/views/componentsSections/typographyStyle.js";

const useStyles = makeStyles(styles);

export default function SectionImages() {
    const classes = useStyles();
    return (
        <div className={classes.section}>
            <div className={classes.container}>

                <div className={classes.space50} />
                <div id="images">
                    <div className={classes.title}>
                        <h2>Врачи</h2>
                    </div>
                    <br />
                    <GridContainer>
                        <GridItem xs={12} sm={2} className={classes.marginLeft}>
                            <h4>Иванов И.И.</h4>
                            <img
                                src={image}
                                alt="..."
                                className={classes.imgRoundedCircle + " " + classes.imgFluid}
                            />
                        </GridItem>
                        <GridItem xs={12} sm={2} className={classes.marginLeft}>
                            <h4>Иванов В.И.</h4>
                            <img
                                src={image}
                                alt="..."
                                className={classes.imgRoundedCircle + " " + classes.imgFluid}
                            />
                        </GridItem>
                        <GridItem xs={12} sm={2} className={classes.marginLeft}>
                            <h4>Иванов А.И.</h4>
                            <img
                                src={image}
                                alt="..."
                                className={classes.imgRoundedCircle + " " + classes.imgFluid}
                            />
                        </GridItem>
                        <GridItem xs={12} sm={2} className={classes.marginLeft}>
                            <h4>Иванов М.И.</h4>
                            <img
                                src={image}
                                alt="First slide"
                                className={classes.imgRoundedCircle + " " + classes.imgFluid}
                            />
                        </GridItem>
                    </GridContainer>
                    <GridContainer />
                </div>
                <div className={classes.space50} />
            </div>
        </div>
    );
}
