<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <!-- 自定义指令 -->
    <div v-n="4"></div>

    <!-- 计算属性 -->
    <!-- 应用场景-具有依赖关系的数据监听 -->
    <!--  :class="[a1, a2]" -->
    <div>
      借钱{{ totalMoney }},还钱{{ borrowMonry }},还剩{{ results }}
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data() {
    return {
      totalMoney: 1000,
      borrowMonry: 100
    };
  },
  computed: {
    results: function() {
      return this.totalMoney - this.borrowMonry;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
