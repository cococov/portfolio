import { emphasize } from '@material-ui/core/styles';

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

export const loginStyles = {
  container: {
    backgroundColor: '#BDBDBD',
    minHeight: '100%',
    minWidth: '100%',
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  card: {
    textAlign: 'center',
    width: 350,
    margin: 'auto',
    padding: '20px 15px',
    background: '#EEE'
  },
  media: {
    width: 150,
    margin: 'auto'
  },
};

export const selectStyles = theme => ({
  root: {
    flexGrow: 1,
  },
  input: {
    display: 'flex',
    padding: 0,
    height: 'auto',
  },
  valueContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    flex: 1,
    alignItems: 'center',
    overflow: 'hidden',
  },
  chip: {
    margin: theme.spacing(0.5, 0.25),
  },
  chipFocused: {
    backgroundColor: emphasize(
      theme.palette.type === 'light' ? theme.palette.grey[300] : theme.palette.grey[700],
      0.08,
    ),
  },
  noOptionsMessage: {
    padding: theme.spacing(1, 2),
  },
  singleValue: {
    fontSize: 16,
  },
  placeholder: {
    position: 'absolute',
    left: 2,
    bottom: 6,
    fontSize: 16,
  },
  paper: {
    position: 'absolute',
    zIndex: 1,
    marginTop: theme.spacing(1),
    left: 0,
    right: 0,
  },
  divider: {
    height: theme.spacing(2),
  },
});

export const dynamicTableStyle = {
  marginTop: {
    marginTop: 10
  },
  overflow: {
    overflow: 'visible',
    padding: 10
  },
  header: {
    backgroundColor: primaryColor.main
  },
  columnHeader: {
    color: 'white',
    fontWeight: 'bold',
    borderRight:'1px solid white'
  },
  sortIcon: {
    color:'white',
    paddingLeft:5
  }
};

const drawerWidth = 60;
export const menuStyles = theme => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    boxShadow: '1px 1px 1px rgba(0, 0, 0, 0.16), 1px 1px 1px rgba(0, 0, 0, 0.23)',
    backgroundColor: primaryColor.main,
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

export const buttonGroupStyle = {
  buttonLeft: {
    borderRadius: '4px 0px 0px 4px',
    minWidth: 50,
  },
  buttonMiddle: {
    borderRadius: 0,
    minWidth: 50,
  },
  buttonRight: {
    borderRadius: '0px 4px 4px 0px',
    minWidth: 50,
  },
};

export const dateTimePickerStyles = theme => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    marginLeft: 15,
  },
  cssRoot: {
    width: 160,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 4,
    color: theme.palette.getContrastText(theme.palette.grey[50]),
    backgroundColor: theme.palette.grey[50],
    '&:hover': {
      backgroundColor: theme.palette.grey[300],
    },
  },
});

export const intStyles = {
  root: {
    height: 36,
  }
};

export const dndStyles = theme => ({
  dropListRoot: {
    backgroundColor: theme.palette.grey[300],
    height: '100%',
  },
  dropListHeader: {
    backgroundColor: primaryColor.main,
    color: theme.palette.getContrastText(primaryColor.main),
  },
  dropListBody: {
    height: '100%'
  },
  dragOverBody: {
    backgroundColor: theme.palette.grey[500],
  },
  itemContainer: {
    width: '100%',
    marginTop: '.5em',
    marginBottom: '.5em',
  },
  // Temporal class until css precedence error is fixed on material-ui.
  itemContainerAvatar: {
    backgroundColor: primaryColor.main,
    height: 32,
    width: 32,
    fontSize: '1rem'
  },
  dropListItem: {

  },
  onDragItem: {
    
  }
});

export const priorityFormStyles = {
  content: {
    paddingBottom: 100
  }
};

const stylesheet = {};

export default stylesheet;