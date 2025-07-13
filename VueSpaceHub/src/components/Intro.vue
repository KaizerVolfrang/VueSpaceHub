<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>
      Powered by created a project with
      <a href="https://vite.dev/" target="_blank" rel="noopener">Vue 3</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">TypeScript</a>
      and <a href="https://getbootstrap.com/" target="_blank">Bootstrap 5</a>. What's next?
      <a href="https://github.com/your-profile/vue-space-hub" target="_blank" class="footer-link"> GitHub репозиторий
        </a>
    </h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
