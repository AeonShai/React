// setTimeout(() => {
//   console.log('setTimeout');
// }, 5000);

// setInterval(() => {
//     console.log('setInterval');
// }, 1000);

import axios from "axios";

// fetch("https://jsonplaceholder.typicode.com/users")
//     .then((data) => data.json())
//     .then((users) => {
//         console.log(users);
//         fetch("https://jsonplaceholder.typicode.com/posts/1")
//             .then((data) => data.json())
//             .then((posts) => console.log(posts));
//     });

// Posts
// fetch("https://jsonplaceholder.typicode.com/posts")
//     .then((data) => data.json())
//     .then((posts) =>
//     {
//         console.log(posts);
//     })

// fetch("https://jsonplaceholder.typicode.com/posts/1/comments")
//     .then((data) => data.json())
//     .then((comments) => console.log(comments));

// fetch("https://jsonplaceholder

// fetch("https://jsonplaceholder.typicode.com/posts/1")

//axios usage

(async () => {
    const users = await axios.get("https://jsonplaceholder.typicode.com/users");
    console.log(users.data);
    const posts = await axios.get("https://jsonplaceholder.typicode.com/posts/1");
    console.log(posts.data);
})()