const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let taskList = [];

function listTasks() {
    ltl = taskList.length;
    if (ltl === 0) {
        console.log('No tasks found.');
        return;
    } else {
        for(i = 0; i < ltl; i++) {
            console.log(taskList[i]);
        }
    }
}

function addTask(title, difficulty) {
    const newTask = {
        id: taskList.length,
        title: title,
        completed: false,
        difficulty: Number(difficulty)
    };
    taskList.push(newTask);
    console.log('Task added.');
}

function completeTask(index){
    taskList[index].completed = true;
    console.log('Task completed.');
}

function removeCompletedTasks() {
    for (let i = taskList.length - 1; i >= 0; i--) {
        if (taskList[i].completed === true) {
            taskList.splice(i, 1);
        }
    }
    console.log('Completed tasks removed.');
}

function averageDifficulty() {
    let avgDifficulty = 0;
    for (let i = 0; i < taskList.length; i++) {
        avgDifficulty += taskList[i].difficulty;
    }
    console.log(`The average difficulty of your tasks is ${avgDifficulty}`);
}

function welcomeMenu() {
    console.log('\nWelcome to TSKM, choose one of the following options');
    console.log('1. List all tasks');
    console.log('2. Add a new task');
    console.log('3. Mark a task as completed');
    console.log('4. Remove all the completed tasks');
    console.log('5. Show your average difficulty of your tasks');
    console.log('404. Exit the app');
}

function mainMenu() {
    rl.question('\nEnter option: ', (option) => {
        switch (option) {
            case '1':
                listTasks();
                mainMenu();
                break;
            case '2':
                rl.question('Title: ', (title) => {
                    rl.question('Difficulty (Number between 1 and 5): ', (difficulty) => {
                        if (difficulty >= 1 && difficulty <= 5) {
                            addTask(title, difficulty);
                        } else {
                            console.log('Difficulty must be between 1 and 5.');
                        }
                        mainMenu();
                    });
                });
                mainMenu();
                break;
            case '3':
                listTasks();
                if(taskList.length === 0) {
                    mainMenu();
                }
                rl.question('Choose a task: ', (index) => {
                    try {
                        if(taskList[index].completed === false) {
                            completeTask(index);
                            mainMenu();
                        } else if(taskList[index].completed === true) {
                            console.log('Task already completed.');
                            mainMenu();
                        }
                    } catch (e) {
                        console.log('Task doesn\'t exist.');
                        mainMenu();
                    }
                });
                break;
            case '4':
                removeCompletedTasks();
                mainMenu();
                break;
            case '5':
                averageDifficulty();
                mainMenu();
                break;
            case '404':
                console.log('Exiting the app. Goodbye!');
                rl.close();
                break;
            default:
                console.log('Invalid option.');
                mainMenu();
                break;
        }
    });
}

rl.on('close', () => {
    console.log('Application closed.');
    process.exit(0);
});

welcomeMenu();
mainMenu();