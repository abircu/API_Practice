function loadPosts() {
  const url = "https://jsonplaceholder.typicode.com/posts";
  fetch(url)
    .then((res) => res.json())
    .then((json) => displayPost(json));
}
/*
1.get the container element where you want to add the new elements
2.create child element
3.set innerText or innerHtml 
4.
*/

function displayPost(posts) {
  const postsContainer = document.getElementById("post-container");
  for (const post of posts) {
    const PostDiv = document.createElement("div");
    PostDiv.classList.add("post");
    console.log(post);
    PostDiv.innerHTML = `
    <h4>User-${post.userId}</h4>
    <h5>Post:${post.title}</h5>
    <p>post Description${post.body}</p> `;
    postsContainer.appendChild(PostDiv);
  }
}
loadPosts();
