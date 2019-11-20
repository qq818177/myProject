<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: "app",
  components: {
  },
  data() {
    return {
      theName: "Hello Vue!",
      showHello: true
    };
  },
  beforeCreate() {
    window.console.log("beforeCreate");
    window.console.log(this.$el);
    window.console.log(this.$data);
  },
  created() {
    window.console.log("created");
    window.console.log(this.$el);
    // 这个时候data有值了
    window.console.log(this.$data);
  },
  beforeMount() {
    window.console.log("beforeMount");
    window.console.log(this.$el);
    window.console.log(this.$data);
  },
  mounted() {
    window.console.log("mounted");
    // 这个时候el有值了，el是dom对象
    window.console.log(this.$el);
    window.console.log(this.$data);
  },
  beforeUpdate() {
    window.console.log("beforeUpdate");
  },
  updated() {
    window.console.log("updated");
  },
  beforeDestroy() {},
  destroyed() {},
  methods: {
    updateName() {
      // this.theName = "creeper"
      window.console.log("updatename");
      // this.showHello = false;
    }
  }
};
</script>

