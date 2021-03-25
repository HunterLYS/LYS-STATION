<template>
	<div class="error-page">
		<section class="error-page_content">
			<img src="../../assets/images/error/j-404.png">
			<p>哎呀... 没有找到你想要的内容！</p>
			<!-- <div>
				<span class="home" @click.stop="$router.replace({name: 'LlsIndexIndex'})">返回首页</span>
				<span class="previous" @click.stop="$router.go(-1)">返回上一页</span>
			</div> -->
		</section>
	</div>
</template>

<style lang="scss" scoped>
.error-page {
	.error-page_content {
		width: 800px;
		height: 500px;
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		margin: auto;
		
		& > img {
			display: block;
			margin: 0 auto 50px;
		}
		
		& > p { 
			font-size: 25px;
			font-family: "PingFang SC";
			color: #888;
			text-align: center;
		}
		
		& > div {
			height: 30px;
			width: 400px;
			margin: 30px auto;
			text-align: center;
			
			& > span {
				display: inline-block;
				width: 100px;
				height: 100%;
				line-height: 30px;
				text-align: center;
				font-size: 12px;
				color: #fff;
				background-color: #DCDFE6;
				border: none;
				border-radius: 4px;
				padding: 0 15px;
				box-sizing: border-box;
				margin: 0 25px;
				cursor: pointer;
				font-weight: bold;
				
				&:last-child {
					background-color: #B6D6FF;
				}
			}
		}
	}
}
</style>
