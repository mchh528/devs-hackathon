import mongoose from 'mongoose';

/*
Template for creating database schematic/model
and then connecting it to the mongoose system

const studentSchema = mongoose.Schema({
    regNo: String,
    studentName: String,
    grade: String,
    section: {
        type: String,
        default: 'A'
    }

});

const student = mongoose.model('student', studentSchema);

export default student;

*/

const studentSchema = mongoose.Schema({
    regNo: String,
    studentName: String,
    grade: String,
    section: {
        type: String,
        default: 'A'
    }

});

const student = mongoose.model('student', studentSchema);

export default student;