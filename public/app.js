(async function init() {
    const response = await fetch('https://5dc588200bbd050014fb8ae1.mockapi.io/assessment');
    const res = await response.json();
    const element = document.getElementById('container')
    for (let i = 0; i <= res.length; i++) {
        element.innerHTML += `<div>${res[i].name} - ${res[i].id} - ${res[i].createdAt} - <img src="${res[i].avatar}"/> - </div>`
    }
})()