<template>
    <div class="home">
      <VCarousel :bannerList="bannerList"></VCarousel>
    </div>
  </template>
  
  <script>
  import VCarousel  from "../components/VCarousel.vue";
  import axios from 'axios'
  export default {
     async created (){
         let res =  await axios.get('https://64a6b84a1ec784a9d5ed6327.hz-iframe-svc.simplelab.cn/mock/playList/banner')
         this.bannerList= res.data.banners
      },
      data(){
         return {
            bannerList:[]
         }
      },
      components: {
        VCarousel
      }
  }
  </script>
  
  <style lang="less" >
  .home{
    flex: 1 1 auto; /* 右侧100% */
  }
  </style>