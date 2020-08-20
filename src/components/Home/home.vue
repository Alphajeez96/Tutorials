<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-6"   v-for="company in companies" :key="company.objectID">
          <div class="row white__bg">

            <!-- Image/screenshot here -->
            <div class="col-md-4 img__holder">
              <div>
                 <img :src="`${company.logo}`" class="img-fluid" alt="" />
              </div>
              <div class>
            <h3>{{ company.company_name }}</h3>
              </div>
            </div>

            <!-- Company details here -->
            <div class="col-md-8">
              <div class="details text-left">
                    <h4>{{ company.title_ }}</h4>

                <h5 class="pt-3">
                  headquaters:
                  <span>  {{ company.headquarters }}</span>
                </h5>
                <h5 class="pt-3">
                  Industry:
                  <span>  {{ company.industry }}</span>
                </h5>

                <h5 class="pt-3">
                  Founded:
                  <span>  {{ company.founded }}</span>
                </h5>

                <div class="inline">
                  <h5 class="pt-3">
                    Description :
                    <span>
                      <v-clamp autoresize :max-lines="2">
                        {{ company.Short_description }}
                      </v-clamp>
                    </span>
                  </h5>
                <router-link :to="{name: 'About', params: { companyid: company.objectID },}"> Read More </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
const axios = require('axios')
import VClamp from 'vue-clamp'
export default {
  components: {
    VClamp,
  },
  name: 'home',
  data() {
    return {
      secretKey: '$2b$10$Wb8VppNIDoAhIAB8n8oFnuCuOnANGbL7pxknMH8lhYplG40/hi5LC',
      companies: [],
    }
  },
  mounted() {
    this.getCompany()
  },
  methods: {
    async getCompany() {
      try {
        let response = await this.$http.get(
          `https://api.jsonbin.io/b/5f20829bc58dc34bf5dca275`,
          {
            headers: {
              'secret-key': this.secretKey,
            },
          },
        )
        console.log(response.data)
        this.companies = response.data
      } catch (error) {
        console.log(error.response)
      }
    },
  },
}
</script>

<style scoped>
.white__bg {
  width: 100%;
  background: #f8f8f8;
  border: solid #bdbdbd 0;
  box-shadow: 5px 0 20px rgba(0, 0, 0, 0.1);
  -webkit-box-shadow: 5px 0 20px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 5px 0 20px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  margin-top: 20px;
}

h4 {
  font-size: 20px;
}
h5 {
  font-size: 16px;
}
.pt-3 span {
  font-size: 14px;
  line-height: 22px;
}
a {
  text-decoration: none !important;
}
h3 {
  font-size: 22px;
  margin-top: 20px;
}
@media screen and (max-width: 576px) and (min-width: 275px) {
  h3 {
    text-align: center;
    padding-top: 30px;
  }
  h5 {
    text-align: center;
  }
  h4 {
    text-align: center;
  }
}
@media screen and (max-width: 768px) and (min-width: 575px) {
  h3 {
    text-align: left;
    padding-top: 30px;
  }
}
</style>
