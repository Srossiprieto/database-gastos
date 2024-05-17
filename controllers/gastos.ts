import { Request, Response } from "express";
import Gastos, { IGastos}  from "../models/gastos";


export const getGastos = async({}, res: Response) => {
    const condition = {state:true}

    const gastos = await Gastos.find(condition);


    res.json({gastos});

    console.log("Gastos obtenidos correctamente");
    
    
}

export const getGastosByCategory  = async(req:Request, res: Response) => {
    const {category} = req.params;
     
    const gastoSaved : IGastos | null  = await Gastos.findOne({category:category});

    res.json({gastoSaved});

    console.log("Gastos obtenidos correctamente");
    
    
}


export const createGasto = async(req:Request, res: Response) => {

    const gastoData : IGastos = req.body;
    const gasto = new Gastos(gastoData);

    await gasto.save();


    res.json({
        message: "Gasto creado correctamente",
        gasto
        });

    console.log("Gasto creado correctamente");
    
}

export const updateGasto = async(req:Request, res: Response) => {
    const {id} = req.params;
    const gastoData : IGastos = req.body;
    const gasto = await Gastos.findByIdAndUpdate(id, gastoData, {new:true});

    res.json({
        message: "Gasto actualizado correctamente",
        gasto
        });
    
    console.log("Gasto actualizado correctamente");

}


export const deleteGastos = async(req:Request, res: Response) => {
    const {id} = req.params;
    const gasto = await Gastos.findByIdAndUpdate(id, {state:false}, {new:true});

    res.json({
        message: "Gasto eliminado correctamente",
        gasto
        });

    console.log("Gasto eliminado correctamente");
    
}



