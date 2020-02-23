import { client } from './routes.json';
import { App as HomePage } from '../views';
import { Education, Experience, Profile, Skills, Project } from '../components/content/index';
import { NotFoundPage } from '../components';

const rootRouter = [
  {
    component: HomePage
  }
];

const baseRouter = [
  {
    path: client.home,
    exact: true,
    component: HomePage
  },
  {
    path: client.education,
    exact: true,
    component: Education
  },
  {
    path: client.experience,
    exact: true,
    component: Experience
  },
  {
    path: client.skills,
    exact: true,
    component: Skills
  },
  {
    path: client.profile,
    exact: true,
    component: Profile
  },
  {
    path: `${client.project}/:id`,
    exact: true,
    component: Project
  },
  {
    path: '*',
    component: NotFoundPage
  }
];

export {
  rootRouter,
  baseRouter
};