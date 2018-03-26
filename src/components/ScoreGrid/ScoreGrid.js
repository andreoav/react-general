import React, { Component, Fragment } from 'react';

import TableGrid from './TableGrid/TableGrid';
import TableCell from './TableCell/TableCell';

const TableHeading = TableCell.withComponent('th');

const scores = [
  { type: '1', basePoints: 1 },
  { type: '2', basePoints: 2 },
  { type: '3', basePoints: 3 },
  { type: '4', basePoints: 4 },
  { type: '5', basePoints: 5 },
  { type: '6', basePoints: 6 },
  { type: 'Sequência', basePoints: 20 },
  { type: 'Fula', basePoints: 30 },
  { type: 'Poker', basePoints: 40 },
  { type: 'General', basePoints: 50 },
];

export default class ScoreGrid extends Component {
  tableHeader = () => {
    return (
      <thead>
        <tr>
          <TableHeading />
          {scores.map(score => <TableHeading>{score.type}</TableHeading>)}
          <TableHeading>Score</TableHeading>
        </tr>
      </thead>
    );
  };

  tableBody = () => {
    return this.props.players.map(player => <tbody>{this.tableRow(player)}</tbody>);
  };

  tableRow = player => {
    return (
      <tr>
        <TableCell>{player.name}</TableCell>
        {scores.map(s => {
          return (
            <React.Fragment>
              <TableCell>&nbsp;</TableCell>
            </React.Fragment>
          );
        })}
        <TableCell>{player.score}</TableCell>
      </tr>
    );
  };

  render() {
    return (
      <TableGrid>
        {this.tableHeader()}
        {this.tableBody()}
      </TableGrid>
    );
  }
}
