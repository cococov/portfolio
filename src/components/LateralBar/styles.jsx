import { primaryColor } from '../../styles';

/*
  Lateral Bar Styles (link icons)
*/
const drawerWidth = 60;
export const lateralBarStyles = () => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    boxShadow:
      '1px 1px 1px rgba(0, 0, 0, 0.16), 1px 1px 1px rgba(0, 0, 0, 0.23)',
    backgroundColor: primaryColor.light,
    color: primaryColor.text,
    width: drawerWidth,
  },
  list: {
    width: 250,
    textAlign: 'left',
  },
  listInside: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  listItem: {
    '&:hover': {
      backgroundColor: primaryColor.dark,
    },
  },
  nestedList: {
    width: drawerWidth - 20,
    marginLeft: 20,
  },
  nestedItem: {
    '&:hover': {
      backgroundColor: primaryColor.light,
    },
  },
  lateralIcon: {
    height: 40,
    width: 40,
    marginLeft: -5,
    marginTop: 3,
    padding: 0,
    justifyContent: 'center',
  },
  about: {
    display: 'flex',
    flexGrow: 'inherit',
    justifyContent: 'flex-end',
    textAlign: 'center',
    flexDirection: 'column',
  },
  aboutText: {
    marginLeft: '-0.5rem',
  },
});
