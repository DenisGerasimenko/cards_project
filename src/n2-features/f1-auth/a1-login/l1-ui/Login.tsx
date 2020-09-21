import React from "react";
import {NavLink} from "react-router-dom";
import {PATH} from "../../../../n1-main/m1-ui/main/routes/Routes";

type LoginPropsType = {
    email: string;
    password: string;
    checked: boolean;
}

export const Login: React.FC<LoginPropsType> = React.memo((props) => {
    const {email, password, checked} = props;

    return (
        <div style={{
            width: '40%',
            outline: '1px solid red',
            margin: '0 auto',
            display: 'flex',
            flexDirection: "column",
            justifyContent: "center",
            alignItems: 'center'
        }}>
            <h2>Login</h2>
            <div>
                <input type="text" placeholder={'enter you email'} value={email}/>
            </div>
            <div>
                <input type="text" placeholder={'enter you password'} value={password}/>
            </div>
            <div>
                <label>
                    Remember Me
                    <input type="checkbox" name="check" checked={checked}/>
                </label>
            </div>
            <div>
                <NavLink to={PATH.RESTORE}>Востановить пароль?</NavLink>
            </div>
            <button>Sign in</button>
            <div>
                <NavLink to={PATH.REGISTER}>Регистрация</NavLink>
            </div>
        </div>
    );
});