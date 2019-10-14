const User=require('../model/user');

insertUser= function (req, res, next){
    const user = new User({
      userName: req.body.username,
      userMail: req.body.usermail
    });
    user.save((error, result)=>{
      if(error){
        console.log(error);
        res.redirect('/');
        return;
      }
    console.log(result);
    res.redirect('/getusers');
    })
  };
getUsers = function(req, res, next){
    User.find({/*on peut mettre le "where" ici ex: username:hello */}, 'userName userMail',(error, result)=>{
      if(error){
        console.log(error);
        res.redirect('/');
      }
      console.log(result);
      res.render('index', {items: result})
    })
  }
updateUser=function(req, res, next){
    const ID = req.body.id;
    const updateUser={
      userName: req.body.username,
      userMail: req.body.usermail
    }
    User.updateOne({ _id: ID}, {$set: updateUser}, (error, doc)=>{
      if(error){
        console.log(error);
        res.redirect('/');
      }
      console.log(doc);
      res.redirect('/getusers');
    })
    };
deleteUser= function(req, res, next){
    const ID = req.body.id;
  
    User.deleteOne({ _id: ID}, (error, doc)=>{
      if(error){
        console.log(error);
        res.redirect('/');
      }
      console.log(doc);
      res.redirect('/getusers');
    })
    }
  module.exports= {
      insertUser: insertUser,
      getUsers: getUsers, 
      updateUser: updateUser,
      deleteUser: deleteUser
  }