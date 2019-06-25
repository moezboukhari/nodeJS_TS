import express from "express";
import {  Request, Response } from "express";
export default class Server {
    
    constructor(private port : number) {
        
    }
    /**
     * start
: void    */
    public start(): void {
        const app = express();
        app.get("/",(req: Request, resp: Response)=>{
            resp.send("<h1>Démarrage de l'application");
            
        });        
        app.listen(this.port||3000,()=>console.log("le serveur en écoute sur le port : "+this.port));
    }
}