<template>
    <div>
        <!-- <button @click="jump">123</button> -->
        <canvas id="Mycanvas"></canvas>
        <div class="main">
        	<h1>welcome to my Blog</h1>
        	<hr class="panel-cover__divider">
        	<h2>
        		个性签名
        	</h2>
        	<hr class="panel-cover__divider down-divider">
        	<div class="btn-group">
        		<mu-raised-button label="Python" class="demo-raised-button" :to="{path: '/blog/piousLove'}" />
        		<mu-raised-button label="前端" class="demo-raised-button" :to="{path: '/blog/zys'}" />
        		<mu-raised-button label="区块链" class="demo-raised-button" :to="{path: '/blog/zys'}" />
        		<mu-raised-button label="about" class="demo-raised-button" :to="{path: '/blog/zys'}"/>
        	</div>
        </div>
    </div>
</template>
<script>
import Granim from 'granim'
export default {
    methods: {
        jump() {
            this.$router.push({
                path: '/blog/zys'
            })
            console.log(this.$router)
        }
    },
    mounted() {
    	// this.canvas()
    	var granimInstance = new Granim({
		   element: '#Mycanvas',
		   name: 'granim',
		   opacity: [1, 1],
		   states : {
		       "default-state": {
		           gradients: [
		               ['#834D9B', '#D04ED6'],
		               ['#1CD8D2', '#93EDC7']
		           ]
		       }
		   }
		})
    },
    methods: {
        canvas() {
            var WIDTH = window.innerWidth,
                HEIGHT = window.innerHeight,
                POINT = 35;

            var canvas = document.getElementById('Mycanvas');
            canvas.width = WIDTH,
                canvas.height = HEIGHT;
            var context = canvas.getContext('2d');
            context.strokeStyle = 'rgba(0,0,0,0.02)',
                context.strokeWidth = 1,
                context.fillStyle = 'rgba(0,0,0,0.05)';
            var circleArr = [];

            //线条：开始xy坐标，结束xy坐标，线条透明度
            function Line(x, y, _x, _y, o) {
                this.beginX = x,
                    this.beginY = y,
                    this.closeX = _x,
                    this.closeY = _y,
                    this.o = o;
            }
            //点：圆心xy坐标，半径，每帧移动xy的距离
            function Circle(x, y, r, moveX, moveY) {
                this.x = x,
                    this.y = y,
                    this.r = r,
                    this.moveX = moveX,
                    this.moveY = moveY;
            }
            //生成max和min之间的随机数
            function num(max, _min) {
                var min = arguments[1] || 0;
                return Math.floor(Math.random() * (max - min + 1) + min);
            }
            // 绘制原点
            function drawCricle(cxt, x, y, r, moveX, moveY) {
                var circle = new Circle(x, y, r, moveX, moveY)
                cxt.beginPath()
                cxt.arc(circle.x, circle.y, circle.r, 0, 2 * Math.PI)
                cxt.closePath()
                cxt.fill();
                return circle;
            }
            //绘制线条
            function drawLine(cxt, x, y, _x, _y, o) {
                var line = new Line(x, y, _x, _y, o)
                cxt.beginPath()
                cxt.strokeStyle = 'rgba(0,0,0,' + o + ')'
                cxt.moveTo(line.beginX, line.beginY)
                cxt.lineTo(line.closeX, line.closeY)
                cxt.closePath()
                cxt.stroke();

            }
            //初始化生成原点
            function init() {
                circleArr = [];
                for (var i = 0; i < POINT; i++) {
                    circleArr.push(drawCricle(context, num(WIDTH), num(HEIGHT), num(15, 2), num(10, -10) / 40, num(10, -10) / 40));
                }
                draw();
            }

            //每帧绘制
            function draw() {
                context.clearRect(0, 0, canvas.width, canvas.height);
                for (var i = 0; i < POINT; i++) {
                    drawCricle(context, circleArr[i].x, circleArr[i].y, circleArr[i].r);
                }
                for (var i = 0; i < POINT; i++) {
                    for (var j = 0; j < POINT; j++) {
                        if (i + j < POINT) {
                            var A = Math.abs(circleArr[i + j].x - circleArr[i].x),
                                B = Math.abs(circleArr[i + j].y - circleArr[i].y);
                            var lineLength = Math.sqrt(A * A + B * B);
                            var C = 1 / lineLength * 7 - 0.009;
                            var lineOpacity = C > 0.03 ? 0.03 : C;
                            if (lineOpacity > 0) {
                                drawLine(context, circleArr[i].x, circleArr[i].y, circleArr[i + j].x, circleArr[i + j].y, lineOpacity);
                            }
                        }
                    }
                }
            }

            //调用执行
            
            init();
            setInterval(function() {
                for (var i = 0; i < POINT; i++) {
                    var cir = circleArr[i];
                    cir.x += cir.moveX;
                    cir.y += cir.moveY;
                    if (cir.x > WIDTH) cir.x = 0;
                    else if (cir.x < 0) cir.x = WIDTH;
                    if (cir.y > HEIGHT) cir.y = 0;
                    else if (cir.y < 0) cir.y = HEIGHT;

                }
                draw();
            }, 16);
            
        }
    }
}
</script>
<style scoped>
#Mycanvas {
	position: fixed;
	top: 0;
	height: 100%;
	width: 100%;
}
.main {
	color: white;
	position: fixed;
	width: 50vw;
	height: 50vh;
	top: calc(50% - 15vh);
	left: calc(50% - 25vw);
}
h1,h2 {
	margin: 0 auto;
	text-align: center;	
	
}
h1 {
	font-size: 40px;
}
.btn-group {
	display: flex;
	justify-content: center;
}
.btn-group >a {
	margin: 0 20px;
}
.panel-cover__divider {
    width: 50%;
    margin: 50px auto;
    border-top: 1px solid rgba(255, 255, 255, 0.14);
}
.down-divider {
	width: 20%;
}
</style>
