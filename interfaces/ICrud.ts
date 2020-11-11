export interface ICrud {
    update(req: any,res: any) :void 
    create(req: any,res: any) :void 
    read(req: any,res: any) :void 
    readAll(req: any,res: any) :void 
}