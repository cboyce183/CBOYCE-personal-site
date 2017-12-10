import React, { Component } from 'react';
import './projects.css';

const information = {
  geodinate: {
    name: "Geo-dinate (alpha)",
    body: "A personal venture, this is an app to display locations of groups as friends as a meetup tool. This is further abstracted to plugins that organisations can use to organise meetups when people join a facebook group. The project is nearing beta stage with selected public testers, but right now is in internal testing. Integrates social media APIs for easy & quick user management.",
    stack: "React Native, Expo, Express, socket.io, mongoDB",
    link: null,
    images: [require('./assets/geo/g1.png'), require("./assets/geo/Screen Shot 2017-11-23 at 20.55.46.png"), require("./assets/geo/Screen Shot 2017-11-23 at 20.55.58.png")],
  },
  decentralized: {
    name: "decentralized.cloud",
    body: "I had the pleasure of making major contributions to this innovative project started by Alex Sicart. The decentralized cloud is a lightweight file sharing system utilizing IPFS blockchain technology to store and share files on a virtual decentralized cloud data store. The information is distributed across the blockchain and can be accessed by anyone - anywhere. It has received significant attention from the Spanish media, as well as reaching number one on tech sites like Hacker News.",
    stack: "Angular, greensock, WebTorrent, IPFS, Koa",
    link: "https://decentralized.cloud/",
    images: [require("./assets/DCLOUD2.png"),require("./assets/DCLOUD.png"),require("./assets/DCLOUD3.png")],
  },
  uncode: {
    name: "uncode.js",
    body: "The result of the Facebook developer circle Barcelona 48hr hackathon, this cool little project netted our team a place on the podium. It uses translates JavaScript into readable English, Spanish, or Italian (with correct grammar). This is done with a complex monolith of an algorithm parsing the typed text, identifying things like functions, arguments, operators and classes before restructuring in human language in a custom map/hashtable, and reprocessing back.",
    body2: " The aim was to provide a cool tool that new coders could use to understand examples with, and experiment with code themselves in real time. No submit button, its all processed live as you type, and restructured accordingly. It has a bunch of cool other features too, check it out!",
    stack: "React, socket.io, Express, mongoose",
    link: "uncodejs.herokuapp.com",
    images: [require("./assets/UNCODE.png"),require("./assets/uncode2.png"),require("./assets/uncode3.png")],
  },
  zendama: {
    name: "Zendama",
    body: "A platform for promoting a healthy work environment, a few friends and I built this as our debut into web app development. I had a mixed roll, primarily responsible for building and deploying the Hyperledger blockchain on which the systems currency exchange runs on, while also providing back end support, and later on in the project I took a front end role, producing many of the platforms animations and graphics.",
    stack: "React, Redux, Skeleton CSS, Greensock GSAP, Koa, MongoDB, AWS, Hyperledger",
    images: [require("./assets/zendama1.png"),require("./assets/zendama.png"),require("./assets/zendama2.png")],
  },
}

export class Projects extends Component {
  render() {
    return (
      <div className="main-wrapper background">
        <Project info={information.geodinate} />
        <Project info={information.decentralized}/>
        <Project info={information.uncode}/>
        <Project info={information.zendama}/>
      </div>
    );
  }
}

export class Project extends Component {
  bodyrender = () => {
    if (this.props.info.body2) return this.props.info.body2;
  }
  render() {
    return (
      <div className="proj-wrapper">
        <div className="left-wrapper primary">
          <p className="plw-1" style={{fontSize:18, padding:'15px', margin:0}}>{this.props.info.name}</p>
          <p className="plw-2" style={{textAlign:'left', padding:'10px',margin:0}}>{this.props.info.body} {this.bodyrender()}</p>
          <a className="plw-3" style={{fontSize:15, margin:0, paddingBottom:'15px'}} href={this.props.info.link}>{this.props.info.link}</a>
          <p className="plw-4" style={{margin:0, padding:'15px'}}>{this.props.info.stack}</p>
        </div>
        <div className="right-wrapper">
          <ProjectViewer sources={this.props.info.images}/>
        </div>
      </div>
    );
  }
}

export class ProjectViewer extends Component {
  constructor(){
    super();
    this.state = {
      image: 0,
      popped: false
    }
  }

  handleAction = (action) => {
    switch (action) {
      case "left":
        return this.state.image === 0 ?
          this.setState({ image:2 })
          :
          this.setState({ image:this.state.image-1 });
      case "right":      
        return this.state.image === 2 ?
          this.setState({ image:0 })
          :
          this.setState({ image:this.state.image+1 });
      default:
        return;
    }
  }

  popGetter = (source) => {
    if (this.state.popped) return (<Popup src={source} unpop={this.popSetter}/>);
  }

  popSetter = () => {
    this.setState({ popped:!this.state.popped });
  }

  render() {
    const src = this.props.sources[this.state.image];
    return (
      <div style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
        <img className="viewer-img" src={src} style={{maxHeight:'50vh', maxWidth:'48vw'}} onClick={this.popSetter}/>
        {this.popGetter(src)}
        <Picker fn={this.handleAction}/>
      </div>
    );
  }
}

export class Picker extends Component {
  render() {
    return (
      <div className="picker-wrapper">
        <img className="picker-img" src={require("./assets/left-chevron.svg")} onClick={this.props.fn.bind(this, "left")}/>
        <img className="picker-img" src={require("./assets/right-chevron.svg")} onClick={this.props.fn.bind(this, "right")}/>
      </div>
    );
  }
}

export class Popup extends Component {
  render() {
    return (
      <div className="popup-wrapper" onClick={this.props.unpop}>
        <img className="popup-img" src={this.props.src}/>
      </div>
    );
  }
}