<template>
  <div class="register-wrapper bg-dark text-light p-4 rounded shadow-lg">
    <h2 class="text-center text-success mb-4">Регистрация</h2>

    <form @submit.prevent="submitForm">
      <div class="mb-3">
        <label for="name" class="form-label">Имя</label>
        <input type="text" id="name" v-model="name" class="form-control styled-input" />
      </div>

      <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <input type="email" id="email" v-model="email" class="form-control styled-input" />
      </div>

      <div class="mb-3">
        <label for="password" class="form-label">Пароль</label>
        <input type="password" id="password" v-model="password" class="form-control styled-input" />
      </div>

      <button type="submit" class="btn btn-outline-success w-100 styled-btn">Зарегистрироваться</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const name = ref('')
const email = ref('')
const password = ref('')

function submitForm() {
  if (!name.value || !email.value || !password.value) {
    alert('Пожалуйста, заполните все поля.')
    return
  }

  alert(`Регистрация успешна, ${name.value}!`)
  // Здесь можно добавить логику сохранения или отправки данных на сервер
}
</script>

<style scoped>
.register-wrapper {
  max-width: 500px;
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

.styled-btn {
  font-weight: bold;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.styled-btn:hover {
  background-color: #32cd32;
  color: #fff;
  transform: scale(1.03);
}
</style>
