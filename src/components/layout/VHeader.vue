<template>
    <header class="header">
      <div class="logo">
        <img src="@/assets/images/logo.png" />
      </div>
      <div class="right">
        <el-input class="search" placeholder="请输入内容" prefix-icon="el-icon-search">
        </el-input>
        <div class="login-action">            
          <img src="@/assets/images/user-circle.png" />
          <p>{{userName}}</p>
          <i @click="showLogin" class="el-icon-arrow-down"></i>
          <div class="list-login" v-if="showLoginStatus">
              <router-link to="login">{{ token }} 登录 </router-link>
          </div>
        </div>
      </div>
    </header>
  </template>
  <script>
  import { mapState } from 'vuex';
    export default {
      data() {
        return {
          showLoginStatus:false,
        };
        
      },
      computed:{
        ...mapState(["userName","token"])
      },

      methods:{
        showLogin(){
          this.showLoginStatus =!this.showLoginStatus
        } 
      }
    };
  </script>
  
  <style lang="less">
  .header {
    display: flex;
    background-color: #2E7EEE;
    height: 60px;
    align-items: center;
    justify-content: space-between;
    padding: 5px;
    .logo {
      img {
        width: 200px;
        height: 41px;
      }
    }
    .right {
        display: flex;
        align-items: center;
        .search{
          margin-right: 12px;
         
        }
        .login-action{
          position: relative;
          display: flex;
          flex-direction: row;
          align-items: center;
          color: #fff;
          p{
            width: 60px;
            font-size: 14px;
            margin: 6px 0;
          }
          img{
            width: 30px;
            height: 30px;
          }
          .list-login{
            position: absolute;
            bottom: -20px;
            right: 30px;
            a{
              color: #fff;
              font-size: 14px;
              text-decoration: none;
            }
          }
        }
        
    }
  }
  </style>