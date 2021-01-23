const postData = async (url, data)=>{
    const res = await fetch(url, {
      method: "POST",
            headers:  {
              'content-type': 'application/json'
            },
            body: data
    });
    return await res.json();//это Promies
  };

  const getResource = async (url)=>{
    const res = await fetch(url); 

    if(!res.ok){
     throw new Error(`Could not fetch ${url}, status: ${res.status}`); //объект ошибки
    }
    return await res.json();//это Promies
  };

  export {postData};
  export {getResource};