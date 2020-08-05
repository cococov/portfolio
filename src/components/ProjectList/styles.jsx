import { primaryColor } from '../../styles';

/*
  Projects list Styles
*/
const projectDrawerWidth = 250;
export const ProjectsStyles = () => ({
  resetClasses: {
    padding: 0,
    marginBottom: 0,
    marginTop: 0,
  },
  drawer: {
    width: projectDrawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    left: 60,
    boxShadow:
      '1px 1px 1px rgba(0, 0, 0, 0.16), 1px 1px 1px rgba(0, 0, 0, 0.23)',
    backgroundColor: primaryColor.light,
    color: primaryColor.text,
    width: projectDrawerWidth,
  },
  list: {
    textAlign: 'left',
  },
  listItem: {
    '&:hover': {
      backgroundColor: primaryColor.dark,
    },
  },
  explorerTitle: {
    marginLeft: '1rem',
  },
  category: {
    boxShadow:
      '2px 2px 2px rgba(0, 0, 0, 0.16), 2px 2px 2px rgba(0, 0, 0, 0.23)',
    backgroundColor: primaryColor.light,
    color: primaryColor.text,
    height: 30,
    display: 'flex',
    marginLeft: '1rem',
    flexFlow: 'row wrap',
    alignItems: 'center',
  },
  categoryTitle: {
    marginLeft: '0.5rem',
  },
  nestedList: {
    width: projectDrawerWidth - 20,
    marginLeft: 20,
  },
  nestedItem: {
    '&:hover': {
      backgroundColor: primaryColor.light,
    },
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
    height: '87%',
  },
  selectedItem: {
    backgroundColor: primaryColor.light,
  },
});
