import {useSelector, useDispatch} from "react-redux";
import {PUSH_USER, DELL_USER} from './actionc-types';

export default function App() {

    const dispatch = useDispatch();
    const user = useSelector(user => user);
    console.log(user);

    const pushthat = () => {
        const value = document.getElementById("myinput").value
        dispatch({type: PUSH_USER, payload: value})
    };

    const dellthat = () => {
        const userdell = document.getElementById("username").value
        console.log(userdell);
        dispatch({type: DELL_USER, payload: userdell})
    };


    return (

        <div>
            <h3>USER</h3>
            <input datafld={'Hello'} id="myinput" type="text"/>
            <button onClick={pushthat}>ADD</button>
            <br/>
            <select name="username" id="username">
                {user.map((value) => (
                    <option key={value} id={value}>
                        {value}
                    </option>))}
            </select>
            <button onClick={dellthat}>DELL</button>


        </div>
    );
}