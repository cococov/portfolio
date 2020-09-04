import { primaryColor, secondaryColor } from '../../styles';

/*
  Container Style (content)
*/
export const ContentStyles = () => ({
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
    paddingLeft: '1rem',
    paddingRight: '1rem',
    fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
    paddingBottom: 60,
  },
  a: {
    color: '#54a5fd',
  },
  code: {
    color: '#f54495',
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
    marginRight: '50%',
  },
  p: {
    fontSize: '1rem',
    padding: 10,
  },
  ul: {
    fontSize: '1rem',
    marginLeft: 20,
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
    color: secondaryColor.main,
  },
  img: {
    borderRadius: 4,
    maxWidth: 250,
    maxHeigh: 250,
  },
  imgRight: {
    float: 'right',
    marginRight: '5%',
    marginLeft: '5%',
    marginTop: 30,
  },
  imgContent: {
    maxWidth: '80%',
  },
  classNamePhoneLandscape: {
    maxWidth: '100%',
  },
  tableContainer: {
    width: 'fit-content',
    maxWidth: '90%',
    marginLeft: '5%',
    overflow: 'hidden',
    backgroundColor: primaryColor.light,
  },
  table: {
    width: 'fit-content',
  },
  tableTitleBar: {},
  tableTitle: {
    color: primaryColor.text,
  },
  tableRow: {},
  tableData: {
    color: primaryColor.text,
    minWidth: 120,
  },
});
