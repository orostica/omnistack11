const connection = require('../database/connections');
const crypto = require('crypto');

//Exportar objeto
module.exports = {

    async index(request,respose){

        const ongs = await connection('ongs').select('*');
        
        return respose.json(ongs);
        
        },

    async create(request,response){
    const {name, email, whatsapp, city, uf} = request.body;

    //Gerar id aleatorio
    const id = crypto.randomBytes(4).toString('HEX');

    //salvar dados no banco
    await connection('ongs').insert({
        id,
        name,
        email,
        whatsapp,
        city,
        uf
    })

    return response.json({id});
    }
}