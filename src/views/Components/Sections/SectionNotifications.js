import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons

// core components
import SnackbarContent from "components/Snackbar/SnackbarContent.js";
import Clearfix from "components/Clearfix/Clearfix.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/notificationsStyles.js";

const useStyles = makeStyles(styles);

export default function SectionNotifications() {
  const classes = useStyles();
  return (
    <div className={classes.section} id="notifications">
      <div className={classes.container}>
        <div className={classes.title}>
           <h3>Возникли вопросы?</h3>
        </div>
      </div>
      <SnackbarContent
        message={
          <span>
            <b></b> Вы можете возпользоваться формой обратной связи
          </span>
        }
        close
        color="info"
        icon="info_outline"
      />

      <Clearfix />
    </div>
  );
}
