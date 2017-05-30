import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import zys from '@/components/zys'
import piousLove from '@/components/piousLove'
import blogContent from '@/components/blog-content'
import homePage from '@/components/homePage'
import writeBlog from '@/components/editBlog'
import detail from '@/components/blog-detail'


Vue.use(Router)

const routes = [{
    path: '/',
    name: 'homePage',
    component: homePage
}, {
    path: '/blog/zys',
    component: zys
}, {
    path: '/blog/piousLove',
    component: piousLove
}, {
	path: '/editBlog',
	component: writeBlog
}, {
    path: '/blog/detail/:title',
    component: detail
}]
export default new Router({
    routes,
    mode: 'history'
})
