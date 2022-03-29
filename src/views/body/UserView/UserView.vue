<template>
  <div id="course">
    <table class="table" style="text-align: center">
      <tr class="header">
        <th>标题</th>
        <th>老师</th>
        <th>技术栈</th>
        <th>课程内容</th>
        <th>直播时间</th>
        <th>详细信息</th>
      </tr>
      <tr v-for="(item) in data.massage">
        <td><span>{{ item.title }}</span></td>
        <td><span>{{ item.teacher }}</span></td>
        <td><span>{{ item.tecnology }}</span></td>
        <td><span>{{ item.courseText }}</span></td>
        <td><span>{{ item.tvTime }}</span></td>
        <td>
          <div>
            <button class="btn btn-warning" @click="DetailClick(item)">详情</button>
          </div>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import {getCourse} from "@/network/course";


export default {
  name: "UserView",
  data() {
    return {
      data: {
        massage: [],
        status: {}
      }
    }
  },
  methods: {
    //详情跳转事件
    DetailClick(course) {
      this.$router.push({
        path: '/DetailView',
        query: {
            id: course.id,
            title: course.title,
            teacher: course.teacher,
            tecnology: course.tecnology,
            courseText: course.courseText,
            tvTime: course.tvTime,
            currentnums: course.currentnums
        }
      })
    },
  },
  created() {

    getCourse().then(res => {
      this.data.massage = res
    })
  }
}
</script>

<style lang="scss" scoped>

.header {
  height: 50px;

  th {
    padding: 0 10px;
    border: 1px solid black;
  }
}


td {
  border: 1px solid black;
}
</style>