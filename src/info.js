import React, { Component } from 'react';
import './info.css';
import { TweenMax, Elastic } from 'gsap';
import ReactDOM from 'react-dom';

const information = {
  first : {
    name : 'Charles Boyce',
    age: 24,
    based: 'London, Barcelona'
  },
  second: {
    two: 'On a personal level, I am a scientist, musician, hobbyist photographer, movie nerd, traveller, and fitness enthusiast.',
  },
}

export class Information extends Component {
  picAnim = () => {
    TweenMax.to(ReactDOM.findDOMNode(this.piccy), 1.5, {css:{opacity:1}});    
  }
  componentDidMount(){
    setTimeout(() => {
      this.picAnim()
    }, 2000);
  }
  render() {
    return (
      <div style={{display:'flex', alignItems:'center'}} className="info-parent">
        <div className="info-wrapper">
          <div className="first-parent-wrapper" style={{display:'flex', alignItems:'center', justifyContent:'flex-start'}}>
            <div className="first-wrapper">
              <p>{information.first.name}</p>
              <p>{information.first.age}</p>
              <p>Locations: {information.first.based}</p>
            </div>
            <img ref={e => {this.piccy = e;}} className="me" src={require('./assets/me.jpg')} style={{height:'200px', paddingLeft:'5%'}}/>
          </div>
          <div className='second-info-wrapper'>
              <p className="Robo">I am a full stack software engineer focusing on JavaScript with experience in a wide range of frameworks, both front and back end. I've always had a passion for all things technical, and in my work I utilize the most progressive cutting edge technologies so to always produce the slickest product possible.</p>
              <p className="Robo">From a tech standpoint, if I beleive in the product, I will do absolutely everything in my power to make the dream a reality. I take immense pride in my work, and not only am I driven, but developing apps is one of the funnest things in the world to me. Creating products that do awesome things in amazing ways is my passion, so don't hesitate to contact me with ideas and opportunities.</p>
          </div>
          <div className='second-wrapper'>
            <div className='second-info-wrapper'>
              <p className="Robo">{information.second.one}</p>
              <p className="Robo">{information.second.two}</p>
            </div>
          </div>
        </div>

        <div className="info-wrapper" style={{backgroundColor:"rgba(255, 255, 255, 0.0)", justifyContent:'space-between'}}>
          <p style={{textAlign:'center', color:"#DB504A"}}>Favourite Technologies:</p>
          <div style={{display:'flex', justifyContent:'space-around', alignItems: 'center'}}>
            <p>Native mobile apps have always been a favourite. Who doesn't love the feeling of seeing your product in your hand?</p>
            <img src={require('./assets/technology-1.svg')} style={{paddingLeft:'5%'}}/>
          </div>
          <div style={{display:'flex', justifyContent:'space-around', alignItems: 'center'}}>
            <img src={require('./assets/networking.svg')} style={{paddingRight:'5%'}} className="block-icon"/>
            <p>Blockchains aren't just a buzzword, they are awesome to work with. Especially the Hyperledger community.</p>
          </div>
          <div style={{display:'flex', justifyContent:'space-around', alignItems: 'center'}}>
            <p>The wide range of features and frameworks available makes JavaScript my go-to language.</p>
            <img src={require('./assets/programming.svg')} style={{paddingLeft:'5%'}}/>
          </div>
        </div>
      </div>
    );
  }
}
