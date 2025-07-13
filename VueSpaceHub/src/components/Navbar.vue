<template>
  <nav class="navbar navbar-expand-lg bg-dark text-white py-3 shadow-sm">
    <div class="container-lg">
      <RouterLink class="navbar-brand fw-bold link-green" to="/">VueSpaceHub</RouterLink>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse justify-content-end nav-collapse-bg" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <RouterLink class="nav-link link-green" to="/">Главная</RouterLink>
          </li>
          <li class="nav-item divider">|</li>
          <li class="nav-item">
            <RouterLink class="nav-link link-green" to="/calculator">Калькулятор</RouterLink>
          </li>
          <li class="nav-item divider">|</li>
          <li class="nav-item">
            <RouterLink class="nav-link link-green" to="/planner">Ежедневник</RouterLink>
          </li>
          <li class="nav-item divider">|</li>
          <li class="nav-item">
            <RouterLink class="nav-link link-green" to="/register">Регистрация</RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.navbar {
  background-color: #242424;
  border-bottom: 1px solid #333;
  z-index: 10;
  overflow: hidden;
}

.container-lg {
  max-width: 1140px;
  padding: 0 2rem;
}


.nav-collapse-bg {
  background-color: #242424;
}

.navbar-brand {
  font-size: 1.4rem;
  transition: color 0.3s ease;
}

.link-green {
  color: #42b983 !important;
  font-weight: 500;
  transition: all 0.3s ease;
  padding: 0.5rem 1rem;
}

.link-green:hover {
  background-color: #42b983;
  color: #fff !important;
  border-radius: 6px;
}

.navbar-brand:hover {
  color: #90ee90 !important;
}

.divider {
  color: #888;
  margin: 0 8px;
  font-weight: bold;
}
</style>
