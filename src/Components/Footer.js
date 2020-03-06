import React from "react";
import { useEffect } from "react";
import PropTypes from "prop-types";
import { Link as RouterLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid, Typography, Link, Divider } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  footer: {
    marginTop: theme.spacing(5),
    textDecoration: "none"
  },
  footerContent: {
    marginTop: theme.spacing(3)
  },
  divider: {
    marginBottom: theme.spacing(3),
    marginTop: theme.spacing(5)
  },
  container: {
    paddingBottom: theme.spacing(5),
    paddingTop: theme.spacing(2)
  },
  gridItem: {
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: "4px"
  },
  footerHeader: {
    textDecoration: "none"
  },
  footerSubheader: {
    paddingBottom: theme.spacing(1)
  },
  listItems: {
    listStyleType: "none",
    paddingTop: "4px"
  },
  listLinks: {
    textDecoration: "none",
    display: "inline-block",
    paddingBottom: "4px"
  },
  ul: {
    paddingLeft: 0,
    margin: 0
  }
}));

export function Break(props) {
  return <br></br>;
}

export default function Footer(props) {
  const classes = useStyles();
  const { links, resources } = props;

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <footer className={classes.footer}>
      <Divider className={classes.divider} />
      <Container maxWidth="lg" className={classes.container}>
        <Grid container spacing={10}>
          <Grid item lg={8} md={6} xs={12}>
            <Typography
              color="inherit"
              className={classes.footerSubheader}
              variant="body1"
            >
              About
            </Typography>
            <Typography color="inherit" variant="body2">
              My name is Alexander and I am a machine learning enthusiast. I am
              currently working - alongside with a team - on a self-flying drone
              based on neural networks so that it can fly through closed rooms.
              <Break />
              This page is to help you get started and learn the basics about
              neural networks. If you read and watched everything on this site I
              can recommend you to go to YouTube and search for CodingTrain and
              start coding!
            </Typography>
          </Grid>
          <Grid item lg={2} md={3} xs={6}>
            <ul className={classes.ul}>
              <Typography
                color="inherit"
                variant="body1"
                className={classes.footerSubheader}
              >
                Quick Links
              </Typography>
              {links.map(link => (
                <li className={classes.listItems} key={link.title}>
                  <Typography
                    align="center"
                    color="inherit"
                    variant="body2"
                    className={classes.listLinks}
                    component={RouterLink}
                    to={link.url}
                  >
                    {`${link.title}`}
                  </Typography>
                </li>
              ))}
            </ul>
          </Grid>
          <Grid item lg={2} md={3} xs={6}>
            <ul className={classes.ul}>
              <Typography
                color="inherit"
                variant="body1"
                className={classes.footerSubheader}
              >
                Social Media
              </Typography>
              {resources.map(resource => (
                <li className={classes.listItems} key={resource.title}>
                  <Link href={resource.url}>
                    <Grid
                      container
                      direction="row"
                      spacing={1}
                      alignItems="center"
                    >
                      <Grid item>
                        <resource.icon />
                      </Grid>
                      <Grid item>
                        <Typography
                          align="center"
                          color="inherit"
                          variant="body2"
                          className={classes.listLinks}
                        >
                          {`${resource.title}`}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Link>
                </li>
              ))}
            </ul>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
}

Footer.propTypes = {
  description: PropTypes.string,
  links: PropTypes.array,
  resources: PropTypes.array
};
