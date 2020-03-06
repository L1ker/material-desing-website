import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import GitHubIcon from "@material-ui/icons/GitHub";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import Header from "./Components/Header";
import MainFeaturedPost from "./Components/MainFeaturedPost";
import FeaturedPost from "./Components/FeaturedPost";
import Footer from "./Components/Footer";
import { Route, Switch } from "react-router-dom";
import post1 from "./blog-post.1.md";
import post2 from "./blog-post.2.md";
import post3 from "./blog-post.3.md";
import Video from "./Components/Video";
import Main from "./Components/Main";

const useStyles = makeStyles(theme => ({
  container: {
    backgroundColor: theme.palette.background.paper
  }
}));

const sections = [
  { title: "Supervised Learning", url: "/supervised" },
  { title: "Unsupervised Learning", url: "/unsupervised" },
  { title: "Semi-Supervised Learning", url: "/semisupervised" },
  { title: "Reinforcement Learning", url: "/reinforcement" }
];

const mainFeaturedPost = {
  title: "Machine Learning",
  description:
    "Have you ever wondered how Machine Learning works and what types there are? You can find the answer below.",
  image: "https://source.unsplash.com/random",
  imgText: "main image description",
  linkText: "Explore..."
};

const featuredPosts = [
  {
    title: "Supervised Learning",
    date: "Nov 12",
    description:
      "The most widespread type of Neural Network today. It learns through clearly labelled data.",
    image: "https://source.unsplash.com/random",
    imageText: "Image Text"
  },
  {
    title: "Unsupervised Learning",
    date: "Nov 11",
    description:
      "A type of Neural Network specialised on finding similarities in data sets.",
    image: "https://source.unsplash.com/random",
    imageText: "Image Text"
  },
  {
    title: "Semi-Supervised Learning",
    date: "Nov 11",
    description:
      "As the name suggests - a mixture used when no cleanly labelled data sets are available.",
    image: "https://source.unsplash.com/random",
    imageText: "Image Text"
  },
  {
    title: "Reinforcement Learning",
    date: "Nov 11",
    description:
      "Learning like a child does - getting rewarded for good actions - punished for bad ones.",
    image: "https://source.unsplash.com/random",
    imageText: "Image Text"
  }
];

const posts = [post1, post2, post3];

const sidebar = {
  title: "About",
  description:
    "Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.",
  archives: [
    { title: "March 2020", url: "#" },
    { title: "February 2020", url: "#" },
    { title: "January 2020", url: "#" },
    { title: "November 1999", url: "#" },
    { title: "October 1999", url: "#" },
    { title: "September 1999", url: "#" },
    { title: "August 1999", url: "#" },
    { title: "July 1999", url: "#" },
    { title: "June 1999", url: "#" },
    { title: "May 1999", url: "#" },
    { title: "April 1999", url: "#" }
  ],
  social: [
    { name: "GitHub", icon: GitHubIcon, url: "https://github.com/" },
    { name: "Twitter", icon: TwitterIcon, url: "https://twitter.com/" },
    { name: "Facebook", icon: FacebookIcon, url: "https://facebook.com/" }
  ]
};

export default function Blog() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg" className={classes.container}>
        <Header title="Machine Learning" sections={sections} />

        <main>
          <MainFeaturedPost post={mainFeaturedPost} />

          <Grid container spacing={4}>
            {featuredPosts.map(post => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          <Main title="What is a Neural Network?" />
          <Video title="The Math behind Neural Networks" />

          {/*<Sidebar
                title={sidebar.title}
                description={sidebar.description}
                archives={sidebar.archives}
                social={sidebar.social}
              />*/}
        </main>
      </Container>

      <Footer
        title="Footer"
        description="Something here to give the footer a purpose!"
      />
    </React.Fragment>
  );
}
