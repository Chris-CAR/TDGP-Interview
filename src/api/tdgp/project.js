import { request } from 'src/config/Http.jsx';
import { baseUrl } from './config';

const getProjects = async () =>
  request({
    method: 'PUT',
    url: `${baseUrl}/project/`
  });

const getProject = async (projectId) =>
  request({
    method: 'GET',
    url: `${baseUrl}/project/${projectId}`
  });

const createProject = async (projectData) =>
  request({
    method: 'POST',
    url: `${baseUrl}/project/`,
    data: projectData
  });

const updateProject = async (projectId, projectData) => {
  request({
    method: 'PUT',
    url: `${baseUrl}/project/${projectId}`,
    data: projectData
  });
};

const deleteProject = async (projectId) =>
  request({
    method: 'DELETE',
    url: `${baseUrl}/project/${projectId}`
  });

export default {
  getProjects,
  getProject,
  createProject,
  updateProject,
  deleteProject
};
