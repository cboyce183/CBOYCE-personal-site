import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Divider from '@material-ui/core/Divider';
const ReactMarkdown = require('react-markdown')


const styles = theme => ({
  card: {
    width: 400,
    marginBottom: '15px',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    marginLeft: 'auto',
    [theme.breakpoints.up('sm')]: {
      marginRight: -8,
    },
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
});

class RedditCard extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  wraptxt(txt) {
    if (txt.length > 115) {
      return txt.slice(0, 114) + '...';
    }
    return txt;
  }

  render() {
    const { classes, data } = this.props;

    return (
      <Card className={classes.card}>
        <CardHeader
          avatar={
            <Avatar aria-label="Recipe" className={classes.avatar}>
              <p style={{fontSize:15}}>{this.props.data.ups}</p>
            </Avatar>
          }
          title={this.props.data.title}
          subheader={this.props.data.sub}
        />
        <CardMedia
          className={classes.media}
          image={this.props.data.contentUrl}
          title="Paella dish"
        />
        <CardContent>
          <Typography component="p">
            <ReactMarkdown source={this.wraptxt(this.props.data.text)}/>
          </Typography>
        </CardContent>
        <CardActions className={classes.actions} disableActionSpacing>
          <IconButton aria-label="Share" onClick={() => window.open('https://www.reddit.com' + this.props.data.link)}>
            <ShareIcon />
          </IconButton>
          <IconButton
            className={classnames(classes.expand, {
              [classes.expandOpen]: this.state.expanded,
            })}
            onClick={this.handleExpandClick}
            aria-expanded={this.state.expanded}
            aria-label="Show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>
              Full description
            </Typography>
            <Divider/>
            <div style={{height:'15px'}}/>
            <Typography paragraph>
              <ReactMarkdown source={this.props.data.text}/>
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    );
  }
}

RedditCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RedditCard);
