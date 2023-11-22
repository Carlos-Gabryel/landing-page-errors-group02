class Task {
  constructor(name, status) {
    this.name = name;
    this.status = status;
  }
}

class TaskList {
  constructor() {
    this.tasks = [];
  }

  addTask(name, status) {
    const task = new Task(name, status);
    this.tasks.push(task);
  }

  editTaskName(taskId, newName) {
    const task = this.tasks.find((task) => task.id === taskId);
    if (task) {
      task.name = newName;
    }
  }

  editTaskStatus(taskId, newStatus) {
    const task = this.tasks.find((task) => task.id === taskId);
    if (task) {
      task.status = newStatus;
    }
  }

  removeTask(taskId) {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
  }

  listTasks() {
    return this.tasks;
  }

  getTaskById(taskId) {
    return this.tasks.find((task) => task.id === taskId);
  }
}
const taskList = new TaskList();

taskList.addTask("Task 1", "Pending");
taskList.addTask("Task 2", "Completed");
taskList.addTask("Task 3", "Pending");
console.log(taskList.listTasks());
taskList.editTaskName(2, "Task 2 edited");
console.log(taskList.listTasks());
taskList.editTaskStatus(2, "Pending");
console.log(taskList.listTasks());
taskList.removeTask(1);
console.log(taskList.listTasks());
console.log(taskList.getTaskById(2));
