<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <p>{{theName}}</p>
    <button @click="updateName">更新数据</button>
    <HelloWorld msg="Welcome to Your Vue.js App" v-if="showHello" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "app",
  components: {
    HelloWorld
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

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
