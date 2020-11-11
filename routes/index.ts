import * as express from 'express'
import brand from './brand'
import branch from './branch'
import Package from './package'
// import admin from './admin.ts.tx'
// import auth from './auth'
// import adminrole from './adminrole.ts.txt'



class Router {

    constructor(server: express.Express) {
        server.use('/brand', brand)
        server.use('/branch', branch)
        server.use('/package', Package)

    }
}

export default Router;
