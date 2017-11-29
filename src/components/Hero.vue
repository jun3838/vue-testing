<template>
  <div class="hero" :style="{ 'backgroundImage': `url(${background})` }">
    <h1 v-text="text"></h1>
  </div>
</template>

<script>
  export default {
    name: 'Hero',
    props: ['text', 'background']
  };
</script>

<style scoped lang="scss">
  .hero {
    background: no-repeat center center/cover;
    padding: rem-calc(20);
    color: #f4f4f4;
    display: flex;
    flex-flow: column nowrap;
    height: 40vh;
    align-items: center;
    justify-content: center;
  }
</style>
