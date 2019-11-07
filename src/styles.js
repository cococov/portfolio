export const primaryColor = {
  light: '#333842',
  main: '#282c34',
  dark: '#070709'
};

export const secondaryColor = {
  light: '#FDB556',
  main: '#F36B21',
  dark: '#C2551A'
};

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

export const baseStyles = {
  app: {
    minHeight: '100%',
    minWidth: '100%',
    position: 'absolute',
    backgroundColor: '#BDBDBD',
  },
  content: {
    padding: 10
  },
};

const drawerWidth = 60;
export const lateralBarStyles = theme => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,    
  },
  drawerPaper: {
    boxShadow: '1px 1px 1px rgba(0, 0, 0, 0.16), 1px 1px 1px rgba(0, 0, 0, 0.23)',
    backgroundColor: primaryColor.light,
    color: 'white',
    width: drawerWidth,
  },
  list: {
    width: 250,
    textAlign: "left",
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
});

const projectDrawerWidth = 250;
export const ProjectsStyles = theme => ({
  drawer: {
    width: projectDrawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    left: 60,
    boxShadow: '1px 1px 1px rgba(0, 0, 0, 0.16), 1px 1px 1px rgba(0, 0, 0, 0.23)',
    backgroundColor: primaryColor.light,
    color: 'white',
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
  category: {
    boxShadow: '2px 2px 2px rgba(0, 0, 0, 0.16), 2px 2px 2px rgba(0, 0, 0, 0.23)',
    backgroundColor: primaryColor.light,
    color: 'white',
    height: 30,
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
    color: 'white',
    paddingLeft: 10,
    flexShrink: 0,    
  }
});

export const loadingStyle = {
  height: '-webkit-fill-available',
  top: 0
};

export const priorityFormStyles = {
  content: {
    paddingBottom: 100
  }
};

const stylesheet = {};

export default stylesheet;