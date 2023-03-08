import React from "react";
import AdminHeader from "./AdminHeader";
import axios from "axios";

function AdminDashboard() {

    

    

    return (
            <div style={
                {
                    "background":"url('https://png.pngtree.com/background/20210711/original/pngtree-blue-minimalist-flat-information-security-banner-background-picture-image_1093969.jpg')",
                    "backgroundSize":"cover",
                    "backgroundRepeat":"no-repeat",
                    "backgroundPosition":"center",
                    "height":"100vh",
                    "width":"100vw",
                    "padding":"0",
                    "margin":"0",
                }
            }>
                <AdminHeader />
                <h1 style={
                    {
                        "color": "white",
                    }
                }>Admin Dashboard</h1>
            </div>
    );
}


export default AdminDashboard;