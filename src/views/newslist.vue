<template>

<div>
<my-header></my-header>
<div class="main">
    <div class="wrap">

        <div class="newslist-box">
            <h2>Football News</h2>
            <hr>
        </div>

        <div class="section group">
            <div class="col_1_of_4 span_1_of_4">
                <div class="list-box">
                     <router-link :to="`/news/${n1.id}`"><img :src="n1.pic_src" ></router-link>
                </div>
            </div>
            <div class="col_1_of_4 span_1_of_4">
                <div class="list-box">
                    <router-link :to="`/news/${n2.id}`"><img :src="n2.pic_src" ></router-link>


                </div>
            </div>
            <div class="col_1_of_4 span_1_of_4">
                <div class="list-box">
                    <router-link :to="`/news/${n3.id}`"><img :src="n3.pic_src" ></router-link>


                </div>
            </div>
            <div class="col_1_of_4 span_1_of_4">
                <div class="list-box">
                    <router-link :to="`/news/${n4.id}`"><img :src="n4.pic_src" ></router-link>


                </div>
            </div>
            <div class="clear"></div>
        </div>
        <div class="section group">
            <div class="col_1_of_4 span_1_of_4">
                <div class="list-box">
                    <router-link :to="`/news/${n5.id}`"><img :src="n5.pic_src" ></router-link>


                </div>
            </div>
            <div class="col_1_of_4 span_1_of_4">
                <div class="list-box">
                    <router-link :to="`/news/${n6.id}`"><img :src="n6.pic_src" ></router-link>


                </div>
            </div>
            <div class="col_1_of_4 span_1_of_4">
                <div class="list-box">
                    <router-link :to="`/news/${n7.id}`"><img :src="n7.pic_src" ></router-link>


                </div>
            </div>
            <div class="col_1_of_4 span_1_of_4">
                <div class="list-box">
                    <router-link :to="`/news/${n8.id}`"><img :src="n8.pic_src" ></router-link>

                </div>
            </div>
            <div class="clear"></div>
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

        n1:{},
        n2:{},
        n3:{},
        n4:{},
        n5:{},
        n6:{},
        n7:{},
        n8:{}


       }
    },

  methods: {
      /* <router-link class="btn btn-primary" :to="`/details/${v1.pic_src}`"></router-link>*/
      loadMore(){

         var url = "http://lschlease.applinzi.com/newslist";
        
         //2:发送ajax请求
         this.axios.get(url).then(result=>{

             console.log(result)
        
           var row=result.data.data
         
                  this.n1=row[0]
                  this.n2=row[1]
                  this.n3=row[2]
                  this.n4=row[3]
                  this.n5=row[4]
                  this.n6=row[5]
                  this.n7=row[6]
                  this.n8=row[7]

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