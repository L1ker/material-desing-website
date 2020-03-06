import React from "react";
import Video from "../../Components/Video.js";
import Main from "../../Components/Main.js";
import { Grid } from "@material-ui/core";

const content =
  "As you might expect from the name, semi-supervised learning is intermediate between supervised learning and unsupervised learning. Semi-supervised learning uses both tagged and untagged data to fit a model. In some cases, such as Alexa’s, adding the untagged data actually improves the accuracy of the model.";
export default function SemiSupervisedLearning(props) {
  return (
    <Grid container spacing={4}>
      <Grid item xs={12}>
        <Main title="Semi-Supervised Learning" content={content} />
      </Grid>
      <Grid item xs={12}>
        <Video id="b-yhKUINb7o" title="Reinforcement Learning Explained" />
      </Grid>
    </Grid>
  );
}
