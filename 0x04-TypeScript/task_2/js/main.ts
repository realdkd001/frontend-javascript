export interface DirectorInterface{
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

export class Director implements DirectorInterface {
  workFromHome(): string {
    return 'Working from home';
  }
  getCoffeeBreak(): string {
    return 'Getting a coffee break';
  }
  workDirectorTasks(): string {
    return 'Getting to director tasks';
  }
}

export class Teacher implements TeacherInterface {
  workFromHome(): string {
    return "Cannot work from home";
  }
  getCoffeeBreak(): string {
    return "Cannot have a break"
  }
  workTeacherTasks():string {
    return "Getting to work";
  }
}

export function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === "number"){
    if (salary < 500){
      return new Teacher()
    }
  }
  return new Director()

  }

export function isDirector(employee: Director | Teacher): employee is Director {
  return (employee as Director).workDirectorTasks !== undefined;
}

export function executeWork(employee: Director | Teacher): string {
  if (isDirector(employee)){
    return employee.workDirectorTasks();
  }
  return employee.workTeacherTasks();
}