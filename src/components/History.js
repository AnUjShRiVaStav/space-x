import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../redux/action/product";
import { productSelector } from "../redux/reducer/product";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Header from './Header'

import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function Historylist() {
  const dispatch = useDispatch();
  const { product, loading, hasErrors } = useSelector(productSelector);
// console.log(`productSelector`, productSelectors)
  useEffect(() => {
    dispatch(fetchProduct());
  }, []);
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);


  return (
    <div>
      <Header />
      {product?.map((item, id) => {
        return (
          <div className={classes.root} key={id}>
            <Grid container spacing={3}>
              <Grid item xs >
                <Card className={classes.root} variant="outlined">
                  <CardContent>
                    <Typography
                      className={classes.title}
                      color="textSecondary"
                      gutterBottom
                    >
                      {item.details}
                    </Typography>
                    <Typography variant="h5" component="h2">
                      {item.title}
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                      flight_number {item.flight_number}
                    </Typography>
                    <Typography variant="body2" component="p">
                      <a href={item.links.article}>article</a>
                      <br />
                      <a href={item.links.wikipedia}>wikipedia</a>
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </div>
        );
      })}
    </div>
  );
}
