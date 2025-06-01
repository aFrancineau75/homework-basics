const tasks = []

while (true){
    let task = prompt("Enter a task ( or type 'done' to finish )");
    if(task.toLowerCase() === 'done') break;
    tasks.push(task);
}
console.log("Your todo list: ");
let index =1;
for(let task of tasks){
    console.log(`${index}. ${task}`);
    index++;
}