export class Donelist {
  arrDone = [];
  themDoneTask(task){
    this.arrDone.push(task);
  }
  luuTaskDone() {
    //biến đổi thành string
    localStorage.setItem("arrDone", JSON.stringify(this.arrDone));
  }
  // Lấy data từ localStorage ra
  layTaskDone() {
    if (localStorage.getItem("arrDone")) {
      this.arrDone = JSON.parse(localStorage.getItem("arrDone"));
    }
  }
  
  // Xóa việc đã làm xong trong arrDone
  xoaTaskFinished(newTask) {
    let newArrDone = this.arrDone.filter((task) => task.newTask !== newTask);
    this.arrDone = [...newArrDone]   
  }

  renderDone(selectorDone) {
    let renderDone = this.arrDone.reduce((htmlDone, taskDone) => {
      return (
        htmlDone +
        `<li>
                <div>
                    <p style="color:#25b99a;font-weight:bold">${taskDone.newTask}</p>
                </div>
                <div>
                  <a onclick="deleteTaskDone('${taskDone.newTask}')"><i class="fa fa-trash-alt"></i></a> 
                  <a style="color:#25b99a"><i class="fa fa-check-circle"></i></a> 
                </div>
              </li>`
      );
    }, "");

    document.querySelector(selectorDone).innerHTML = renderDone;
  }
}
