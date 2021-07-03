import { Grid } from "@material-ui/core";
import Ide from "./ide";
import Prompt from "./prompt";
import classes from "./game.module.css";
import ReadIde from "./readIde";
import { useState } from "react";
import Overlay from "../overlay";
import Backdrop from "../backdrop";
import axios from "axios";

function Game() {
  const [overlayOn, setOverlay] = useState(true);
  function overlayHandler() {
    setOverlay(false);
  }

  const [game_info, set_game_info] = useState({
    vsing: "",
    title: "",
    statement: ""
  });

  function grab_game_info() {
    let id = localStorage.getItem('username');
      axios.get(`http://localhost:5000/api/code/submit/${id}`).then( (all_info) => {
      set_game_info(all_info.data);
      console.log(game_info);
    });

    if(game_info.vsing !== "Not found") {
      console.log("OKKKK!!!!!");
      clearInterval(ok);
    }
  }

  let ok = setInterval(grab_game_info, 10000);

  return (
<>

    <div className={classes.game}>
      {overlayOn && (
        <Overlay onPlay={overlayHandler} onCancel={overlayHandler} />
      )}
      {overlayOn && <Backdrop />}
      <Grid
        container
        spacing={1}
        className={classes.backgroundColor}
        direction="row"
        autoheight
      >
        <Grid container direction="column" xs={4}>
          <Grid item xs>
            <Prompt
              title={game_info.title}
              description={game_info.statement
               /* <p>
                  Given an array of integers, find the sum of its elements.
                  <p>
                    For example, if the array ar = [1, 2, 3], 1 + 2 + 3 = 6, so
                    return 6
                    <p>
                      <strong>Input Format</strong>
                      <p>
                        The first line contains an integer, 'n', denoting the
                        size of the array. The second line contains 'n'
                        space-separated integers representing the array's
                        elements.
                      </p>
                      <strong>Output Format</strong>
                      <p>
                        Print the sum of the array's elements as a single
                        integer.
                      </p>
                      <strong>Sample Input</strong>
                      <p>6</p>
                      <p>1 2 3 4 10 11</p>
                      <strong>Sample Output</strong>
                      <p>31</p>
                    </p>
                  </p>
                </p>*/
              }
            />
          </Grid>
          <Grid item xs>
            <ReadIde />
          </Grid>
        </Grid>
        <Grid item xs={8} direction="column">
          <Ide />
        </Grid>
      </Grid>
    </div>
    </>
  );
}

export default Game;
