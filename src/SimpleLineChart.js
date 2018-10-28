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

const data = [
  {date: '01/09/17', Commits_SMA30: 0, Commits_SMA90: 0, Difference: 0},
  {date: '01/10/17', Commits_SMA30: 22, Commits_SMA90: (22/3), Difference: 22-(22/3)},
  {date: '01/11/17', Commits_SMA30: 101, Commits_SMA90: (101+22)/3, Difference: 101-((101+22)/3)},
  {date: '01/12/17', Commits_SMA30: 244, Commits_SMA90: (244+101+22)/3, Difference: 244-((244+101+22)/3)},
  {date: '01/01/18', Commits_SMA30: 19, Commits_SMA90: (19+244+101)/3, Difference: 19-((19+244+101)/3)},
  {date: '01/02/18', Commits_SMA30: 45, Commits_SMA90: (45+19+244)/3, Difference: 45-((45+19+244)/3)},
  {date: '01/03/18', Commits_SMA30: 53, Commits_SMA90: (53+45+19)/3, Difference: 53-((53+45+19)/3)},
  {date: '01/04/18', Commits_SMA30: 71, Commits_SMA90: (71+53+45)/3, Difference: 71-((71+53+45)/3)},
  {date: '01/05/18', Commits_SMA30: 109, Commits_SMA90: (109+71+53)/3, Difference: 109-((109+71+53)/3)},
  {date: '01/06/18', Commits_SMA30: 98, Commits_SMA90: (98+109+71)/3, Difference: 98-((98+109+71)/3)},
  {date: '01/07/18', Commits_SMA30: 163, Commits_SMA90: (163+98+109)/3, Difference: 163-((163+98+109)/3)},
  {date: '01/08/18', Commits_SMA30: 223, Commits_SMA90: (223+163+98)/3, Difference: 223-((223+163+98)/3)},
  {date: '01/09/18', Commits_SMA30: 217, Commits_SMA90: (217+223+163)/3, Difference: 217-((217+223+163)/3)},
  {date: '01/10/18', Commits_SMA30: 198, Commits_SMA90: (198+217+223)/3, Difference: 198-((198+217+223)/3)},
];

function SimpleLineChart() {
  return (
    // 99% per https://github.com/recharts/recharts/issues/172
      <ResponsiveContainer width="99%" height={'80%'}>
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
          <XAxis dataKey="date" ><Label value="Date" position="insideLeft"/></XAxis>
          <YAxis yAxisId="left"><Label value="Commits / unit" angle="-90" position="insideLeft"/></YAxis>
          <YAxis yAxisId="right" orientation="right"><Label value="Difference / unit" angle="90" position="insideRight"/></YAxis>
          <CartesianGrid vertical={false} strokeDasharray="3 3" />
          <Tooltip content={<CustomTooltip/>}/>
          <Legend />
          <Area yAxisId="left" type="monotone" dataKey="Commits_SMA30" stroke="#82ca9d" fill="url(#colorSMA30)" fillOpacity={0.4}/>
          <Area yAxisId="left" type="monotone" dataKey="Commits_SMA90" stroke="#f44242" fill="url(#colorSMA90)" fillOpacity={0.4}/>
          <Area yAxisId="right" type="monotone" dataKey="Difference" stroke="#4171f4" fill="url(#colorNet)" fillOpacity={0.4} strokeDasharray="5 5" opacity={0.6}/>
          <ReferenceDot onClick={() => {window.open('https://notesense.herokuapp.com/')}} r={8} yAxisId="right" y={14.666} x={'01/10/17'} fill="url(#colorPoint)" stroke="black" isFront={true}/>
          <ReferenceDot onClick={() => {window.open('https://filenation.io/')}} r={8} yAxisId="right" y={60} x={'01/11/17'} fill="url(#colorPoint)" stroke="black" isFront={true}/>
          <ReferenceDot onClick={() => {window.open('https://uncodejs.herokuapp.com/')}} r={8} yAxisId="right" y={121.666} x={'01/12/17'} fill="url(#colorPoint)" stroke="black" isFront={true}/>
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
      return "Study tool + YouTube video annotation app using React, Meteor.js, Chrome browser/extension tech.";
    } else if (label === '01/11/17') {
      return "Store/send files to anyone via the IPFS de-centralized cloud file system. Major front end contributions using Angular 5, with Koa on the back.";
    } else if (label === '01/12/17') {
      return "2nd place winner of the global Facebook Community hackathon, this app translates JavaScript into English/Spanish/Italian instructions. Built with React, Express, and MongoDB.";
    }
  };

  render() {
    const { active, label, payload } = this.props;
    const show = !!(label === '01/10/17' || label === '01/11/17' || label === '01/12/17');
    if (show) {
      return (
        <div style={{backgroundColor: 'white', padding: '20px', maxWidth: '300px'}}>
          <h4 className="intro">{this.getIntroOfPage(label)}</h4>
          <p className="desc">{this.getBodyOfPage(label)}</p>
          <p>Click the node on the chart to view.</p>
        </div>
      );
    }

    return null;
  }
};
export default SimpleLineChart;
