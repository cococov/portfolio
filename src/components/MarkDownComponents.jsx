import React from 'react';
import clsx from 'clsx';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from '@material-ui/core';

export const Title = ({ children, className }) => {
  return (
    <h1
      className={className}
    >
      {children}
    </h1>
  );
};

export const SubTitle = ({ children, className }) => {
  return (
    <h2
      className={className}
    >
      {children}
    </h2>
  );
};

export const H3 = ({ children, className }) => {
  return (
    <h3
      className={className}
    >
      {children}
    </h3>
  );
};

export const Hr = ({ className }) => {
  return (
    <hr
      className={className}
    />
  );
};

export const Paraph = ({ children, className }) => {
  return (
    <p
      className={className}
    >
      {children}
    </p>
  );
};

export const Ul = ({ children, className }) => {
  return (
    <ul
      className={className}
    >
      {children}
    </ul>
  );
};

export const Pre = ({ children, className }) => {
  return (
    <pre
      className={className}
    >
      {children}
    </pre>
  );
};

export const Img = ({ src, className, title, classNameProfile }) => {
  return (
    <img
      src={src}
      alt={title}
      className={clsx((title === 'profile') ? classNameProfile : '', className)}
    />
  );
};

export const CustomTable = ({ children, classes }) => {
  let thead = children[0];
  let tbody = children[1];
  let th = thead.props.children.props.children;
  let tr = tbody.props.children;
  let thNames = [];
  let baseRow = {};
  let rows = [];

  th.map((data, index) => {
    thNames[index] = data.props.children[0];
    baseRow[thNames[index]] = '';
    return true;
  });

  tr.map((data, index) => {
    let td = data.props.children;
    let temporalRow = { ...baseRow };
    Object.keys(baseRow).map((key, index) => (
      temporalRow[key] = td[index].props.children[0]
    ));
    rows[index] = temporalRow;
    return true;
  });

  return (
    <TableContainer
      className={classes.tableContainer}
      component={Paper}
    >
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow className={classes.tableTitleBar}>
            {thNames.map((title) => (
              <TableCell className={classes.tableTitle}>{title}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row[Object.keys(row)[0]]} className={classes.tableRow}>
              {Object.keys(row).map((key, index) => (
                <TableCell scope="row" key={`${key}-${index}`} className={classes.tableData}>
                  {row[key]}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export const override = (classes) => {
  return {
    overrides: {
      h1: {
        component: Title,
        props: {
          className: classes.h1,
        },
      },
      h2: {
        component: SubTitle,
        props: {
          className: classes.h2,
        },
      },
      h3: {
        component: H3,
        props: {
          className: classes.h3,
        },
      },
      hr: {
        component: Hr,
        props: {
          className: classes.hr,
        },
      },
      p: {
        component: Paraph,
        props: {
          className: classes.p,
        },
      },
      ul: {
        component: Ul,
        props: {
          className: classes.ul,
        },
      },
      pre: {
        component: Pre,
        props: {
          className: classes.pre,
        },
      },
      img: {
        component: Img,
        props: {
          className: classes.img,
          classNameProfile: classes.imgProfile,
        },
      },
      table: {
        component: CustomTable,
        props: {
          classes: classes,
        }
      }
    },
  }
};