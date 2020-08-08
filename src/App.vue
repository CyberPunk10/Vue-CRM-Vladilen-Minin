<template>
  <div id="app">
    <component :is="layout">
      <router-view/>
    </component>
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/> -->
  </div>
</template>

<script>

import EmptyLayout from '@/layouts/EmptyLayout'
import MainLayout from '@/layouts/MainLayout'
import EmptyBlueLayout from '@/layouts/EmptyBlueLayout'

export default {
  computed: {
    layout () {
      // console.log(this.$route.meta)
      // console.log(this.$route)
      return (this.$route.meta.layout || 'empty') + '-layout'
    }
  },
  components: {
    EmptyLayout, MainLayout, EmptyBlueLayout
  }
}
</script>

<style lang="sass">
@import '~materialize-css/dist/css/materialize.min.css'
@import 'assets/index.css'

#app
  font-family: Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50

#nav
  padding: 30px
  a
    font-weight: bold
    color: #2c3e50
    &.router-link-exact-active
      color: #42b983

</style>
