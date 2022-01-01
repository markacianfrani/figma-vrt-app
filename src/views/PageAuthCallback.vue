<template>
  <div>whatup</div>
</template>

<script>
export default {
  name: "PageAuthCallback",
  props: ['params'],
  data() {
    return {
      queryData: {},
      error: null,
    };
  },
  created() {
	  console.log(this.params);
    this.queryData = this.$route.query;
    this.logMeIn(this.queryData)
  },
  methods: {
    logMeIn(data) {
      if (!data.access_token) {
        this.error = "Missing access token";
      }

//       this.$store.commit("user/addToken", data.access_token);

      if (data['profile[handle]']) {
      this.$store.commit("user/addUserName", data['profile[handle]']);


      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>