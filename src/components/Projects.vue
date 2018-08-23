<template lang="pug">
  .blog
    h1 {{title}}
    b-card-group(
    deck="deck"
    )
      b-card(
      title="Python + Pygame"
      img-src="https://feelosophy.github.io/assets/img/portfolio/spaceShip.png"
      img-alt="alien_invasion image"
      img-top
      tag="article"
      style="max-width: 20rem;"
      class="mb-2"
      )
        b-button(
        href="https://github.com/feelosophy/Alien_Invasion"
        ) Проект на github
      b-card(
      title="JS"
      img-src="https://feelosophy.github.io/assets/img/portfolio/spaceShip.png"
      img-alt="alien_invasion image"
      img-top
      tag="article"
      style="max-width: 20rem;"
      class="mb-2"
      )
        b-button(
        href="https://github.com/feelosophy/Alien_Invasion"
        ) Проект на github
</template>

<script>
  export default {
      name: 'projects',
      data() {
          return {
              title: 'Projects',
          };
      },
      methods: {
        comeBack() {
          this.$router.go(-1);
        }
      }
  };
</script>

<style scoped></style>
