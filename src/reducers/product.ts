import { produce } from "immer";

const initialState = {
    products: [],
    isLoading: false,
    error: ""
} as { products: any[]; isLoading: boolean; error: string }
export const productReducer = (state = initialState, action: any) => {
    return produce(state, draftState => {
        switch (action.type) {
            case "products/fetchProductRequest":
                draftState.isLoading = true;
                break
            case "products/fetchProductsSuccess":
                draftState.products = action.payload;
                draftState.isLoading = false;
                break
            case "products/fetchProductsError":
                draftState.isLoading = false;
                draftState.error = action.payload;
                break;
            case "products/addProduct":
                draftState.products.push(action.payload);
        }
    })
}