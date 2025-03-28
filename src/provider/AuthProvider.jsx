import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { toast } from "react-toastify";
import { Navigate } from "react-router-dom";


export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const createNewUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const userLogin = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    };


    const provider = new GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        setLoading(true);
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                setUser(user); 
            })
            .catch((error) => {
                toast.error('Error during Google Sign-In:', error);
            })
            .finally(()=>{
                setLoading(false);
            });
    };


    const updateUserProfile = (updatedData)=>{
        setLoading(true);
        return updateProfile(auth.currentUser, updatedData);
    }
    
    const authInfo = {
        user,
        setUser,
        createNewUser,
        logOut,
        userLogin,
        handleGoogleSignIn,
        updateUserProfile,
        loading,
        setLoading
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            unsubscribe();
        };
    }, [])
    return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
};

export default AuthProvider;