async function getData(url = 'http://localhost:8080/data/all', data={}){
  const request = await fetch(url,{
    method: 'GET'
  })
    .then((response) =>{
      return response.json();
    });

  return await request;
}

export default getData;