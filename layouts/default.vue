<template>
  <div class="d-flex no-gutters h-100">
    <div class="">
      <sideNav />
    </div>
    <div style="flex-grow: 1; background:#fbfbfd">
      <nuxt />
    </div>
  </div>
</template>
<script>

import sideNav from "~/components/partials/side-nav";
export default {
  components: {
    sideNav
  },
};
</script>
<style scoped>

</style>
