
var db = connect('company');
// 一：修改：初识update修改器

  // db.workmate.update({'name': 'MinJie'},{'$set':{sex:0,age:18}});

  // 修改嵌套内容(内嵌文档)

  // db.workmate.update({'name': 'MinJie'},{'$set':{'skill.SkillThree': 'word'}});

  // $unset用于将key删除
  // db.workmate.update({'name': 'MinJie'},{'$unset':{'age': ''}});

  // $inc对数字进行计算
  // db.workmate.update({'name': 'MinJie'},{'$inc':{'age': -2}});

  // multi选项 (对文档类所有数据加一个字段) 如果数据理由这个字段他就不加了，没有就加上
  // multi是有ture和false两个值，true代表全部修改，false代表只修改一个（默认值）

  // db.workmate.update({},{'$set':{'interset': []}},{multi:true});

  // upsert选项(数据库中如果没有数据就添加，有就是修改)
  // upsert是在找不到值的情况下，直接插入这条数据。  upsert也有两个值：true代表没有就添加，false代表没有不添加(默认值)。
  // db.workmate.update({name:'xiaoWang'},{$set:{age:20}},{upsert:true})


// 二：修改：update数组修改器


  // $push追加数组/内嵌文档值  当然$push修饰符还可以为内嵌文档增加值
  // db.workmate.update({'name':'xiaowang'},{'$push':{'interset':'draw'}});
  // 注意 ：这里的SkillFourz这个key是没有的。小技巧
  // db.workmate.update({'name':'MinJie'},{'$push':{'skill.SkillFour':'draw'}});
  // 自己测试{新加一个key,并且key值是对象}
  // db.workmate.update({'name':'MinJie'},{'$set':{'hobby':{}}},{upsert:true});


  // $ne查找数组中某一个值是否存在  注意：它主要的作用是，检查一个值是否存在，如果不存在再执行操作，存在就不执行，这个很容易弄反，记得我刚学的时候就经常弄反这个修改器的作用，给自己增加了很多坑。
  // 总结：没有则修改，有则不修改。(难道是数组里去查询有没有某个值得存在与否)
  // db.workmate.update({'name':'xiaowang','interset':{'$ne':'playGame'}},{'$push':{'interset':'game'}});
  

  // $addToSet 升级版的$ne   它是$ne的升级版本（查找是否存在，不存在就push上去），操作起来更直观和方便，所以再工作中这个要比$en用的多。
  // 两者区别就是写法要注意！！！
  // db.workmate.update({'name':'xiaowang'},{'$addToSet':{'interset':'readBook'}});
  

  // $each 批量追加
  // var newInterset=["Sing","Dance","Code"];
  // db.workmate.update({'name':'xiaowang'},{'$addToSet':{'interset':{'$each': newInterset}}});


  // $pop 删除数组值 
  // $pop只删除一次，并不是删除所有数组中的值。而且它有两个选项，一个是1(从数组末端进行删除)和-1(-1：从数组开端进行删除)。
  // db.workmate.update({'name':'xiaowang'},{'$pop':{'interset':1}});
  

  // 数组定位修改(指定位置修改)
  // 有时候只知道修改数组的第几位，但并不知道是什么，这时候我们可以使用interest.int 的形式。
  db.workmate.update({'name':'xiaowang'},{'$set':{'interset.2':'music'}}); // 注意这里的计数是从0开始的。
  // 以上都是非应答式操作数据库。这就是一种不便之处。
print('[SUCCESS]: The data was inserted successfully.' + db);