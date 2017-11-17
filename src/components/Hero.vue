<template>
  <div class="hero" :style="{ 'backgroundImage': `url(${background})` }">
    <h1 v-text="text"></h1>
    <button class="button">Useless CTA link</button>
  </div>
</template>

<script>
  export default {
    name: 'Hero',
    props: ['text', 'background'],
  };
</script>

<style scoped>
  .hero {
    background: no-repeat center center/cover;
    padding: 1.25rem;
    color: #f4f4f4;
    display: flex;
    flex-flow: column nowrap;
    height: 20vh;
    align-items: center;
    justify-content: center;
  }
</style>
