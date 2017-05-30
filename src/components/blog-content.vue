<template>
    <div class="main">
    	<mu-list>
	    	<mu-list-item v-for="item in articleList" :key="item.title" class="item" :disableRipple="true">
		        <mu-card>
		           <!--  <mu-card-header title="yzq" subTitle="">
		                <mu-avatar src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2769494478,2715857131&fm=26&gp=0.jpg" slot="avatar" :size="60"/>
		            </mu-card-header> -->
		            <!-- <mu-card-media title="Image Title" subTitle="Image Sub Title">
		                <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3576897195,3410158209&fm=26&gp=0.jpg" />
		            </mu-card-media> -->
		            <mu-card-title title="博客主题" subTitle="2016.6.3" />
		            <mu-card-text>
		               博客内容<br>
		               博客内容<br>博客内容...<br>
		            </mu-card-text>
		            <mu-card-actions>
		                <mu-flat-button label="完整内容" :to="{path: '/blog/detail',query:{title: item.title}}" />
		                <!-- <mu-flat-button label="赞" /> -->
		            </mu-card-actions>
		        </mu-card>
		         <!-- <mu-divider style="margin-top: 30px"/> -->
	        </mu-list-item>

        </mu-list>
        <!-- <button @click="loadMore"></button> -->
        <mu-flat-button @click="loadMore" label="加载更多" />
    </div>
</template>
<script>
export default {
	data() {
		return {
			bottom: 0,
			li: [
					{
						"title": '博客主题',
						"date": 1496112858634,
						"content": '博客正文',
						"author": 'yzq',
						"type": 'piousLove'
					},
					{
						"title": '博客主题',
						"date": 1496112858634,
						"content": '博客正文',
						"author": 'yzq',
						"type": 'piousLove'
					}
				],
			articleList: [
				{
					title: '博客主题',
					time: '20.166.3',
					content: '加载更多加载更多加载更多加载更多加载更多加载更多加载更多加载更多加载更多加载更多加载更多加载更多加载更多加载更多加载更多'
				},
				{
					title: '博客主题',
					time: '20.166.3',
					content: '加载更多加载更多加载更多加载更多加载更多加载更多加载更多加载更多加载更多加载更多加载更多加载更多加载更多加载更多加载更多'
				},
				{
					title: '博客主题',
					time: '20.166.3',
					content: '加载更多加载更多加载更多加载更多加载更多加载更多加载更多加载更多加载更多加载更多加载更多加载更多加载更多加载更多加载更多'
				},
				{
					title: '博客主题',
					time: '20.166.3',
					content: '加载更多加载更多加载更多加载更多加载更多加载更多加载更多加载更多加载更多加载更多加载更多加载更多加载更多加载更多加载更多'
				},
				{
					title: '博客主题',
					time: '20.166.3',
					content: '加载更多加载更多加载更多加载更多加载更多加载更多加载更多加载更多加载更多加载更多加载更多加载更多加载更多加载更多加载更多'
				}
			]
		}
	},
	mounted() {
		// let wrapper = document.getElementsByTagName('mu-item-wrapper');
		// for (var i = 0; i < wrapper.length; i++) {
		// 	wrapper[i].
		// }
	},
	methods: {
		loadMore() {
			this.articleList.push(...this.li);
			this.bottom = 0;
		}
		// {
		// 	分类： yzq / piousLove,
		// 	pageSize: 10,
		// 	currentPage: 1
		// }
	}

}
</script>
<style scoped>
.main {
	width: 35%;
	margin: 0 auto;
	-background: #f7f5f7;
	-position: absolute;
}
.item {

}
</style>
