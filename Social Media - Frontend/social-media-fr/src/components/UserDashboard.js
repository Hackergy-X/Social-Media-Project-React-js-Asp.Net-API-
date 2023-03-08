import React from "react";
import UserHeader from "./UserHeader";


function UserDashboard() {
    return (
        <div style={
            {
                "background":"url('https://i1.wp.com/static.web-backgrounds.net/uploads/2012/08/City_Landscape_Background.jpg')",
                "backgroundSize":"cover",
                "backgroundRepeat":"no-repeat",
                "backgroundPosition":"center",
                "height":"100vh",
                "width":"100vw",
                "padding":"0",
                "margin":"0",
            }
        }>
            <UserHeader />
            <h1 style={
                {
                    "color": "white",
                }
            }>User Dashboard</h1>
        </div>
    );
}

export default UserDashboard;