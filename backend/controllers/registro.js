const bcrypt = require('bcrypt')
const Usuario = require('../model/usuario')

const registro = async(req, res) => {
    const{nombre, correo, contraseña} = req.body;

    Usuario.findOne({correo}).then((usuario) =>{
        if(usuario){
            return res.json({mensaje: "Ya xiste un usuario con ese correo"});

        }else if(!nombre || !correo|| !contraseña){
            return res.json({mensaje: "Falta el nombre  / correo / contraseña "});

        }else{
            bcrypt.hash(contraseña, 10, (error, contraseñaHasheada)=>{
                if(err) res.json({err});
                else{
                    const nuevoUsuario = new Usuario({
                        nombre,
                        correo,
                        contraseña: contraseñaHasheada,
                    });

                    nuevoUsuario.save().then((usuario)=>{
                        res.json({mensaje: "Usuario creado correctamente", usuario})
                    })
                    .cath((error) => console.error(error));
                }
            });
        }
    })
}

module.exports = registro