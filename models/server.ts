import express, {Express} from 'express';
import gastosRoutes from '../routes/routesGastos';
import {connectDB} from '../database/config';

export class Server {
    app:Express;

    constructor(){
        this.app=express();
        this.conectionDB();
        this.middlewares();
        this.routes();
            
    }

    
    async conectionDB():Promise<void>{
        await connectDB();
    }
    middlewares():void{
        this.app.use(express.json())
    }
    routes():void {
        this.app.use('/gastos', gastosRoutes)
    }
    listen(): void {
        const port = 8080;
        this.app.listen(port, () => {
            console.log(`Server running at ===> http://localhost:${port}`);
        });
    }

}