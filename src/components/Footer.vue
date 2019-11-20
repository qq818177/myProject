<template>
  <div class="hello">
  </div>
</template>

<script>
export default {
  name: 'v-footer',
  props: {},
  beforeDestroy() {
    window.console.log("beforeDestroy");
  },
  destroyed() {
    window.console.log("destroyed")
  },
}
</script>
