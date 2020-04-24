<template>
  <div id="app">
    <vue-headful title="Circuit Breaker Personality"/>
    <Quiz />
  </div>
</template>

<script>
import Quiz from "./components/index.vue";

export default {
  name: "App",
  components: {
    Quiz
  }
};
</script>

<style src="./styles/global.css"></style>
