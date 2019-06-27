<template>

<div>
<my-header></my-header>
<div class="main">
	 <div class="wrap">
		<div class="products">
			 <div class="video-box">
				<h2>Video Highlights</h2>
				<hr>
			 </div>

		    <div class="section group">
				<div class="col_1_of_4 span_1_of_4">
					<router-link :to="`/player/${v1.id}`"><img :src="v1.pic_src" ></router-link>
				</div>
				<div class="col_1_of_4 span_1_of_4">
					<router-link :to="`/player/${v2.id}`"><img :src="v2.pic_src" ></router-link>
				</div>
				<div class="col_1_of_4 span_1_of_4">
					<router-link :to="`/player/${v3.id}`"><img :src="v3.pic_src" ></router-link>
				</div>
				<div class="col_1_of_4 span_1_of_4">
					<router-link :to="`/player/${v4.id}`"><img :src="v4.pic_src" ></router-link>
				</div>
				<div class="clear"></div>
			</div>
		    <div class="section group">
				<div class="col_1_of_4 span_1_of_4">
					<router-link :to="`/player/${v5.id}`"><img :src="v5.pic_src" ></router-link>
				</div>
				<div class="col_1_of_4 span_1_of_4">
					<router-link :to="`/player/${v6.id}`"><img :src="v6.pic_src" ></router-link>
				</div>
				<div class="col_1_of_4 span_1_of_4">
					<router-link :to="`/player/${v7.id}`"><img :src="v7.pic_src" ></router-link>
				</div>
				<div class="col_1_of_4 span_1_of_4">
					<router-link :to="`/player/${v8.id}`"><img :src="v8.pic_src" ></router-link>
				</div>
				<div class="clear"></div>
			</div>

		</div>
	 </div>
	</div>
<my-footer></my-footer>
</div>

</template>

<script>
import myHeader from "@/components/header.vue"
import myFooter from "@/components/footer.vue"
export default {
  
  data(){
       return{

        v1:{},
        v2:{},
        v3:{},
        v4:{},
        v5:{},
        v6:{},
        v7:{},
        v8:{}


       }
    },

  methods: {
      /* <router-link class="btn btn-primary" :to="`/details/${v1.pic_src}`"></router-link>*/
      loadMore(){

         var url = "http://lschlease.applinzi.com/video";
        
         //2:发送ajax请求
         this.axios.get(url).then(result=>{
          
					console.log(result)
				   
           var row=result.data.data
         
                  this.v1=row[0]
                  this.v2=row[1]
                  this.v3=row[2]
                  this.v4=row[3]
                  this.v5=row[4]
                  this.v6=row[5]
                  this.v7=row[6]
                  this.v8=row[7]

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
  
.main{

  margin-top:40px

}


</style>