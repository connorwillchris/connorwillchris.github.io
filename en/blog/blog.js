// variables here
const blogPostsDiv = document.getElementById('blogPosts');

const posts = [
    '',
];

for (let i = 0; i < posts.length; i++) {
    blogPostsDiv.innerHTML += `<a href="posts/${posts[i]}.html">${posts[i]}</a>`;
}
