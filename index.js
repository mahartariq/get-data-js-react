
console.log("Fetch API")

async function getData(){
let response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
//.then(function(res){
  //  console.log('Respones',res);
//})
    console.log(response);
    let data = await response.json()
    console.log(data)
}

//getData();

async function postData(){
    let responsep =await fetch('https://jsonplaceholder.typicode.com/posts',{
        method:'POST',
        body: JSON.stringify({
            title : "bootcamp",
            body: 'cnc',
            userID :22
        }), headers: {
            "Content-type": "application/json; charset=UTF-8"
          }
    })
    console.log(responsep);
    let data = await responsep.json()
    console.log(data)
}
postData();