function fetchData(url, callback) {
    fetch(url)
        .then(response => response.json())
        .then(data => callback(data));
}

function getPostsCallback(callback) {
    fetchData('https://jsonplaceholder.typicode.com/posts', (data) => {
        const sorted = data.sort((a, b) => a.title.length - b.title.length);
        callback(sorted);
    });
}

function getCommentsCallback(callback) {
    fetchData('https://jsonplaceholder.typicode.com/comments', (data) => {
        const sorted = data.sort((a, b) => a.email > b.email ? 1 : -1);
        callback(sorted);
    });
}

function getUsers() {
    return fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => data.map(user => ({
            id: user.id,
            name: user.name,
            username: user.username,
            email: user.email,
            phone: user.phone
        })));
}

function getUncompletedTodos() {
    return fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res => res.json())
        .then(data => data.filter(todo => !todo.completed));
}

async function getPostsAsync() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    return data.sort((a, b) => a.title.length - b.title.length);
}

async function getCommentsAsync() {
    const res = await fetch('https://jsonplaceholder.typicode.com/comments');
    const data = await res.json();
    return data.sort((a, b) => a.email > b.email ? 1 : -1);
}

async function getUsersAsync() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    return data.map(user => ({
        id: user.id,
        name: user.name,
        username: user.username,
        email: user.email,
        phone: user.phone
    }));
}

async function getUncompletedTodosAsync() {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await res.json();
    return data.filter(todo => !todo.completed);
}

//Using
getPostsAsync().then(posts => {
    console.log("Сортировка постов по title:");
    console.log(posts.slice(0, 5));
});

getCommentsAsync().then(comments => {
    console.log("Сортировка коминтариев по имени автора:");
    console.log(comments.slice(0, 5));
});

getUsersAsync().then(users => {
    console.log("Получить тоько важные поля пользователя:");
    console.log(users);
});

getUncompletedTodosAsync().then(todos => {
    console.log("Несделаные задания:");
    console.log(todos.slice(0, 5));
});
