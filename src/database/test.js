const Database = require("./db.js")
const saveOrphanage = require("./seveOrphanage")

Database.then( async (db) =>{
    // inserir dados na tabela
    await saveOrphanage(db, {
        lat: "-27.222633",
        lng: "-49.6555874",
        name:  "Lar das meninos",
        about:"Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
        whatsapp:"7773773",
        images: ["https://images.unsplash.com/photo-1587784002360-a7c35c090720?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",


        "https://images.unsplash.com/photo-1602571833995-03aa80922957?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"

        ].toString(),
        instructions:"Venha como se sentir a vontade e traga muito amor e paciência para dar.",
        opening_hours : "Horário de visita Das 18h até as 8h",
        open_on_weekends: "0"


   })
 
    //consultar o dados da tabela
    const selectedOrphanages = await db.all("SELECT * FROM orphanages ")
    console.log(selectedOrphanages)

    // consultar apena um orphanage, pelo id on pegara todos os intem com q tems id 
    /*const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "1"')
    console.log(orphanage)

   // para pega um o mais elemento especifico 
    //  const  nome  = await db.all('SELECT name, open_on_weekends FROM orphanages WHERE id= "2"')
    //  console.log(nome)

    // para deletar
    console.log(await db.run('DELETE FROM orphanages WHERE id ="4"'))
    */

})