import React, { Component } from 'react';
import './lander.css';
import { TweenMax, Elastic } from 'gsap';
import ReactDOM from 'react-dom';

export class Lander extends Component {

  componentDidMount(){
    this.scrambler(this.z1, 'Charles Boyce');
    setTimeout(() => this.scrambler(this.z2, 'Full Stack Developer'),1400);
    setTimeout(() => {
      this.complexCaller();
    }, 3400);
  }
  scrambler = (target, text) => {
    return TweenMax.to(ReactDOM.findDOMNode(target), 2, {scrambleText:{text:text, chars:"10", revealDelay:0.2, speed:0.1}});
  }

  picAnim = () => {
    TweenMax.to(ReactDOM.findDOMNode(this.z), 0.5, {css:{opacity:0}});
  }

  complexCaller = () => {
    this.picAnim();
    this.props.cb();
  }
  render() {
    return (
      <div className="lander-wrapper" ref={e => {this.z = e}}>
        <p className="lander-title" ref={e => {this.z1 = e}}></p>
        <p className="lander-subtitle" ref={e => {this.z2 = e}}></p>
      </div>
    );
  }
}
