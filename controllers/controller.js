export function buscarTodos(req, res){

    try{
        res.status(200).json({
            mensaje:"Exito en la busqueda",
            data:[{nombre:"Julian"},{edad:32},{nombre:"Maria",edad:26}],
            estado:true
        
        });

    }catch(e){

        res.status(400).json({
            mensaje:"Ups Datos no encontrados",
            data:[],
            estado:false
        
        });
    }

}

export function buscarporID(req, res){
    try{
        res.status(200).json({
            mensaje:"Exito en la busqueda",
            data:[{id:10235,nombre:"Julian"},{edad:31}],
            estado:true
        
        });

    }catch(e){

        res.status(400).json({
            mensaje:"Ups Id no existe",
            data:[],
            estado:false
        
        });
    }

}

export function insertar(req, res){
    try{
        res.status(200).json({
            mensaje:"Datos enviados con exito",
            estado:true
        
        });

    }catch(e){

        res.status(400).json({
            mensaje:"Ups los datos no pudieron ser ingresados, intente nuevamente",
            data:[],
            estado:false
        
        });
    }

}

export function editar(req, res){
    try{
        res.status(200).json({
            mensaje:"Se edito correctamente el registro",
            data:[{id:10235, nombre:"Julian"},{edad:25}],
            estado:true
        
        });

    }catch(e){

        res.status(400).json({
            mensaje:"Ups Datos no encontrados",
            data:[],
            estado:false
        
        });
    }
}

export function eliminar(req, res){
    try{
        res.status(200).json({
            mensaje:"Se elimino registro correctamente",
            data:[],
            estado:true
        
        });

    }catch(e){

        res.status(400).json({
            mensaje:"No se pudo eliminar registro",
            estado:false
        
        });
    }
}
