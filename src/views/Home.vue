<template>
  <div>
    <el-container>
      <el-header>

      </el-header>
      <el-container>
        <el-aside width="230px">
          <sidebar></sidebar>
        </el-aside>
        <el-main>
          name:{{name}}|name:{{name2}}
          <br>
          <el-button type="primary" @click="handleChangeName">更改name</el-button>
          <br>
          token:{{token}}|token:{{token2}}
          <br>
          <el-button type="primary" @click="handleChangeToken">更改token</el-button>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  import Sidebar from '@/components/Sidebar'
  export default {
    name: 'Home',
    data() {
      return {
      }
    },
    computed: {
      name(){
          return this.$store.getters.name;
      },
      name2(){
        return this.$store.getters.name2;
      },
      token(){
          return this.$store.getters.token;
      },
      token2(){
        return this.$store.getters.token2;
      }
    },
    components: {Sidebar},
    methods: {
      handleChangeName(){
        this.$store.dispatch("actionSetUserName", "哈哈");
//        this.$store.commit("SET_USER_NAME", "哈哈");
      },
      handleChangeToken(){
        this.$store.commit("SET_APP_TOKEN", "哈哈11111");
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
