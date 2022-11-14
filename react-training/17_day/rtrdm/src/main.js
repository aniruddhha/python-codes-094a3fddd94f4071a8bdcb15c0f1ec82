// 1. npx create-react-app mnbmnbmnbmn
// 2. cd mnbmnbmnbmn
// 3. npm install react-router-dom localforage match-sorter sort-by
// 4. npm start

import {
    createBrowserRouter, 
    Link, 
    useNavigate,
    useParams
} from "react-router-dom";

export function Login() {

    const navigate = useNavigate()

    const clk = () => navigate('/dash')

    return (
        <>
            <h1>
                Trying to Login
            </h1>
            <div>
                <input type='button' value='Dashboard' onClick={clk}/>
            </div>
        
        </>
    )
}

export function User() {
    return (
        <>
            <h1>
                Creating new user
            </h1>
            <p>
                <a href="/dash">Go to Dashboard</a>
            </p>
            <p>
                <Link to={'/dash'}>👉 Go to Dashboard</Link>
            </p>
        </>
    )
}

export function Dashboard() {

    const { dashId } = useParams()

    return (
        <h1>
            Admin Dashboard {dashId}
        </h1>
    )
}

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Login />,
    },
    {
        path: "/dash/:dashId",
        element: <Dashboard />,
    },
    {
        path: "/user",
        element: <User />,
    },
    {
        path: "*",
        element: <h1> Bad Route </h1>,
    },
]);
