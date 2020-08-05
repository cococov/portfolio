import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
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
 * A custom component (Title)
 * @param {Object} props
 * @param {String} props.rel
 * @param {String} props.href
 * @param {String} props.children
 * @param {String} props.className
 */
export const Link = ({ children, href, className }) => {
  return (
    <a
      rel="noopener noreferrer"
      href={href}
      target="_blank"
      className={className}
    >
      {children}
    </a>
  );
};

Link.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

/**
 * Code custom component (Title)
 * @param {Object} props
 * @param {String} props.children
 * @param {String} props.className
 */
export const Code = ({ children, className }) => {
  return <code className={className}>{children}</code>;
};

Code.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string.isRequired,
};

/**
 * H1 custom component (Title)
 * @param {Object} props
 * @param {String} props.children
 * @param {String} props.className
 */
export const Title = ({ children, className }) => {
  return <h1 className={className}>{children}</h1>;
};

Title.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string.isRequired,
};

/**
 * H2 custom component (SubTitle)
 * @param {Object} props
 * @param {String} props.children
 * @param {String} props.className
 */
export const SubTitle = ({ children, className }) => {
  return <h2 className={className}>{children}</h2>;
};

SubTitle.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string.isRequired,
};

/**
 * H3 custom component
 * @param {Object} props
 * @param {String} props.children
 * @param {String} props.className
 */
export const H3 = ({ children, className }) => {
  return <h3 className={className}>{children}</h3>;
};

H3.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string.isRequired,
};

/**
 * HR custom component
 * @param {Object} props
 * @param {String} props.className
 */
export const Hr = ({ className }) => {
  return <hr className={className} />;
};

Hr.propTypes = {
  className: PropTypes.string.isRequired,
};

/**
 * P custom component (Paraph)
 * @param {Object} props
 * @param {String} props.children
 * @param {String} props.className
 */
export const Paraph = ({ children, className }) => {
  return <p className={className}>{children}</p>;
};

Paraph.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string.isRequired,
};

/**
 * UL custom component
 * @param {Object} props
 * @param {String} props.children
 * @param {String} props.className
 */
export const Ul = ({ children, className }) => {
  return <ul className={className}>{children}</ul>;
};

Ul.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string.isRequired,
};

/**
 * PRE custom component
 * @param {Object} props
 * @param {HTMLElement} props.children
 * @param {String} props.className
 */
export const Pre = ({ children, className }) => {
  return <pre className={className}>{children}</pre>;
};

Pre.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string.isRequired,
};

/**
 * IMG custom component
 * @param {Object} props
 * @param {String} props.src
 * @param {String} props.className
 * @param {String} props.title
 * @param {String} props.classNameProfile
 */
export const Img = ({
  src,
  className,
  title,
  alt,
  classNameRight,
  classNameContent,
  classNamePhoneLandscape,
}) => {
  return (
    <img
      src={src}
      alt={alt}
      className={clsx(
        className,
        title === 'content' ? classNameContent : '',
        title === 'right' ? classNameRight : '',
        title === 'content-phone-landscape' ? classNamePhoneLandscape : ''
      )}
    />
  );
};

Img.propTypes = {
  src: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  classNameRight: PropTypes.string.isRequired,
  classNameContent: PropTypes.string.isRequired,
  classNamePhoneLandscape: PropTypes.string.isRequired,
};

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
            {thNames.map((title) => (
              <TableCell key={title} className={tableTitle}>
                {title}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={`${row}`} className={tableRow}>
              {Object.keys(row).map((key) => (
                <TableCell scope="row" key={`${key}`} className={tableData}>
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

CustomTable.propTypes = {
  children: PropTypes.node.isRequired,
  table: PropTypes.string.isRequired,
  tableContainer: PropTypes.string.isRequired,
  tableTitleBar: PropTypes.string.isRequired,
  tableTitle: PropTypes.string.isRequired,
  tableRow: PropTypes.string.isRequired,
  tableData: PropTypes.string.isRequired,
};

/**
 * HTML elements override method
 * @param {Object} classes: withStyles Classes
 */
export const override = (classes) => {
  return {
    overrides: {
      a: {
        component: Link,
        props: {
          className: classes.a,
        },
      },
      code: {
        component: Code,
        props: {
          className: classes.code,
        },
      },
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
          classNameRight: classes.imgRight,
          classNameContent: classes.imgContent,
          classNamePhoneLandscape: classes.classNamePhoneLandscape,
        },
      },
      table: {
        component: CustomTable,
        props: {
          table: classes.table,
          tableContainer: classes.tableContainer,
          tableTitleBar: classes.tableTitleBar,
          tableTitle: classes.tableTitle,
          tableRow: classes.tableRow,
          tableData: classes.tableData,
        },
      },
    },
  };
};
