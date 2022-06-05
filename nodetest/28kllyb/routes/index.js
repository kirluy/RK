var express = require('express');
var path = require("path");
var mysql = require('mysql');
var ejs =require('ejs');
var fs=require('fs');
var bodyParser=require('body-parser');
const url = require('url');
var moment=require('moment');
var currenttime=moment().format('YYYY-MM-DD,HH:mm');

var router = express.Router()

var client =mysql.createConnection({
	host:'localhost',
	port:'3306',
	user:'root',
	password:'root',
	database:'node_user'
});
client.connect(function(err){
	if(err){
		console.log('[query]-:'+err);
		return;
	}
	console.log('[connection index connect] 连接成功');
});
client.query('USE node_user');
client.query('SELECT * FROM book_user',function(error,result,fields){
	if(error){
		console.log('查询错误');
		
	}else{
		console.log(result);
	}
}); 



router.get('/',function(req,res){
	res.render('index', {  });
    // res.sendFile(path.join(__dirname,"../views/index.ejs"))
    //_dirname:当前文件的路径，path.join():合并路径
	// const ejs = fs.readFileSync('./views/index.ejs', 'utf-8')
	//     const session = req.session  // 获得session
	//     session['key'] = 'value'  // 设置session
	//     console.log(session)
	//     res.setHeader('set-cookies', session['key']) // 保存cookie在headers中(这里修改了session，服务器会自动生成set-cookie字段)
	//     res.end(ejs)  
})
/**
*登录验证功能
*/
router.get('/login', function(req, res) {
	
    res.render('login', {
        layout: false,
        title: "登录页面",
        loginInfo: 'login paper'
    });
    
});
router.post('/login', function(req, res) {
	
    res.render('login', {
        layout: false,
        title: "登录页面",
        loginInfo: 'login paper'
    });
    
});
router.get('/k', function(req, res) {
	var name = req.query.username
	var pwd = req.query.password
	var pwd2 = req.query.password2
	var em =req.query.email
	var user = [name,pwd,em];
	
	var query1 = 'insert into book_user(user_account,user_pwd,user_email) values(?,?,?)';
	var query2 = 'DELETE FROM book_user WHERE  user_account IS NULL';
	client.query(query2);
	client.query(query1,user,function(err,result){
	if(err) throw err;
	console.log(err)})
    res.render('login', {
        layout: false,
        title: "登录页面",
        loginInfo: 'login paper'
    });
    
});

router.get('/main',function(req,res){
		var name = req.query.username
        var pwd = req.query.password
        var query1 = "select * from book_user where user_account='"+name+"' and user_pwd='"+pwd+"'"
		var query2 = 'DELETE FROM book_message WHERE  message_name IS NULL';
		var query3 = "select * from book_user where user_account='"+name+"'"
		client.query(query2);
		if(!req.session.islogin){
			client.query(query1,function(err,result){
			    if (err) throw err;
				console.log(err+'无错')
				console.log(result+'hhhhh')
			    console.log("!!!",result)
			    if(result.length==0){
			        res.send("<script>alert('用户名或密码错误,请返回重新登录');location.href = '/login';</script>")
					
			    }else{
					console.log(result)
					client.query(query1,function(err,resu){
						datas:resu
						client.query('select * from book_message',function(err,results){
							console.log(results);
							res.render('main',{
								data:results,
								datas:resu
								
							});
						})
					})
				};
					// readData(function(data){
				})	// 	res.render('main',data);	
					// 		})}	
			}
})
router.get('/mainnew',function(req,res){
		// readData(function(data){
		// 			res.render('mainnew',data);	
		// 				})
		var query2 = 'DELETE FROM book_message WHERE  message_name IS NULL';
		client.query(query2);
		
		// ,function(){
		// 	res.redirect('/mainnew');
		// })
		client.query('select * from book_message',function(err,results){
			console.log(results);
			res.render('mainnew',{
				data:results
			});
		});
        
})

/***
 * 注册功能
 */
router.get('/register',function(req,res){
		var name = req.query.username
        var pwd = req.query.password
    	var pwd2 = req.query.password2
		var em =req.query.email
    	var user = [name,pwd,em];
        
        var query1 = 'insert into book_user(user_account,user_pwd,user_email) values(?,?,?)';
        client.query(query1,user,function(err,result){
        if(err) throw err;
        console.log(err)
        
		res.render('register', {  });
		 // res.sendFile('../views/login.ejs',{ root: __dirname });
		 // res.sendfile(path.join(__dirname,"../public/login.html"))
        })
})

router.post('/register',function(req,res){
		var name = req.query.username
        var pwd = req.query.password
    	var pwd2 = req.query.password2
		var em =req.query.email
    	var user = [name,pwd,em];
        
        var query1 = 'insert into book_user(user_account,user_pwd,user_email) values(?,?,?)';
        client.query(query1,user,function(err,result){
        if(err) throw err;
        console.log("***")
        
        })
})
router.get('/post',function(req,res){
	var name = req.query.name
	var message = req.query.message
	var mes=[name,message]
	var query3 = 'insert into book_message(message_name,message_message) values(?,?)';
	
		client.query(query3,mes,function(err,result){
		if(err) throw err;
		console.log(err)})
		
		res.render('post');
		// fs.readFile('post.ejs','utf8',function(error,data){
		// 	res.send(data);
		// })
	
	
	// readData(function(data){
	// 	res.render('post',data);
	// })
	
});



router.post('/post',function(req,res){
	var body = require.body;
	client.query('insert into book_message(message_name,message_message) values(?,?)',[
		req.body.name,req.body.message
	],function(){
		res.redirect('/mainnew');
	});
});

router.get('/delete/:message_id',function(req,res){
	client.query('DELETE FROM book_message WHERE message_id=?',[
		req.params.message_id
	],function(){
		res.redirect('/mainnew');
	})
});

router.get('/release',function(req,res){
	
	
	
	let parseObj=url.parse(req.url,true);
	let message=parseObj.query;
	message.dateTime=currenttime;
	readData(function(data){
		data.list.push(message);
		writeData(data,()=>{
			res.redirect('/mainnew');
		});
	});
	
});

// var data = fs.readFileSync('data/data.json');
// data = JSON.parse(data);
// data["list"].forEach((item, index) => {
//   var name = item['name'];
//   var message = item['message'];
//   var dateTime = item['dateTime'];
  
//   client.query(
//     `insert into book_message (message_name,message_message,message_dateTime) values ('${name}','${message}','${dateTime}')`,function(err,data){
//       if(err) throw err;
//       console.log(data);
//     })
// })

module.exports = router;
// function readData(fn){
// 	fs.readFile(path.join(__dirname,'../data/data.json'),'utf8',(err,data)=>{
// 		if(err){
// 			return console.log(err);
// 		}
// //把数据转成ison格式
// 		data = JSON.parse(data);
// 		fn&&fn(data);
// 	})
// }
// function writeData(data,fn){
// 	data=JSON.stringify(data,null,2);//将js对家转成数据
// 	fs.writeFile(path.join(__dirname,'../data/data.json'),data,(err)=>{
// 		if(err){
// 			return console.log(err);
// 		}

// 		fn&&fn();
// 	})
// }



