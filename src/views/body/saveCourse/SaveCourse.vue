<template>
  <div class="saveCourse">

    <table >
      <tr>
        <td><span>标题:</span></td>
        <td><input class="form-control"  type="text" v-model="courseMassage.title"></td>
      </tr>
      <tr>
        <td><span>老师:</span></td>
        <td><input class="form-control" type="text" v-model="courseMassage.teacher"></td>
      </tr>
      <tr>
        <td><span>技术栈:</span></td>
        <td><input class="form-control" type="text" v-model="courseMassage.tecnology"></td>
      </tr>
      <tr>
        <td><span>课程内容:</span></td>
        <td><textarea class="form-control" style="height: 100px;" v-model="courseMassage.courseText"></textarea></td>
      </tr>
      <tr>
        <td><span>直播时间:</span></td>
        <td><input class="form-control time" type="text" v-model="courseMassage.tvTime"></td>
      </tr>
    </table>
    <br>
    <button class="btn btn-primary" @click="addCourse">添加课程</button>
    <br><span id="msg">{{massage}}</span>

  </div>
</template>

<script>
import {saveCourse} from "@/network/course";
export default {
  name: "SaveCourse",
  props: {
    massage: ''
  },
  created() {

  },
  data() {
    return {
      courseMassage: {
        title: '',
        teacher: '',
        tecnology: '',
        courseText: '',
        tvTime: ''
      },
      massage: ''
    }
  },
  methods: {

    addCourse() {

      saveCourse(this.courseMassage.title,
          this.courseMassage.teacher,this.courseMassage.tecnology,
          this.courseMassage.courseText,
          this.courseMassage.tvTime).then(res => {
            this.massage = res
        setTimeout(() => {
          this.massage = ''
        },500)
      })
    }
  }

}
</script>

<style lang="scss" scoped>

 .saveCourse td {
   padding: 10px 10px;
 }

 #msg {
   color: red;
 }
</style>