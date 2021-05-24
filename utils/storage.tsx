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

const PersistData = (project: Project, action: number) => {
  try {
    if (typeof window !== 'undefined') {
      const listProjects = GetData();
      switch (action) {
        case Actions.Add:
          db.project.put(project);
          break;
        case Actions.Update:
          db.project.update(project.id, {
            start: project.start,
            end: project.end,
            increment: project.increment,
            count: project.count,
          });
          break;
        case Actions.Remove:
          db.project.where({ project: project.project }).delete();
          break;
      }
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
