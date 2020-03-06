import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import YouTube from "react-youtube-embed";
import { Toolbar } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`
  }
}));

export default function Video(props) {
  const classes = useStyles();
  const { id, title } = props;
  return (
    <Grid container spacing={4}>
      <Grid item xs={12}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h5" color="inherit">
            {title}
          </Typography>
        </Toolbar>
      </Grid>
      <Grid item xs={12}>
        <YouTube id={`${id}`} />
      </Grid>
    </Grid>
  );
}
