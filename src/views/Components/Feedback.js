import React from "react";

// nodejs library that concatenates classes

// react components for routing our app without refresh

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components import HeaderLinks from "components/Header/HeaderLinks.js";
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";


import Parallax from "components/Parallax/Parallax.js";

import HeaderLinks from "components/Header/HeaderLinks.js";
import SectionImages from "./Sections/SectionImages";



import styles from "assets/jss/material-kit-react/views/components.js";

import classNames from "classnames";






const useStyles = makeStyles(styles);

export default function About(props) {
    const classes = useStyles();
    const { ...rest } = props;
    return (
        <div>
            <Header
                brand="Стоматологический центр"
                rightLinks={<HeaderLinks />}
                fixed
                color="info"
                changeColorOnScroll={{
                    height: 400,
                    color: "white",
                }}
                {...rest}
            />
            <Parallax image={require("assets/img/main.jpg").default}>
                <div className={classes.container}>
                    <GridContainer>
                        <GridItem>
                            <div className={classes.brand}>
                                <h1 className={classes.title}>Стоматологический центр</h1>
                                <h3 className={classes.subtitle}>
                                    {"Лучшая стоматологическая клиника"}
                                </h3>
                            </div>
                        </GridItem>
                    </GridContainer>

                </div>

            </Parallax>
            <div className={classNames(classes.main, classes.mainRaised)}>
                <GridItem md={12} className={classes.textCenter}>

                    <GridItem> <SectionImages/>


                            <ul style={{textAlign:'left'}}>
                                <li><span style={{color: 'black'}}>Режим работы Иванов И.И. </span> Пн-Пт 10:00-18:00</li>
                                <li><span style={{color: 'black'}}>Режим работы Иванов В.И.</span> Пн-Пт 10:00-18:00</li>
                                <li><span style={{color: 'black'}}>Режим работы Иванов А.И.</span> Пн-Пт 10:00-18:00</li>
                                <li><span style={{color: 'black'}}>Режим работы Иванов М.И.</span> Пн-Пт 10:00-18:00</li>
                            </ul>





                    </GridItem>

                    <GridItem md={12} className={classes.textCenter}>



                    </GridItem>

                </GridItem>


            </div>


            <Footer />
        </div>
    );
}
