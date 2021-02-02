import theme from './theme';
import { ThemeProvider } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Container,
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardActions,
  CardContent,
  Avatar,
} from '@material-ui/core';
import Footer from './Footer';

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: '#fff',
  },
  hero: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1558981852-426c6c22a060?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80')`,
    height: '500px',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
    fontSize: '4rem',
    [theme.breakpoints.down('sm')]: {
      height: 300,
      fontSize: '3em',
    },
  },
  blogsContainer: {
    paddingTop: theme.spacing(3),
  },
  blogTitle: {
    fontWeight: '800',
    paddingBottom: theme.spacing(3),
  },
  card: {
    maxWidth: '100%',
  },
  media: {
    height: 240,
  },
  cardActions: {
    display: 'flex',
    margin: '0 10px',
    justifyContent: 'space-between',
  },
  author: {
    display: 'flex',
  },
}));

function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <div className='App'>
        <AppBar position='static' className={classes.appBar}>
          <Toolbar>
            <Typography variant='h6' color='primary'>
              Blog
            </Typography>
          </Toolbar>
        </AppBar>

        <Box className={classes.hero}>
          <Box>React Blog</Box>
        </Box>
        <Container maxWidth='lg' className={classes.blogsContainer}>
          <Typography variant='h4' className={classes.blogTitle}>
            Articles
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image='https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
                    title='Contemplative Reptile'
                  />
                  <CardContent>
                    <Typography gutterBottom variant='h5' component='h2'>
                      React useState
                    </Typography>
                    <Typography
                      variant='body2'
                      color='textSecondary'
                      component='p'
                    >
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Ducimus harum provident vitae nisi laborum veritatis
                      obcaecati, perferendis
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions className={classes.cardActions}>
                  <Box className={classes.author}>
                    <Avatar src='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'></Avatar>

                    <Box ml={2}>
                      <Typography variant='subtitle2' component='p'>
                        Guy Clemons
                      </Typography>
                      <Typography
                        variant='subtitle2'
                        component='p'
                        color='textSecondary'
                      >
                        Feb 2, 2021
                      </Typography>
                    </Box>
                  </Box>
                  <Box>
                    <BookmarkBorderIcon></BookmarkBorderIcon>
                  </Box>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image='https://images.pexels.com/photos/34600/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
                    title='Contemplative Reptile'
                  />
                  <CardContent>
                    <Typography gutterBottom variant='h5' component='h2'>
                      MERN Stack
                    </Typography>
                    <Typography
                      variant='body2'
                      color='textSecondary'
                      component='p'
                    >
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Ducimus harum provident vitae nisi laborum veritatis
                      obcaecati, perferendis
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions className={classes.cardActions}>
                  <Box className={classes.author}>
                    <Avatar src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80' />

                    <Box ml={2}>
                      <Typography variant='subtitle2' component='p'>
                        Cathy Silver
                      </Typography>
                      <Typography
                        variant='subtitle2'
                        component='p'
                        color='textSecondary'
                      >
                        Feb 1, 2021
                      </Typography>
                    </Box>
                  </Box>
                  <Box>
                    <BookmarkBorderIcon></BookmarkBorderIcon>
                  </Box>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image='https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
                    title='Contemplative Reptile'
                  />
                  <CardContent>
                    <Typography gutterBottom variant='h5' component='h2'>
                      Angular 2
                    </Typography>
                    <Typography
                      variant='body2'
                      color='textSecondary'
                      component='p'
                    >
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Ducimus harum provident vitae nisi laborum veritatis
                      obcaecati, perferendis
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions className={classes.cardActions}>
                  <Box className={classes.author}>
                    <Avatar src='https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' />

                    <Box ml={2}>
                      <Typography variant='subtitle2' component='p'>
                        Angel Light
                      </Typography>
                      <Typography
                        variant='subtitle2'
                        component='p'
                        color='textSecondary'
                      >
                        Feb 1, 2021
                      </Typography>
                    </Box>
                  </Box>
                  <Box>
                    <BookmarkBorderIcon></BookmarkBorderIcon>
                  </Box>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image='https://images.pexels.com/photos/325111/pexels-photo-325111.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
                    title='Contemplative Reptile'
                  />
                  <CardContent>
                    <Typography gutterBottom variant='h5' component='h2'>
                      React-Redux
                    </Typography>
                    <Typography
                      variant='body2'
                      color='textSecondary'
                      component='p'
                    >
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Ducimus harum provident vitae nisi laborum veritatis
                      obcaecati, perferendis
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions className={classes.cardActions}>
                  <Box className={classes.author}>
                    <Avatar src='https://images.unsplash.com/photo-1584999734482-0361aecad844?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80' />

                    <Box ml={2}>
                      <Typography variant='subtitle2' component='p'>
                        Satoshi Nakamoto
                      </Typography>
                      <Typography
                        variant='subtitle2'
                        component='p'
                        color='textSecondary'
                      >
                        Feb 2, 2021
                      </Typography>
                    </Box>
                  </Box>
                  <Box>
                    <BookmarkBorderIcon></BookmarkBorderIcon>
                  </Box>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Container>

        <Footer></Footer>
      </div>
    </ThemeProvider>
  );
}

export default App;
