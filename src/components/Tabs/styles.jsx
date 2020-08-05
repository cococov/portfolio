import { primaryColor } from '../../styles';

/*
  Header Tabs Styles
*/
export const TabsStyles = () => ({
  headerContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: 'auto',
  },
  header: {
    flexShrink: 0,
    minHeight: 35,
    backgroundColor: primaryColor.main,
  },
  subHeader: {
    flexShrink: 0,
    height: 25,
    backgroundColor: primaryColor.backgroundColor,
  },
  toolbar: {
    minHeight: 35,
    paddingLeft: 0,
  },
  tabIco: {
    marginRight: '0.5rem',
    fontSize: '1.3333333333em',
    verticalAlign: 'middle',
  },
  rute: {
    margin: '0.25rem',
    marginLeft: '1rem',
  },
});

/*
  Tabs Styles
*/
export const TabStyles = () => ({
  tab: {
    height: 35,
    padding: 0,
    paddingLeft: 10,
    paddingRight: 20,
    color: primaryColor.text,
    backgroundColor: primaryColor.main,
    cursor: 'pointer',
  },
  tabText: {
    textAlign: 'left',
    verticalAlign: 'middle',
    marginTop: '0.25rem',
    marginLeft: '0.5rem',
  },
  selected: {
    height: 35,
    padding: 0,
    paddingLeft: 10,
    paddingRight: 20,
    color: primaryColor.text,
    backgroundColor: primaryColor.dark,
    cursor: 'pointer',
  },
});
