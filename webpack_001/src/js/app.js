import Vue from 'vue';
import Test from '../components/test.vue'

Vue.component("button-counter",{
    data:function(){
        return {
            count:0
        }
    },
    template:'<button v-on:click="count++">You clicked me {{count}} times.</button>'
});

Vue.component('blog-post',{
    props:['post'],
    template:`<div>
        <h3>{{post.title}}<button v-on:click="$emit('enlarge-font')">放大字体</button></h3>
        <div>{{post.publish_date}}</div>
        <div>{{post.author}}</div><button v-on:click="$emit('ensmall-font')">缩小字体</button>
        </div>`
});

let app = new Vue({
    el:'#app',
    data:{
    	message:"hello tom song!",
    	orders:[{
    		name:"订单001",
    	},{
    		name:"订单002",
    	},{
    		name:"订单003"
    	}
    	],
        posts:[
            {
                title:"post标题01",
                publish_date:"2018-08-23",
                author:"宋华彪"
            },{
                title:"post标题02",
                publish_date:"2019-09-23",
                author:"唐晓燕"
            }
        ],
        postFontSize:1
    },
    methods:{
    	onSubmitOrder:function(){
    		alert("提交订单");
    	}
    }
});

let y = 123;
console.log(y/0);

console.log("are you OKsssss HHHHHHHHHHHHH？");

new Vue({
    el:'#app',
    render:h=>h(Test)
})

new Vue({
    el:'#list-animate-demo',
    data:{
        animateItems:[1,2,3,4,5,6,7,8,9],
        nextNum:10
    },
    methods:{
        randomIndex:function(){
            return Math.floor(Math.random()*this.animateItems.length)
        },
        add:function(){
            this.animateItems.splice(this.randomIndex(),0,this.nextNum++)
        },
        remove:function(){
            this.animateItems.splice(this.randomIndex(),1)
        },
        shuffle: function () {
          this.animateItems = _.shuffle(this.animateItems)
        }
    }
});

