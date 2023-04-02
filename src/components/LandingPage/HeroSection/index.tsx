import React from "react";
import { makeStyles } from "@material-ui/styles";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
const useStyles = makeStyles({
    heroContainer: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "30px",
    },
    heroImage: {
      height: "400px", // adjust the height as needed
      width: "400px", // adjust the width as needed
      background: "url(your-image-url) center/cover no-repeat",
      marginRight: "32px",
    },
    latestTrendingContainer: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      height: "200px", // adjust the height as needed
      width: "100%",
      padding: "30px",
    },
    trendingItem: {
      background: "#ffffff",
      height: "30%",
      marginBottom: "8px",
    },
    heroCard: {
      width: "800px",
      height: "300px",
    },
  });
  
  const HeroSection = () => {
    const classes = useStyles();
  
    return (
      <div className={classes.heroContainer}>
        <Card elevation={4} className={classes.heroCard}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Hero Title
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Hero Description
            </Typography>
          </CardContent>
        </Card>
        <div className={classes.latestTrendingContainer}>
          <div className={classes.trendingItem}></div>
          <div className={classes.trendingItem}></div>
          <div className={classes.trendingItem}></div>
        </div>
      </div>
    );
  };
  
  export default HeroSection;
  