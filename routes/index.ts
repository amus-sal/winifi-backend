import * as express from 'express'
import brand from './brand'
import branch from './branch'
// import admin from './admin.ts.tx'
// import auth from './auth'
// import adminrole from './adminrole.ts.txt'



class Router {

    constructor(server: express.Express) {
        server.use('/brand', brand)
        server.use('/branch', branch)

    }
}

export default Router;