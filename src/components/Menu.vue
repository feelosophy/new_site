<template lang="pug">
  .menu
    h1 {{title}}
    .navigator
      b-nav.subMenu.pixel(
      fill="fill"
      tabs="tabs"
      )
        b-nav-item(
        to="/home"
        ) Home
        b-nav-item(
        to="/projects"
        ) projects
        b-nav-item(
        to="/services"
        ) Service
        b-nav-item(
        to="/contact"
        ) Contact
    .carousel
      b-carousel(
      id="carousel1"
      style="text-shadow: 1px 1px 2px #333;"
      controls
      indicators
      background="#ababab"
      :interval="3000"
      img-width="100"
      img-height="100"
      v-model="slide"
      v-on:sliding-start="onSlideStart"
      v-on:sliding-end="onSlideEnd"
      )
        b-carousel-slide.nice(v-for="img in images" v-bind:key="img.id")(
        v-bind:img-src="img.src"
        v-bind:text="img.text"
        )
</template>

<script>
  export default {
    name: 'menu',
    data() {
      return {
        title: 'Main menu',
        slide: 0,
        sliding: null,
        images: [
          {
            id: 0,
            caption: 'Slide №1',
            src: 'https://weburoki.pro/wp-content/uploads/2017/01/Klassy-v-JavaScript-Obektno-Orientirovannoe-Programmirovanie.png',
            text: `Hello! I'm feelosophy!`,
          },
          {
            id: 1,
            caption: 'Slide №2',
            src: 'https://picsum.photos/1024/480/?image=52',
            text: '',
          },
          {
            id: 2,
            caption: 'Slide №3',
            src: 'https://weburoki.pro/wp-content/uploads/2017/01/Klassy-v-JavaScript-Obektno-Orientirovannoe-Programmirovanie.png',
            text: '',
          },
        ],
      };
    },
    methods: {
      onSlideStart() {
        this.sliding = true;
      },
      onSlideEnd() {
        this.sliding = false;
      },
      getImgSrc(item) {
        console.log(item);
      }
    },
  };
</script>

<style scoped>
  .menu {
    background: snow;
  }
  @font-face {
    font-family: Pixel;
    src: url("../assets/fonts/12168.ttf");
  }
  .pixel {
    font-family: Pixel, 'Comic Sans MS', cursive;
    font-size: 18pt;
  }

  @font-face {
    font-family: Nice;
    src: url("../assets/fonts/12161.otf");
  }
  .nice {
    font-family: Nice, 'Comic Sans MS', cursive;
    font-size: 40pt;
  }
</style>
