import React from "react";
import Video from "../../Components/Video.js";
import Main from "../../Components/Main.js";
import { Grid } from "@material-ui/core";

const content =
  "Unsupervised machine learning cannot be directly applied to a regression because it is unknown what the output values could be, therefore making it impossible to train the algorithm how you normally would.The easiest way to understand what’s going on here is to think of a test. When you took tests in school, there were questions and answers; your grade was determined by how close your answers were to the actual ones (or the answer key). But imagine if there was no answer key, and there were only questions. How would you grade yourself?";

export default function UnsupervisedLearning(props) {
  return (
    <Grid container spacing={4}>
      <Grid item xs={12}>
        <Main title="Unsupervised Learning" content={content} />
      </Grid>
      <Grid item xs={12}>
        <Video id="IUn8k5zSI6g" title="Reinforcement Learning Explained" />
      </Grid>
    </Grid>
  );
}
