var mongoose=require('mongoose');
 mongoose.connect('mongodb://localhost:27017/share',{useNewUrlParser:true});
//  mongoose.connect( 'mongodb+srv://AkashSingh:akash9876@cluster0.wcy87x2.mongodb.net/todo?retryWrites=true&w=majority',{useNewUrlParser:true,rejectUnauthorized:false});
var conn=mongoose.Collection;

var signSchema=new mongoose.Schema({
   username:{
    type:String,
    required:true
   },
   emails:{
    type:String,
    required:true
},
password:{
    type:String,
    required:true
}
   

});

var signModel=mongoose.model('sing_data',signSchema);
module.exports=signModel;