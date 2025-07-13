<template>
  <div class="calculator-wrapper bg-dark text-light p-4 rounded shadow-lg">
    <h2 class="text-center text-success mb-4">Калькулятор</h2>

    <div class="row mb-3">
      <div class="col">
        <label for="num1" class="form-label">Число 1</label>
        <input type="number" id="num1" v-model="num1" class="form-control styled-input" />
      </div>
      <div class="col">
        <label for="num2" class="form-label">Число 2</label>
        <input type="number" id="num2" v-model="num2" class="form-control styled-input" />
      </div>
    </div>

    <div class="btn-group d-flex mb-4 gap-2">
      <button @click="calculate('+')" class="btn btn-outline-success flex-fill styled-btn">+</button>
      <button @click="calculate('-')" class="btn btn-outline-success flex-fill styled-btn">−</button>
      <button @click="calculate('*')" class="btn btn-outline-success flex-fill styled-btn">×</button>
      <button @click="calculate('/')" class="btn btn-outline-success flex-fill styled-btn">÷</button>
    </div>

    <div class="result-box text-center bg-success text-white py-3 rounded">
      <h5>Результат:</h5>
      <p class="display-6">{{ result }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const num1 = ref<number | null>(null)
const num2 = ref<number | null>(null)
const result = ref('')

function calculate(op: string) {
  if (num1.value === null || num2.value === null) {
    result.value = 'Введите оба числа'
    return
  }

  switch (op) {
    case '+':
      result.value = String(num1.value + num2.value)
      break
    case '-':
      result.value = String(num1.value - num2.value)
      break
    case '*':
      result.value = String(num1.value * num2.value)
      break
    case '/':
      result.value = num2.value !== 0 ? String(num1.value / num2.value) : 'Ошибка: деление на 0'
      break
  }
}
</script>

<style scoped>
.calculator-wrapper {
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

.styled-btn {
  font-weight: bold;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.styled-btn:hover {
  background-color: #32cd32;
  color: #fff;
  transform: scale(1.05);
}

.result-box {
  background-color: #32cd32;
  color: #fff;
}
</style>
