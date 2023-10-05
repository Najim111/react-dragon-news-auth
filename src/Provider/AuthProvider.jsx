import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import PropTypes from 'prop-types';
import app from "../firebase/firebase.config";

export const AuthContex = createContext(null)
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const[loading,setLoading]=useState(true)
    // creatUser
    const creatUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // singnIn

    const singnIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // logout 
    const logOut= ()=>{
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            // console.log('user in the state change', user);
            setUser(currentUser)
            setLoading(false)

        })
        return () => {
            unSubscribe()
        }
    }, [])


    const authInfo = {
        user,
        creatUser,
        singnIn,
        logOut,
        loading,
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