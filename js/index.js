import { Newtask } from "./models/newTask.js";
import { Todo } from "./models/toDoList.js";
import { listDone } from "./models/toDoList.js";
let todo = new Todo();

document.querySelector("#addItem").onclick = function () {
  // Tạo ra đối tượng new task để hứng nội dung người dùng nhập
  let input = document.querySelector("#newTask");
  let task = new Newtask();
  let { id, value } = input;
  task[id] = value;
  //   console.log(task);
  //Lưu task mới vào mảng toDoList
  todo.themViecCanLam(task);
  //   console.log(todo);
  todo.luuTask();
  todo.hienThiTask("#todo");
};
window.checkTask = (value) => {
  todo.checkTask(value);
};

window.deleteTask = (taskClick) => {
  todo.xoaTaskDone(taskClick);
  todo.luuTask();
  todo.hienThiTask("#todo");
};
window.deleteTaskDone = (taskDoneClick) => {
  listDone.xoaTaskFinished(taskDoneClick);
  listDone.luuTaskDone();
  listDone.renderDone("#completed");
};
window.onload = function () {
  todo.layTask();
  todo.hienThiTask("#todo");
  listDone.layTaskDone();
  listDone.renderDone("#completed");
};
document.querySelector("#two").onclick = function () {
  todo.sortAtoZ();
  todo.luuTask();
  todo.hienThiTask("#todo");
};
document.querySelector("#three").onclick = function () {
  todo.sortZtoA();
  todo.luuTask();
  todo.hienThiTask("#todo");
};
