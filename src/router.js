import Vue from 'vue'
import Router from 'vue-router'
import Index from   './views/index.vue'
import Newslist from  './views/newslist.vue'
import News from './views/news.vue'
import Video from './views/video.vue'
import Player from './views/player.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/',component: Index},
    {path: '/index',component: Index},
    {path: '/newslist',component: Newslist},
    {path: '/news/:id',component: News,props:true},
    {path: '/video',component: Video},
    {path: '/player/:id',component: Player,props:true}

  ]
}) 
