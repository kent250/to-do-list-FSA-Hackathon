
<template>
     <section class="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5"> 
        <div class="mx-auto max-w-screen-xl px-4 lg:px-12">
            <div class="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
                <h5 class="text-3xl font-extrabold dark:text-white text-center mt-4">To-Do List</h5>
                <div class="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
                    <div class="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
                        <button type="button" data-modal-target="authentication-modal" data-modal-toggle="authentication-modal" class="flex items-center justify-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">
                            <svg class="h-3.5 w-3.5 mr-2" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path clip-rule="evenodd" fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" />
                            </svg>
                            New Task
                        </button>

                        <div class="flex items-center space-x-3 w-full md:w-auto">  
                            <button id="filterDropdownButton" data-dropdown-toggle="filterDropdown" class="w-full md:w-auto flex items-center justify-center py-2 px-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" type="button">
                                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="h-4 w-4 mr-2 text-gray-400" viewbox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z" clip-rule="evenodd" />
                                </svg>
                                Filter
                                <svg class="-mr-1 ml-1.5 w-5 h-5" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path clip-rule="evenodd" fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                                </svg>
                            </button>
                            <div id="filterDropdown" class="z-10 hidden w-48 p-3 bg-white rounded-lg shadow dark:bg-gray-700">
                                <h6 class="mb-3 text-sm font-medium text-gray-900 dark:text-white">Choose option</h6>
                                <ul class="space-y-2 text-sm" aria-labelledby="filterDropdownButton">
                                    <li class="flex items-center">
                                        <input  id="all" v-model="filterType" type="radio" value="all" class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                                        <label   class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">All</label>
                                    </li>
                                    <li class="flex items-center">
                                        <input  id="completed" v-model="filterType" type="radio" value="completed" class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                                        <label   class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">Completed</label>
                                    </li>
                                    <li class="flex items-center">
                                        <input  id="uncompleted" v-model="filterType" type="radio" value="uncompleted" class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                                        <label  class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">Uncompleted</label>
                                    </li>
                                    
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" class="px-6 py-3">
                                    #
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Task
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Due Date
                                </th>
                                
                                <th scope="col" class="px-6 py-3">
                                    Status
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    <span class="sr-only">Edit</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(item, index) in filteredTasks" :key="item.id" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <td class="px-6 py-4">{{ index ++ }}</td>
                                <td class="px-4 py-3">{{ item.task_name }}</td>
                                <td class="px-4 py-3">{{ formatDate(item.due_date) }}</td>
                                <td class="px-4 py-3">
                                    <span v-if="item.completed === 1" class="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">Done</span>
                                    <span v-else class="bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">Pending</span>
                                    &nbsp;<span v-if="isDueDatePassed(item.due_date, returnCurrentDate()) && item.completed === 0 " class="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">Over Due</span>
                                </td>
                                <td class="px-6 py-4 text-right">
                                    <button v-if="item.completed === 0" @click="markCompleted(item.task_name,item.id)" type="button" class="px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    Mark Done</button>&nbsp;
                                    

                                    <button v-else="item.completed === 1" @click="markUncompleted(item.task_name,item.id)" type="button" class="px-3 py-2 text-xs font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
                                    Mark Undone</button>&nbsp;
                                   
                                    <button @click="deleteTask(item.id, item.task_name)" type="button" class="px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    Delete</button>&nbsp;

                                    <router-link :to="{ path: `/edit/${item.id}` }"  class="px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    Edit
                                    </router-link>&nbsp;
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </section>
   
    
    <newTask />

</template>

<script setup>

import { computed, onMounted, ref } from 'vue';

import newTask from '../components/newTask.vue';
import { formatDate, returnCurrentDate, isDueDatePassed } from '../functions.js'

const fetchedTasks = ref(null);
const filterCompleted = ref(false);
const filterType = ref('all');

onMounted(fetchData);

//fetching all tasks
async function fetchData() {
    const url = `http://localhost:3000/tasks/`; 

    const response = await fetch(url);
    const fetchedData = await response.json();
    fetchedData.sort((a, b) => a.completed - b.completed); 
    fetchedTasks.value = fetchedData;
}

//deleting a task 
const deleteTask = async (taskId, taskName) => {
    if(confirm(`Are you sure you want to delete task with ${taskName}?`)){
        const url = `http://localhost:3000/tasks/${taskId}`;
        const response = await fetch(url, {method: 'DELETE',});
        await fetchData();
    }
}
// marking Task Completed
const markCompleted = async(taskName, taskId) => {
    if(confirm(` Mark Task ${taskName} Completed?`)){
        const url = `http://localhost:3000/tasks/${taskId}/completed`;
        const response = await fetch(url, {method: 'PUT',});
        await fetchData();
    }
}
//marking Task Uncompleted
const markUncompleted = async(taskName, taskId) => {
    if(confirm(` Mark Task ${taskName} uncompleted?`)){
        const url = `http://localhost:3000/tasks/${taskId}/uncompleted`;
        const response = await fetch(url, {method: 'PUT',});
        await fetchData();
    }
}

//filtering Tasks
const filteredTasks = computed(() => {
    switch (filterType.value) {
        case "completed":
            return fetchedTasks.value.filter(task => task.completed === 1);
        case "uncompleted":
            return fetchedTasks.value.filter(task => task.completed !== 1);
        case "all":
        default:
            return fetchedTasks.value;
    }
});




</script>




