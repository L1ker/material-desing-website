import React from "react";
import Video from "../../Components/Video.js";
import Main from "../../Components/Main.js";
import { Grid } from "@material-ui/core";

const content =
  "Reinforcement learning trains an actor or agent to respond to an environment in a way that maximizes some value. That’s easier to understand in more concrete terms. For example, AlphaGo, in order to learn to play (the action) the game of Go (the environment), first learned to mimic human Go players from a large data set of historical games (apprentice learning). It then improved its play through trial and error (reinforcement learning), by playing large numbers of Go games against independent instances of itself.";

export default function ReinforcementLearning(props) {
  return (
    <Grid container spacing={4}>
      <Grid item xs={12}>
        <Main title="Reinforcment Learning" content={content} />
      </Grid>
      <Grid item xs={12}>
        <Video id="JgvyzIkgxF0" title="Reinforcement Learning Explained" />
      </Grid>
    </Grid>
  );
}
