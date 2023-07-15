import { ProductContext } from "@/context/productcontex";
import { useContext, useEffect } from "react";
import axios from "axios";

const ProductList = () => {
  const { state, dispatch, addProduct, editProduct, deleteProduct } =
    useContext(ProductContext);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const { data } = await axios.get(`http://localhost:3000/products`);
        dispatch({ type: "FETCH_PRODUCTS", payload: data });
      } catch (error) {
        console.log(error);
      }
    };
    fetchProduct();
  }, []);

  const handleEditProduct = async (product: any) => {
    try {
      const { data } = await axios.put(
        `http://localhost:3000/products/${product.id}`,
        product
      );
      dispatch({ type: "EDIT_PRODUCT", payload: data });
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteProduct = async (product: any) => {
    try {
      await axios.delete(`http://localhost:3000/products/${product.id}`);
      dispatch({ type: "DELETE_PRODUCT", payload: product });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-1">
      {state?.products?.map((item: any) => (
        <div  key={item.id}>
          {item.name}
          <button className="flex flex-1" onClick={() => handleEditProduct({ id:3 , name: "Product C edit" })}>Edit</button>
          <button className="flex flex-1" onClick={() => handleDeleteProduct(item)}>Delete</button>
        </div>
      ))}

      <button onClick={() => addProduct({ name: "Product C" })}>
        Add Product
      </button>
    </div>
  );
};

export default ProductList;
