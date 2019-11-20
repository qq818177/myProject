<template>
  <div class="hello">
    this is address.
  </div>
</template>

<script>
export default {
  name: 'addressPage',
  props: {},
  beforeDestroy() {
    window.console.log("beforeDestroy");
  },
  destroyed() {
    window.console.log("destroyed")
  },
}
</script>
