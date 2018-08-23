<template lang="pug">
  .services
    h1 {{title}}
    button(
    v-on:click.prevent="comeBack"
    ) Назад

</template>

<script>
  export default {
      name: 'services',
      data() {
          return {
              title: 'Services',
          };
      },
      methods: {
        comeBack() {
          this.$router.go(-1);
        }
      }
  };
</script>

<style scoped>

</style>
