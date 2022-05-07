import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Order = () => {
    const [orders, setOrders] = useState([]);

    const [user] = useAuthState(auth); 
    const navigate = useNavigate();
    

    useEffect(() => {
        const getOrders = async () => {
            const email = user.email;
            
            const url = `https://polar-scrubland-97410.herokuapp.com/order?email=${email}`;
            try {
                const { data } = await axios.get(url, {
              headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
              },
            });
            setOrders(data);
            }
            catch (error) {
                console.log(error.message);
                if (error.response.status === 403 || error.response.status === 401) {
                    signOut(auth);
                    navigate('/login')
                }
            }
        }
        getOrders();
       
    },[user])
    return (
        <div>
            <h3>your orders: {orders.length}</h3>
        </div>
    );
};

export default Order;