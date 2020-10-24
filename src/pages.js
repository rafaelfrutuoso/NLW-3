//  const orphanages = require("./database/fekedata.js")
const Database = require("./database/db");
const seveOrphanege = require("./database/seveOrphanage");
module.exports = {
  index(req, res) {
    
    return res.render("index");
  },
  test(req,res){
    return res.render("test");
  },
//    pageSuccessInsert(req, res){
//     return res.render("success-insert")
// },
  async orphanage(req, res) {
    const id = req.query.id;
    try {
      const db = await Database;
      const result = await db.all(
        `SELECT * FROM orphanages WHERE  id = "${id}"`
      );

      const orphanage = result[0];
      orphanage.images = orphanage.images.split(",");
      orphanage.firstImage = orphanage.images[0];

      /* if(orphanage.open_on_weekends == "0"){
          orphanage.open_on_weekends = false
      }else{
          orphanage.open_on_weekends = true
      }*/

      // IF Ternário
      const a = orphanage.open_on_weekends == "0" ? false : true;
      orphanage.open_on_weekends = a;
      return res.render("orphanage", { orphanage });
    } catch (error) {
      console.log(error);
      return res.send("Erro ao Consulta no Banco de dados");
    }
  },

  async orphanages(req, res) {
    try {
      const db = await Database;
      const orphanages = await db.all("SELECT * FROM orphanages ");
      return res.render("orphanages", { orphanages });
    } catch (error) {
      console.log(error);
      return res.send("Erro no Banco de dados!");
    }
  },
  createOrphanage(req, res) {
    return res.render("create-orphanage");
  },
  async seveOrphanage(req, res) {
    const fields = req.body;
    if (Object.values(fields).includes("")) {
      return res.send("Todos os campo devem se preenchidos!");
    }

    try {
      //sava um novo orfanato
      const db = await Database;
      await seveOrphanege(db, {
        lat: fields.lat,
        lng: fields.lng,
        name: fields.name,
        about: fields.about,
        whatsapp: fields.whatsapp,
        images: fields.images.toString(),
        instructions: fields.instructions,
        opening_hours: fields.opening_hours,
        open_on_weekends: fields.open_on_weekends,
      });
      // redirecionamento
     // return res.redirect("/orphanages");
        return res.redirect("/test")
    } catch (error) {
      console.log(error);
      return res.send("Erro no Banco de dados");
    }
  },
};
