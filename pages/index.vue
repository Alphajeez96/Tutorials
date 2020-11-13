<template>
  <div class="main">
    <main class="container mt-4">
      <h2>Hi, Good{{ greeting }}</h2>

      <!-- Cards here -->
      <transition name="el-fade-in">
        <div v-if="warehouses != ''" class="mt-4 row">
          <div
            class="col-lg-4 my-2 display_cards"
            v-for="warehouse in warehouses"
            :key="warehouse.id"
            @click="handleTempWarehouse(warehouse)"
          >
            <el-card class="box-card">
              <div slot="header" class="clearfix">
                <span class="header">{{ warehouse.name }}</span>
                <el-button style="float: right; padding: 3px 0" type="text">
                  <span
                    class="registered"
                    v-if="warehouse.is_registered === true"
                    >Registered</span
                  >
                  <span
                    class="not_registered"
                    v-if="warehouse.is_registered === false"
                    >Not Registered</span
                  >
                </el-button>
              </div>
              <div class="text item d-flex">
                <div>
                  <p>
                    Location: <span class="value">{{ warehouse.city }}</span>
                  </p>
                </div>
                <div class="ml-auto">
                  <p>
                    Cluster: <span class="value">{{ warehouse.cluster }}</span>
                  </p>
                </div>
              </div>

              <div class="text item d-flex">
                <div>
                  <p>
                    Type: <span class="value">{{ warehouse.type }}</span>
                  </p>
                </div>
                <div class="ml-auto">
                  <p>
                    Space Available:
                    <span class="value">{{ warehouse.space_available }}</span>
                  </p>
                </div>
              </div>
            </el-card>
          </div>
        </div>

        <div v-else-if="(loading = true)" class="loader text-center"></div>
      </transition>
    </main>
  </div>
</template>

<script>
import axios from "axios";
import loading from "~/components/generic/loading";
export default {
  components: {
    loading,
  },
  data() {
    return {
      loading: false,
      greeting: "",
      warehouses: [],
      secretKey: process.env.API_SECRET_KEY,
    };
  },

  created() {
    this.greet();
    this.fetchWarehouses();
  },
  methods: {

    greet() {
      let time = new Date().getHours();

      if (time < 10) {
        this.greeting = "morning";
      } else if (time < 20) {
        this.greeting = "day";
      } else {
        this.greeting = "evening";
      }
    },

    async fetchWarehouses() {
      try {
        const response = await axios.get(
          "https://api.jsonbin.io/b/5fa97d9b48818715939e40ff",
          {
            headers: {
              "secret-key": this.secretKey,
            },
          }
        );

        this.warehouses = response.data;
   
      } catch (error) {
        console.log(error)
      }
    },

    handleTempWarehouse(warehouse) {
      this.$store.commit("warehouse/SAVE_TEMP_WAREHOUSE_MUTATION", warehouse);
      this.$router.push(`/${warehouse.name}`);
    },
  },
};
</script>

