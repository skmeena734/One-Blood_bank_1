import React from "react";
import Layout from "../../components/shared/Layout/Layout";
import { useSelector } from "react-redux";
const AdminHome = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <Layout>
      <div className="container">
        <div className="d-flex  mt-4">
          <h1>
            Welcome Admin <i className="text-success">{user?.name}</i>
          </h1>
          {/* <hr/>
          <h3> Manage Blood Bank app</h3>
       <hr/>
          <p>
            
          </p> */}
        </div>
      </div>
    </Layout>
  );
};

export default AdminHome;
