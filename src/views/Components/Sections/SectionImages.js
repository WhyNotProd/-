import React, {useEffect, useState} from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";


import image from "assets/img/faces/avatar.jpg";

import styles from "assets/jss/material-kit-react/views/componentsSections/typographyStyle.js";
import axios from "axios";

const useStyles = makeStyles(styles);

export default function SectionImages() {
    const classes = useStyles();
    const [doctor, setDoctor] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/doctor')
          .then(function (response) {
              // handle success
              setDoctor(response.data);
          })
    }, []);

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
                        {doctor.map((item, index) => (
                          <GridItem key={`doctor-item-${index}`} xs={12} sm={2} className={classes.marginLeft}>
                              <h4>{item.firstName} {item.lastName}</h4>
                              <img
                                src={image}
                                alt="..."
                                className={classes.imgRoundedCircle + " " + classes.imgFluid}
                              />
                              <p>{item.workTime.join(', ')}</p>
                          </GridItem>
                        ))}
                    </GridContainer>
                    <GridContainer />
                </div>
                <div className={classes.space50} />
            </div>
        </div>
    );
}
