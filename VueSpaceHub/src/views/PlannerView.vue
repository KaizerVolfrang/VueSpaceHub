<template>
  <div class="planner-container bg-dark text-light p-4 rounded shadow-lg">
    <h2 class="text-center text-success mb-4">Ежедневник</h2>

    <form @submit.prevent="addTask" class="mb-3">
      <input
        v-model="newTask"
        placeholder="Введите задачу"
        class="form-control styled-input"
      />
    </form>

    <ul class="list-group">
      <li
        v-for="(task, index) in tasks"
        :key="index"
        class="list-group-item d-flex justify-content-between align-items-center styled-item"
      >
        {{ task }}
        <button @click="removeTask(index)" class="btn btn-outline-success btn-sm styled-btn">
          ❌
        </button>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const newTask = ref('')
const tasks = ref<string[]>([
  '🧼 Убрать в комнате',
  '📖 Прочитать 10 страниц книги',
  '🏃‍♂️ Прогулка на свежем воздухе',
  '📧 Ответить на важные письма',
  '💡 Написать новую идею в VueSpaceHub'
])

function addTask() {
  if (newTask.value.trim()) {
    tasks.value.push(newTask.value.trim())
    newTask.value = ''
  }
}

function removeTask(index: number) {
  tasks.value.splice(index, 1)
}
</script>

<style scoped>
.planner-container {
  max-width: 600px;
  margin: auto;
  background-color: #242424;
}

.styled-input {
  background-color: #2e2e2e;
  color: #fff;
  border: 1px solid #32cd32;
  transition: box-shadow 0.3s ease;
}

.styled-input:focus {
  box-shadow: 0 0 10px #32cd32;
  border-color: #32cd32;
}

.styled-item {
  background-color: #2e2e2e;
  color: #fff;
  border: none;
  margin-bottom: 8px;
  transition: transform 0.2s ease;
}

.styled-item:hover {
  transform: scale(1.01);
}

.styled-btn {
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.styled-btn:hover {
  background-color: #32cd32;
  color: #fff;
  transform: scale(1.1);
}
</style>
