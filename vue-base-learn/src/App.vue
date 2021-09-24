<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <PropsCom :children="parent" @patch="handleClick">
      <h3 slot="a">这是具名插槽</h3>
    </PropsCom>
    <!-- <Vuex /> -->
    <VuexA />
    <VuexB />
    <router-view></router-view>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import './components/directive.js'
import PropsCom from './components/props.vue'
import VuexA from './components/vuexa.vue'
import VuexB from './components/vuexb.vue'
// import Vuex from './components/vuex.vue' 基础用例

export default {
  name: 'app',
  components: {
    HelloWorld,
    PropsCom,
    VuexA,
    VuexB
    // Vuex
  },
  data () {
    return {
      parent: '这是父级传给子级的参数-hello'
    }
  },
  methods: {
    handleClick () {
      window.console.log (1111)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
