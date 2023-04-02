import React from "react";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@material-ui/core";
import tayrochollow from "../images/tayrochollow";
import styled from "styled-components";
import HeroSection from "./HeroSection"
import AdSection from "./AdSection"
const StyledLandingPage = styled.div`
  height: calc(100vh - 64px); // Subtract navbar height
  overflow-y: auto; // Add scrollbars if content overflows
`;

const LandingPage = () => {
  return (
    <StyledLandingPage>
      <HeroSection/>
      <AdSection/>
      <Card>
        <CardMedia
          sx={{ height: 140 }}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="green iguana"
        />
        <CardContent>
          <Typography variant="h4" gutterBottom>
            Experience the Excitement of Battle Rap
          </Typography>
          <Typography variant="body1">
            Join our community of battle rap fans and stay up-to-date with the
            latest trends and events.
          </Typography>
          <Button variant="contained" color="primary">
            Join Now
          </Button>
        </CardContent>
      </Card>

      {/* Latest & Trending */}
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Latest News
              </Typography>
              <Typography variant="body1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Trending Topics
              </Typography>
              <Typography variant="body1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Poll/Quiz Section */}
      <Card>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Are You a Battle Rap Expert?
          </Typography>
          <Typography variant="body1">Take our quiz and find out!</Typography>
          <form>
            <Typography variant="body1">
              Question 1: Lorem ipsum dolor sit amet?
            </Typography>
            <input type="radio" name="q1" value="a" /> Option A
            <input type="radio" name="q1" value="b" /> Option B
            <input type="radio" name="q1" value="c" /> Option C
            <br />
            <Typography variant="body1">
              Question 2: Lorem ipsum dolor sit amet?
            </Typography>
            <input type="radio" name="q2" value="a" /> Option A
            <input type="radio" name="q2" value="b" /> Option B
            <input type="radio" name="q2" value="c" /> Option C
            <br />
            <Button variant="contained" color="primary">
              Submit Quiz
            </Button>
          </form>
        </CardContent>
      </Card>
    </StyledLandingPage>
  );
};

export default LandingPage;
