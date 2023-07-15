import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import ProductProvider from "./context/productcontex.tsx";
import "./index.css";
import CounterProvider from "./context/couterprovider.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <ProductProvider>
        <CounterProvider>
            <App />
        </CounterProvider>
    </ProductProvider>
);