import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Registration from '../pages/register/Registration.js';
import Login from '../pages/login/Login.js';
import Home from '../pages/home/Home.js';
import NotFound from '../pages/notFound/notFound.js';
import Navbar from '../pages/navbar/NavBar.js';
import HouseList from '../pages/list-houses/HouseList.js';
import CreateHouse from '../pages/create-houses/CreateHouse.js';
import HouseDetail from '../pages/house-detail/HouseDetail.js';
import AddProduct from '../pages/add-product/AddProduct.js';
import ListShoppingLists from '../pages/list-shoppinglists/ShoppingList.js'
import ShoppingListDetail from '../pages/shopping-list-detail/ShoppingListDetail.js';
import AddPeopleToHouse from '../pages/add-people-to-house/AddPeopleToHouse.js';

const RoutesManager = () => {
    return (
        <Router>
            <Navbar />

            <Routes>
                <Route path="/house/:houseId/detail/:detailId" element={<ShoppingListDetail />} />
                <Route path="/house/:id/add-people" element={<AddPeopleToHouse />} />
                <Route path="/house/:id/view-shopping-lists" element={<ListShoppingLists />} />
                <Route path="/house/:id/add-product" element={<AddProduct />} />
                <Route path="/house/:id" element={<HouseDetail />} />
                <Route path="/houses/create" element={<CreateHouse />} />
                <Route path="/houses/view-houses" element={<HouseList />} />
                <Route path="*" element={<NotFound />} />
                <Route path="/register" element={<Registration />} />
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<Home />} />
            </Routes>
        </Router>
    );
};

export default RoutesManager;
