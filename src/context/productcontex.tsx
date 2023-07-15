import { createContext, useReducer } from "react";
import axios from "axios";

// 1. Tạo context
export const ProductContext = createContext({} as any);

const initialState = {
  products: [],
  isLoading: false,
  error: "",
};

const productReducer = (state: any, action: any) => {
  switch (action.type) {
    case "FETCH_PRODUCTS":
      return {
        ...state,
        products: action.payload,
      };
    case "ADD_PRODUCT":
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    case "EDIT_PRODUCT":
      return {
        ...state,
        products: state.products.map((item: any) =>
          item.id === action.payload.id ? action.payload : item
        ),
      };
    case "DELETE_PRODUCT":
      return {
        ...state,
        products: state.products.filter(
          (item: any) => item.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
};

const ProductProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(productReducer, initialState);

  const addProduct = async (product: any) => {
    try {
      const { data } = await axios.post(
        `http://localhost:3000/products`,
        product
      );
      dispatch({ type: "ADD_PRODUCT", payload: data });
    } catch (error: any) {
      console.log(error.message);
    }
  };

  const editProduct = async (product: any) => {
    try {
      const { data } = await axios.put(
        `http://localhost:3000/products/${product.id}`,
        product
      );
      dispatch({ type: "EDIT_PRODUCT", payload: data });
    } catch (error: any) {
      console.log(error.message);
    }
  };

  const deleteProduct = async (product: any) => {
    try {
      await axios.delete(`http://localhost:3000/products/${product.id}`);
      dispatch({ type: "DELETE_PRODUCT", payload: product });
    } catch (error: any) {
      console.log(error.message);
    }
  };

  const fetchProduct = async () => {
    try {
      const { data } = await axios.get(`http://localhost:3000/products`);
      dispatch({ type: "FETCH_PRODUCTS", payload: data });
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return (
    <ProductContext.Provider
      value={{ state, dispatch, addProduct, editProduct, deleteProduct, fetchProduct }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
