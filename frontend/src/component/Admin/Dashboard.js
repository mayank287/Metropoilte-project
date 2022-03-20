import React, { useEffect } from "react";
import Sidebar from "./Sidebar.js";
import "./dashboard.css";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { Doughnut, Line } from "react-chartjs-2";
import { useSelector, useDispatch } from "react-redux";
import { getAdminProduct } from "../../actions/productAction";
import { getAllOrders } from "../../actions/orderAction.js";
import { getAllUsers } from "../../actions/userAction.js";
import MetaData from "../layout/MetaData";
import topbar from "topbar";
import TopLoaderBar from "../TopLoaderbar/TopLoaderBar.js";
const Dashboard = () => {
 

  const dispatch = useDispatch();

  const { products } = useSelector((state) => state.products);

  const { orders } = useSelector((state) => state.allOrders);

  const { users } = useSelector((state) => state.allUsers);


  const ol = Number(orders &&   orders.length);
  const ul = Number(users &&   users.length);
  const pl = Number(products &&   products.length);
  let outOfStock = 0;

  products &&
    products.forEach((item) => {
      if (item.Stock === 0) {
        outOfStock += 1;
      }
    });

  useEffect(() => {
    dispatch(getAdminProduct());
    dispatch(getAllOrders());
    dispatch(getAllUsers());
  }, [dispatch]);

  let totalAmount = 0;
  orders &&
    orders.forEach((item) => {
      totalAmount += item.totalPrice;
    });


const finalAmount = Math.round(totalAmount);
    const ProductState = {
      labels: ["0", "Total Products"],
      datasets: [
        {
          label: "TOTAL PRODUCTS",
          backgroundColor: ["Dark Green"],
          hoverBackgroundColor: ["rgb(197, 72, 49)"],
          data: [0,pl],
        },
      ],
    };



    
    const UserState = {
      labels: ["0", "Total Users"],
      datasets: [
        {
          label: "TOTAL USERS",
          backgroundColor: ["Blue"],
          hoverBackgroundColor: ["rgb(197, 72, 49)"],
          data: [0, ul],
        },
      ],
    };
    
    
    
    
    const OrdersState = {
      labels: ["0", "Total Orders"],
      datasets: [
        {
          label: "TOTAL ORDERS",
          backgroundColor: ["purple"],
          hoverBackgroundColor: ["rgb(197, 72, 49)"],
          data: [0, ol],
        },
      ],
    };
  const lineState = {
    labels: ["Initial Amount", "Amount Earned"],
    datasets: [
      {
        label: "TOTAL AMOUNT",
        backgroundColor: ["tomato"],
        hoverBackgroundColor: ["rgb(197, 72, 49)"],
        data: [0, ol],
      },
    ],
  };

  const doughnutState = {
    labels: ["Out of Stock", "InStock"],
    datasets: [
      {
        backgroundColor: ["#00A6B4", "#6800B4"],
        hoverBackgroundColor: ["#4B5000", "#35014F"],
        data: [outOfStock, products.length - outOfStock],
      },
    ],
  };

  return (
    <div className="dashboard">
      

      <MetaData title="Dashboard - Admin Panel" />
      <Sidebar />

      <div className="dashboardContainer">
        <Typography component="h1" className="dash">DASHBOARD</Typography>

        <div className="dashboardSummary">
          <div>
            <p>
              Total Amount <br /> ₹{finalAmount}
            </p>
          </div>
          <div className="dashboardSummaryBox2">
            <Link to="/admin/products">
              <p>Product</p>
              <p>{products && products.length}</p>
            </Link>
            <Link to="/admin/orders">
              <p>Orders</p>
              <p>{orders && orders.length}</p>
            </Link>
            <Link to="/admin/users">
              <p>Users</p>
              <p>{users && users.length}</p>
            </Link>
          </div>
        </div>

        <div className="lineChart">
          <Line data={ProductState} />
        </div>
        <div className="lineChart">
          <Line data={OrdersState} />
        </div>
        <div className="lineChart">
          <Line data={UserState} />
        </div>
        <div className="lineChart">
          <Line data={lineState} />
        </div>

        <div className="doughnutChart">
          <Doughnut data={doughnutState} />
        </div>
      </div>

    </div>
  );
};

export default Dashboard;
