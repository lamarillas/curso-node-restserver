const { response, request } = require('express');

const usuariosGet = (req = request, res = response) => {   
    
    const { q, nombre = 'No name', apikey, page = 1, limit } = req.query;
    
    res.json({
        message: 'get API - Controller',
        q, 
        nombre,
        apikey, 
        page, 
        limit
    });
};

const usuariosPost = (req, res = response) => {   
    const body = req.body;
    res.json({
        message: 'post API - Controller',
        body
    });
};

const usuariosPut = (req, res = response) => {   
    
    const id = req.params.id;

    res.json({
        message: 'put API - Controller',
        id
    });
};

const usuariosPatch = (req, res = response) => {   
    res.json({
        message: 'patch API - Controller'
    });
};

const usuariosDelete = (req, res = response) => {   
    res.json({
        message: 'delete API - Controller'
    });
};


module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete
}