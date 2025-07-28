document.addEventListener("DOMContentLoaded", () => {
  const sound = document.getElementById("hoverSound");

  document.querySelector(".inputtab").addEventListener("keydown", () => {
    sound.currentTime = 0;
    sound.play();
  });
  const taskform = document.querySelector(".form1");
  const taskinput = document.querySelector(".inputtab");
  const tasklist = document.querySelector(".tasks");
  taskform.addEventListener("submit", (event)=>{
    event.preventDefault();
    const tasktext = taskinput.value.trim()
    if (tasktext !== ""){
        addtask(tasktext);
        taskinput.value = "";
    }
  });
 function addtask(tasktext) {
    const li = document.createElement('li');
    
    const taskSpan  = document.createElement('span');
    taskSpan.textContent = tasktext;


    const deleteBtn = document.createElement('span');
    deleteBtn.textContent = "x";
    deleteBtn.style.padding = "10px";
    deleteBtn.style.color ="grey";

    li.appendChild(taskSpan);
    li.appendChild(deleteBtn);
    
    li.addEventListener("mouseenter", () => {
    sound.currentTime = 0;
    sound.play();});

    tasklist.appendChild(li);

    taskSpan.addEventListener('click',()=>{
        li.classList.toggle("completed");
    });

    deleteBtn.addEventListener("click", ()=>{
        tasklist.removeChild(li);
    });

  };
});


// add edit fuctionality

