import { Request, Response } from "express"
import { Users } from '../entity/User';
import { AppDataSource } from '../data-source';
import { getRepository } from 'typeorm';

class UserController {
 static postUser = async (req: Request, res: Response) => {
    const newUser = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        age: req.body.age,
        isActive: req.body.isActive,
        bod: req.body.bod,
        password: req.body.password
        
    }


    const user = await AppDataSource.getRepository(Users).create(newUser)
    const result = await AppDataSource.getRepository(Users).save(user)
    return res.json(result)
}
 
static getUser = async (req: Request, res: Response) => {
    const results = await AppDataSource.getRepository(Users).find()
    return res.json(results)
}
 
 static getOneUser = async function (req: Request, res: Response) {
    const id = (req.params.id).toString
    const user = await AppDataSource.getRepository(Users).findOneBy({ id: parseInt(req.params.id) })
    return res.json(Users)
} 
 
 static updateUser = async (req: Request, res: Response) => {
    const user = await AppDataSource.getRepository(Users).findOneBy({
        id: parseInt(req.params.id)
    })
    if (user) {
        AppDataSource.getRepository(Users).merge(user, req.body)
        const results = await AppDataSource.getRepository(Users).save(user)
        return res.json(results)
    }
    return res.json({ msg: "Record Not Found!!" })

} 

static deleteUser = async (req: Request, res: Response) => {
    const results = await AppDataSource.getRepository(Users).delete(req.params.id)
    return res.send(results)
} 
}
export default UserController