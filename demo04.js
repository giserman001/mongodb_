// 修改：状态返回与安全(findAndModify)(应该和demo03.js一起的都属于update)
// 
// 
// 
// 应答式写入就会给我们直接返回结果（报表），结果里边的包含项会很多，这样我们就可以很好的进行程序的控制和安全机制的处理。
// 有点像前端调用后端接口，无论作什么，后端都要给我一些状态字一样。
// db.listCommands()-------查看runCommand()有哪些参数
// 它是数据库运行命令的执行器，执行命令首选就要使用它，因为它在Shell和驱动程序间提供了一致的接口。（几乎操作数据库的所有操作，都可以使用runCommand来执行）
var db = connect('company');
// db.workmate.update({sex:1},{$set:{money:1000}},{upsert:false},{multi:true}) // 此时是错误写法
// db.workmate.update({sex:1},{$set:{money:100}},false,true)
// var resulteMessage = db.runCommand({getLastError:1})
//此时这个resulteMessage返回的是一个json对象我们可以根据状态updatedExisting去做一些操作
// 查看连接数据有没有通，我们可以这么操作：db.runCommand({ping:1})




//findAndModify(注意：此时不需要 var db = connect('company');)


//findAndModify属性值：
// query：需要查询的条件/文档
// sort:    进行排序
// remove：[boolean]是否删除查找到的文档，值填写true，可以删除。
// new:[boolean]返回更新前的文档还是更新后的文档。
// fields：需要返回的字段
// upsert：没有这个值是否增加


var myModify = {
  findAndModify:'workmate',
  query:{name:'JSPang'},
  update:{$set:{age:19}},
  new:true
}
var resulteMessage = db.runCommand(myModify)
printjson(resulteMessage)