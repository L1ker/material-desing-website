import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
//import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { Link as RouterLink } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`
  },
  toolbarTitle: {
    flex: 1
  },
  toolbarSecondary: {
    justifyContent: "space-evenly",
    overflowX: "auto",
    borderBottom: `1px solid ${theme.palette.divider}`
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0
  }
}));

export default function Header(props) {
  const classes = useStyles();
  const { sections, title } = props;

  return (
    <React.Fragment>
      <Toolbar className={classes.toolbar}>
        {/*<Logo />*/}
        {/*Title of Page */}
        <Typography
          component={RouterLink}
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          className={classes.toolbarTitle}
          to="/"
        >
          {title}
        </Typography>

        <IconButton>
          <SearchIcon />
        </IconButton>
      </Toolbar>

      <Toolbar
        component="nav"
        variant="dense"
        className={classes.toolbarSecondary}
      >
        {sections.map(section => (
          <Link
            color="inherit"
            noWrap
            key={section.title}
            variant="body2"
            className={classes.toolbarLink}
            component={RouterLink}
            to={section.url}
          >
            {section.title}
          </Link>
        ))}
      </Toolbar>
      {/*<Switch>
        <Route exact path="/">
          <Blog />
        </Route>
        <Route path="/supervised">
          <SupervisedLearning />
        </Route>
        <Route path="/unsupervised">
          <UnsupervisedLearning />
        </Route>
        <Route path="/semisupervised">
          <SemiSupervisedLearning />
        </Route>
        <Route path="/reinforcement">
          <ReinforcementLearning />
        </Route>
      </Switch>*/}
    </React.Fragment>
  );
}

/*function Test1(props) {
  return <h1>This is the first test!</h1>;
}
function Test2(props) {
  return <h1>This is the second test!</h1>;
}*/
Header.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string
};
