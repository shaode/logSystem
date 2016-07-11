/**
 * Created by 刘娟娟 on 2016/7/6.
 */
'use strict';
const Dairy = require('../models/dairy');
//client
exports.insert=(req,res)=>{
    let dairyObj=new Dairy(req.body);
    dairyObj.save((err,data)=>{
        if(err){
            res.json({code:500,data:err});
        }else{
            res.json({code:200,data:data});
        }
    })

};
exports.findByUser=(req,res)=>{
    Dairy.find({user_id:req.params.userId})
    .sort({create_date:-1})
    .exec((err,data)=>{
        if(err){
            res.json({code:555,data:err})
        }else{
            res.json({code:200,data:data})
        }
    })
};
exports.isInsert=(req,res)=>{
    var today = new Date();
    today.setHours(0);
    today.setMinutes(0);
    today.setSeconds(0);
    today.setMilliseconds(0);
    Dairy.count({user_id:req.params.userId,create_date:{$gt:today}},(err,data)=>{
        if(err){
            res.json({code:555,data:err})
        }else{
            if(data>0){
                res.json({code:201,data:data})
            }else{
                res.json({code:200,data:data})
            }
        }
    })
};