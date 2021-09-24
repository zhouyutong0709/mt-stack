<template>
  <div>
    <div>Vuex高级用例B -{{ $store.state.modulesCount.count}}</div>
    <input type="button" value="增加" @click="add(2)">
    <input type="button" value="删减" @click="reduce">
  </div>
</template>

<script>
import { mapActions } from 'vuex' 
export default {
  methods: mapActions('modulesCount', ['add', 'reduce'])
}
</script>

<style>

</style>