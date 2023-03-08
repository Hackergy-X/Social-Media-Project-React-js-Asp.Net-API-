import React from "react";
import UserHeader from "./UserHeader";
import axios from "axios";
import { useEffect } from "react";

function UserArticle() {
  const [title, setTitle] = React.useState("");
  const [content, setContent] = React.useState("");
  const [listArticle, setListArticle] = React.useState([]);

  const addArticle = (e) => {
    e.preventDefault();
    const url = "https://localhost:7226/api/Article/AddArticle";
    const data = {
      Title: title,
      Content: content,
      Email: localStorage.getItem("loggedEmail"),
      Image: "no image",
      IsActive: 1,
      ISApproved: 0,
      Type: "User",
    };

    axios.post(url, data).then((res) => {
       if(res.data.statusCode === 200){
              setListArticle([...listArticle, 
                {
                    title: title,
                    content: content,
                    email: localStorage.getItem("loggedEmail"),
                    image: "no image",
                    isActive: 1,
                    isApproved: 0,
                    type: "User",
                }
            ]);
            clear();
       }
    });
  };

  const clear = () => {
    e.preventDefault();
    setTitle("");
    setContent("");
    };

  useEffect(() => {
    const urlGet = "https://localhost:7226/api/Article/ArticleList";
    axios.get(urlGet,
            {
                headers: {
                    'Accept': 'application/json',
                },
            }
        ).then((res) => {
           setListArticle(res.data.listArticle);
    });
  }, []);

  return (
    <div
      style={{
        background:
          "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzhdTPMimJUPuPzN9S1IbPBNpC3saVgcRT5ccdUwCQPRy8gWg4oA_3sKvEurjFv3-aJQY&usqp=CAU')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        height: "100vh",
        width: "100vw",
        padding: "0",
        margin: "0",
      }}
    >
      <UserHeader />
      <h1
        style={{
          color: "white",
        }}
      >
        User Article
      </h1>

      <div
        style={{
          background: "white",
          width: "50%",
          height: "30%",
          margin: "0 auto",
          marginTop: "5%",
          borderRadius: "10px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            padding: "10px",
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1
            style={{
              color: "black",
            }}
          >
            Add Article
          </h1>
          <form
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <input
              type="text"
              id="title"
              name="title"
              placeholder="Enter Title"
              style={{
                marginBottom: "10px",
                width: "100%",
                height: "40px",
                borderRadius: "5px",
                border: "1px solid black",
                padding: "0 10px",
              }}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <input
              type="text"
              id="content"
              name="content"
              placeholder="Enter Content"
              style={{
                marginBottom: "10px",
                width: "100%",
                height: "40px",
                borderRadius: "5px",
                border: "1px solid black",
                padding: "0 10px",
              }}
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
            <button
              type="submit"
              style={{
                width: "100%",
                height: "40px",
                borderRadius: "5px",
                border: "1px solid black",
                padding: "0 10px",
                backgroundColor: "black",
                color: "white",
              }}
              onClick={(e) => addArticle(e)}
            >
              Add
            </button>
          </form>
        </div>
      </div>
      <table
        className="table"
        style={{
          width: "50%",
          margin: "0 auto",
          marginTop: "5%",
          color: "white",
        }}
      >
        <thead className="table-light">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Content</th>
            <th scope="col">Email</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {listArticle.map((item, index) => {
            return (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{item.title}</td>
                <td>{item.content}</td>
                <td>{item.email}</td>
                <td>
                  {
                    item.email === localStorage.getItem("loggedEmail") ? (
                        <button className="btn btn-danger">Delete</button>
                    ) : (
                        <p>No Access</p>
                    )
                  }
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default UserArticle;
