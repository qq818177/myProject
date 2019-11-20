<template>
  <div class="hello">
      this is cart.
  </div>
</template>

<script>
export default {
  name: 'cart',
  props: {},
  beforeDestroy() {
    window.console.log("beforeDestroy");
  },
  destroyed() {
    window.console.log("destroyed")
  },
}
</script>
