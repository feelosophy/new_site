<template lang="pug">
  .contact
    h1 {{title}}
    button(
    v-on:click.prevent="comeBack"
    ) Назад
</template>

<script>
  export default {
      name: 'contact',
      data() {
          return {
              title: 'Contact',
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
