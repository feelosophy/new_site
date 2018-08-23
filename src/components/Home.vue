<template lang="pug">
  .home
    h1 {{message}}
    b-list-group
      b-list-group-item(v-for="subject in subjects" v-bind:key="subject.title") {{subject.title}}
    button(
    v-on:click.prevent="comeBack"
    ) Назад
</template>

<script>
export default {
    name: 'Home',
    data() {
        return {
            message: 'Welcome to Your Vue.js App',
            subjects: [
              {
                title: 'Subject 1',
                hours: '6',
              },
              {
                title: 'Subject 2',
                hours: '3',
              },
              {
                title: 'Subject 3',
                hours: '4',
              },
              {
                title: 'Subject 4',
                hours: '1',
              },
              {
                title: 'Subject 5',
                hours: '2',
              },

            ],
        };
    },
    methods: {
      comeBack() {
        this.$router.go(-1);
      }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
