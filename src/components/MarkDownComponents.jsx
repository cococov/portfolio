import React from "react";
import clsx from "clsx";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";

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

/**
 * Code custom component (Title)
 * @param {Object} props
 * @param {String} props.children
 * @param {String} props.className
 */
export const Code = ({ children, className }) => {
  return <code className={className}>{children}</code>;
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

/**
 * H2 custom component (SubTitle)
 * @param {Object} props
 * @param {String} props.children
 * @param {String} props.className
 */
export const SubTitle = ({ children, className }) => {
  return <h2 className={className}>{children}</h2>;
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

/**
 * HR custom component
 * @param {Object} props
 * @param {String} props.className
 */
export const Hr = ({ className }) => {
  return <hr className={className} />;
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

/**
 * UL custom component
 * @param {Object} props
 * @param {String} props.children
 * @param {String} props.className
 */
export const Ul = ({ children, className }) => {
  return <ul className={className}>{children}</ul>;
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
        title === "content" ? classNameContent : "",
        title === "right" ? classNameRight : "",
        title === "content-phone-landscape" ? classNamePhoneLandscape : ""
      )}
    />
  );
};

/**
 * Table custom component
 * @param {Object} props
 * @param {Array} props.children
 * @param {HTMLTableElement} props.children[0]
 * @param {HTMLTableElement} props.children[1]
 * @param {Object} props.classes
 */
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
    baseRow[thNames[index]] = "";
    return true;
  });

  tr.map((data, index) => {
    let td = data.props.children;
    let temporalRow = { ...baseRow };
    Object.keys(baseRow).map(
      (key, index) => (temporalRow[key] = td[index].props.children[0])
    );
    rows[index] = temporalRow;
    return true;
  });

  return (
    <TableContainer className={classes.tableContainer} component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow className={classes.tableTitleBar}>
            {thNames.map((title, index) => (
              <TableCell key={index} className={classes.tableTitle}>
                {title}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={index} className={classes.tableRow}>
              {Object.keys(row).map((key, index) => (
                <TableCell
                  scope="row"
                  key={`${key}-${index}`}
                  className={classes.tableData}
                >
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
          classes: classes,
        },
      },
    },
  };
};
