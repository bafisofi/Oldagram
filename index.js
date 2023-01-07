import posts from "./data.js";

const postsSection = document.getElementById("posts");

posts.forEach((post, i) => {
  postsSection.innerHTML += `
     <article>
                <section class="user-info">
                    <img src="${post.avatar}" alt="${post.user}" class="avatar">
                    <div>
                        <p class="user">${post.name}</p>
                        <p class="user-location">${post.location}</p>
                    </div>
                 </section>    
                <section class="post-img">
                    <img src="${post.post}" alt="${post.user}" ondblclick="addLikes('${post.likes}','${i}')">
                </section>
                <section class="post-body">
                    <div class="btn-wrapper">
                        <button class="btn" id="btn-likes" onclick="addLikes('${post.likes}','${i}')" ><img src="images/icon-heart.png" alt="icon-heart" id="img${i}"></button>
                        <button class="btn" ><img src="images/icon-comment.png" alt="icon-comment"></button>
                        <button class="btn"><img src="images/icon-dm.png" alt="icon-dm"></button>
                    </div>
                    <p class="likes" id="num-likes${i}">${post.likes} likes</p> 
                    <div class="comment">
                        <p> <span class="user">${post.username} </span> 
                        ${post.comment} </p>
                    </div>
                </section>
              </article>  
               
    `;
});

window.addLikes = (postHearts, i) => {
  let postLikes = document.getElementById(`num-likes${i}`);
  let postImgBtn = document.getElementById(`img${i}`);
  postHearts = Number(postHearts);
  if (postImgBtn.src.match("images/icon-heart.png")) {
    postImgBtn.src = "images/purple-heart-50.png";
    postHearts = postHearts + 1;
  } else {
    postImgBtn.src = "images/icon-heart.png";
    postHearts = postHearts;
  }
  postLikes.innerHTML = `<p class="likes">${postHearts} likes</p> `;
};

