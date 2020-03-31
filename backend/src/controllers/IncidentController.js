const connection = require('../database/connections');

module.exports = {

    async index(request,response){
        //Paginação limitada a 5
        const { page = 1 }  = request.query;

        //COntagem de dados
        const [count] = await connection('incidents').count();

        const incidents = await connection('incidents')
        .join('ongs', 'ong_id', '=' , 'incidents.ong_id')
        .limit(5)
        .offset((page - 1) * 5)
        .select([
            'incidents.*',
            'ongs.name',
            'ongs.email',
            'ongs.whatsapp',
            'ongs.city',
            'ongs.uf']);

        //Retornar a contagem no cabeçalho
        response.header('X-Total-Count',count['count(*)']);

        return response.json(incidents);

    },

    async create(request, response){
        const {title, description, value} = request.body;
        const ong_id = request.headers.authorization;

        const [id] = await connection('incidents').insert({
            title,
            description,
            value,
            ong_id
        });

        

        return response.json({id})
    },

    async delete(request,response){
        const {id} = request.params;
        const ong_id = request.headers.authorization;

        const incident = await connection('incidents').where('id',id).select('ong_id').first();

        //Verificaçao
        if(incident.ong_id != ong_id){
            return response.status(401).json({error: 'Operation not permited.'});
            
        }

        //Resposta
        await connection('incidents').where('id',id).delete();

        return response.status(204).send();
    }

}