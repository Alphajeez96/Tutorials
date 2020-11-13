<template>
  <div class="main">
    <div class="container">
      <div class="mt-4">
        <nuxt-link to="/">
          <el-button type="primary" icon="el-icon-arrow-left" plain
            >Back</el-button
          >
        </nuxt-link>
      </div>

      <div class="row mt-4">
        <!-- Map region here -->
        <div class="col-lg-7">
          <div v-if="loading" class="loader text-center"></div>
          <div id="map"></div>
        </div>

        <div class="col-lg-5">
          <!-- Cards here -->
          <transition name="el-fade-in">
            <div class="row" v-if="(WAREHOUSE = !'')">
              <div class="my-2 w-100">
                <el-card class="box-card">
                  <div slot="header" class="clearfix">
                    <span class="header">{{ WAREHOUSE.name }}</span>
                    <el-button style="float: right; padding: 3px 0" type="text">
                      <span
                        class="registered"
                        v-if="WAREHOUSE.is_registered === true"
                        >Registered</span
                      >
                      <span
                        class="not_registered"
                        v-if="WAREHOUSE.is_registered === false"
                        >Not Registered</span
                      >
                    </el-button>
                  </div>

                  <div class="text item d-flex">
                    <div>
                      <p>
                        Location:
                        <span class="value">{{ WAREHOUSE.city }}</span>
                      </p>
                    </div>
                    <div class="ml-auto">
                      <p>
                        Cluster:
                        <span class="value">{{ WAREHOUSE.cluster }}</span>
                      </p>
                    </div>
                  </div>

                  <div class="text item d-flex">
                    <div>
                      <p>
                        Type: <span class="value">{{ WAREHOUSE.type }}</span>
                      </p>
                    </div>
                    <div class="ml-auto">
                      <p>
                        Space Available:
                        <span class="value">{{
                          WAREHOUSE.space_available
                        }}</span>
                      </p>
                    </div>
                  </div>

                  <div class="text item d-flex">
                    <div>
                      <p>
                        Live Status:
                        <span class="value">{{ WAREHOUSE.is_live }}</span>
                      </p>
                    </div>
                    <div class="ml-auto">
                      <p>
                        Code:
                        <span class="value">{{ WAREHOUSE.code }}</span>
                      </p>
                    </div>
                  </div>
                </el-card>
              </div>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import axios from "axios";
import mapboxgl from "mapbox-gl";
import { mapGetters } from "vuex";
import loading from "~/components/generic/loading";
export default {
  layout: "Default",
  data() {
    return {
      loading: false,
      access_token: process.env.MAP_ACCESS_TOKEN,
      map: {},
      center: [],
    };
  },
  components: {
    loading,
  },
  computed: {
    ...mapGetters("warehouse", ["WAREHOUSE"]),
  },
  mounted() {
    this.createMap();
  },
  methods: {
    async createMap() {
      try {
        this.loading = true;
        const response = await axios.get(
          `https://api.mapbox.com/geocoding/v5/mapbox.places/${this.WAREHOUSE.city}.json?access_token=${this.access_token}`
        );
        this.loading = false;
        this.center = response.data.features[0].center;

        mapboxgl.accessToken = this.access_token;
        this.map = new mapboxgl.Map({
          container: "map",
          style: "mapbox://styles/mapbox/streets-v11",
          center: this.center,
          zoom: 11,
        });
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped>
.border_left {
  border-left: 1px solid rgba(0, 0, 0, 0.1);
}
#map {
  height: 70vh;
}
</style> 