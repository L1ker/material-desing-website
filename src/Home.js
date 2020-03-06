import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import ReinforcementLearning from "./pages/reinforcementLearning/reinforcement";
import SemiSupervisedLearning from "./pages/semi-supervisedLearning/semisupervised";
import UnsupervisedLearning from "./pages/unsupervisedLearning/unsupervised";
import SupervisedLearning from "./pages/supervisedLearning/supervised";
import Header from "./Components/Header";
import { Container, CssBaseline } from "@material-ui/core";
import MainPage from "./MainPage";
import Footer from "./Components/Footer";
import { ScrollToTopHandler } from "./Components/ScrollToTopHandler";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";

const sections = [
  { title: "Supervised Learning", url: "/supervised" },
  { title: "Unsupervised Learning", url: "/unsupervised" },
  { title: "Semi-Supervised Learning", url: "/semisupervised" },
  { title: "Reinforcement Learning", url: "/reinforcement" }
];
const links = [
  { title: "Main Page", url: "/" },
  { title: "Supervised", url: "/supervised" },
  { title: "Unsupervised", url: "/unsupervised" },
  { title: "Semi-Supervised", url: "/semisupervised" },
  { title: "Reinforcement", url: "/reinforcement" }
];
const resources = [
  { title: "GitHub", url: "https://github.com/", icon: GitHubIcon },
  { title: "Twitter", url: "https://www.facebook.com/", icon: TwitterIcon },
  { title: "FaceBook", url: "https://twitter.com/", icon: FacebookIcon },
  {
    title: "LinkedIn",
    url: "https://www.linkedin.com/home/?originalSubdomain=at",
    icon: LinkedInIcon
  }
];

export default function Home(props) {
  return (
    <Fragment>
      <CssBaseline />
      <ScrollToTopHandler />
      <Container maxWidth="lg">
        <Header sections={sections} title="Neural Networks" />
        <Switch>
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
          <Route exact path="/">
            <MainPage />
          </Route>
        </Switch>
        <Footer
          links={links}
          resources={resources}
          description="Rights belong to the Alexander Maitz."
        />
      </Container>
    </Fragment>
  );
}
