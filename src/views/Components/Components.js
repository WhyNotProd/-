import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components import HeaderLinks from "components/Header/HeaderLinks.js";
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Parallax from "components/Parallax/Parallax.js";
import SectionCarousel from "./Sections/SectionCarousel";
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.js";
import SectionPills from "./Sections/SectionPills";


import styles from "assets/jss/material-kit-react/views/components.js";

const useStyles = makeStyles(styles);

export default function Components(props) {
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
          <Link to={"/services-page"} className={classes.link}>
            <Button color="info" size="lg" round>
              Ознакомиться с услугами
            </Button>
          </Link>
        </GridItem>
          <GridItem>
              <SectionCarousel />
          </GridItem>
          <GridItem>
              <SectionPills

                  color="info"

              />
          </GridItem>
      </div>
      <Footer />
    </div>
  );
}
