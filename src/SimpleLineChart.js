import React from 'react';
import PropTypes from 'prop-types';
import ResponsiveContainer from 'recharts/lib/component/ResponsiveContainer';
import AreaChart from 'recharts/lib/chart/AreaChart';
import Area from 'recharts/lib/cartesian/Area';
import XAxis from 'recharts/lib/cartesian/XAxis';
import YAxis from 'recharts/lib/cartesian/YAxis';
import Label from 'recharts/lib/component/Label';
import CartesianGrid from 'recharts/lib/cartesian/CartesianGrid';
import ReferenceDot from 'recharts/lib/cartesian/ReferenceDot';
import Tooltip from 'recharts/lib/component/Tooltip';
import Legend from 'recharts/lib/component/Legend';
import Card from './card';

const data = [
  {date: '01/09/17', "Commits SMA(30)": 0, Total: 0},
  {date: '01/10/17', "Commits SMA(30)": 22, Total: 22},
  {date: '01/11/17', "Commits SMA(30)": 101, Total: (101+22)},
  {date: '01/12/17', "Commits SMA(30)": 244, Total: (244+101+22)},
  {date: '01/01/18', "Commits SMA(30)": 19, Total: (19+244+101+22)},
  {date: '01/02/18', "Commits SMA(30)": 45, Total: (45+19+244+101+22)},
  {date: '01/03/18', "Commits SMA(30)": 53, Total: (53+45+19+22+101+244)},
  {date: '01/04/18', "Commits SMA(30)": 71, Total: (71+53+45+19+244+101+22)},
  {date: '01/05/18', "Commits SMA(30)": 109, Total: (109+71+53+45+19+244+101+22)},
  {date: '01/06/18', "Commits SMA(30)": 98, Total: (98+109+71+53+45+19+244+101+22)},
  {date: '01/07/18', "Commits SMA(30)": 163, Total: (163+98+109+71+53+45+19+244+101+22)},
  {date: '01/08/18', "Commits SMA(30)": 223, Total: (223+163+98+109+71+53+45+19+244+101+22)},
  {date: '01/09/18', "Commits SMA(30)": 217, Total: (217+223+163+98+109+71+53+45+19+244+101+22)},
  {date: '01/10/18', "Commits SMA(30)": 198, Total: (198+217+223+163+98+109+71+53+45+19+244+101+22)}
];

function SimpleLineChart() {
  return (
    // 99% per https://github.com/recharts/recharts/issues/172
      <ResponsiveContainer minWidth="700px" width="99%" height={'80%'}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorSMA30" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
            </linearGradient>
            <linearGradient id="colorSMA90" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#f44242" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#f44242" stopOpacity={0}/>
            </linearGradient>
            <linearGradient id="colorNet" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#4171f4" stopOpacity={0}/>
              <stop offset="95%" stopColor="#4171f4" stopOpacity={0}/>
            </linearGradient>
            <linearGradient id="colorPoint" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="orange" stopOpacity={1}/>
              <stop offset="95%" stopColor="orange" stopOpacity={0.6}/>
            </linearGradient>
          </defs>
          <XAxis dataKey="date" ></XAxis>
          <YAxis yAxisId="left"><Label value="Commits" angle="-90" position="insideLeft"/></YAxis>
          <YAxis yAxisId="right" orientation="right"><Label value="Total" angle="90" position="insideRight"/></YAxis>
          <CartesianGrid vertical={false} strokeDasharray="3 3" />
          <Tooltip content={<CustomTooltip/>}/>
          <Legend />
          <Area yAxisId="left" type="monotone" dataKey="Commits SMA(30)" stroke="#82ca9d" fill="url(#colorSMA30)" fillOpacity={0.4}/>
          <Area yAxisId="right" type="monotone" dataKey="Total" stroke="#f44242" fill="url(#colorSMA90)" fillOpacity={0.4}/>
          {/* <Area yAxisId="left" type="monotone" dataKey="Difference" stroke="#4171f4" fill="url(#colorNet)" fillOpacity={0.4} strokeDasharray="5 5" opacity={0.6}/> */}
          <ReferenceDot onClick={() => {window.open('https://notesense.herokuapp.com/')}} r={8} yAxisId="left" y={22} x={'01/10/17'} fill="orange" stroke="white" isFront={true}/>
          <ReferenceDot onClick={() => {window.open('https://filenation.io/')}} r={8} yAxisId="left" y={101} x={'01/11/17'} fill="orange" stroke="white" isFront={true}/>
          <ReferenceDot onClick={() => {window.open('https://uncodejs.herokuapp.com/')}} r={8} yAxisId="left" y={244} x={'01/12/17'} fill="orange" stroke="white" isFront={true}/>
        </AreaChart>
    </ResponsiveContainer>
  );
}

class CustomTooltip extends React.Component {

  getIntroOfPage(label) {
    if (label === '01/10/17') {
      return "YouNoteIt";
    } else if (label === '01/11/17') {
      return "FileNation";
    } else if (label === '01/12/17') {
      return "uncode.js";
    }
  };

  getBodyOfPage(label) {
    if (label === '01/10/17') {
      return "A study tool and YouTube video annotation app built using React, Meteor.js, Chrome browser/extension tech.";
    } else if (label === '01/11/17') {
      return "Store/send files to anyone via the IPFS de-centralized cloud file system. Major front end contributions using Angular 5, with Koa on the back.";
    } else if (label === '01/12/17') {
      return "The 2nd place winner of the global Facebook Community hackathon, this app translates JavaScript into English/Spanish/Italian instructions. Built with React, Express, and MongoDB.";
    }
  };

  getImgOfPage(label) {
    if (label === '01/10/17') {
      return "/assets/younoteit.png";
    } else if (label === '01/11/17') {
      return "/assets/DCLOUD.png";
    } else if (label === '01/12/17') {
      return "/assets/UNCODE.png";
    }
  };

  getTimeOfPage(label) {
    if (label === '01/10/17') {
      return "10/2017";
    } else if (label === '01/11/17') {
      return "11/2017";
    } else if (label === '01/12/17') {
      return "12/2017";
    }
  };

  render() {
    const { active, label, payload } = this.props;
    const show = !!(label === '01/10/17' || label === '01/11/17' || label === '01/12/17');
    if (show) {
      return (
        <div>
          <Card t={this.getTimeOfPage(label)} src={this.getImgOfPage(label)} title={this.getIntroOfPage(label)} body={this.getBodyOfPage(label)}/>
        </div>
      );
    }

    return null;
  }
};
export default SimpleLineChart;
