<template>
  <div class="header">
    <h1>直播后台管理系统</h1>
  </div>
</template>

<script>
export default {
  name: "HeaderView"
}
</script>

<style lang="scss" scoped>

.header {
  display: flex;
  height: 100px;
  vertical-align: center;
  border-bottom: 1px solid #333;
  background: url("../../assets/images/hit_header.jpg")no-repeat;
  background-size: 100% 100%;
  h1 {
    line-height: 100px;
    width: 100%;
    text-align: center;
    color: blue;
  }
}



</style>