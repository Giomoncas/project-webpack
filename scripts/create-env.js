const fs = require('fs');

fs.writeFileSync('./.env', `API=${process.env.API}\n`);  //Escribir archivo por medio de script en el servidor