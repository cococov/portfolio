import { Link } from './Link';
import { Code } from './Code';
import { Title } from './H1';
import { SubTitle } from './H2';
import { H3 } from './H3';
import { Hr } from './Hr';
import { Paraph } from './P';
import { Ul } from './Ul';
import { Pre } from './Pre';
import { Img } from './Img';
import { CustomTable } from './Table';

/**
 * HTML elements override method
 * @param {Object} classes: withStyles Classes
 */
export const override = (classes, isMobil, isBigMobil) => {
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
          isMobil,
          isBigMobil,
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
          isMobil,
          isBigMobil,
        },
      },
    },
  };
};
