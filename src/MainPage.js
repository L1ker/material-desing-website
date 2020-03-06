import React from "react";
import Grid from "@material-ui/core/Grid";
import MainFeaturedPost from "./Components/MainFeaturedPost";
import FeaturedPost from "./Components/FeaturedPost";
import Video from "./Components/Video";
import Main from "./Components/Main";
import LearnImage from "./images/learn.jpg";
import AbstractImage from "./images/abstract_art.jpg";
import TileImage from "./images/black-white-tiles.jpg";
import ReinforcementImage from "./images/reinforcement_example.jpg";
import SpiralImage from "./images/spiral.jpg";

const mainFeaturedPost = {
  title: "Neural Networks",
  description:
    "Have you ever wondered how Neural Networks work and what types there are? You can find the answer below.",
  image: LearnImage,
  imgText: "main image description",
  linkText: "Explore..."
};

const featuredPosts = [
  {
    title: "Supervised Learning",
    date: "Nov 12",
    description:
      "The most widespread type of Neural Network today. It learns through clearly labelled data.",
    image: TileImage,
    imageText: "Image Text",
    url: "/supervised"
  },
  {
    title: "Unsupervised Learning",
    date: "Nov 11",
    description:
      "A type of neural network that tries to find similarities between data inside a data set.",
    image: AbstractImage,
    imageText: "Image Text",
    url: "/unsupervised"
  },
  {
    title: "Semi-Supervised Learning",
    date: "Nov 11",
    description:
      "As the name suggests - a mixture used when no cleanly labelled data sets are available.",
    image: SpiralImage,
    imageText: "Image Text",
    url: "/semisupervised"
  },
  {
    title: "Reinforcement Learning",
    date: "Nov 11",
    description:
      "Learning like a child does - getting rewarded for good actions - punished for bad ones.",
    image: ReinforcementImage,
    imageText: "Image Text",
    url: "/reinforcement"
  }
];

const content =
  "A Neural Network is a computer program that operates similarly to the human brain. The objective of neural networks is to perform those cognitive functions our brain can perform like problem-solving and being teachable. The primary appeal of neural networks is their ability to emulate the brain’s pattern-recognition skills. Among personal and commercial applications of neural networks, they have been used for a wide array of things like they have been used to predict the outcome of investment decisions, they can find patterns in handwriting and they can even scan land areas for anomalies which makes it able to point out things like land mines or bombs.";

export default function MainPage() {
  return (
    <main>
      <MainFeaturedPost post={mainFeaturedPost} />

      <Grid container spacing={4}>
        {featuredPosts.map(post => (
          <FeaturedPost key={post.title} post={post} to={post.url} />
        ))}
      </Grid>

      <Main title="What is a Neural Network?" content={content} />
      <Video title="Neural Networks in more depth" id="aircAruvnKk" />
    </main>
  );
}
