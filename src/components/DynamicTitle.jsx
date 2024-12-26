import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const DynamicTitle = () => {
    const location = useLocation();

    useEffect(() => {
        const titleMap = {
            '/': 'EcoGrace | Home',
            '/tips': 'EcoGrace | Eco Travel Tips',
            '/campaigns': 'EcoGrace | Campaigns',
            '/auth/login': 'EcoGrace | Login',
            '/auth/register': 'EcoGrace | Register',
            '/forgot-password' : 'EcoGrace | Forgot Password',
            '/my-profile' : 'EcoGrace | My Profile',
            '/update-profile' : 'EcoGrace | Update'
        };

        if (location.pathname.startsWith('/place/')) {
            document.title = 'EcoGrace | Details';
        } else if (location.pathname.startsWith('/division/')) {
            document.title = 'EcoGrace | Division Adventures';
        } else {
            document.title = titleMap[location.pathname] || 'EcoGrace';
        }
    }, [location]);

    return null;
};

export default DynamicTitle;