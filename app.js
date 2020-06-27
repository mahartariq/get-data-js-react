console.log("Fetch API");


async function fetchAPI(){
const api = await fetch('https://jsonplaceholder.typicode.com/todos/1')
//.then(function(res){
//    console.log(res,'res');
//})

console.log(api,"API");
    const json = await api.json()
    console.log(json,'json');

}
fetchAPI()

async function postAPI(){
    const api = await fetch('https://jsonplaceholder.typicode.com/posts',{
        method:'POST',
        body: JSON.stringify({
            title: 'bootcamp',
      body: 'remote job- freelancing',
      userId: 1
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
          }
    })
    console.log(api,"API");
    const json = await api.json()
    console.log(json,'json');
}

postAPI()