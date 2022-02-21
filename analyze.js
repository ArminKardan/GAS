const fs = require("fs");

const db = JSON.parse(fs.readFileSync("database.json"))

let cum = 0;

for(let i = 0; i < db.length-1; i++)
{
    if(db[i+1].id && db[i].id)
    {
        let next = parseInt(db[i+1].id[10]+db[i+1].id[11])
        let curr = parseInt(db[i].id[10]+db[i].id[11])
        let diff = (next - curr)
        cum += diff
        console.log((curr).toString() + " - "+ (curr%2==0?"E":"O"))
    }
    
}
