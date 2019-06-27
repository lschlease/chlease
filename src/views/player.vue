<template>

<div>
<my-header></my-header>
<div class="wrap">
	<div class="newslist-box">
		<h2>Player</h2>
		<hr>
	</div>
</div>
<div class="video-player">
	<video :src="video.video_src" controls preload="metadata" ></video>
</div>
<my-footer></my-footer>
</div>

</template>

<script>
import myHeader from "@/components/header.vue"
import myFooter from "@/components/footer.vue"
export default {
  props:["id"],
  data(){
       return{
            video:{}
       }
    },

  methods: {
      
      loadMore(){

         var url = "http://lschlease.applinzi.com/player";
        
         //2:发送ajax请求
         this.axios.get(url,{
           params:{ id:this.id }
         }).then(result=>{
             console.log(result)
        
                 var row=result.data.data
                    
                    console.log(row)
                     
                 this.video=row[0]

                 console.log(this.video.video_src)
            
                });

        } 
    },

  created(){
        this.loadMore() 
    },

//2. 将header.vue设置为当前组件的子组件
  components:{
      myHeader,
      myFooter
    }


}
</script>
<style scoped>
  
.wrap{

  margin-top:40px

}


</style>