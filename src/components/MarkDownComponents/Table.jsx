import React from 'react';
import PropTypes from 'prop-types';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@material-ui/core';

/**
 * Table custom component
 * @param {Object} props
 * @param {Array} props.children
 * @param {HTMLTableElement} props.children[0]
 * @param {HTMLTableElement} props.children[1]
 * @param {Object} props.classes
 */
export const CustomTable = ({
  children,
  table,
  tableContainer,
  tableTitleBar,
  tableTitle,
  tableRow,
  tableData,
  isMobil,
  isBigMobil,
}) => {
  const thead = children[0];
  const tbody = children[1];
  const th = thead.props.children.props.children;
  const tr = tbody.props.children;
  const thNames = [];
  const baseRow = {};
  const rows = [];

  th.map((data, index) => {
    thNames[index] = [...data.props.children[0]];
    baseRow[thNames[index]] = '';
    return true;
  });

  tr.map((data, index) => {
    const td = data.props.children;
    const temporalRow = { ...baseRow };
    Object.keys(baseRow).forEach((key, subIndex) => {
      temporalRow[key] = [...td[subIndex].props.children[0]];
    });
    rows[index] = temporalRow;
    return true;
  });

  return (
    <TableContainer className={tableContainer} component={Paper}>
      <Table className={table} aria-label="simple table">
        <TableHead>
          <TableRow className={tableTitleBar}>
            {thNames.map((title, index) => {
              if (isMobil && !isBigMobil && index > 1) return null;
              return (
                <TableCell key={title} className={tableTitle}>
                  {title}
                </TableCell>
              );
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={`${row}`} className={tableRow}>
              {Object.keys(row).map((key, index) => {
                if (isMobil && !isBigMobil && index > 1) return null;
                return (
                  <TableCell scope="row" key={`${key}`} className={tableData}>
                    {row[key]}
                  </TableCell>
                );
              })}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

CustomTable.propTypes = {
  children: PropTypes.node.isRequired,
  table: PropTypes.string.isRequired,
  tableContainer: PropTypes.string.isRequired,
  tableTitleBar: PropTypes.string.isRequired,
  tableTitle: PropTypes.string.isRequired,
  tableRow: PropTypes.string.isRequired,
  tableData: PropTypes.string.isRequired,
  isMobil: PropTypes.bool,
  isBigMobil: PropTypes.bool,
};

CustomTable.defaultProps = {
  isMobil: false,
  isBigMobil: false,
};
