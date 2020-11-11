import { Request, Response } from 'express';
import  PackageModel from '../models/package';
import  {ValidatePackage} from '../helper/validator'
import {ICrud} from '../interfaces/ICrud'

export class PackageController implements ICrud {

  constructor(){}

     async update(req: Request, res: Response) {
        try{
            let validation = ValidatePackage(req.body)
            if(validation.error){
                res.status(402).json({message: "Not Valid Data"})
            }
            await PackageModel.findByIdAndUpdate(req.params.id,{
                $set: req.body
            })
            res.json({message: "The Package is updated successfully"})
        }catch(err){
            res.status(402).json({message: "Not Valid Data"})
        }
    }

    async create(req: Request, res: Response) {
      try{
          let validation = ValidatePackage(req.body)
          if(validation.error){
            res.status(402).json(validation.error)
            return
          }
          await PackageModel.create(req.body)
          res.json({message: "The Package is created successfully"})
      }catch(err){
          res.status(502).json({message: err})
      }
  }

    async read(req: Request, res: Response) {
        try {
            let pack = await PackageModel.findById(req.params['id']);
            res.json(pack)
        } catch (error) {
            res.status(404).json({message: "Not Found"})
        }

    }
    async readAll(req: Request, res: Response) {
      try {
          let packages = await PackageModel.find()
          res.json(packages)
      } catch (error) {
          res.status(502).json({message: "Internal Server Error"})
      }

  }
}
