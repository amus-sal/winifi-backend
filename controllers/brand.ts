import { Request, Response } from 'express';
import  Brand from '../models/brand';
import  {ValidateBrand} from '../helper/validator'
import {ICrud} from '../interfaces/ICrud'

export class BrandController implements ICrud {

    constructor() { }
    async create(req: Request, res: Response) {
        try{
            req.body.loginType = 'OWNER'
            let validation = ValidateBrand(req.body)
            if(validation.error){
                res.status(402).json({message: "Not Valid Data"})
                return
            }
            let brand  = await Brand.create(req.body)
            res.json({message: "The Brand is created successfully", id: brand._id})
        }catch(err){
            res.status(502).json({message: "Internal Server Error"})
        }
    }

    async update(req: Request, res: Response) {
        try{
            let validation = ValidateBrand(req.body)
            if(validation.error){
                res.status(402).json({message: "Not Valid Data"})
            }
            let brand  = await Brand.findByIdAndUpdate(req.params.id,{
                $set: req.body
            })
            res.json({message: "The Brand is updated successfully", id: brand._id})
        }catch(err){
            res.status(402).json({message: "Not Valid Data"})
        }
    }

    async readAll(req: Request, res: Response) {
        try {
            let brands = await Brand.find({}).populate('branches')
            res.json(brands)
        } catch (error) {
            res.status(502).json({message: "Internal Server Error"})
        }

    }

    async read(req: Request, res: Response) {
        try {
            let brand = await Brand.findById(req.params['id']).populate('branches')
            res.json(brand)
        } catch (error) {
            res.status(404).json({message: "Not Found"})
        }

    }
}
