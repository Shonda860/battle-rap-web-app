import React from "react";
import { makeStyles } from "@material-ui/styles";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  adsContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "32px",
  },
  adCard: {
    width: "calc(25% - 16px)",
  },
});

const AdsSection = () => {
  const classes = useStyles();

  return (
    <div className={classes.adsContainer}>
      <Card elevation={4} className={classes.adCard}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Poll/Quiz
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Typography>
        </CardContent>
      </Card>
      <Card elevation={4} className={classes.adCard}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Ad 1
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Typography>
        </CardContent>
      </Card>
      <Card elevation={4} className={classes.adCard}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Ad 2
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Typography>
        </CardContent>
      </Card>
      <Card elevation={4} className={classes.adCard}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Spotlight Feature
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdsSection;
