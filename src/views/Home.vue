<template>
    <div class="home">
      <VCarousel :bannerList="bannerList"></VCarousel>
      {{ nickName }}
    </div>
  </template>
  
  <script>

  import VCarousel  from "../components/VCarousel.vue";
  import  {getBanner} from  '../api/index'
  import { mapGetters } from "vuex";
  export default {
     async created (){
         let  res = await getBanner();
         this.bannerList= res.banners
      },
      computed:{
         ...mapGetters(['nickName']),
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