import {Response,Request} from 'express'
import User from './user.repository'


export const getUsers = async function(req:Request,res:Response){
    const users = await User.find();
    res.send(users);

}

export const createUser = async function(req:Request,res:Response){
    const user = new User(req.body)

    const insertedUser = await user.save()

    return res.send(insertedUser)

}


export const getUser = async function(req:Request,res:Response){
    const id = req.params.id
    const user = await User.findById(id);

    if (!user) return res.status(404).send('The user with the given ID was not found.');
  
    res.send(user);

}


export const deleteUser = async function(req:Request,res:Response){
    const id = req.params.id
    const user = await User.findByIdAndRemove(id);

    if (!user) return res.status(404).send('The user with the given ID was not found.');
  
    res.send(user);

}


export const updateUser = async function(req:Request,res:Response){
    
    const user = await User.findByIdAndUpdate(req.params.id,
        { 
         name: req.body.name
        }, { new: true });
    
      if (!user) return res.status(404).send('The user with the given ID was not found.');
      
      res.send(user);
}









