import  User from "../models/user.model.js";

export default async(req,res)=>{   
    const {email,password} = req.body
    try{
        const user = await User.findOne({email})
        console.log(password == user.password)
        if(!user){
            return res.status(401).json({ error: 'Invalid credentials' });
        }else if(password == user.password){
            return res.status(200).send(user)
        } else{
            return res.status(401).json({ error: 'Invalid credentials' });
        }
    }catch(error){
        console.log(error);
    }
}