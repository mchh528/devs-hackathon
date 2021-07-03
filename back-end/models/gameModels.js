import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    username: String,
    password: String,
    EXP: Number,
    level: Number
})

const problemSchema = mongoose.Schema({
    problem_id: Number,
    difficulty: Number,
    title: String,
    statement: String,
    test_cases: Array
})



export const userModel = mongoose.model('user', userSchema);
export const problemModel = mongoose.model('problem', problemSchema);
