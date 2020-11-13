<template>
  <div class="overlay">
  </div>
</template>

<script>
export default {
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start();
    });
  },
  destroyed() {
    setTimeout(() => this.$nuxt.$loading.finish(), 100);
  }
};
</script>

<style>
.overlay {
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  position: fixed;
  background: rgba(0, 0, 0, 0.1);
  opacity: 0.1;
  z-index: 2;
}

</style>