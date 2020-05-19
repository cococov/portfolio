import React, { Component } from 'react';
import { observable, decorate } from 'mobx';
import { observer } from 'mobx-react';
import { withStyles } from '@material-ui/core/styles';
import { ContentStyles } from '../styles.js';
import ReactMarkdown from 'markdown-to-jsx';
import { profile, education, experience, skills, error } from '../content';
import clsx from 'clsx';
import { Title, SubTitle, H3, Hr, Paraph, Ul, Pre, Img } from './MarkDownComponents';
import 'bootstrap/dist/css/bootstrap.min.css';

/*
  Content Main Class
*/
class Container extends Component {
  pageState = {};

  constructor(props) {
    super(props);
    this.pageState = {
      markdown: ''
    };
    this.loadMd();
  };

  loadMd = async () => {
    this.pageState.markdown = await (await this.fetchSelected()).text();
  };

  fetchSelected = async () => {
    let result = null;
    switch (this.props.selectedTab) {
      case 0:
        result = (await fetch(profile));
        break;
      case 1:
        result = (await fetch(experience));
        break;
      case 2:
        result = (await fetch(education));
        break;
      case 3:
        result = (await fetch(skills));
        break;
      default:
        result = (await fetch(error));
    }
    return result;
  };

  render() {
    const { classes } = this.props;
    const { markdown } = this.pageState;
    this.loadMd();

    return (
      <div className={clsx('Container', classes.container)}>
        <div className={clsx('Content', classes.content)}>
          <ReactMarkdown
            options={{
              overrides: {
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
                    classNameProfile: classes.imgProfile,
                  },
                },
              },
            }}
          >
            {markdown}
          </ReactMarkdown>
        </div>
      </div>
    );
  }
}

/*
  Define received props types for validation.
*/
Container.propTypes = {
};

/*
  MobX decorations.
*/
decorate(Container, {
  pageState: observable
});

export default withStyles(ContentStyles)(observer(Container));