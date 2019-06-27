<template>

<div>
<my-header></my-header>

<div class="main">
    <div class="wrap">
        <div class="content-video">
            <div class="index-box">
                <h2>Video Highlights</h2>
                <hr>

                <div class="section group">
                    <div class="col_1_of_4 span_1_of_4">
                        <router-link :to="`/player/${v1.id}`">
                        <img :src="v1.pic_src" >
                        </router-link>
                    </div>
                    <div class="col_1_of_4 span_1_of_4">
                        <router-link :to="`/player/${v2.id}`">
                        <img :src="v2.pic_src" >
                        </router-link>
                    </div>
                    <div class="col_1_of_4 span_1_of_4">
                        <router-link :to="`/player/${v3.id}`">
                        <img :src="v3.pic_src" >
                        </router-link>
                    </div>
                    <div class="col_1_of_4 span_1_of_4">
                        <router-link :to="`/player/${v4.id}`">
                        <img :src="v4.pic_src" >
                        </router-link>
                    </div>
                    <div class="clear"></div>
                </div>
            </div>
        </div>
        <div class="content-news">
            <div class="index-box">
                <h2>Football News</h2>
                <hr>

                <div class="section group">
                    <div class="col_1_of_4 span_1_of_4">
                       <router-link :to="`/news/${n1.id}`">
                        <img :src="n1.pic_src" >
                        </router-link>
                    </div>
                    <div class="col_1_of_4 span_1_of_4">
                        <router-link :to="`/news/${n2.id}`">
                        <img :src="n2.pic_src" >
                        </router-link>
                    </div>
                    <div class="col_1_of_4 span_1_of_4">
                        <router-link :to="`/news/${n3.id}`">
                        <img :src="n3.pic_src" >
                        </router-link>
                    </div>
                    <div class="col_1_of_4 span_1_of_4">
                        <router-link :to="`/news/${n4.id}`">
                        <img :src="n4.pic_src" >
                        </router-link>
                    </div>
                    <div class="clear"></div>
                </div>
            </div>
        </div>

    </div>
</div>

<my-footer></my-footer>
</div>

</template>
<script>
//1. 先引入header.vue组件对象，临时命名为myHeader，将来组件标签就是<my-header>
import myHeader from "@/components/header.vue"
import myFooter from "@/components/footer.vue"
export default {
  
  data(){
       return{

        v1:{},
        v2:{},
        v3:{},
        v4:{},
        n1:{},
        n2:{},
        n3:{},
        n4:{}


       }
    },

  methods: {
      /* <router-link class="btn btn-primary" :to="`/details/${v1.pic_src}`"></router-link>*/
      loadMore(){

         var url = "http://lschlease.applinzi.com/list";
        
         //2:发送ajax请求
         this.axios.get(url).then(result=>{
             console.log(result)
        
           var row=result.data.data
         
                  this.v1=row[0]
                  this.v2=row[1]
                  this.v3=row[2]
                  this.v4=row[3]
                  this.n1=row[4]
                  this.n2=row[5]
                  this.n3=row[6]
                  this.n4=row[7]

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

.section group>div:hover{
transform: scale(1.1, 1.1);
}


</style>