const UsuarioDAO = require("../database/DAO/UsuarioDAO.js");
const RefeicaoDAO = require("../database/DAO/RefeicaoDAO.js");
const FavoritoDAO = require("../database/DAO/FavoritoDAO.js");
const ReceitaDAO = require("../database/DAO/ReceitaDAO.js");
const UsuarioModel = require("../model/Usuario.js");
const Utils = require("../utils/Utils.js");


const UsuarioController = {
    async insertUsuario(req, res) {
        try{
            if(req.body != [] && req.body != undefined ){
                let usuario = new UsuarioModel(req.body);
                if(Utils.naoNulo(usuario.nome) && Utils.naoNulo(usuario.sobrenome) && Utils.naoNulo(usuario.nome_usuario) && Utils.naoNulo(usuario.senha) && Utils.naoNulo(usuario.email)){
                    let existeUsuario = await UsuarioDAO.selectNomeUsuariosExistente(usuario);
                    console.log(existeUsuario);
                    if(existeUsuario.length == 0){
                        await UsuarioDAO.insertUsuario(usuario);
                        res.status(200).json({
                            'type': "S",                            
                            'message': 'Sucesso ao cadastrar usuário'
                        });  
                    }else{
                        res.status(400).json({
                            'type': "E",                            
                            'message': 'Usuário já cadastrado'
                        });
                    }     
                }else{
                    res.status(400).json({ 
                        'type': "E",
                        'usuario': [],
                        'message': "Campos obrigatórios estão vazios" 
                    });  
                }
            }else{
                res.status(400).json({ 
                    'type': "E",
                    'usuario': [],
                    'message': "Corpo da requisição está vazio" 
                }); 
            }

        }catch(error){
            console.log(error);
            res.status(500).json({ 
                'type': "E",
                'usuario': [],
                'message': "Erro ao inserir usuário" });
        }
    },

    async updateUsuario(req, res) {
        try{
            if(req.body != [] && req.body != undefined ){
                let usuario = new UsuarioModel(req.body);
                if(Utils.naoNulo(usuario.id) && Utils.naoNulo(usuario.nome) && Utils.naoNulo(usuario.sobrenome) && Utils.naoNulo(usuario.nome_usuario) && Utils.naoNulo(usuario.senha) && Utils.naoNulo(usuario.email)){      
                        await UsuarioDAO.updateUsuario(usuario);
                        res.status(200).json({
                            'type': "S",                            
                            'message': 'Sucesso ao atualizar usuário'
                        });  
                   
                }else{
                    res.status(400).json({ 
                        'type': "E",
                        'usuario': [],
                        'message': "Campos obrigatórios estão vazios" 
                    });  
                }
            }else{
                res.status(400).json({ 
                    'type': "E",
                    'usuario': [],
                    'message': "Corpo da requisição está vazio" 
                }); 
            }

        }catch(error){
            console.log(error);
            res.status(500).json({ 
                'type': "E",
                'usuario': [],
                'message': "Erro ao atualizar usuário" });
        }
    },

    async deleteUsuario(req, res) {
        try{
            if(req.query != [] && req.query != undefined ){
                let usuario = new UsuarioModel(req.query);
                if(Utils.naoNulo(usuario.id)){
                        await FavoritoDAO.deleteFavoritoPorUsuario(usuario.id);
                        await RefeicaoDAO.deleteRefeicaoUsuario(usuario.id);
                        await ReceitaDAO.deleteReceitaUsuario(usuario.id);
                        await UsuarioDAO.deleteUsuario(usuario);
                        res.status(200).json({
                            'type': "S",                            
                            'message': 'Sucesso ao deletar usuário usuário'
                        });  
                   
                }else{
                    res.status(400).json({ 
                        'type': "E",
                        'usuario': [],
                        'message': "Campos obrigatórios estão vazios" 
                    });  
                }
            }else{
                res.status(400).json({ 
                    'type': "E",
                    'usuario': [],
                    'message': "Corpo da requisição está vazio" 
                }); 
            }

        }catch(error){
            console.log(error);
            res.status(500).json({ 
                'type': "E",
                'usuario': [],
                'message': "Erro ao atualizar usuário" });
        }
    },

    async selectUsuarioId(req, res) {
        try{
            if(req.query != [] && req.query != undefined ){
                let usuario = new UsuarioModel(req.query);
                if(Utils.naoNulo(usuario.id)){      
                       let usuarios =  await UsuarioDAO.selectUsuarioId(usuario.id);


                        if(usuarios.length > 0){
                            res.status(200).json({
                                'type': "S",
                                'usuarios': usuarios,                            
                                'message': 'Sucesso ao Carregar  usuário'
                            }); 
                        }else{
                            res.status(200).json({
                                'type': "S",
                                'usuarios': [],                            
                                'message': 'Usuário não encontrado'
                            });
                        }
                }else{
                    res.status(400).json({ 
                        'type': "E",
                        'usuario': [],
                        'message': "Campos obrigatórios estão vazios" 
                    });  
                }
            }else{
                res.status(400).json({ 
                    'type': "E",
                    'usuario': [],
                    'message': "Corpo da requisição está vazio" 
                }); 
            }

        }catch(error){
            console.log(error);
            res.status(500).json({ 
                'type': "E",
                'usuario': [],
                'message': "Erro ao carregar usuário" });
        }
    },

    async selectNomeUsuario(req, res) {
        try{
            if(req.query != [] && req.query != undefined ){
                let usuario = new UsuarioModel(req.query);
                if(Utils.naoNulo(usuario.nome_usuario)){      
                        let usuarios = await UsuarioDAO.selectNomeUsuarios(usuario);
                        
                        if(usuarios.length > 0){
                            res.status(200).json({
                                'type': "S",
                                'usuarios': usuarios,                            
                                'message': 'Sucesso ao Carregar  usuário'
                            }); 
                        }else{
                            res.status(200).json({
                                'type': "S",
                                'usuarios': [],                            
                                'message': 'Usuário não encontrado'
                            });
                        }
                         
                   
                }else{
                    res.status(400).json({ 
                        'type': "E",
                        'usuarios': [],
                        'message': "Campos obrigatórios estão vazios" 
                    });  
                }
            }else{
                res.status(400).json({ 
                    'type': "E",
                    'usuarios': [],
                    'message': "Corpo da requisição está vazio" 
                }); 
            }

        }catch(error){
            console.log(error);
            res.status(500).json({ 
                'type': "E",
                'usuarios': [],
                'message': "Erro ao carregar usuário" });
        }
    },

    async loginUsuario(req, res) {
        try{
            if(req.body != [] && req.body != undefined ){
                let usuario = new UsuarioModel(req.body);
                if(Utils.naoNulo(usuario.nome_usuario) && Utils.naoNulo(usuario.senha) || Utils.naoNulo(usuario.email) && Utils.naoNulo(usuario.senha)  ){      
                        let login = await UsuarioDAO.selectLoginUsuario(usuario);
                        console.log(login)
                        if(login.length > 0){
                            res.status(200).json({
                                'type': "S",                            
                                'message': 'Sucesso ao Carregar  usuário'
                            });
                        }else{
                            res.status(401).json({
                                'type': "E",                            
                                'message': 'Usuário ou senha incorretos'
                            });
                        }
                }else{
                    res.status(400).json({ 
                        'type': "E",
                        'usuario': [],
                        'message': "Campos obrigatórios estão vazios" 
                    });  
                }
            }else{
                res.status(400).json({ 
                    'type': "E",
                    'usuario': [],
                    'message': "Corpo da requisição está vazio" 
                }); 
            }

        }catch(error){
            console.log(error);
            res.status(500).json({ 
                'type': "E",
                'usuario': [],
                'message': "Erro ao carregar usuário" });
        }
    },
};

module.exports = UsuarioController;