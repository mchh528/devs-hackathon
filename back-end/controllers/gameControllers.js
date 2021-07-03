import { userModel, problemModel } from '../models/gameModels.js';

let looking_to_play = [];
let match_found = {

};
let vsing = {};

let problems = {

}

let all_code = {

}


// function taking request to play and sending back confirmation of request


export const createUser = async (req, res) => {
    const userInfo = req.body;
    userInfo.exp = 0;
    userInfo.level = 0;
    console.log(userInfo);
    const userJSON = new userModel(userInfo);
    try {
        /*let found = userModel.findOne({username : userInfo.username}).then(user => {
            console.log(user.username);
            if (user.username === userInfo.username) {
                console.log("OK")
            }
            else {
                console.log("YESSS")
            }
        });
        if(found) {
            console.log(found)
            console.log("OK")
            return res.status(201).json(found);
        }
        else {
            console.log("YESS")
            
        }*/
        await userJSON.save();

        return res.status(201).json(userInfo);
        
    } catch (error) {
        return res.status(201).json(userInfo);
    }
}


export const getProblemInfo = (req, res) => {
    const user_id = req.param.id;
    if((user_id in match_found) && !match_found[user_id]) {
        res.status(200).json({vsing: "Not found",
        title: "",
        statement: ""});
    }
    else{
        res.status(200).json({vsing: vsing[user_id],
        title: "what's 9+10?",
        statement: "21"});
        all_code[user_id] = "";
    }
    
}


export const take_request = async (req, res) => {
    try {
        const user_id = req.param.id;
        res.status(200);
        looking_to_play.push(user_id);
        match_found[user_id] = false;
        while((user_id in match_found) && !match_found[user_id]) {
            if(looking_to_play.length > 0) {
                match_found[user_id] = true;
                looking_to_play.remove(user_id);
                // let user_2 = looking_to_play.pop();
                let user_2 = "lmfao";
                match_found[user_2] = true;
                vsing[user_id] = user_2;
                vsing[user_2] = vsing[user_id];
                delete match_found[user_id];
            }
            await sleep(2000);  
        }
    } catch (error) {
        res.status(404).json({ message: error.message});
    }
}

export const code_output = async(req, res) => {
    try {
        console.log(all_code);
        let info = req.data;
        let code = info.code;   
        let user_id = info.id;

        all_code[user_id] = code;
        console.log(code);
        res.status(200);
        
    }
    catch {
        return "ok"
    }
}


export const code_opponent = (req, res) => {
    const user_id = req.param.id;
    let user_2 = vsing[user_id];
    res.status(200).json({code: all_code[user_2]});
    console.log(all_code[user_2])
}


// function for finding users to match
const find_user = (id) => {
    for(var user_2 in looking_to_play) {
        if(user_2 == id) {
            continue;
        }
        match_found[id] = true;
        match_found[user_2] = true;
        return user_2;
    }
}
// function for confirming whether a user has been found or not
const confirm_found = (req, res, id) => {
    if(id in found && found[id]) {
        res.status(200).json({found:true});
    }
    else {
        res.status(200).json({found:false});
    }
}

// function for returning problem information (statement)
// function for testing code against test cases
// function for
// function for sending back played result