<template>
  <div id="app">
     <loading :active.sync="isLoading"></loading>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/Products">產品列表</router-link>
    </div>
     <hr>
    <router-view/>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isLoading: false
    }
  },
  created () {
    this.isLoading = true
    this.$http.get(`${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/products`)
      .then((res) => {
        this.isLoading = false
        console.log(res)
      })
  }
}
// this.isLoading = true
// setTimeout(() => {
//   this.isLoading = false
// }, 2000)
</script>
<style lang="scss">
@import "~bootstrap/scss/bootstrap";
  $color:gray;
  body {
        background-color: $color;
    }
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
