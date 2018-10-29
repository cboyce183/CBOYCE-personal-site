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
    page: localStorage.getItem("page") || 'home',
    desktop: !this.mobilecheck()
  };

  mobilecheck() {
    var check = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
    return check;
  };

  setPage(page) {
    localStorage.setItem("page", page);
    this.setState({page});
  }

  renderPage() {
    const {page} = this.state;
    const {classes} = this.props;
    if (page === 'home') {
      return (<Home classes={classes} desktop={this.state.desktop}/>);
    }
    if (page === 'social') {
      return (<Social classes={classes} desktop={this.state.desktop}/>);
    }
    if (page === 'projects') {
      return (<Projects classes={classes} desktop={this.state.desktop}/>);
    }
  };

  handleDrawerOpen = () => {
    this.state.desktop && this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.state.desktop && this.setState({ open: false });
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
            <ListItem>{this.props.desktop && (<ListItemIcon><DoneIcon/></ListItemIcon>)}I am a full stack JavaScript developer based in Greater London, previously based in Barcelona, currently working in the e-learning industry for a startup creating bespoke solutions to big name clients such as Coke-a-cola, and Bank of England.</ListItem>
            <ListItem>{this.props.desktop && (<ListItemIcon><DoneIcon/></ListItemIcon>)}Coming from a background in Physics, I found myself led to naturally enjoying working with data, manipulating and driving meaningful insights for use in rich, interactive features.</ListItem>
            <ListItem>{this.props.desktop && (<ListItemIcon><DoneIcon/></ListItemIcon>)}My personal interests lie in cutting edge tech, such as Progressive Web Apps, blockchain, particularly in finance and other data-rich industries.</ListItem>
            <ListItem>{this.props.desktop && (<ListItemIcon><DoneIcon/></ListItemIcon>)}I am a hobbyist algotrader, dabbling in trading bots primarily working with crypto and forex, trying to take advantage of the volatility of the former, and well established statistical analysis with time tested approaches in the latter.</ListItem>
            <ListItem>{this.props.desktop && (<ListItemIcon><DoneIcon/></ListItemIcon>)}On a personal note, I am a fitness enthustiast, guitarist, and enjoy building/fixing up PCs.</ListItem>
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
            <ListItem>{this.props.desktop && (<ListItemIcon><TrendingUpIcon/></ListItemIcon>)}My career so far has been in startup environments, usually using the Agile model, so flexibility and efficiency are ideas I am well versed in.</ListItem>
            <ListItem>{this.props.desktop && (<ListItemIcon><TrendingUpIcon/></ListItemIcon>)}I have used all the listed technologies below either professionally, during my academic years in research, or contributing to open source projects using them.</ListItem>
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
