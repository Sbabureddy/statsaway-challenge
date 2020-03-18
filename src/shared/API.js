export const fetchData = () => {
  return wrapPromise(fetchPosts());
};

const wrapPromise = promise => {
  let status = "pending";
  let result;
  let suspender = promise.then(
    res => {
      status = "success";
      result = res;
    },
    err => {
      status = "error";
      result = err;
    }
  );
  return {
    read() {
      if (status === "pending") {
        throw suspender;
      } else if (status === "error") {
        throw result;
      } else if (status === "success") {
        return result;
      }
    }
  };
};

const fetchPosts = () => {
  return fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(data => data)
    .catch(err => console.log(err));
};
