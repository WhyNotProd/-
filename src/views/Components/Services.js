import React, {useEffect, useState} from "react";
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
import axios from "axios";


const useStyles = makeStyles(styles);

export default function Services(props) {
    const classes = useStyles();
    const { ...rest } = props;
    const [services, setServices] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/service')
          .then(function (response) {
              // handle success
              setServices(response.data);
          })
      console.log(services);
    }, []);

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
                      {console.log(services)}
                      {services.map((item, index) => (
                        <li key={`services-${index}`}>
                          <span style={{color: 'black'}}>{item.name} ({item.procedure})</span> - {item.price}
                        </li>
                      ))}
                    </ul>

                <SectionNotifications/>

                </GridItem>


            </div>


            <Footer />
        </div>
    );
}
