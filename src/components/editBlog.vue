<template>
<mu-paper class="demo-paper form" :zDepth="2">
    <div class="container">
    	<div class="ipt">
	        <mu-text-field label="标题" labelFloat class=""/>
			<mu-raised-button label="发布" class="demo-raised-button btn" secondary/>    		
    	</div>

        <div class="quill-editor">
            <quill-editor v-model="content" ref="myQuillEditor" :options="editorOption" class="ql">
            </quill-editor>
        </div>
    </div>
</mu-paper>

</template>
<script>

	export default {
		data() {
			return {							
				title: '',
				content: '',
				editorOption: {
					  placeholder: '请输入正文'
				}
			}
		},
		created() {
			// document.getElementsByClassName('mail-wrapper')[0].style.padding = '0.3rem';
		},
		mounted() {
			let oDiv = document.getElementsByClassName('ql-editor')[0];

			oDiv.style.height = '55vh';
		},
		computed: {
			editor() {
		        return this.$refs.myQuillEditor.quill
		    }
		},
		methods: {
		      finish() {
		      	console.log(this.content)
		      }
		}
	}
</script>
<style scoped>
.form {
	width: 50%;
	margin: 50px auto;
}
.container {
	padding: 50px;
	padding-top: 20px; 
}
.ipt {
	margin-bottom: 50px;
}
.btn {
	margin-left: 55%;
}
</style>