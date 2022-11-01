const BASEURL = "https://strangers-things.herokuapp.com/api/2207-FTB-ET-WEB-PT";

export const fetchPosts = async (token) => {
  try {
    const response = await fetch(`${BASEURL}/posts`);
    console.log("----------THIS IS THE RESPONSE------", response);
    const { data } = await response.json();
    console.log("THIS IS DATA", data);
    return data.posts;
  } catch (error) {
    console.error("There was an error fetching posts", error);
  }
};

export const registerUser = async (username, password) => {
  try {
    const response = await fetch(`${BASEURL}/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username: username,
          password: password
        },
      }),
    });
    console.log("RESPONSE------>", response);
    const data = await response.json();
    console.log("------------data------------", data);
    return data;
  } catch (error) {
    console.error("There was an error registering the user", error);
  }
};

export const fetchMe = async (token) => {
  try {
    const response = await fetch(`${BASEURL}/users/me`, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
    });
    console.log("USER RESP BODY ------------>", response);
    const { data } = await response.json();
    console.log("USER DATA ----->", data);
    return data;
  } catch {
    console.log(error);
  }
};

export const createPost = async (token, title, description, price) => {
  try {
 const response = await fetch(`${BASEURL}/posts`, {
  
  method: 'POST',
  headers:{
      "Content-type": "Application/json",
      "Authorization": `Bearer ${token}`
  },
  body: JSON.stringify({
    post: {
      title: title,
      description: description,
      price: price
    }
 })
 
 });
 const data = await response.json();
 console.log(data)
 return data;
}
 catch {
  console.log(error);
}
}

// export const deletePost = async (token, POST_ID) => {
//   response = await fetch(`${BASEURL}/posts/${POST_ID}`, {
//     method: 'DELETE',
//   headers:{
//       'Content-type': 'Application/json',
//       Authorization: `Bearer ${token}`
//   },
  
//   })

  
// }
