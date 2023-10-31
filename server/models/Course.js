import mongoose from "mongoose";

const schema = new mongoose.Schema({
    title : {
        type :String,
        required : [true,'Please Enter Course Title'],
        minLength : [4,'Title must be atleast 4 characters'],
        maxLength : [80,"Title can't exceed 80 characters"],
    },
    description : {
        type :String,
        required : [true,'Please Enter Course Title'],
        minLength : [20,'Title must be atleast 20 characters'],
    },
    lectures : [
        {
            title:{
                type :String,
                required :true
            },
            description:{
                type :String,
                required :true
            },
            video : {
                public_id : {
                    type :String,
                    required:true
                },
                url :  {
                    type :String,
                    required:true
                },
            },
        }
    ],
    poster : {
        public_id : {
            type :String,
            required:true
        },
        url :  {
            type :String,
            required:true
        },
    },
    views : {
        type :Number,
        default : 0
    },
    numOfVideos : {
        type :Number,
        default : 0
    },
    category : {
        type :String,
        required :[true,'Please Provide Category']
    },
    createdBy : {
        type :String,
        required :[true,'Please Provide Course Creator Name']
    },
    createdAt : {
        type :Date,
        default : Date.now
    },

});

export const Course = mongoose.model('Course',schema);