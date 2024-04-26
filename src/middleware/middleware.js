// const checkPost = (store) => (next) => (action) => {
//   if (action.type === "posts/savePosts") {
//     const posts = store.getState().posts;
//     const isPostsExist = posts.some(
//       (elem) => (elem.title = action.payload.title)
//     );
//     if (isPostsExist) {
//       console.log("exist title");
//       return;
//     }
//   }
//   next(action);
// };

// export default (defaultMiddleware) => {
//   return [...defaultMiddleware(), checkPost];
// };
