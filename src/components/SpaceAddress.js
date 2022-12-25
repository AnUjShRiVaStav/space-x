import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { fetchSpace } from "../redux/action/space";
import { spaceSelector } from "../redux/reducer/space";
import { Button } from "@material-ui/core";
import Header from "./Header";
import "./style.css";
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

export default function SpaceAddress() {
  const dispatch = useDispatch();
  const { space, loading, hasErrors } = useSelector(spaceSelector);

  useEffect(() => {
    dispatch(fetchSpace());
  }, []);

  const classes = useStyles();

  const [spacedata, setspacedata] = useState(10);
  const showMoreSpace = () => {
    setspacedata((prevValue) => prevValue + 10);
  };
  let TotalNumber = space?.length > spacedata && spacedata / space?.length;
  console.log(`space`, space);

  const [search, setSearchInput] = useState("");
  const handleInput = (e) => {
    setSearchInput(e.target.value);
  };
  return (
    <div>
      <Header />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "20px",
          height: "40px",
        }}
      >
        <input
          type="text"
          style={{ width: "400px" }}
          placeholder="Search By Space Type..."
          onChange={handleInput}
        />
      </div>

      {space
        ?.filter((val) => {
          if (search == "") {
            return val;
          } else if (
            val.payload_type.toLowerCase().includes(search.toLowerCase())
          ) {
            return val;
          }
        })
        .slice(0, spacedata)
        ?.map((item, id) => {
          return (
            <div className={classes.root} key={id}>
              <Grid container spacing={3}>
                <Grid item xs>
                  <Card className={classes.root} variant="outlined">
                    <CardContent>
                      <Typography
                        className={classes.title}
                        color="textSecondary"
                        gutterBottom
                      >
                        {item.manufacturer}
                      </Typography>
                      <Typography variant="h5" component="h2">
                        {item.payload_id}
                      </Typography>
                      <Typography className={classes.pos} color="textSecondary">
                        Type {item.payload_type}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </div>
          );
        })}
      <div onClick={showMoreSpace} className="showmore">
        {TotalNumber ? (
          <div>
            <Button>Show More</Button>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
