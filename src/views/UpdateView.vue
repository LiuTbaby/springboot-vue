<template>
  <header-view/>
  <tab-bar/>
  <div class="body">
    <update-course-view/>
  </div>
</template>

<script>
import headerView from "@/views/header/HeaderView";
import TabBar from "@/views/tabbar/TabBar";
import UpdateCourseView from "@/views/body/UpdateCourseView/UpdateCourseView";
export default {
  name: "UpdateView",
  components: {
    headerView,
    TabBar,
    UpdateCourseView
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