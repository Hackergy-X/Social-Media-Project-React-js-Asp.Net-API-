import React from "react";
import AdminHeader from "./AdminHeader";
import axios from "axios";

function NewsList() {

    const [news, setNews] = React.useState([]);

    React.useEffect(() => {
        const url = "https://localhost:7226/api/News/NewsList";

        axios.get(url)
            .then((response) => {
                setNews(response.data.listNews);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);


  return (
    <div style={{
        background:
          "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzhdTPMimJUPuPzN9S1IbPBNpC3saVgcRT5ccdUwCQPRy8gWg4oA_3sKvEurjFv3-aJQY&usqp=CAU')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        height: "100vh",
        width: "100vw",
        padding: "0",
        margin: "0",
      }}>
      <AdminHeader />
      <h1 style={{
        color: "white",
      }}>News List</h1>
      <table className="table"
        style={{
          width: "50%",
          margin: "0 auto",
          marginTop: "5%",
          color: "white",
        }}>
        <thead className="table-light">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Content</th>
            <th scope="col">Email</th>
            <th scope="col">CreatedOn</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
            {news.map((neww, index) => (
                <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{neww.title}</td>
                    <td>{neww.content}</td>
                    <td>{neww.email}</td>
                    <td>{
                            neww.createdOn === null ? "No Date" : new Date(neww.createdOn).toLocaleDateString()
                        }</td>
                    <td>
                        <button className="btn btn-danger">Delete</button>
                    </td>
                </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default NewsList;
