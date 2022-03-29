<template>
 <div class="tabbar">
  <div class="tabbar-massage">
    <span v-for="(item,index) in tabbars" @click="Click(index)">{{item}}</span>
  </div>

 </div>
</template>

<script>
export default {
  name: "TabBar",
  data() {
    return {
      tabbars: ['直播信息录入','管理界面']
    }
  },
  methods: {
    Click(index) {
      if (index==0){
        this.$router.replace('/saveCourse')

      }else{
        this.$router.replace('/courseView')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .tabbar {
    position: fixed;
    width: 200px;
    top: 100px;
    color: black;
    background: #0e395d;
    bottom: 0;
    border-right: 1px solid #333;
  }
  .tabbar-massage {
    span {
      text-align: center;
      line-height: 50px;
      height: 50px;
      width: 200px;
      border-bottom: 1px solid pink;
      display: block;
    }
    :hover {
      color: red;
      background-color: pink;
  }
  }

</style>