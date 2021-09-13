<template>
  <div>
    <h3>关于传参</h3>
    <div>{{children}}</div>

    <br>

    <input type="button" value="触发父级方法" @click="$emit('patch')">

    <div>
      <slot name="a"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: ['children']
}
</script>

<style>

</style>