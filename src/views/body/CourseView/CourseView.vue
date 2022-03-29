<template>
  <div class="course">

    <table class="table">
      <tr class="header">
        <th>标题</th>
        <th>老师</th>
        <th>技术栈</th>
        <th>课程内容</th>
        <th>直播时间</th>
        <th>当前预约人数</th>
        <th>修改</th>
        <th>删除</th>
      </tr>
      <tr  v-for="(item) in data.courses">
        <td><span>{{item.title}}</span></td>
        <td><span>{{item.teacher}}</span></td>
        <td><span>{{item.tecnology}}</span></td>
        <td><span>{{item.courseText}}</span></td>
        <td><span>{{item.tvTime}}</span></td>
        <td><span>{{item.currentnums}}</span></td>
        <td>
          <div>
            <button class="btn btn-primary" @click="updateClick(item.id)" >修改</button>
          </div>
        </td>
        <td>
          <div>
            <button class="btn btn-danger" @click="delClick(item.id)" >删除</button>
          </div>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import {getCourse,delCouresById} from "@/network/course";


export default {
  name: "CourseView",
  data() {
    return {
      data: {
        courses: [],
      }
    }
  },
  methods: {
    updateClick(id) {
      this.$router.push({
        path: '/UpdateView',
        query: {
          id: id
        }
      })
    },
    //删除
    delClick(id) {
      this.data.courses = [];
      delCouresById(id).then(res => {
        getCourse().then(res => {
          this.data.courses = res
        }).catch(res => {
          alert(res)
        })
      })

    }
  },
  created() {
    getCourse().then(res => {
      this.data.courses = res
    })
  }
}
</script>

<style lang="scss" scoped>
  .course {
    display: inline-block;
    td {
      list-style: none;
    }
  }
  .course ul li {
    list-style: none;
    float: left;
  }
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