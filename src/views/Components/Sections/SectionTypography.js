import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";




import styles from "assets/jss/material-kit-react/views/componentsSections/typographyStyle.js";
import GridItem from "../../../components/Grid/GridItem";

const useStyles = makeStyles(styles);

export default function SectionTypography() {
  const classes = useStyles();
  return (
      <div className={classes.section}>
        <div className={classes.container}>
          <div id="typography">
            <div className={classes.title}>
              <h2>Как с нами связаться:</h2>
            </div>
            <GridContainer>

              <div className={classes.typo}>
                <div className={classes.note}>Адрес</div>
                <p>
                 г.Могилёв, ул. Космонавтов 21, 44
                </p>
              </div>

                <div className={classes.typo}>
                  <div className={classes.note}>Телефон</div>
                  <p>
                    +375(29)-603-20-84
                  </p>
                </div>
              <div className={classes.typo}>
                <div className={classes.note}>Email</div>
                <p>
                 whynotprodprodctionfilm@gmail.com
                </p>
              </div>

            </GridContainer>
            <GridContainer />
          </div>
          <div className={classes.space50} />
            <GridItem>

            </GridItem>

        </div>

      </div>

  );
}
