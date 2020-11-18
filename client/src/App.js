import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";

import Form from "./components/Form/Form";
import Posts from "./components/Posts/Posts";
import memories from "./images/memories.png";
import useStyles from "./styles";

function App() {
  const classes = useStyles();
  return (
    <Container maxwidht='lg'>
      <AppBar className={classes.appBar} position='static' color='inherit'>
        <Typography className={classes.heading} varaiant='h2' align='center'>
          PostHost
        </Typography>
        <img
          className={classes.image}
          src={memories}
          alt='PostHost'
          height='60'
        />
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            justify='space-between'
            alignItems='stretch'
            spacing='4'>
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
