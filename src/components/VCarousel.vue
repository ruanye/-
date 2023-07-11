<template>
    <div class="banner">
      <el-carousel :interval="4000" type="card" height="260px">
        <el-carousel-item v-for="item in bannerList" :key="item.imageUrl">
          <img :src="item.imageUrl " alt="">
        </el-carousel-item>
      </el-carousel>
    </div>
  </template>
  
  <script>
  export default {
    // props:['bannerList']
    props:{
        bannerList:{
            type:Array,
             default:[]
        } 
    }

  };
  </script>
  
  <style>
  .banner{
     padding: 50px;
  }
  .el-carousel__item img {
    width: 100%;
    height: auto;
  }
  </style>