import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import Ide from "./ide";
import Prompt from "./prompt";
import classes from "./game.module.css";

function Game() {
  return (
    <div>
      <Grid container spacing={1} className={classes.backgroundColor}>
        <Grid item xs>
          <Prompt
            title="Title"
            description="Sed ut perspiciatis unde omnis iste natus error sit 
            voluptatem accusantium doloremque laudantium, totam rem aperiam, 
            eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae 
            vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit 
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui 
            ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem 
            ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam 
            eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. 
            Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam,
             nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate 
             velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
          />
        </Grid>
        <Grid item xs>
          <Ide />
        </Grid>
      </Grid>
    </div>
  );
}

export default Game;
