let  apiurl = 'https://api.github.com/users'

fetch(apiurl).then(response => response.json())
.then(data => {
    displayUsers(data);
}).catch(err => {
    console.log(err)
});

function displayUsers(users)
{
    let userlist = document.getElementById('user-list');
    userlist.innerHTML = '';

    users.forEach(user => {
        let users1 = document.createElement('div');
        users1.className='user';
       users1.innerHTML= 
      
       `
        <h2>${user.login}</h2>
        <img src="${user.avatar_url}" alt="${user.avatar_url}">
        <p>${user.id}</p>
        <p>${user.node_id}</p>
       <a href="${user.html_url}">Html_Url</a>
      <a href="${user.followers_url}">Followers</a>  
        <p>Price: $${user.price}</p>
        `;

        userlist.appendChild(users1);
    })
}
