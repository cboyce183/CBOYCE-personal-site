import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { mainListItems } from './listItems';
import SimpleLineChart from './SimpleLineChart';
import SimpleTable from './SimpleTable';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import BugReportIcon from '@material-ui/icons/BugReport';
import DoneIcon from '@material-ui/icons/Done';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import AssignmentIcon from '@material-ui/icons/Assignment';
import CodeIcon from '@material-ui/icons/Code';
import StarsIcon from '@material-ui/icons/Stars';
import SchoolIcon from '@material-ui/icons/School';

require("../node_modules/github-card/dist/widget.js");
const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing.unit * 7,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing.unit * 9,
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    height: '100vh',
    overflow: 'auto',
  },
  chartContainer: {
    marginLeft: -22,
  },
  tableContainer: {
    height: 320,
  },
  h5: {
    marginBottom: theme.spacing.unit * 2,
  },
});

class Dashboard extends React.Component {
  state = {
    open: false,
    page: localStorage.getItem("page") || 'home'
  };

  setPage(page) {
    localStorage.setItem("page", page);
    this.setState({page});
  }

  renderPage() {
    const {page} = this.state;
    const {classes} = this.props;
    if (page === 'home') {
      return (<Home classes={classes}/>);
    }
    if (page === 'social') {
      return (<Social classes={classes}/>);
    }
    if (page === 'projects') {
      return (<Projects classes={classes}/>);
    }
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;
    const { page } = this.state;

    return (
      <React.Fragment>
        <CssBaseline />
        <div className={classes.root}>
          <AppBar
            position="absolute"
            className={classNames(classes.appBar, this.state.open && classes.appBarShift)}
          >
            <Toolbar disableGutters={!this.state.open} className={classes.toolbar}>
              <IconButton
                color="inherit"
                aria-label="Open drawer"
                onClick={this.handleDrawerOpen}
                className={classNames(
                  classes.menuButton,
                  this.state.open && classes.menuButtonHidden,
                )}
              >
                <MenuIcon />
              </IconButton>
              <Typography
                component="h1"
                variant="h6"
                color="inherit"
                noWrap
                className={classes.title}
              >
                Charles Boyce - Full Stack Developer
              </Typography>
            </Toolbar>
          </AppBar>
          <Drawer
            onMouseEnter={this.handleDrawerOpen}
            onMouseLeave={this.handleDrawerClose}
            variant="permanent"
            classes={{
              paper: classNames(classes.drawerPaper, !this.state.open && classes.drawerPaperClose),
            }}
            open={this.state.open}
          >
            <div className={classes.toolbarIcon}>
              <IconButton onClick={this.handleDrawerClose}>
                <ChevronLeftIcon />
              </IconButton>
            </div>
            <Divider />
            <List setPage={this.setPage.bind(this)}>
              <div>
                <ListItem button onClick={this.setPage.bind(this, 'home')}>
                  <ListItemIcon>
                    <DashboardIcon />
                  </ListItemIcon>
                  <ListItemText primary="Home" />
                </ListItem>

                <ListItem button onClick={this.setPage.bind(this, 'projects')}>
                  <ListItemIcon>
                    <AssignmentIcon />
                  </ListItemIcon>
                  <ListItemText primary="Projects" />
                </ListItem>

                <ListItem button onClick={this.setPage.bind(this, 'social')}>
                  <ListItemIcon>
                    <PeopleIcon />
                  </ListItemIcon>
                  <ListItemText primary="Social" />
                </ListItem>

              </div>
            </List>
          </Drawer>

          {this.renderPage()}

        </div>
      </React.Fragment>
    );
  }
}

class Home extends React.Component {
  render() {
    const {classes} = this.props;
    return (
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <ListItem>
          <ListItemIcon>
            <BugReportIcon style={{color:'red'}}/>
          </ListItemIcon>
          <Typography variant="h6" component="h6" style={{color:'red'}}>
            Not currently looking for work
          </Typography>
        </ListItem>
        <Divider/>
        <div style={{height: '20px'}}/>
        <Typography variant="h5" gutterBottom component="h2">
          About
        </Typography>
        <Typography component="ul" className={classes.chartContainer}>
          <ul>
            <ListItem><ListItemIcon><DoneIcon/></ListItemIcon>I am a full stack JavaScript developer based in Greater London, previously based in Barcelona, currently working in the e-learning industry for a startup creating bespoke solutions to big name clients such as Coke-a-cola, and Bank of England.</ListItem>
            <ListItem><ListItemIcon><DoneIcon/></ListItemIcon>Coming from a background in Physics, I found myself led to naturally enjoying working with data, manipulating and driving meaningful insights for use in rich, interactive features.</ListItem>
            <ListItem><ListItemIcon><DoneIcon/></ListItemIcon>My personal interests lie in cutting edge tech, such as Progressive Web Apps, blockchain, particularly in finance and other data-rich industries.</ListItem>
            <ListItem><ListItemIcon><DoneIcon/></ListItemIcon>I am a hobbyist algotrader, dabbling in trading bots primarily working with crypto and forex, trying to take advantage of the volatility of the former, and well established statistical analysis with time tested approaches in the latter.</ListItem>
            <ListItem><ListItemIcon><DoneIcon/></ListItemIcon>On a personal note, I am a fitness enthustiast, guitarist, and enjoy building/fixing up PCs.</ListItem>
          </ul>
        </Typography>
        <div style={{height: '20px'}}/>
        <Divider/>
        <div style={{height: '20px'}}/>
        <Typography variant="h5" gutterBottom component="h2">
          Skills/Tech
        </Typography>
        <Typography component="ul" className={classes.chartContainer}>
          <ul>
            <ListItem><ListItemIcon><TrendingUpIcon/></ListItemIcon>My career so far has been in startup environments, usually using the Agile model, so flexibility and efficiency are ideas I am well versed in.</ListItem>
            <ListItem><ListItemIcon><TrendingUpIcon/></ListItemIcon>I have used all the listed technologies below either professionally, during my academic years in research, or contributing to open source projects using them.</ListItem>
          </ul>
          <div style={{height: '20px'}}/>
        </Typography>
        <div className={classes.tableContainer}>
          <SimpleTable />
          <div style={{height: '20px'}}/>
        </div>
      </main>
    );
  }
}

class Projects extends React.Component {
  render() {
    const {classes} = this.props;
    return (
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <SimpleLineChart />
      </main>
    );
  }
}

class Social extends React.Component {
  render() {
    const {classes} = this.props;
    return (
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <ListItem>
          <ListItemIcon>
            <BugReportIcon style={{color:'red'}}/>
          </ListItemIcon>
          <Typography variant="h6" component="h6" style={{color:'red'}}>
            Not currently looking for work
          </Typography>
        </ListItem>
        <Divider/>
        <div style={{height: '20px'}}/>
        <ListItem>
          <Typography variant="p" component="p">
            I am active on most mainstream forms of social media (with the exception of Twitter), but the best bet of getting in contact with me is one of the links below. If you have received my CV from a job-site, please do not contact me by phone or email if it doesn't say I am looking for work here.
          </Typography>
        </ListItem>
        <div style={{height: '20px'}}/>
        <Typography variant="h5" gutterBottom component="h2">
          Where to find me
        </Typography>
        <Typography component="ul" className={classes.chartContainer}>
          <ul>
            <ListItem><ListItemIcon><SchoolIcon/></ListItemIcon><a href="https://www.linkedin.com/in/charles-boyce-developer/" style={{textDecoration: 'none'}}>My experience is listed on LinkedIn (the best way to contact me).</a></ListItem>
            <ListItem><ListItemIcon><CodeIcon/></ListItemIcon><a href="https://github.com/cboyce183" style={{textDecoration: 'none'}}>You can find me on Github here.</a></ListItem>
            <ListItem><ListItemIcon><StarsIcon/></ListItemIcon><a href="https://devpost.com/cboyce183?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav" style={{textDecoration: 'none'}}>Devpost hackathon projects here.</a></ListItem>
          </ul>
        </Typography>
        <div style={{height: '20px'}}/>
      </main>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Dashboard);
