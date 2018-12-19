const Sequelize = require('sequelize');
const express = require('express');
const app = express();
const sequelize = new Sequelize(`mysql://${process.env.DBUsername}:${process.env.DBPassword}@${process.env.host}:3306/${process.env.DB}`, {
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });


  //TODO: Extract this logic into a separate models folder

  const Episode = sequelize.define('episodes', {
    episodeId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true // Automatically gets converted to SERIAL for postgres
    },
    episodeName: {
        type: Sequelize.STRING
    },
    episodeDescription: {
        type: Sequelize.STRING
    },
    episodeTags: {
        type: Sequelize.ARRAY(Sequelize.TEXT)
    }
  });
  
  //force: true will drop the table if it already exists
//   Episode.sync({force:true}).then(() => {
    //   Episode.create({
    //     episodeName: 'This is the second Future of Tech Education episode',
    //     episodeDescription: 'This is a second post',
    //     episodeTags: ["Education", "Tech", "Future"]
    //   });
//   });
   // Table created

//   Episode.findAll().then(episode => {
//     console.log(episode);
//   });

  // app.get('/', (req, res) => {
  //   Episode.findAll().then(episode => {
  //       res.send(episode[0]);
  //   });
  // })

  // app.listen(9000);