<template>
  <header-view/>
  <tab-bar/>
  <div class="body">
    <course-view/>
  </div>
</template>

<script>
import headerView from "@/views/header/HeaderView";
import TabBar from "@/views/tabbar/TabBar";
import CourseView from "@/views/body/CourseView/CourseView";
export default {
  name: "ELCourseView",
  components: {
    headerView,
    TabBar,
    CourseView
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