<template>

<div>
<my-header></my-header>
<div class="main">
    <div class="wrap">
        <div class="newslist-box">
            <h2>Football News</h2>
            <hr>
        </div>


        <div class="news_title">
            <h3>
                {{news.title}}
            </h3>
        </div>
        <div class="news_img">
            <img src="images/newsdetail.jpg" alt="">
        </div>
        <div class="news_content">{{news.content}}

                  <br><br><br><br>&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;相关阅读：

                  <router-link to="/news">切尔西主场血洗曼城</router-link>

                  <br><br><br><br><br><br>
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
  props:["id"],
  data(){
       return{

          news:{}
        
       }
    },
  
  methods: {
      
      loadMore(){
       
       var url = "http://lschlease.applinzi.com/content"
            
         
         this.axios.get(url,
         {

            params:{ id:this.id }

         }).then(result=>{

                  console.log(result)
                   
                  var row=result.data.data

                  console.log(row)

                  this.news=row[0] 
        
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