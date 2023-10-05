import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import PropTypes from 'prop-types';
import app from "../firebase/firebase.config";

export const AuthContex = createContext(null)
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    // creatUser
    const creatUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // singnIn

    const singnIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // logout 
    const logOut= ()=>{
        return signOut(auth)
    }





    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            // console.log('user in the state change', user);
            setUser(currentUser)

        })
        return () => {
            unSubscribe()
        }
    }, [user])


    const authInfo = {
        user,
        creatUser,
        singnIn,
        logOut,
    }
    return (
        <AuthContex.Provider value={authInfo}>
            {children}
        </AuthContex.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes = {
    children: PropTypes.node
}