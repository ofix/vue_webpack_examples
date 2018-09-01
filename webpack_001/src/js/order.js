import Vue from 'vue';

Vue.component('vue-counter',{
    data:function(){
        return {count:0};
    },
    template:'<button v-on:click="count++">You clicked me {{count}} times. </button>'
});

Vue.component('blog-post',{
    props:['title'],
    template:'<button>{{title}}</button>'
})


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
    	]
    },
    methods:{
    	onSubmitOrder:function(){
    		alert("提交订单");
    	}
    }
});
