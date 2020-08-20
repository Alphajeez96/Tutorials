<template>
  <div>
    <div>
      <div class="body">
        <div class="container px-0">
          <div class="row">
            <!-- Details holder here -->
            <div class="col-md-8">
              <div class="row white__bg">
              
                <!-- Image/screenshot here -->
                <div class="col-md-6 img__holder">
                  <div>
                    <img
                      :src="`${companies.screenshot}`"
                      class="img-fluid"
                      alt
                    />
                  </div>
                </div>

                <div class="col-md-6">
                  <div class="details">
                    <h4>
                      {{ companies ? companies.title_ : 'Not available' }}
                    </h4>

                    <h5 class="pt-3">
                      headquaters:
                      <span>
                        {{
                          companies ? companies.headquarters : 'Not available'
                        }}
                      </span>
                    </h5>
                    <h5 class="pt-3">
                      Industry:
                      <span>
                        {{ companies ? companies.industry : 'Not available' }}
                      </span>
                    </h5>
                    <h5 class="pt-3">
                      Address :
                      <span>
                        {{
                          companies ? companies.companyAddress : 'Not available'
                        }}
                      </span>
                    </h5>
                    <h5 class="pt-3">
                      Founded:
                      <span>
                        {{ companies ? companies.founded : 'Not available' }}
                      </span>
                    </h5>
                    <div class="inline pt-3">
                      <p>
                        Rating:
                        {{ companies ? companies.rating : 'Not available' }}
                      </p>
                      <p class="mx-4">
                        Price:
                        {{ companies ? companies.price : 'Not available' }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Mini side bar here -->
            <div class="col-md-4 white__bg">
              <h4>Company Info</h4>
              <div>
                <img :src="`${companies.logo}`" alt />
              </div>
              <div>
                <span class="badge badge-pill mt-3 badge-success">
                  {{ companies ? companies.type : 'Not available' }}
                </span>
              </div>
              <div>
                <h6 class="mt-3">
                  {{ companies ? companies.company_name : 'Not available' }}
                </h6>
              </div>
              <div>
                <h6 class="mt-3">
                  {{ companies ? companies.company_size : 'Not available' }}
                </h6>
              </div>

              <div>
                <a :href="'' + companies.website_" target="_blank">
                  {{ companies ? companies.website_ : 'Not available' }}
                </a>
              </div>
              <div class="social__holder mt-3">
                <a :href="'' + companies.facebookUrl" target="_blank">
                <i class="fa fa-facebook mx-2"></i>
                </a>

                <a :href="'' + companies.twitterUrl" target="_blank">
                <i class="fa fa-twitter mx-2"></i>
                </a>

                <a :href="'' + companies.linkedinUrl" target="_blank">
                <i class="fa fa-linkedin mx-2"></i>
                </a>

                <a :href="'mailto:' + companies.email" target="_blank">
                 <i class="fa fa-envelope mx-2"></i>
                </a>
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

export default {
  name: '',
  data() {
    return {
      secretKey: '$2b$10$Wb8VppNIDoAhIAB8n8oFnuCuOnANGbL7pxknMH8lhYplG40/hi5LC',
      companies: null,
      router: this.$route.params.companyid,
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

        // console.log(this.router)
        console.log(response.data)
        this.companies = response.data.find(
          (company) => company.objectID === this.router,
        )
        console.log(this.companies)
      } catch (error) {
        console.log(error.response)
      }
    },
  },
}
</script>
<style scoped>
@import url(//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css);

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
.details {
  text-align: left;
}

h3 {
  font-size: 22px;
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
.fa {
  color: black;
}

path {
  color: black;
  height: 4vh;
}
path :hover {
  color: blue;
}
</style>
