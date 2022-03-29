<template>
  <div class="saveCourse">
    <table align="center">
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
      <tr>
        <td>
          <div>
            <button class="btn btn-primary" @click="updateCourseBtn">保存修改</button>
          </div>
        </td>
        <td>
          <div>
            <button class="btn btn-primary" @click="ReturnUpdateCourseBtn">返回</button>
          </div>
        </td>
      </tr>
    </table>

    <br><span id="msg">{{massage}}</span>

  </div>
</template>

<script>
import {getCourseById, updateCourse} from "@/network/course";
export default {
  name: "UpdateCourseView",
  created() {
    this.id = this.$route.query.id
    getCourseById(this.id).then(res => {
      this.courseMassage = res
    })
  },
  data() {
    return {
      id: '',
      courseMassage: {
      },
      massage: ''
    }
  },
  methods: {

    updateCourseBtn() {
      updateCourse(this.courseMassage.id,this.courseMassage.title,
          this.courseMassage.teacher,this.courseMassage.tecnology,
          this.courseMassage.courseText,
          this.courseMassage.tvTime).then(res => {
        this.massage = res
        setTimeout(() => {
          this.massage = ''
          this.$router.replace('/courseView')
        },500)
      })
    },
    ReturnUpdateCourseBtn() {
      this.$router.replace('/courseView')
    }
  }

}
</script>

<style scoped>
.saveCourse td {
  padding: 10px 10px;
}

#msg {
  color: red;
}
</style>