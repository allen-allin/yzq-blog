<template>
    <div class="main">
    	<mu-list>
	    	<mu-list-item v-for="item in articleList" :key="item.title" class="item" :disableRipple="true">
		        <mu-card>
		            <mu-card-title title="博客主题" subTitle="2016.6.3" />
		            <mu-card-text>
		               博客内容<br>
		               博客内容<br>
		               博客内容...
		            </mu-card-text>
		            <mu-card-actions>
		                <mu-flat-button label="完整内容" 
		                				:to="{	path: '/blog/detail/' + item.title,
		                						params:{
								                	title: item.title,
								                	date: item.date,
								                	content: item.content,
								                	author: item.author,
								                	type: item.type
							                  	}
							                 }" />
		            </mu-card-actions>
		        </mu-card>
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
				}
			]
		}
	},
	mounted() {

	},
	methods: {
		loadMore() {
			this.articleList.push(...this.li);
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
