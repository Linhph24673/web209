import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
    const dispatch = useDispatch();
    const state = useSelector((state: any) => state.counter.count);
    return (
        <div >
            Value: {state}
            <button className="flex flex-none"  onClick={() => dispatch({ type: "counter/increment" })}>cộng</button>
            <button className="flex flex-none" onClick={() => dispatch({ type: "counter/decrement" })}>trừ </button>
            <button className="flex flex-none" onClick={() => dispatch({ type: "counter/increase", payload: 10 })}>
                Cộng thêm 10
            </button>
        </div>
    );
};
export default Counter;