import React, {useCallback, useEffect, useState} from "react";
import {Login} from "./Login";
import {useDispatch, useSelector} from "react-redux";
import {loginTC} from "../l2-bll/loginThunk";
import {AppRootStateType} from "../../../../n1-main/m2-bll/store";
import {Redirect} from "react-router-dom";
import {PATH} from "../../../../n1-main/m1-ui/main/routes/Routes";
import {RequestStatusType} from "../../../../n1-main/m2-bll/b1-main/mainInitialState";
import {Status} from "../../../../n0-common/c1-ui/status/Status";
import {setError, setStatus} from "../../../../n1-main/m2-bll/b1-main/mainActions";
import {Modal} from "../../../../n0-common/c1-ui/modal/m1-ui/Modal";

type LoginContainerPropsType = {}

export const LoginContainer: React.FC<LoginContainerPropsType> = React.memo(() => {


    const isLoginIn = useSelector<AppRootStateType, boolean>(state => state.login.isLoginIn);
    const status = useSelector<AppRootStateType, RequestStatusType>(state => state.main.status);
    const error = useSelector<AppRootStateType, null | string>(state => state.main.error);

    const dispatch = useDispatch();

    const [email, setEmail] = useState<string>('grok88@tut.by');
    const [password, setPassword] = useState<string>('alexgor88');
    const [remember, setRemember] = useState<boolean>(false);
    const [flag, setFlag] = useState<boolean>(false);

    const [firstVisited, setFirstVisited] = useState<boolean>(true);
    const [redirect, setRedirect] = useState<boolean>(false);
    //
    // //modal
    // const [isOpen, setIsOpen] = useState<boolean>(true);
    // const [packName, setPackName] = useState<string>('');
    // //modal
    // const onModal = () => {
    //     setIsOpen(true);
    // }
    //
    // const onClose = () => {
    //     console.log('close');
    //     setIsOpen(false);
    // }
    // const onSubmit = () => {
    //     console.log(packName);
    //     onClose();
    // }


    useEffect(() => {
        if (firstVisited) {
            dispatch(setError(''));
            dispatch(setStatus('idle'));
            setFirstVisited(false);
        } else {
            setRedirect(true);
        }
    }, [firstVisited, setFirstVisited]);

    const onLogin = useCallback(() => {
        dispatch(loginTC({email, password, rememberMe: remember}));
    }, [email, password, remember]);


    if (isLoginIn && redirect && (status === 'succeeded')) {
        setTimeout(() => {
            setFlag(true);
        }, 2000);
    }

    if (flag) {
        return <Redirect to={PATH.PROFILE}/>
    }

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
            {/*<Modal title={'Введите название колоды'} onClose={onClose} isOpen={isOpen}>*/}
            {/*    <input type="text" value={packName} onChange={e => setPackName(e.currentTarget.value)}/>*/}
            {/*    <button onClick={onSubmit}>создать</button>*/}
            {/*</Modal>*/}
            <Status title={'Login'} status={status} error={error}/>
            <Login email={email} setEmail={setEmail} password={password} setPassword={setPassword} checked={remember}
                   setChecked={setRemember} onLogin={onLogin}/>
        </div>
    );
});