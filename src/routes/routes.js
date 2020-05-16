import { client } from './routes.json';
import { App as HomePage } from '../views';
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
    path: '*',
    component: NotFoundPage
  }
];

export {
  rootRouter,
  baseRouter
};