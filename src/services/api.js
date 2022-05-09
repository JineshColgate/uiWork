import axios from "axios";
import { baseUrl, getAuth } from "../helpers/constants";

export const GetReports = () => {

  let url = `${baseUrl}website/get-reports-info`;

  return  axios.get(url, {
    headers: {
      "Content-Type": "application/json",
      
    }
  })
}

export const GetFilters = () => {
	return  axios.get(`${baseUrl}catalog/attribute-list/`, {
    headers: {
      "Content-Type": "application/json",
      
    }
  })
}

export const GetProductList = (url_params) => {
	return  axios.get(`${baseUrl}catalog/products?${url_params}`, {
    headers: {
      "Content-Type": "application/json",
      
    }
  })
}

export const GetProductDetail = (id) => {
  return  axios.get(`${baseUrl}catalog/products/${id}`, {
    headers: {
      "Content-Type": "application/json",
      
    }
  })
}

export const ContactStatic = (id) => {
  return  axios.get(`${baseUrl}website/contact-us-static-data/`, {
    headers: {
      "Content-Type": "application/json",
      
    }
  })
}

export const SaveContact = (data) => {
  return  axios.post(`${baseUrl}website/contact-us/`, data ,{
    headers: {
      "Content-Type": "application/json",
      
    }
  })
}

export const SignUp = (data) => {
  return  axios.post(`${baseUrl}users/sign-up`, data ,{
    headers: {
      "Content-Type": "application/json",
      
    }
  })
}

export const SignIn = (data) => {
  return  axios.post(`${baseUrl}users/sign-in`, data ,{
    headers: {
      "Content-Type": "application/json",
      
    }
  })
}

export const AddToCart = (data) => {
  let authToken = (getAuth && getAuth.userToken) ? ("Token " + getAuth.userToken) : ""
  return  axios.post(`${baseUrl}enquiries/cart/`, data ,{
    headers: {
      "Content-Type": "application/json",
      "authorization": authToken
    }
  })
}

export const GetCartDetail = (id) => {
  let authToken = (getAuth && getAuth.userToken) ? ("Token " + getAuth.userToken) : ""
  return  axios.get(`${baseUrl}enquiries/cart/`, {
    headers: {
      "Content-Type": "application/json",
      "authorization": authToken
    }
  })
}

export const UserDetail = () => {
  let authToken = (getAuth && getAuth.userToken) ? ("Token " + getAuth.userToken) : ""
  return  axios.get(`${baseUrl}users/view-profile`, {
    headers: {
      "Content-Type": "application/json",
      "authorization": authToken
    }
  })
}

export const PlaceEnquiry = () => {
  let authToken = (getAuth && getAuth.userToken) ? ("Token " + getAuth.userToken) : ""
  let data = {"message": "Add to Cart"}
  return  axios.post(`${baseUrl}enquiries/create-from-cart/`,  data,{
    headers: {
      "Content-Type": "application/json",
      "authorization": authToken
    }
  })
}

export const RemoveFromCart = (id, pv_id) => {
  let authToken = (getAuth && getAuth.userToken) ? ("Token " + getAuth.userToken) : ""
  let data = {"product_variant": pv_id, "quantity": 1}
  return  axios.delete(`${baseUrl}enquiries/cart-update/${id}/`,{
    headers: {
      "Content-Type": "application/json",
      "authorization": authToken
    }
  })
}

export const SaveUser = (data) => {
  let authToken = (getAuth && getAuth.userToken) ? ("Token " + getAuth.userToken) : ""
  return  axios.patch(`${baseUrl}users/update-profile`, data ,{
    headers: {
      "Content-Type": "application/json",
      "authorization": authToken
    }
  })
}

export const GetEnquiries = () => {
  let authToken = (getAuth && getAuth.userToken) ? ("Token " + getAuth.userToken) : ""
  return  axios.get(`${baseUrl}enquiries/show-my-enquries/`, {
    headers: {
      "Content-Type": "application/json",
      "authorization": authToken
    }
  })
}

export const SendOtp = (data) => {
  return  axios.post(`${baseUrl}users/submit-otp`,  data,{
    headers: {
      "Content-Type": "application/json",
    }
  })
}








