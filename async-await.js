const users = [
    { id: 1, name: 'batman' },
    { id: 2, name: 'ironman'},
    { id: 3, name: 'superman'}
]

const posts = [
    { id: 1, content:['post 1-1', 'post 1-2', 'post 1-3']},
    { id: 2, content:['post 2-1', 'post 2-2', 'post 2-3']},
    { id: 3, content:['post 3-1', 'post 3-2', 'post 3-3']},
]

function getUser(name) {
    return new Promise((resolve, reject) => {
        const user = users.find( user => user.name === name ) 
        if( user ){
            return resolve(user)
        }else{
            reject(`user ${user.name} does not exist`)
        }
    })
}

function getPost(id) {
    return new Promise((resolve, reject) => {
        const post = posts.find( post => post.id === id)
        if(post){
            return resolve(post)
        }else{
            reject(`post ${ id } does not exists`)
        }
    })
}

//*** use then ...catch
// getUser('batman')
//     .then( user => getPost(user.id))
//     .then( post => console.log(post))
//     .catch( err => console.log(err))


//***use async...await

const getData = async() => {
    const user = await getUser('ironman')
    try {
      if(user){
             console.log(user)
        const post = await getPost(user.id)
        console.log(post)
      }  
    } catch(err) {
        console.log(err)
    }       
}

getData()
