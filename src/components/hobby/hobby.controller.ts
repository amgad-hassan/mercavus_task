import {Response,Request} from 'express'
import Hobby from './hobby.repository'





export const getHobbies = async function(req:Request,res:Response){
    const hobbies = await Hobby.find().populate('user');
    res.send(hobbies);

}


export const createHobby = async function(req:Request,res:Response){
    const hobby = new Hobby(req.body)

    const insertedHobby = await hobby.save()

    return res.send(insertedHobby)

}

export const getHobby = async function(req:Request,res:Response){
    const id = req.params.id
    const hobby = await Hobby.findById(id).populate('user');

    if (!hobby) return res.status(404).send('The hobby with the given ID was not found.');
  
    res.send(hobby);

}

export const deleteHobby = async function(req:Request,res:Response){
    const id = req.params.id
    const hobby = await Hobby.findByIdAndRemove(id);

    if (!hobby) return res.status(404).send('The hobby with the given ID was not found.');
  
    res.send(hobby);

}


export const updateHobby = async function(req:Request,res:Response){
    
    const hobby = await Hobby.findByIdAndUpdate(req.params.id,
        { 
         passionLevel: req.body.passionLevel,
          name: req.body.name,
          year: req.body.year
        }, { new: true });
    
      if (!hobby) return res.status(404).send('The hobby with the given ID was not found.');
      
      res.send(hobby);
}






