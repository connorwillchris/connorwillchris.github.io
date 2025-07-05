const postList = document.getElementById('postList');

let postArray = [
    '2025-7-4-my-first-post',
    '2025-7-5-quick-update',
];

for (let i = 0; i < postArray.length; i++) {
    postList.innerHTML += `<li><a href="/blog/posts/${postArray[i]}.html">${postArray[i]}</a></li>`;
}
