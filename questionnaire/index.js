Vue.component('next-step', {
    template: '<button @click="nextPage" :style="style" :disabled="disabled">{{title}}</button>',
    props: {
        value: {
            type: Number,
            default: 1
        },
        checked: {
            type: Array,
            default: function () {
                return [];
            }
        },
        text: {
            type: String,
            default: ""
        }
    },
    data: function () {
        return {
            currentPage: this.value,
            title: "下一步"
        }
    },
    computed: {
        style: function () {
            if ((this.currentPage == 2 && this.checked.length < 2) || (this.currentPage == 3 && this.text.length < 10)) {
                return {
                    backgroundColor: "rgb(222,225,230)"
                }
            }
        },
        disabled: function () {
            if (this.currentPage == 2 && this.checked.length < 2) {
                return true;
            }
            if (this.currentPage == 3 && this.text.length < 10) {
                return true;
            }
            return false;
        }
    },
    watch: {
        checked: function (val) {
            this.checked = val;
        },
        value: function (val) {
            var title = "";
            if (val == 1 || val == 2) {
                title = "下一步";
            } else {
                title = "提交";
            }
            this.currentPage = val;
            this.title = title;
        },
        text: function (val) {
            this.text = val;
        }
    },
    methods: {
        nextPage: function () {
            if (this.currentPage == 3) {
                this.$emit('submit');
            }
            this.currentPage++;
            this.$emit('input', this.currentPage);
        }
    }
})

Vue.component('pre-step', {
    template: '<button @click="prePage">上一步</button>',
    props: ['value'],
    data: function () {
        return {
            currentPage: this.value
        }
    },
    watch: {
        value: function (val) {
            this.currentPage = val;
        }
    },
    methods: {
        prePage: function () {
            this.currentPage--;
            this.$emit('input', this.currentPage);
        }
    }
})

Vue.component('reset', {
    template: '<button @click="reset">重置</button>',
    props: ['page', 'value'],
    methods: {
        reset: function () {
            if (this.page == 1) {
                this.$emit('input', "none");
            } else if (this.page == 2) {
                var checked = ['swim', 'movie'];
                this.$emit('input', checked);
            } else {
                this.$emit('input', "");
            }
        }
    }
})

var app = new Vue({
    el: '#app',
    data: {
        page: 1,
        picked: "none",
        checked: ['swim', 'movie'],
        text: ""
    },
    methods:{
        submit: function(){
            var sex="";
            if(this.picked=='male'){
                sex="男";
            }else if(this.picked=='female'){
                sex="女";
            }else{
                sex="保密";
            }
            var result={
                sex: sex,
                hobby: this.checked,
                description: this.text
            }
            console.log(result);
        }
    }
});