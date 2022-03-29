<template>
  <div className="saveCourse">
    <table>
      <tr>
        <td><span>标题:</span></td>
        <td><span>{{courseMassage.title}}</span></td>
      </tr>
      <tr>
        <td><span>老师:</span></td>
        <td>{{courseMassage.teacher}}</td>
      </tr>
      <tr>
        <td><span>技术栈:</span></td>
        <td><span>{{courseMassage.tecnology}}</span></td>
      </tr>
      <tr>
        <td><span>课程内容:</span></td>
        <td><span>{{courseMassage.courseText}}</span>
        </td>
      </tr>
      <tr>
        <td><span>直播时间:</span></td>
        <td><span>{{courseMassage.tvTime}}</span></td>
      </tr>
      <tr>
        <td><span>当前预约人数:</span></td>
        <td>
           <span>{{courseMassage.currentnums}}</span>
        </td>
      </tr>
      <tr>
        <td>
          <div>
            <button class="btn btn-warning" @click="PreClick(courseMassage.id)">预约</button>
          </div>
        </td>
        <td>
          <div>
            <button class="btn btn-success" @click="delPreClick(courseMassage.id)">取消预约</button>
          </div>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import { selectDelIp, selectPreIp, updateNumsById} from "@/network/course";

export default {
  name: "DetailView",
  props: {
    massage: ''
  },
  created() {
    this.courseMassage = this.$route.query;
  },
  data() {
    return {
      courseMassage: {},
    }
  },
  methods: {
    //预约按钮点击事件
    PreClick(id) {
      //根据id向后台发起请求，若没预约过，则将此id绑定到客户机ip地址表
      selectPreIp(id).then(res => {
        this.status = res
        /**
         *
         * res: {
         *   code: 0 / 1
         *   massage: 没有预约过 / 已经预约过了
         * }
         * code: 0 没有预约过
         * code: 1 已经预约过了
         */
        //没有预约过,执行预约加一
        if (res.code == 0) {
          //预约+1
          this.courseMassage.currentnums++
          //将加一结果给后台保存
          updateNumsById(id, this.courseMassage.currentnums).then(res => {
          })
          //已经预约过了
        } else {
          alert(res.massage)
        }
      })


    },
    //取消预约按钮点击事件
    delPreClick(id) {
      //前台提供id，后台通过id与ip匹配是否存在记录
      selectDelIp(id).then(res => {
        /**
         * res: {
         *   code: 0 / 1,
         *   massage: 请先预约 / 取消预约成功
         * }
         */
        //没有预约过
        if (res.code == 0) {
          alert(res.massage)
        } else {
          //预约过，预约人数-1
          this.courseMassage.currentnums--
          //后台请求，执行预约人数减一
          updateNumsById(id, this.courseMassage.currentnums).then(res => {
          })
        }
      })

    },
  },

}
</script>

<style lang="scss" scoped>
.saveCourse {
  text-align: center;
}

.saveCourse td {
  padding: 10px 10px;
}

#msg {
  color: red;
}
</style>