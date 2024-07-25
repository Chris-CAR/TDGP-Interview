import Overview from 'src/pages/Overview';
import Projects from 'src/pages/Projects';

const p = (path: string) => `${path}`;

export const ROUTES = Object.freeze({
  REDIRECT: {
    path: () => p('/'),
    page: () => <Overview />
  },
  OVERVIEW: {
    path: () => p('/overview'),
    page: () => <Overview />
  },
  PROJETOS: {
    path: () => p('/projects'),
    page: () => <Projects />
  }
});
