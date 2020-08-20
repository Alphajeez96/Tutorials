<template>
  <div>
    <cnav></cnav>
    <div class="container px-0">
      <div class="back">
        <router-link to="/">
          <button class="btn btn-outline-info mb-3">
            <i class="fa fa-arrow-left mx-2"></i>
            Back
          </button>
        </router-link>
      </div>
    </div>

    <div>
      <section1></section1>
      <section2></section2>
    </div>
  </div>
</template>
<script>
import section1 from "./section1";
import section2 from "./section2";
import cnav from "../Partials/navbar";

export default {
  name: "about",
  components: {
    section1,
    section2,
    cnav,
  },
};
</script>
<style scoped>
.back {
  text-align: left;
}
</style>
>
