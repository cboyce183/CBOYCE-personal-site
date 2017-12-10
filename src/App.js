import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import { Tech } from './tech';
import { Projects } from './projects';
import { Information } from './info';
import { Lander } from './lander';
import { TweenMax, Elastic } from 'gsap';

import './ScrambleTextPlugin';
import './SplitText';


class App extends Component {
  constructor(){
    super();
    this.state = {
      intro:true,
      page: 'intro',
      isHide: false,
      landed: false,
    }
    this.hideBar = this.hideBar.bind(this)    
  }
  hideBar(){
    let {isHide} = this.state
    window.scrollY > this.prev?
    !isHide && this.setState({isHide:true})
    :
    isHide && this.setState({isHide:false})

    this.prev = window.scrollY;
  }

  scrambler = (target, text) => {
    return TweenMax.to(ReactDOM.findDOMNode(target), 1.5, {scrambleText:{text:text, chars:"10", revealDelay:0.2, speed:0.3}});
  }

  componentDidMount(){
    window.addEventListener('scroll',this.hideBar);    
    this.scrambler(this.title, 'Charles Boyce');
    setTimeout(() => this.scrambler(this.subtitle, 'Full Stack Developer'),1400);
  }
  choosePage = (page) => {
    this.setState({page:page});
  }
  renderPage = () => {
    if (this.state.page === 'intro') return (<Intro/>);
    if (this.state.page === 'tech') return (<Tech/>);
    if (this.state.page === 'projects') return (<Projects/>);    
  }
  checkIntro = () => {
    this.setState({ intro:!this.state.intro })
  }
  land = () => {
    setTimeout(() => {
      this.setState({ landed:true });      
    }, 1000);
  }
  landed = () => {
    return !this.state.landed && (<Lander cb={this.land}/>);
  }
  render() {
    let classHide=this.state.isHide?"hide":"";    
    return (
      <div>
      {this.landed()}
      <header className="App-header primary">
        <div style={{display:'flex',alignItems:'center'}}>
          <h1 ref={e => {this.title = e;}}></h1>
          <p style={{opacity:0}}>spacer</p>
          <p ref={e => {this.subtitle = e;}} style={{paddingTop:'3px'}}></p>
        </div>
        <div className="button-outer" ref={e => {this.button1 = e;}}>
          <a style={{textDecoration:'none'}} href="https://www.linkedin.com/in/charles-boyce-developer/" className="button-text">Contact me</a>
        </div>
      </header>

      <div className="App">

        <div className={"button-bar " +classHide}>
          <div style={{maxWidth:'100px', cursor:'pointer'}} onClick={this.choosePage.bind(this, 'intro')}>
            <p className="button-text">About Me</p>
          </div>

          <div style={{maxWidth:'100px', cursor:'pointer'}} onClick={this.choosePage.bind(this, 'tech')}>
            <p className="button-text">Frameworks</p>
          </div>

          <div style={{maxWidth:'100px', cursor:'pointer'}} onClick={this.choosePage.bind(this, 'projects')}>
            <p className="button-text">Experience</p>
          </div>
        </div>

        <div className="App-intro">
          {this.renderPage()}
        </div>
      </div>
      </div>
    );
  }
}

class Intro extends Component {
  lineQueue = (target, delay) => {
    TweenMax.to(ReactDOM.findDOMNode(this.intro3), 1, {opacity:1, delay:0.3, force3D:true}, 0.2);
  }
  componentDidMount(){
    this.lineQueue(this.intro, 0);
  }
  render(){
    return (
      <div ref={e => {this.intro3 = e;}} style={{opacity:0}}>
      <Information/>
      </div>
    )
  }
}
export default App;
