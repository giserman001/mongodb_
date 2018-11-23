// 测试批量插入mongodb和循环插入mongodb性能比较


//下面循环插入
// var startTime = (new Date()).getTime();
// var db = connect('log');

// for(let i = 0; i<1000;i++){
//     db.performance.insert({num:i})
// }
// var endTime = (new Date()).getTime();
// var runTime = endTime - startTime

// print(runTime+'ms----[demo] is runing')  //672ms----[demo] is runing


// 批量插入
var tempArr = []
for(let i = 0; i<1000;i++){
    tempArr.push({num:i})
}
var startTime = (new Date()).getTime();
var db = connect('log');
db.test.insert(tempArr)
var endTime = (new Date()).getTime();
var runTime = endTime - startTime

print(runTime+'ms----[demo] is runing') //91ms----[demo] is runing

// 总结以后向数据库插入数据用批量插入，不要用循环插入