<template>
  <header-view/>
  <tab-bar/>
  <div class="body">
    <save-course/>
  </div>
</template>

<script>
import headerView from "@/views/header/HeaderView";
import TabBar from "@/views/tabbar/TabBar";
import SaveCourse from "@/views/body/saveCourse/SaveCourse";
export default {
  name: "SaveView",
  components: {
    headerView,
    TabBar,
    SaveCourse
  }
}
</script>

<style scoped>
.body {
  position: fixed;
  left: 200px;
  text-align: center;
}
</style>