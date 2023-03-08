import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminDashboard from "./AdminDashboard";
import Login from "./Login";
import Registration from "./Registration";
import UserArticle from "./UserArticle";
import UserDashboard from "./UserDashboard";
import RegistrationList from "./RegistrationList";
import ArticleList from "./ArticleList";
import NewsList from "./NewsList";
import UserNews from "./UserNews";

export default function RouterPage() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/userdashboard" element={<UserDashboard />} />
        <Route path="/admindashboard" element={<AdminDashboard />} />
        <Route path="/userarticle" element={<UserArticle />} />
        <Route path="/news" element={<UserNews />} />
        <Route path="/registrationlist" element={<RegistrationList />} />
        <Route path="/articlelist" element={<ArticleList />} />
        <Route path="/newslist" element={<NewsList />} />
        <Route path="*" element={<h1>404: Not Found</h1>} />
      </Routes>
    </Router>
  );
}
