<template>
  <div class="main">
    <div class="navigator-container">
    <navigator/>  
    </div>
    <div class="content-container">
      <div class="header-container">
        <div class="header">
          <ItsHeader/>
        </div>
        <HeaderContainer/>
      </div>
      <div class="content">
        <BreadCrumb/>
        <router-view/>
      </div>
    </div>
    
  </div>
</template>

<script>
import Navigator from './Navigator.vue';
import ItsHeader from './ItsHeader.vue'
import HeaderContainer from './HeaderContainer.vue'
// import Content from './Content'
import BreadCrumb from './BreadCrumb.vue'
  export default {
    name: "Main",
    components: { Navigator ,ItsHeader,HeaderContainer,BreadCrumb},
  };
</script>

<style scoped>
.main{
  position: absolute;
  left: 0;
  right: 0;
  height: 100%;
  display: flex;
}
.main .navigator-container{
  flex-basis: 200px;
  height: 100%;
}
.main .content-container{
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  background-color: cornsilk;
}
.main .header-container{
  width: 100%;
  flex-basis: 80px;
  display: flex;
  justify-content: flex-end ;
  /* background-color: darkblue; */
}
.main .content-container .header-container .header{
  
  width: 50px;
  height: 50px;
  border: 1px solid;
  background-color: crimson;
  /* align-self: center; */
}
.main .content-container .content{
background-color: cyan;
flex-grow: 1;
display: flex;
flex-direction: column;
align-items: flex-end;

}



</style>