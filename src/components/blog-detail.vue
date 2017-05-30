<template>
	<div>
		<div class="header">
			<div class="title">{{ $route.params.title}}
				<mu-badge :content="$route.params.title" slot="after"/>
			</div>
			<div class="author">{{$route.params.author}}</div>
			<div class="date">{{$route.params.date}}</div>
		</div>
		<div class="main" v-html="$route.params.content">
			
		</div>
	</div>
</template>
<script>
export default {
	created() {
		console.log(this.$route.params)
	}
}
</script>
<style scoped>
	
</style>