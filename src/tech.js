import React, { Component } from 'react';
import './App.css';
import { TweenMax, Elastic } from 'gsap';
import ReactDOM from 'react-dom';

const images = [
{   link: 'https://reactjs.org/',   imageUrl: './assets/react.png' },
{   link: 'https://facebook.github.io/react-native/',   imageUrl: './assets/react-native.svg' },
{   link: 'https://redux.js.org/docs/introduction/',   imageUrl: './assets/redux.png' },
{   link: 'https://angular.io/',   imageUrl: './assets/angular.svg' },
{   link: 'https://jquery.com/',   imageUrl: './assets/jquery.png' },
{   link: 'https://greensock.com/',   imageUrl: './assets/greensock.png' },
{   link: 'https://expressjs.com/',   imageUrl: './assets/express.png' },
{   link: 'koajs.com/',   imageUrl: './assets/koa.png' },
{   link: 'https://socket.io/',   imageUrl: './assets/socket-io.svg' },
{   link: 'https://www.mongodb.com/',   imageUrl: './assets/mongo.png' },
{   link: 'https://redis.io/',   imageUrl: './assets/redis.png' },
{   link: 'https://www.mysql.com/',   imageUrl: './assets/mysql.png' }
]

export class Tech extends Component {
  popper = (target) => {
    return TweenMax.to(ReactDOM.findDOMNode(target), 2.5, {css:{scale:1, opacity:1}, ease:Elastic.easeOut});
  }

  paraAnim = () => {
    TweenMax.to(ReactDOM.findDOMNode(this.y1), 1.5, {css:{marginTop:0, opacity:1, height:'auto'}, ease:Elastic.easeOut});    
  }
  componentDidMount () {
    setTimeout(() => this.popper(this.x1), 200);
    setTimeout(() => this.popper(this.x2), 400);
    setTimeout(() => this.popper(this.x2a), 600);    
    setTimeout(() => this.popper(this.x3), 800);
    setTimeout(() => this.popper(this.x4), 1000);
    setTimeout(() => this.popper(this.x4a), 1200);
    setTimeout(() => this.popper(this.x4b), 1400);    
    setTimeout(() => this.popper(this.x5), 1600);
    setTimeout(() => this.popper(this.x6), 1800);
    setTimeout(() => this.popper(this.x7), 2000);
    setTimeout(() => this.popper(this.x8), 2200);
    setTimeout(() => this.popper(this.x9), 2400);
    setTimeout(() => this.popper(this.x10), 2600);
    setTimeout(() => this.popper(this.x11), 2800);
    setTimeout(() => this.popper(this.x12), 3000);
    setTimeout(() => this.popper(this.x12a), 3400);
    setTimeout(() => this.popper(this.x12a1), 3200);    
    setTimeout(() => this.popper(this.x12b), 3600);
    setTimeout(() => this.popper(this.x12c), 3800);
    setTimeout(() => this.popper(this.x12d), 4000);
    
    setTimeout(() => this.paraAnim(), 4200);    
  }

  render() {
    return (
      <div style={{display:'flex',alignItems:'center',flexFlow:'column'}}>
        <div ref={e => {this.y1 = e;}} className="tech-para">
        <p style={{fontSize:'17px', textAlign:'center'}}>Main languages: JavaScript | TypeScript | C++</p>
        <p style={{fontSize:'17px', textAlign:'center'}}>Others: Python | Go | Ruby</p>
        <p style={{fontSize:'17px', textAlign:'center'}}>Framework expertise: React | React Native | Express | Koa | MongoDB | SocketIO | SQLite | Hyperledger Fabric</p>
        </div>
        <div className="tech-wrapper">
            <LogoWrapper ref={e => {this.x1 = e;}} link="https://reactjs.org/" redir={require('./assets/react.png')} styles={{maxHeight:'70px', maxWidth:'100%'}}/>
            <LogoWrapper ref={e => {this.x2 = e;}} link="https://facebook.github.io/react-native/" redir={require('./assets/react-native.svg')} styles={{maxHeight:'70px', maxWidth:'100%', filter:'hue-rotate(40deg)'}}/>
            <LogoWrapper ref={e => {this.x2a = e;}} link="https://expo.io/" redir={require('./assets/expo.png')} styles={{maxHeight:'50px', maxWidth:'100%'}}/>
            <LogoWrapper ref={e => {this.x3 = e;}} link="https://redux.js.org/docs/introduction/" redir={require('./assets/redux.png')} styles={{maxHeight:'100px', maxWidth:'100%'}}/>
            <LogoWrapper ref={e => {this.x4 = e;}} link="https://angular.io/" redir={require('./assets/angular.svg')} styles={{maxHeight:'70px', maxWidth:'100%'}}/>
            <LogoWrapper ref={e => {this.x4a = e;}} link="https://polymer-project.org/" redir={require('./assets/polymer.png')} styles={{maxHeight:'70px', maxWidth:'100%'}}/>
            <LogoWrapper ref={e => {this.x4b = e;}} redir={require('./assets/html.png')} styles={{maxHeight:'70px', maxWidth:'100%'}}/>
            <LogoWrapper ref={e => {this.x5 = e;}} link="https://jquery.com/" redir={require('./assets/jquery.png')} styles={{maxHeight:'70px', maxWidth:'100%'}}/>
            <LogoWrapper ref={e => {this.x6 = e;}} link="https://greensock.com/" redir={require('./assets/greensock.png')} styles={{maxHeight:'70px', maxWidth:'100%'}}/>
            <LogoWrapper ref={e => {this.x7 = e;}} link="https://expressjs.com/" redir={require('./assets/express.png')} styles={{maxHeight:'50px', maxWidth:'100%'}}/>
            <LogoWrapper ref={e => {this.x8 = e;}} link="koajs.com/" redir={require('./assets/koa.png')} styles={{maxHeight:'80px', maxWidth:'100%'}}/>
            <LogoWrapper ref={e => {this.x9 = e;}} link="https://socket.io/" redir={require('./assets/socket-io.svg')} styles={{maxHeight:'70px', maxWidth:'100%'}}/>
            <LogoWrapper ref={e => {this.x10 = e;}} link="https://www.mongodb.com/" redir={require('./assets/mongo.png')} styles={{maxHeight:'70px', maxWidth:'100%'}}/>
            <LogoWrapper ref={e => {this.x11 = e;}} link="https://redis.io/" redir={require('./assets/redis.png')} styles={{maxHeight:'70px', maxWidth:'100%'}}/>
            <LogoWrapper ref={e => {this.x12 = e;}} link="https://www.mysql.com/" redir={require('./assets/mysql.png')} styles={{maxHeight:'70px', maxWidth:'100%'}}/>
            <LogoWrapper ref={e => {this.x12a1 = e;}} link="https://www.sqlite.org/" redir={require('./assets/sqlite.png')} styles={{maxHeight:'70px', maxWidth:'100%'}}/>
            <LogoWrapper ref={e => {this.x12a = e;}} link="https://www.postgresql.org/" redir={require('./assets/postgres.png')} styles={{maxHeight:'80px', maxWidth:'100%'}}/>
            <LogoWrapper ref={e => {this.x12b = e;}} link="https://aws.amazon.com/" redir={require('./assets/aws.png')} styles={{maxHeight:'70px', maxWidth:'100%'}}/>
            <LogoWrapper ref={e => {this.x12c = e;}} link="https://www.heroku.com/" redir={require('./assets/heroku.svg')} styles={{maxHeight:'70px', maxWidth:'100%'}}/>
            <LogoWrapper ref={e => {this.x12d = e;}} link="https://www.hyperledger.org/" redir={require('./assets/hyperledger.png')} styles={{maxHeight:'70px', maxWidth:'100%'}}/>

        </div>
      </div>
    );
  }
}

export class LogoWrapper extends Component {
  render() {
    return (
      <div style={{margin:'30px'}} className="logowrapper">
        <a href={this.props.link}>
          <img src={this.props.redir} style={this.props.styles}/>
        </a>
      </div>
    );
  }
}
