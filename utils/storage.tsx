import { Project } from '../types/project';
import { Actions } from '../enums/actions';
import Dexie from 'dexie';
const BDVersion = 1;
var db;

const InitializeBD = () => {
  db = new Dexie('projects');
  db.version(BDVersion).stores({
    project: '++id,project,start,end,increment,count',
  });
};

const PersistData = (newProject: Project, action: number) => {
  try {
    switch (action) {
      case Actions.Add:
        const { project, start, end, increment, count } = newProject;
        db.project.put({ project, start, end, increment, count });
        break;
      case Actions.Update:
        db.project.update(newProject.id, {
          start: newProject.start,
          end: newProject.end,
          increment: newProject.increment,
          count: newProject.count,
        });
        break;
      case Actions.Remove:
        db.project.where({ project: newProject.project }).delete();
        break;
    }

    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

const GetData = async () => {
  var result = await db.project.toArray();
  return result;
};

export { PersistData, GetData, InitializeBD };
