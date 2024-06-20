## Table of Contents

- [Project Description](#project-description)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation ](#installation)



## Project Description

This project provides a functional frontend application built with Vue.js 3 and Tailwind Css to interact with the FullStack Academy Hackathon To-Do List Backend API.

- Backend API repository
This is a link to the [Backend API Repository](https://github.com/kent250/todolist-fsa-backend).

## Features

- Task Creation: Add new tasks to your to-do list, specifying their name and due dates.
- Task Retrieval: Retrieve all tasks as well as their statuses(completed, Not Completed, Over due)
- Task Management: Update task details name and due date, or mark tasks as completed/uncompleted.
- Task Deletion: Remove unwanted tasks from your to-do list.
- Task Editing: Still in progress.


##  Prerequisites (Node.js, npm, MySQL)


Prerequisites

    - Node.js (version 20.14.0 or higher) - https://nodejs.org/en
    - npm (Node Package Manager) - (usually bundled with Node.js)

## Installation

To get started with Todo List Front-end, follow these steps:

1. Clone the repository:

    - Using HTTPS:
        ```bash
        git clone https://github.com/kent250/to-do-list-FSA-Hackathon
        cd to-do-list-FSA-Hackathon
        ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Running application 

- Start the Server: Open a terminal window in the project directory and run the following command:
    ```bash
    npm run dev
    ```
4. click the given link in terminal and access it

## Step By step of using the app

This is a link to the [Step by Step documentation using the app](https://scribehow.com/shared/Create_a_To-Do_List_on_FSA_Hackathon_Site__WlsOJ8cUQh-mvMdEm70Mig).


**General Notes:**

* When running project in development mode you have to change the base url to the url of the backend apis in the following components
- /src/pages/home.vue
- /src/components/newTask.vue



 