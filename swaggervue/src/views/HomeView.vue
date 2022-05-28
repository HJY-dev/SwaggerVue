<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App" />
    {{ showdevconfig() }}
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
  },
  created() {},
  mounted() {
    this.login();
  },
  methods: {
    showdevconfig() {
      console.log(process.env.VUE_APP_AUTHORITY);
    },
    login() {
      var _this = this;
      let postData = {
        user: "",
        pwd: "",
      };
      ManagebibiApi.Auth_Login(postData)
        .then(function (response) {
          if (response.code == 0) {
            sessionStorage.setItem("token", response.data.sign);
          }
        })
        .catch(function (error) {
          _this.$message.error(error);
        });
    },
  },
};
</script>
