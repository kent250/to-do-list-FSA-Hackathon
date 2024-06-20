<template>
    <section class="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5">
      <div class="mx-auto max-w-screen-xl px-4 lg:px-12">
        <div class="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
          <h5 class="text-3xl font-extrabold dark:text-white text-center mt-4">To-Do List</h5>
          <div class="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
            <div
              class="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0"
            >
              <router-link
                to="/"
                class="flex items-center justify-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none"
              >
                Go Back
              </router-link>
            </div>
          </div>
          <form class="max-w-sm mx-auto" v-if="fetchedTasks" @submit.prevent="updateTask">
            <div class="mb-5">
              <label for="large-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Task</label>
              <input
                type="text"
                id="large-input"
                class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                v-model="fetchedTasks.task_name"
              />
            </div>
            <div class="mb-5">
              <label for="base-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Due date</label>
              <input
                type="date"
                id="base-input"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                v-model="formattedDueDate"
                />
            </div>
            <div class="mb-5">
              <button
                type="submit"
                class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Update Task
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  </template>

<script setup>
import { computed, onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

const fetchedTasks = ref(null);
const editedDueDate = ref('');

const task = ref({
    task_name: '',
    due_date: '2024-06-27',
});

const taskTest = ref({
    task_name: '',
    due_date: '',
});

const route = useRoute(); // Access route information

async function fetchData() {
    const id =  route.params.taskId;
    const url = `http://localhost:3000/tasks/${id}`; 

    const response = await fetch(url);
    const fetchedData = await response.json(); 
    fetchedTasks.value = fetchedData;
    
    task.value = {
    task_name: fetchedData.task_name,
    due_date: fetchedData.due_date,
  };
}


onMounted(fetchData);

const formattedDueDate = computed(() => {
  if (fetchedTasks.value && fetchedTasks.value.due_date) {
    const dueDate = new Date(fetchedTasks.value.due_date);
    return dueDate.toISOString().split('T')[0];
  }
  return '';
});
</script>