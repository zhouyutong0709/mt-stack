<template>
  <div>
    这是vuex {{$store.state.count}}

    <input type="button" value="增加" @click="increment">
    <input type="button" value="减少" @click="decrement">
  </div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
  methods: mapActions([
    'increment',
    'decrement'
  ])
}
</script>

<style>

</style>