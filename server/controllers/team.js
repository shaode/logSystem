/**
 * Created by 刘娟娟 on 2016/6/29.
 */
'use strict';
const Team = require('../models/team');
const User = require('../models/user');
exports.find=(req,res)=>{
    Team.find({})
        .sort({create_date:-1})
        .exec((err,users)=>{
            if(err){
                res.json({code:555,data:err})
            }else{
                res.json({code:200,data:users})
            }
        })
};
exports.update=(req,res)=>{
    Team.update({_id:req.body._id},{$set:{name:req.body.name}},(err,data)=>{
        if(err){
            res.json({code:555,data:err})
        }else{
            res.json({code:200,data:data})
        }
    })
};
exports.insert=(req,res)=>{
    let teamObj=new Team({name:req.body.name});
    teamObj.save((err,data)=>{
        if(err){
            res.json({code:555,data:err})
        }else{
            res.json({code:200,data:data})
        }
    })
};
exports.remove=(req,res)=>{
    User.count({team:req.params._id},(err,count)=>{
        if(err){
            res.json({code:555,data:err})
        }else{
            if(count>0){
                res.json({code:203,data:count})
            }else{
                Team.remove({_id:req.params._id},(err,data)=>{
                    if(err){
                        res.json({code:555,data:err})
                    }else{
                        res.json({code:200,data:data})
                    }
                })
            }
        }
    })
};