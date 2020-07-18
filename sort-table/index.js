var app = new Vue({
    el:'#app',
    data:{
        columns:[
            {
                title:'姓名',
                key: 'name'
            },
            {
                titel:'年龄',
                key:'age',
                sortabel:true
            },
            {
                titel:'出生日期',
                key:'birthday',
                sortabel:true
            },
            {
                titel:'地址',
                key:'address'
            }
        ],
        data:[
            {
                name:'王小明',
                age: 18,
                birthday:'1999-02-21',
                address:'北京市朝阳区芍药居'
            },
            {
                name:'张小刚',
                age: 25,
                birthday:'1992-01-23',
                address:'北京市海淀区西二旗'
            },
            {
                name:'李小红',
                age: 30,
                birthday:'1987-11-10',
                address:'上海市浦东新区世纪大道'
            },
            {
                name:'周小伟',
                age: 26,
                birthday:'1991-10-10',
                address:'深圳市南山区深南大道'
            }
        ]
    }
});