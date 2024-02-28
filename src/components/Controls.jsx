import { useRef } from "react"
import { useDispatch } from "react-redux"

const Controls = () => {
    const dispatch = useDispatch()
    const inputElement = useRef()

    const handleClick = (type) => {
        dispatch({
            type: type,
            payload: {
                num: inputElement.current.value
            }
        })
        inputElement.current.value = ''
    }



    return (
        <>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                <button type="button" className="btn btn-primary" onClick={() => dispatch({ type: "INCREMENT" })}>+1</button>
                <button type="button" className="btn btn-success" onClick={() => dispatch({ type: "DECREMENT" })}>-1</button>
            </div>
            <div className="d-grid gap-2 control-row d-sm-flex justify-content-sm-center">
                <input type="number" placeholder="Enter number" className="number-input" ref={inputElement}/>
                <button type="button" className="btn btn-info" onClick={() => handleClick("ADD")}>Add</button>
                <button type="button" className="btn btn-danger" onClick={() => handleClick("SUBTRACT")}>Subtract</button>

            </div>
        </>
    )
}

export default Controls