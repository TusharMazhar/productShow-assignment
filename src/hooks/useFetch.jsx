import React,{ useState , useEffect } from 'react'
import { Spin } from 'antd';
import axiosInstance from '../lib/axios/index'

export const useFetch = (url) =>{

     const [products, setProducts] = useState([])

     const fetchData = async () => {
          const response = await axiosInstance.get(url);
          setProducts(response);
     };

     useEffect(() => {
          fetchData();
     }, []);
     
     return products
}

