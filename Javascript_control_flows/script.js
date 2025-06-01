const tasks = []

while (true){
    let task = prompt("Enter a task ( or type 'done' to finish )");
    if(task.toLowerCase() === 'done') break;
    tasks.push(task);
}
console.log("Your todo list: ");
tasks.forEach((task, index) => {
    console.log(`${index+1}. ${task}`);
});