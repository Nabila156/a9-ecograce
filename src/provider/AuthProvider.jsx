import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { toast } from "react-toastify";

export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

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
        return signOut(auth)
    };


    const provider = new GoogleAuthProvider;
    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                setUser(user); 
                console.log(user.displayName)
                toast.success(`Hi, ${user.displayName}! Enjoy exploring!`)
                navigate("/");
            })
            .catch((error) => {
                setError('Error during Google Sign-In:', error);
            });
    };


    const authInfo = {
        user,
        setUser,
        createNewUser,
        logOut,
        userLogin,
        handleGoogleSignIn
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