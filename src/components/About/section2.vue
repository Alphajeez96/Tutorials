<template>
  <div>
    <div>
      <div class="body">
        <div class="container px-0">
          <div class="row">
            <!-- More deatils card here -->
            <div class="col-md-7 white__bg">
              <h4>About Us</h4>
              <div class="about mt-4">
                <p>{{ companies ? companies.Long_description : 'Not available' }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
const axios = require("axios");
export default {
  name: "",
  data() {
    return {
      secretKey: "$2b$10$Wb8VppNIDoAhIAB8n8oFnuCuOnANGbL7pxknMH8lhYplG40/hi5LC",
      companies: null,
      router: this.$route.params.companyid,
    };
  },
  mounted() {
    this.getCompany();
  },
  methods: {
    async getCompany() {
      try {
        let response = await this.$http.get(
          `https://api.jsonbin.io/b/5f20829bc58dc34bf5dca275`,
          {
            headers: {
              "secret-key": this.secretKey,
            },
          }
        );
        this.companies = response.data.find(
          (company) => company.objectID === this.router
        );
      } catch (error) {
        console.log(error.response);
      }
    },
  },
};
</script>
<style scoped>
.body {
  background: #f6f8fa;
  height: 100%;
}

.white__bg {
  background: white;
  border: 2px solid white;
  width: 100%;
  box-shadow: 0 0.75rem 6rem rgba(56, 65, 74, 0.03);
  margin-bottom: 24px;
  border-radius: 0.25rem;
  padding: 2rem;
  margin-top: 20px;
}

.about p {
  text-align: left;
  font-size: 14px;
  line-height: 25px;
}
</style>
