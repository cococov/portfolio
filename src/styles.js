/*
  Base colors
*/
export const primaryColor = {
  light: '#333842',
  main: '#282c34',
  dark: '#070709',
  text: '#E8F3F8',
  backgroundColor: '#1d2026'
};

export const secondaryColor = {
  light: '#FDB556',
  main: '#F36B21',
  dark: '#C2551A'
};

/*
  Root Styles
*/
export const rootStyles = {
  outerLoading: {
    position: 'fixed',
    height: '100%',
    width: '100%',
    zIndex: 2200,
    display: 'table',
    backgroundColor: 'rgba(255, 255, 255, .4)'
  },
  innerLoading: {
    display: 'table-cell',
    textAlign: 'center',
    verticalAlign: 'middle'
  },
  snackbar: {
    height: 'auto',
    lineHeight: 3,
    whiteSpace: 'pre-line'
  },
  main: {
    minHeight: '100%',
    minWidth: '100%',
    position: 'absolute',
    backgroundColor: primaryColor.main
  },
  image: {
    height: 200,
    paddingTop: '10px'
  },
};

/*
  Base Styles
*/
export const baseStyles = {
  app: {
    //minHeight: '100%',
    minWidth: '100%',
    position: 'absolute',
    overflow: 'hidden'
  },
  content: {
    padding: 10
  },
};

/*
  Lateral Bar Styles (link icons)
*/
const drawerWidth = 60;
export const lateralBarStyles = theme => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    boxShadow: '1px 1px 1px rgba(0, 0, 0, 0.16), 1px 1px 1px rgba(0, 0, 0, 0.23)',
    backgroundColor: primaryColor.light,
    color: primaryColor.text,
    width: drawerWidth,
  },
  list: {
    width: 250,
    textAlign: 'left'
  },
  listInside: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column'
  },
  listItem: {
    '&:hover': {
      backgroundColor: primaryColor.dark,
    }
  },
  nestedList: {
    width: drawerWidth - 20,
    marginLeft: 20,
  },
  nestedItem: {
    '&:hover': {
      backgroundColor: primaryColor.light,
    }
  },
  lateralIcon: {
    height: 40,
    width: 40,
    marginLeft: -5,
    marginTop: 3,
    padding: 0,
    justifyContent: 'center'
  },
  about: {
    display: 'flex',
    flexGrow: 'inherit',
    justifyContent: 'flex-end',
    textAlign: 'center',
    flexDirection: 'column',
  },
  aboutText: {
    marginLeft: '-0.5rem'
  }
});

/*
  Projects list Styles
*/
const projectDrawerWidth = 250;
export const ProjectsStyles = theme => ({
  resetClasses: {
    padding: 0,
    marginBottom: 0,
    marginTop: 0
  },
  drawer: {
    width: projectDrawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    left: 60,
    boxShadow: '1px 1px 1px rgba(0, 0, 0, 0.16), 1px 1px 1px rgba(0, 0, 0, 0.23)',
    backgroundColor: primaryColor.light,
    color: primaryColor.text,
    width: projectDrawerWidth,
  },
  list: {
    textAlign: "left",
  },
  listItem: {
    '&:hover': {
      backgroundColor: primaryColor.dark,
    }
  },
  explorerTitle: {
    marginLeft: '1rem'
  },
  category: {
    boxShadow: '2px 2px 2px rgba(0, 0, 0, 0.16), 2px 2px 2px rgba(0, 0, 0, 0.23)',
    backgroundColor: primaryColor.light,
    color: primaryColor.text,
    height: 30,
    display: 'flex',
    marginLeft: '1rem',
    flexFlow: 'row wrap',
    alignItems: 'center'
  },
  categoryTitle: {
    marginLeft: '0.5rem'
  },
  nestedList: {
    width: projectDrawerWidth - 20,
    marginLeft: 20,
  },
  nestedItem: {
    '&:hover': {
      backgroundColor: primaryColor.light,
    }
  },
  box: {
    backgroundColor: primaryColor.main,
    color: primaryColor.text,
    paddingLeft: 10,
    flexShrink: 0,
  },
  projects: {
    backgroundColor: primaryColor.main,
    color: primaryColor.text,
    flexShrink: 0,
    height: '87%'
  },
  selectedItem: {
    backgroundColor: primaryColor.light,
  }
});

/**
 * Display Width getter
 * @returns {Number} display Width - Drawer width
 */
export const getWidth = () => {
  if (window.innerWidth < 500)
    return window.innerWidth;
  let width = (window.innerWidth - 310);
  return width;
};

/*
  Header Tabs Styles
*/
export const TabsStyles = theme => ({
  headerContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: 'auto'
  },
  header: {
    flexShrink: 0,
    minHeight: 35,
    backgroundColor: primaryColor.main
  },
  subHeader: {
    flexShrink: 0,
    height: 25,
    backgroundColor: primaryColor.backgroundColor
  },
  toolbar: {
    minHeight: 35,
    paddingLeft: 0
  },
  tabIco: {
    marginRight: '0.5rem',
    fontSize: '1.3333333333em',
    verticalAlign: 'middle'
  },
  rute: {
    margin: '0.25rem',
    marginLeft: '1rem'
  }
});

/*
  Tabs Styles
*/
export const TabStyles = theme => ({
  tab: {
    height: 35,
    padding: 0,
    paddingLeft: 10,
    paddingRight: 20,
    color: primaryColor.text,
    backgroundColor: primaryColor.main,
    cursor: 'pointer'
  },
  tabText: {
    textAlign: 'left',
    verticalAlign: 'middle',
    marginTop: '0.25rem',
    marginLeft: '0.5rem'
  },
  selected: {
    height: 35,
    padding: 0,
    paddingLeft: 10,
    paddingRight: 20,
    color: primaryColor.text,
    backgroundColor: primaryColor.dark,
    cursor: 'pointer'
  }
});

/*
  Loading Style
*/
export const loadingStyle = {
  height: '-webkit-fill-available',
  top: 0
};

export const priorityFormStyles = {
  content: {
    paddingBottom: 100
  }
};

/*
  Container Style (content)
*/
export const ContentStyles = theme => ({
  container: {
    display: 'flex',
    flexDirection: 'row',
    height: '100vh',
    marginLeft: 'auto',
  },
  content: {
    flex: 1,
    color: primaryColor.text,
    overflowY: 'scroll',
    paddingLeft: 20,
    fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
    paddingBottom: 60
  },
  h1: {
    textAlign: 'center',
    paddingTop: 10,
    paddingBottom: 10,
  },
  h2: {
    paddingTop: 5,
    paddingBottom: 5,
  },
  h3: {
    paddingTop: 5,
    paddingBottom: 5,
  },
  hr: {
    backgroundColor: primaryColor.light,
    maxWidth: '50%',
    marginRight: '50%'

  },
  p: {
    fontSize: '1rem',
    padding: 10
  },
  ul: {
    fontSize: '1rem',
    marginLeft: 20
  },
  pre: {
    fontSize: '1rem',
    marginLeft: 20,
    backgroundColor: primaryColor.light,
    padding: 10,
    paddingLeft: 15,
    paddingRight: 15,
    maxWidth: '80%',
    width: 'min-content',
    color: secondaryColor.main
  },
  img: {
    borderRadius: 4,
    maxWidth: 250,
    maxHeigh: 250
  },
  imgRight: {
    float: 'right',
    marginRight: '5%',
    marginLeft: '5%',
    marginTop: 30
  },
  imgContent: {
    maxWidth: '80%'
  },
  tableContainer: {
    width: 'fit-content',
    maxWidth: '90%',
    marginLeft: '5%',
    overflow: 'hidden',
    backgroundColor: primaryColor.light
  },
  table: {
    width: 'fit-content'
  },
  tableTitleBar: {

  },
  tableTitle: {
    color: primaryColor.text,
  },
  tableRow: {

  },
  tableData: {
    color: primaryColor.text,
    minWidth: 120
  }
});

/*
  Container Style (content)
*/
export const ProjectsContent = theme => ({
  container: {
    backgroundColor: primaryColor.backgroundColor,
    color: primaryColor.text,
    display: 'flex',
    flexDirection: 'row',
    minHeight: '100vh',
    width: '100%',
    marginLeft: 'auto',
    padding: 10
  },
  content: {
    flex: 1
  }
});

/**
 * About Modal Style
 */
export const About = theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    color: primaryColor.text,
    backgroundColor: primaryColor.light,
    padding: 5,
    outline: 'none'
  },
  icon: {
    color: primaryColor.text,
    '&:focus': {
      outline: 'none',
    }
  },
  close: {
    '&:focus': {
      outline: 'none',
    }
  },
  item: {
    flex: 2
  },
  copyright: {
    flex: 1
  },
  mail: {
    flex: 6,
    marginBottom: '2rem'
  },
  lineContainer: {
    display: 'flex',
    alignItems: 'flex-start'
  }
});

const stylesheet = {};

export default stylesheet;