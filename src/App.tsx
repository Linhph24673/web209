
import "./App.css";
import Counter from "./components/counter";
import ProductList from "./components/productlist";

function App() {
   
    return (
        <>
            <div className="w-96 mx-auto border border-gray-500 p-2">
                <Counter />
                <hr />
                <ProductList />
            </div>
        </>
    )
}

export default App;
