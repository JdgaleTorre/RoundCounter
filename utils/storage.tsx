import { Project } from '../types/project';
import { Actions } from '../enums/actions';

const PersistData = (project: Project, action: number) => {
  try {
    if (typeof window !== 'undefined') {
      const listProjects = GetData();
      switch (action) {
        case Actions.Add:
          localStorage.setItem(
            'listProjects',
            JSON.stringify([...listProjects, project])
          );
          break;
        case Actions.Update:
          localStorage.setItem(
            'listProjects',
            JSON.stringify([
              ...listProjects.filter((p) => p.project !== project.project),
              project,
            ])
          );
          break;
        case Actions.Remove:
          localStorage.setItem(
            'listProjects',
            JSON.stringify([
              ...listProjects.filter((p) => p.project !== project.project),
            ])
          );
          break;
      }
    }
    return true;
  } catch (error) {
    return false;
  }
};

const GetData = () => {
  if (typeof window !== 'undefined') {
    return JSON.parse(localStorage.getItem('listProjects'));
  }
};

export { PersistData, GetData };
