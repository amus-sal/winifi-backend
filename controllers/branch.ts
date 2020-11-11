import { Request, Response } from 'express';
import Branch from '../models/branch';
import Brand from '../models/brand';
import {ICrud} from '../interfaces/ICrud'

export class BranchController implements ICrud {

    constructor() { }
    readAll(req: any, res: any): void {
        throw new Error('Method not implemented.');
    }

    async create(req: Request, res: Response) {
        try {
            let branch = await Branch.create(req.body)
            let brand = await Brand.findByIdAndUpdate(req.body.brand,
                {
                 $push:{
                     branches: branch._id
                 }
                })
            res.json({ message: "The branch is created successfully", id: branch._id })
        } catch (err) {
            console.log(err)
            res.status(402).json({ message: "Not Valid Data" })
        }
    }

    async update(req: Request, res: Response) {
        try{
            let branch  = await Branch.findByIdAndUpdate(req.params.id,{
                $set: req.body
            })
            res.json({message: "The Branch is updated successfully", id: branch._id})
        }catch(err){
            res.status(402).json({message: "Not Valid Data"})
        }
    }

    async read(req: Request, res: Response) {
        try {
            let branch = await Branch.findById(req.params['id']).populate('admins')
            res.json(branch)
        } catch (error) {
            res.status(404).json({message: "Not Found"})
        }
        
    }
}