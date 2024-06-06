const {
  createPost,
  readPostBySlug,
  readPosts,
  updatePostBySlug,
  deletePostBySlug,
} = require('./utils/crud-post.js');

const { createCategory } = require('./utils/crud-category.js');

const { createTag } = require('./utils/crud-tag.js');

// categoryCrud.createCategory({ name: "categoryTest" }, (c) => console.log(c));
// tagCrud.createTag({ name: "tagTest" }, (t) => console.log(t));

// const categories = ["categoryTest1", "categoryTest2", "categoryTest3"];
// categoryCrud.createCategories(categories, (c) => console.log(c));

// const tags = ["tagTest1", "tagTest2", "tagTest3", "tagTest4"];
// tagCrud.createTags(tags, (t) => console.log(t));

// const posts = [
//   {
//     title: "postTest1",
//     slug: "post-test1",
//     image: "postTestImage1",
//     content: "postTestContent1",
//     published: true,
//     categoryId: 1,
//     tagsIds: [1, 2],
//   },
//   {
//     title: "postTest2",
//     slug: "post-test2",
//     image: "postTestImage2",
//     content: "postTestContent2",
//     published: false,
//     categoryId: 2,
//     tagsIds: [2, 3],
//   },
//   {
//     title: "postTest3",
//     slug: "post-test3",
//     image: "postTestImage3",
//     content: "postTestContent3",
//     published: true,
//     categoryId: 3,
//     tagsIds: [3, 4],
//   },
//   {
//     title: "postTest4",
//     slug: "post-test4",
//     image: "postTestImage4",
//     content: "postTestContent4",
//     published: false,
//     categoryId: 4,
//     tagsIds: [4, 5],
//   },
// ];
// posts.map((postData) => postCrud.createPost(postData, (p) => console.log(p)));

// postCrud.readPostBySlug("post-test", (p) => console.log(p));

// postCrud.readPosts((posts) => console.log(posts));

// const updatedPost = {
//   title: "postTestUpdate",
//   slug: "post-test-update",
//   image: "postTestImageUpdate",
//   content: "postTestContentUpdate",
//   published: true,
//   categoryId: 2,
//   tagsIds: [1],
// };

// postCrud.updatePost(2, updatedPost, (p) => console.log(p));

// postCrud.deletePost(1, (p) => console.log(p));

// postCrud.publishedPosts((p) => console.log(p));

// postCrud.filterPostContentByString("2", (p) => console.log(p));
