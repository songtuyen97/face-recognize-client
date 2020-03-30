<template>
  <div>
    <div class="loader-container"></div>
    <div class="loader">
    </div>
    <!-- <img src="/assets/logo.png" alt="" height="300" width="300" style="position:fixed"> -->
  </div>
</template>

<script>
export default {
  name: 'Wellcome',
  data () {
    return {
    }
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.loader-container {
    position: fixed;
    left: 0px;
    bottom: 0px;
    right: 0px;
    top: 0px;
    background-color: black;
    opacity: 0.1;
}
.loader {
  position: fixed;
  left: 50%;
  top: 50%;
  margin-left: -60px;
  margin-top: -60px;
  border: 8px solid #f3f3f3; /* Light grey */
  border-top: 8px solid #3498db; /* Blue */
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;

  /* ---- */
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
