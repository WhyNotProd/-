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
import { Link } from "react-router-dom";

import Parallax from "components/Parallax/Parallax.js";

import HeaderLinks from "components/Header/HeaderLinks.js";



import styles from "assets/jss/material-kit-react/views/components.js";

import classNames from "classnames";

import Button from "../../components/CustomButtons/Button";
import SectionNotifications from "./Sections/SectionNotifications";




const useStyles = makeStyles(styles);

export default function Services(props) {
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
                                <Link to={'/'} style={{ color: 'white' }}>
                                    <h1 className={classes.title}>Стоматологический центр</h1>
                                    <h3 className={classes.subtitle}>
                                        {"Лучшая стоматологическая клиника"}
                                    </h3>
                                </Link>
                            </div>
                        </GridItem>
                    </GridContainer>

                </div>

            </Parallax>
            <div className={classNames(classes.main, classes.mainRaised)}>
                <GridItem md={12} className={classes.textCenter}>


                    <GridItem md={12} className={classes.textCenter}>

                        <Button style={{ margin: '100px auto 50px'}} color="info" size="lg" round>
                            Обратная связь
                        </Button>

                    </GridItem>
                    <h1 style={{ margin: '0 auto 50px'}}>Услуги</h1>
                    <ul style={{textAlign:'left'}}>
                        <li><span style={{color: 'black'}}>Консультация врача-стоматолога, с выдачей консультативного заключения</span> 12 BYN</li>
                        <li><span style={{color: 'black'}}>Профессиональная чистка зубов (Ультразвуковая чистка+Airflow+покрытие зубов фторлаком (1 зуб)</span> – от 4 BYN)</li>
                        <li><span style={{color: 'black'}}>(Лечение зубов (Эстетическая реставрация одного зуба фотополимерным материалом) </span> – 120 BYN)</li>
                        <li><span style={{color: 'black'}}>Лечение зубов (Усложненная эстетическая реставрация одного зуба фотополимерным материалом)</span> – от 150 BYN)</li>
                        <li><span style={{color: 'black'}}>Отбеливание зубов (Безопасная американская система отбеливания (2 каппы + набор для отбеливания)</span> – 400 BYN)</li>
                        <li><span style={{color: 'black'}}>Диагностика (Дентальный снимок) – 5 BYN</span> – 5 BYN</li>
                    </ul>
                    <ul style={{textAlign:'left'}}>
                        <li><span style={{color: 'black'}}>Лечение/перелечивание корневых каналов под микроскопом (1-канальный зуб) </span> - 100/150 BYN</li>
                        <li><span style={{color: 'black'}}>Лечение/перелечивание корневых каналов под микроскопом (2х-канальный зуб)</span> - 200/300 BYT</li>
                        <li><span style={{color: 'black'}}>Лечение/перелечивание корневых каналов под микроскопом (3х-канальный зуб)</span> - 300/450 BYN </li>
                        <li><span style={{color: 'black'}}>Лечение/перелечивание корневых каналов под микроскопом (4х-канальный зуб)</span> - 400/600 BYN </li>

                    </ul>

                <SectionNotifications/>

                </GridItem>


            </div>


            <Footer />
        </div>
    );
}
