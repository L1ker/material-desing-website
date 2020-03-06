import React from "react";
import {
  Toolbar,
  Typography,
  Grid,
  makeStyles,
  Card,
  CardContent
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  toolbar: {
    paddingBottom: 0,
    paddingTop: 0
    // borderBottom: `1px solid ${theme.palette.divider}`
  },
  gridHeader: {
    paddingBottom: 0,
    marginTop: "4vh"
  },
  gridItem: {
    paddingTop: 0
  }
}));

export default function Main(props) {
  const classes = useStyles();
  const { title, content } = props;
  return (
    <Grid container spacing={4}>
      <Grid item xs={12} className={classes.gridHeader} id="mainHeader">
        <Toolbar className={classes.toolbar}>
          <Typography variant="h4" color="inherit">
            {title}
          </Typography>
        </Toolbar>
      </Grid>
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <Typography variant="body1">{content}</Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
