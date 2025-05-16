  const getGithubUsers = async () =>{
    const  response = await fetch('https://api.github.com/users',{
     method:'GET',
    })
    return await response.json();
 }


 
 const getGithubUser = async (name) =>{

    try {
        
        const  response = await fetch(
            `https://api.github.com/users/${name}`,
            {
             method:'GET',
            }
        )
            return await response.json();
    } catch (error) {
        console.log(error)
        alert("user not found")
    }

    
 }
 export {
    getGithubUsers,
    getGithubUser
 }