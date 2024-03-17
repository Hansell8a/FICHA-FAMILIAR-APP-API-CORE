const { CODE } = require('../common/http-status-code');
const axios = require('axios')


module.exports.verificarToken = async (request, response, next) => {
    let status = 'Inicie Sesión nuevamente para acceder al sistema'
    try {
        let token = request.headers["authorization"].split(' ')[1]
        if (!token) return response.status(CODE.UNAUTHORIZED).json({ status })

        let config = {
            method: 'get',
            url: `${process.env.AUTH_URL}/auth/valid`,
            headers: {
                'client-credencial': process.env.AUTH_URL_CLIENT_CREDENTIAL,
                'Authorization': token
            }
        }

        const { status } = await axios(config)
        if(status != 202) return response.status(CODE.UNAUTHORIZED).json({ status })
        next()
    } catch (error) {
        console.log(error)
        return response.status(CODE.UNAUTHORIZED).json({ status })
    }
}