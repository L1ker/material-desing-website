import React from "react";
import Video from "../../Components/Video.js";
import Main from "../../Components/Main.js";
import { Grid } from "@material-ui/core";

const content =
  "Supervised learning is a method by which you can use labeled training data to train a function that you can then generalize for new examples. The training involves a critic that can indicate when the function is correct or not, and then alter the function to produce the correct result. Classical examples include neural networks that are trained by the back-propagation algorithm, but many other algorithms exist. This tutorial explores some of the other approaches such as support vector machines (SVMs) and probabilistic classifiers (naïve Bayes) in learning applications.";

export default function SupervisedLearning(props) {
  return (
    <Grid container spacing={4}>
      <Grid item xs={12}>
        <Main title="Supervised Learning" content={content} />
      </Grid>
      <Grid item xs={12}>
        <Video title="Supervised Learning Explained" id="4qVRBYAdLAo" />
      </Grid>
    </Grid>
  );
}
