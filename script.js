function login(){
let u=document.getElementById("username").value;
let p=document.getElementById("password").value;

if(u==="admin" && p==="admin123"){
document.getElementById("loginPage").style.display="none";
document.getElementById("dashboardPage").style.display="block";
}
else{
alert("Wrong login");
}
}

let workers=0;
let tasks=0;
let present=0;

function addWorker(){
let name=document.getElementById("workerName").value;
let id=document.getElementById("workerId").value;
let mob=document.getElementById("workerMobile").value;
let dep=document.getElementById("workerDept").value;

let table=document.getElementById("workerTable");
let row=table.insertRow();

row.innerHTML=`<td>${id}</td><td>${name}</td><td>${mob}</td><td>${dep}</td>`;

workers++;
update();
}

function assignTask(){
let w=document.getElementById("taskWorker").value;
let t=document.getElementById("taskName").value;

let table=document.getElementById("taskTable");
let row=table.insertRow();

row.innerHTML=`<td>${w}</td><td>${t}</td><td>Assigned</td>`;

tasks++;
update();
}

function checkIn(){
let table=document.getElementById("attendanceTable");
let row=table.insertRow();

row.innerHTML=`<td>${new Date().toLocaleTimeString()}</td><td>In</td>`;

present++;
update();
}

function checkOut(){
let table=document.getElementById("attendanceTable");
let row=table.insertRow();

row.innerHTML=`<td>${new Date().toLocaleTimeString()}</td><td>Out</td>`;
}

function update(){
document.getElementById("workerCount").innerText=workers;
document.getElementById("taskCount").innerText=tasks;
document.getElementById("presentCount").innerText=present;
document.getElementById("reportWorkers").innerText=workers;
document.getElementById("reportTasks").innerText=tasks;
}
