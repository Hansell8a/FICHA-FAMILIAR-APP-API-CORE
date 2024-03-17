var Catalogo = require("../models/catalogoModel");

exports.catalogosRowMapper = async (resultSet) => {
    const rows = await resultSet.getRows();
    var objeto = [];
    rows.forEach(function (element) {
        Catalogo.catalogoId = element.CATALOGO_ID;
        Catalogo.codigoInternoCatalogo = element.CODIGO_INTERNO_CATALOGO;
        Catalogo.nombreCatalogo = element.NOMBRE_CATALOGO;
        Catalogo.pasivo = element.PASIVO;
        Catalogo.fechaRegistro = element.FECHA_REGISTRO;
        Catalogo.fechaModificacion = element.FECHA_MODIFICACION;
        Catalogo.usuarioRegistro = element.USUARIO_REGISTRO;
        Catalogo.usuarioModificacion = element.USUARIO_MODIFICACION;
        objeto.push(Catalogo);
    }, this); 
    return objeto;
}