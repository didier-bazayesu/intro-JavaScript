class Task {
    constructor(title, priority = 'normal', completed = false) {
        this.title = title;
        this.priority = priority;
        this.completed = completed;
    }

    summary = () => `Task: ${this.title}, Priority: ${this.priority}, Completed: ${this.completed}`;
}

// Default properties
const defaultTask = { priority: 'normal', completed: false };

// Function to create Task instances
function createTasks(...anyTasks) {
    return anyTasks.map(el => {
        const merged = { ...defaultTask, ...el };
        return new Task(merged.title, merged.priority, merged.completed);
    });
}

// Async function to fetch completed tasks after 1s
async function fetchCompletedTasks(tasks) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const completed = tasks.filter(task => task.completed === true);
            resolve(completed);
        }, 1000);
    });
}

// Example usage
const tasks = createTasks(
    { title: 'Clean Room', priority: 'high', completed: true },
    { title: 'Do Homework', completed: true },
    { title: 'Exercise', completed: true },
    { title: 'Exercise2', completed: true }
);

const a = async () => {
    const completedTasks = await fetchCompletedTasks(tasks);
    completedTasks.forEach(({ title, priority }) => {
        console.log(`Title: ${title}, Priority: ${priority}`);
    });
}

a()

/* Output after 1s:
Title: Clean Room, Priority: high
Title: Exercise, Priority: normal
*/
