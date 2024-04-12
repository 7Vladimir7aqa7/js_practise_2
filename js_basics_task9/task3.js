// Використовуючи fetch та async await зробіть 2 функції, які використовують сайт https://jsonplaceholder.typicode.com/.

// Перша функція - приймає айді посту та виводить його body.

// Друга функція - за вашим бажанням.

// Використовуйте документацію з сайту https://jsonplaceholder.typicode.com/

async function getPostbyId(postId) {
  await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(`Body with (Id: ${postId}): ${data.body}`);
    });
}
async function getCommentPost(postId) {
  await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
    .then((response) => response.json())
    .then((comments) => {
      comments.forEach((comment) => {
        console.log(`+ ${comment.name}: ${comment.body}`);
      });
    });
}

getPostbyId(5);

getCommentPost(5);

