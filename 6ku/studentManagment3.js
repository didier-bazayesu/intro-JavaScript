// Class Project

// Properties: name(string), tasks(array of Task objects, default [])

// Method addTasks(...tasks) → adds tasks to the project using rest parameters.

//     Method summary → prints project name and all task summaries using template literals.

//     Class Task

// Properties: title, priority(default 'normal'), completed(default false)

// Method summary → prints task info

// Function createTasks

// Accepts any number of task objects

// Merge each with default properties using spread operator

// Returns array of Task instances

// Async function getCompletedTasks(project)

// Returns a Promise that resolves after 1 second

// Resolves with tasks in the project where completed === true

// Error handling

// If a task object is missing title, throw an error

// Catch errors and print a warning

// Destructure and log completed tasks

// Print title and priority for each completed task