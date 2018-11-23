// 数据查找，而且在开发中查找是应用最多的操作，几乎每个模块都会用到。
var workmate1={
    name:'JSPang',
    age:33,
    sex:1,
    job:'前端',
    skill:{
        skillOne:'HTML+CSS',
        skillTwo:'JavaScript',
        skillThree:'PHP'
    },
    regeditTime:new Date(),
    interest:[]
}
var workmate2={
    name:'ShengLei',
    age:31,
    sex:1,
    job:'JAVA后端',
    skill:{
        skillOne:'HTML+CSS',
        skillTwo:'J2EE',
        skillThree:'PPT'
    },
    regeditTime:new Date(),
    interest:[]
}
var workmate3={
    name:'MinJie',
    age:18,
    sex:0,
    job:'UI',
    skill:{
        skillOne:'PhotoShop',
        skillTwo:'UI',
        skillThree:'PPT'
    },
    regeditTime:new Date(),
    interest:[]
}
var workmate4={
    name:'XiaoWang',
    age:25,
    sex:1,
    job:'UI',
    skill:{
        skillOne:'PhotoShop',
        skillTwo:'UI',
        skillThree:'PPT'
    },
    regeditTime:new Date(),
    interest:[]
}
var workmate5={
    name:'LiangPeng',
    age:28,
    sex:1,
    job:'前端',
    skill:{
        skillOne:'HTML+CSS',
        skillTwo:'JavaScript',
    },
    regeditTime:new Date(),
    interest:[]
}
var workmate6={
    name:'HouFei',
    age:25,
    sex:0,
    job:'前端',
    skill:{
        skillOne:'HTML+CSS',
        skillTwo:'JavaScript',
    },
    regeditTime:new Date(),
    interest:[]
}
var workmate7={
    name:'LiuYan',
    age:35,
    sex:0,
    job:'美工',
    skill:{
        skillOne:'PhotoShop',
        skillTwo:'CAD',
    },
    regeditTime:new Date(),
    interest:[]
}
var workmate8={
    name:'DingLu',
    age:20,
    sex:0,
    job:'美工',
    skill:{
        skillOne:'PhotoShop',
        skillTwo:'CAD',
    },
    regeditTime:new Date(),
    interest:[]
}
var workmate9={
    name:'JiaPeng',
    age:29,
    sex:1,
    job:'前端',
    skill:{
        skillOne:'HTML+CSS',
        skillTwo:'JavaScript',
        skillThree:'PHP'
    },
    regeditTime:new Date(),
    interest:[]
}
var workmate10={
    name:'LiJia',
    age:26,
    sex:0,
    job:'前端',
    skill:{
        skillOne:'HTML+CSS',
        skillTwo:'JavaScript',
        skillThree:'PHP'
    },
    regeditTime:new Date(),
    interest:[]
}
var db=connect('company');
// 测试数据插入workmate_find文档中
// var workmateArray=[workmate1,workmate2,workmate3,workmate4,workmate5,workmate6,workmate7,workmate8,workmate9,workmate10];
// db.workmate_find.insert(workmateArray);



// 简单查找数据(等于修饰符)
// db.workmate_find.find({"skill.skillOne":"HTML+CSS"},{name:true,"skill.skillOne":true,_id:false})


// 不等修饰符
    // 小于($lt):英文全称less-than
    // 小于等于($lte)：英文全称less-than-equal
    // 大于($gt):英文全称greater-than
    // 大于等于($gte):英文全称greater-than-equal
    // 不等于($ne):英文全称not-equal
// db.workmate_find.find({"age":{$lt:30,$gt:25}},{name:true,"skill.skillOne":true,_id:false,age:true})
// var dataStart = new Date('2018/01/01')
// db.workmate_find.find({"regeditTime":{$gt:dataStart}},{name:true,"skill.skillOne":true,_id:false,regeditTime:true})


// 查询：find的多条件查询
    // in修饰符可以轻松解决一键多值的查询情况。(注意：这里不是区间) 与之$in相对的修饰符是$nin
    db.workmate_find.find({"age":{$in:[25,30]}},{name:true,"skill.skillOne":true,_id:false,age:true})
    db.workmate_find.find({"age":{$nin:[25,30]}},{name:true,"skill.skillOne":true,_id:false,age:true})



// // 查询：$or修饰符  它用来查询多个键值的情况(或者)
// db.workmate_find.find({$or:[{age:{$gte:30}},{"skill.skillThree":'PHP'}]},{name:true,"skill.skillThree":true,_id:false,age:true})


// 查询：$and修饰符  它用来查询多个键值的情况(并且)
db.workmate_find.find({$and:[{age:{$gte:30}},{"skill.skillThree":'PHP'}]},{name:true,"skill.skillThree":true,_id:false,age:true})


// $not修饰符 它用来查询除条件之外的值
db.workmate_find.find({age:{$not:{$lte:30,$gte:20}}},{name:true,age:true})

print('[SUCCESS]：The data was inserted successfully');