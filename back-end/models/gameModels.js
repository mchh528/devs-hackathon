import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    username: String,
    password: String,
    elo: Number,
    rank_title: String
})

const problemSchema = mongoose.Schema({
    problem_id: Number,
    difficulty: Number,
    title: String,
    statement: String
})



export const userModel = mongoose.model('user', userSchema);
export const problemModel = mongoose.model('problem', problemSchema);
