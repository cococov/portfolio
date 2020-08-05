import { primaryColor } from '../../styles';

/**
 * About Modal Style
 */
export const About = () => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    color: primaryColor.text,
    backgroundColor: primaryColor.light,
    padding: 5,
    outline: 'none',
  },
  icon: {
    color: primaryColor.text,
    '&:focus': {
      outline: 'none',
    },
  },
  close: {
    '&:focus': {
      outline: 'none',
    },
  },
  item: {
    flex: 2,
  },
  copyright: {
    flex: 1,
  },
  mail: {
    flex: 6,
    marginBottom: '2rem',
  },
  lineContainer: {
    display: 'flex',
    alignItems: 'flex-start',
  },
});
