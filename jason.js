let fetchInit = {
    method: "GET",
    headers: new Headers(),
    mode: "cors",
    cache: "default"
};
// const fetchData = fetch("http://localhost:3000/users", fetchInit);
// fetchData.then(data => data.json()).then(data => console.log(data));

const postPromise = fetch("http://localhost:3000/users", fetchInit);
postPromise
    .then(data => data.json())
    .then(data => {
        console.log(data);
        for (let row in data) {
            console.log(row);
            console.log(data[row]);
            console.log(data[row].name);
            for (let h in data[row]) {
                console.log(data[row][h]);
            }
        }
    })
    .catch(err => {
        console.log(err);
    });
// Ez az adatbazis Post adat frissitese!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
let newData = {
    name: "Kata",
    email: "kata@gmail.com"
};

let fetchOptions = {
    method: "PUT",
    mode: "cors",
    cache: "no-cache",
    headers: {
        "Content-Type": "application/json"
    },
    credentials: 'same-origin',
    body: JSON.stringify(newData)
}

fetch("http://localhost:3000/users/1", fetchOptions).then(
    response => response.json(),
    err => console.error(err)
).then(
    json => console.log(json)
);
/* Ezzel tudom Postolni !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
let newData1 = {
    name: "Katcvshgavcada",
    email: "katsflkasdfla@gmail.com"
}

let fetchOptions1 = {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    headers: {
        "Content-Type": "application/json"
    },
    credentials: 'same-origin',
    body: JSON.stringify(newData1)
}

fetch("http://localhost:3000/users/", fetchOptions1).then(
    response => response.json(),
    err => console.error(err)
).then(
    json => console.log(json)
);       //---------------------------------------------------------------------------------
*/
/* // Ez a torles buzikam !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
let fetchDel = {
    method: "DELETE",
    mode: "cors",
    cache: "no-cache",
}

fetch("http://localhost:3000/users/9", fetchDel).then(
    response => response.json(),
    err => console.error(err)
);
//---------------------------------------------------------------------------------------
*/

