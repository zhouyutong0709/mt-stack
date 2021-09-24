<template>
  <div>
    <div>Vuex高级用例A -{{ $store.state.modulesMoney.money}}</div>
    <input type="button" value="增加" @click="add">
    <input type="button" value="删减" @click="reduce">
  </div>
</template>

<script>
import { mapActions } from 'vuex' 
export default {
  methods: mapActions('modulesMoney', ['add', 'reduce'])
}
</script>

<style>

</style>