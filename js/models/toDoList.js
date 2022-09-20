import { Donelist } from "./doneList.js";
export let listDone = new Donelist();
export class Todo {
  arrToDo = [];
  // Thêm task mới
  themViecCanLam(task) {
    this.arrToDo.push(task);
  }
  // Lưu task mới vào localstorage
  luuTask() {
    //biến đổi thành string
    localStorage.setItem("arrTask", JSON.stringify(this.arrToDo));
  }
  // Lấy data từ localStorage ra
  layTask() {
    if (localStorage.getItem("arrTask")) {
      this.arrToDo = JSON.parse(localStorage.getItem("arrTask"));
    }
  }

  // Xóa việc đã làm xong trong arrToDo
  xoaTaskDone(newTask) {
    let newArrTodo = this.arrToDo.filter((task) => task.newTask !== newTask);
    this.arrToDo = [...newArrTodo]
  }

  // Đánh dấu việc đã làm

  checkTask(newTask) {
    let tick = this.arrToDo.find((task) => task.newTask === newTask);
    listDone.themDoneTask(tick);
    listDone.luuTaskDone();
    listDone.layTaskDone();
    listDone.renderDone("#completed");
  }
  // Sắp xếp tên các việc cần làm theo thứ tự A -> Z
  sortAtoZ() {
    this.arrToDo = this.arrToDo.sort((taskNext, task) => {
      let nameTaskNext = taskNext.newTask.toLocaleLowerCase();
      let nameTask = task.newTask.toLocaleLowerCase();
      if (nameTaskNext < nameTask) {
        return -1;
      }
      return 1;
    });
    console.log(this.arrToDo);
  }
  // Sắp xếp tên các việc cần làm theo thứ tự Z -> A
  sortZtoA() {
    this.arrToDo = this.arrToDo.reverse();
  }

  // Hiện thị task ra màn hình
  hienThiTask(ulUncomplete) {
    let htmlRender = this.arrToDo.reduce((html, task) => {
      return (
        html +
        `
        <li>
            <div>
                <p>${task.newTask}</p>
            </div>
            <div>
               <a onclick="deleteTask('${task.newTask}')"><i class="fa fa-trash-alt"></i></a> 
               <a onclick="checkTask('${task.newTask}')"><i class="fa fa-check-circle"></i></a> 
            </div>
        </li>`
      );
    }, "");
    document.querySelector(ulUncomplete).innerHTML = htmlRender;
  }
}
