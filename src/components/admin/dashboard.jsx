import React from "react";
import {Route, Switch, Redirect} from 'react-router-dom';
import Sidebar from './Sidebar';
import Users from './users';
import Posts from './posts';
const Dashboard = ({ match }) => {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <Sidebar></Sidebar>
      <Route path="/admin/users" component={Users} />
      <Route path="/admin/posts" component={Posts} />
    </div>
  );
};

export default Dashboard;
