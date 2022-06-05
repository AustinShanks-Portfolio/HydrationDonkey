const fs = require('node:fs');
module.exports = {
    Save: function (file, data) {
        let Json_Data = JSON.stringify(data, null, 4);
        fs.writeFile(`./Data/${file}.json`, Json_Data, 'utf-8', function (err) {
            if (err) {
                console.log("An Error occured while writing JSON Object to File.");
                return console.log(err);
            }
            console.log(`${Json_Data}: Data has been saved.`);
            
        });
    },
};