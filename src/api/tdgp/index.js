import person from './person';
import project from './project';
import projectMember from './projectMember';

export default {
  ...person,
  ...project,
  ...projectMember
};
