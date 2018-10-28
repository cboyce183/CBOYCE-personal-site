import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = {
  root: {
    width: '100%',
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
};

let id = 0;
function createData(a, b, c, d, e) {
  id += 1;
  return { id, a, b, c, d, e };
}

const data = [
  createData('JavaScript/Node.js', 'React, React Native, Angular (>2)', 'Express, Koa', 'ES6+, Flux, Redux, Progressive Web Apps, Browser tech', '-'),
  createData('C++', '-', '-', 'Modelling, data-analysis', 'Math/scientific experience'),
  createData('Python', '-', '-', 'Data-analysis', 'Math/scientific experience'),
  createData('Other Languages/Things', 'HTML/CSS (+ various post-processors)', 'Java (aquainted)', 'Golang (blockchain), MQL4 + MetaTrader (quant)', '-'),
  createData('Database', 'IndexedDB, LocalStorage', 'MySQL, MongoDB/Mongoose, Redis', '-', '-'),
  createData('Testing', 'Mocha, Chai, Jest', 'Mocha, Chai', 'CircleCI', 'TDD, BDD'),
  createData('Ops', '-', '-', 'Docker, Webpack, Heroku', '-'),
  createData('Tools', '-', '-', 'Zube/Jira etc... all the standard developer business tools', '-'),
];

function SimpleTable(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Skill</TableCell>
            <TableCell>Front-End</TableCell>
            <TableCell>Back-End</TableCell>
            <TableCell>Misc</TableCell>
            <TableCell>Qualitative</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(n => {
            return (
              <TableRow key={n.id}>
                <TableCell component="th" scope="row">
                  {n.a}
                </TableCell>
                <TableCell>{n.b}</TableCell>
                <TableCell>{n.c}</TableCell>
                <TableCell>{n.d}</TableCell>
                <TableCell>{n.e}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTable);
