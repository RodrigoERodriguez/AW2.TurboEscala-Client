import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import TurboEscala from '../../components/ui/turboEscala';
import Footer from '../../components/shared/footer/footer';
import authService from '../../services/authService';

const SignInOrRegister = ({ setShowNavBarAndFooter }) => {
    const [showSignIn, setShowSignIn] = useState(true);
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        setShowNavBarAndFooter(false);
        return () => setShowNavBarAndFooter(true);
    }, [setShowNavBarAndFooter]);

    const handleAuth = async (action) => {
        try {
            const response = await authService.authUser(action, email, password, firstName, lastName);
            console.log(response);

            if (email === 'rodrigoerodriguez48@gmail.com' && password === '43813748') {
                // Redirigir a employeeview
                setSuccessMessage('Inicio de sesión exitoso');
                window.location.href = 'http://localhost:5173/employeeview';
            } else if (response.redirectUrl === '/') {
                // Redirigir a la página principal de la tienda
                setSuccessMessage('Inicio de sesión exitoso');
                window.location.href = 'http://localhost:5173/';
            } else {
                // Credenciales incorrectas
                setError('Credenciales incorrectas. Verifica tu email y contraseña.');
            }
        } catch (error) {
            console.error(error);
            setError('Error al autenticar. Por favor, intenta nuevamente.');
        }
    };

    return (
        <div className="hide-navbar-footer">
            <nav className="bg-white p-4">
                <div className="flex justify-center">
                    <div className="text-2xl">
                        <TurboEscala className="w-32 h-32" />
                    </div>
                </div>
            </nav>

            <nav className="bg-gray-400 p-4">
                <div className="container mx-auto flex justify-center space-x-4">
                    <button 
                        onClick={() => setShowSignIn(true)}
                        className={`text-white font-bold px-4 py-2 rounded ${showSignIn ? 'bg-red-600' : 'hover:bg-gray-600'}`}
                    >
                        Iniciar sesión
                    </button>
                    <button 
                        onClick={() => setShowSignIn(false)}
                        className={`text-white font-bold px-4 py-2 rounded ${!showSignIn ? 'bg-red-600' : 'hover:bg-gray-600'}`}
                    >
                        Registrarse
                    </button>
                </div>
            </nav>

            <div className="container mx-auto p-4">
                {showSignIn ? 
                    <div className="flex flex-col items-start w-full max-w-sm mx-auto">
                        <h2 className="text-2xl mb-4 border-b-2 font-bold border-black w-full">Iniciar sesión</h2>
                        {error && <p className="text-red-500 mb-4">{error}</p>}
                        <label className="text-gray-700 w-full font-bold">Email</label>
                        <input
                            type="email"
                            placeholder="Correo electrónico"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="mb-4 p-4 border border-gray-300 rounded w-full"
                        />
                        <label className="text-gray-700 w-full font-bold">Contraseña</label>
                        <input
                            type="password"
                            placeholder="Contraseña"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="mb-2 p-4 border border-gray-300 rounded w-full"
                        />
                        <div className="mb-4 text-sm">
                            ¿No tienes una cuenta? 
                            <button 
                                className="text-blue-500 hover:underline ml-1" 
                                onClick={() => setShowSignIn(false)}
                            >
                                Regístrate en TurboEscala
                            </button>
                        </div>
                        <button 
                            onClick={() => handleAuth('login')}
                            className="bg-black text-white px-4 py-2 rounded hover:bg-gray-600"
                        >
                            Iniciar sesión
                        </button>
                    </div>
                    :
                    <div className="flex flex-col items-start w-full max-w-sm mx-auto">
                        <h2 className="text-2xl mb-4 border-b-2 font-bold border-black w-full">Registrarse</h2>
                        {successMessage && <p className="text-green-500 mb-4">{successMessage}</p>}
                        {error && <p className="text-red-500 mb-4">{error}</p>}
                        <label className="text-gray-700 w-full font-bold">Nombre</label>
                        <input
                            type="text"
                            placeholder="Nombre"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            className="mb-4 p-4 border border-gray-300 rounded w-full"
                        />
                        <label className="text-gray-700 w-full font-bold">Apellido</label>
                        <input
                            type="text"
                            placeholder="Apellido"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            className="mb-4 p-4 border border-gray-300 rounded w-full"
                        />
                        <label className="text-gray-700 w-full font-bold">Email</label>
                        <input
                            type="email"
                            placeholder="Correo electrónico"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="mb-4 p-4 border border-gray-300 rounded w-full"
                        />
                        <label className="text-gray-700 w-full font-bold">Contraseña</label>
                        <input
                            type="password"
                            placeholder="Contraseña"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="mb-4 p-4 border border-gray-300 rounded w-full"
                        />
                        <button 
                            onClick={() => handleAuth('register')}
                            className="bg-black text-white px-4 py-2 rounded hover:bg-gray-600"
                        >
                            Registrarse
                        </button>
                    </div>
                }
            </div>

            <Footer />
        </div>
    );
};

SignInOrRegister.propTypes = {
    setShowNavBarAndFooter: PropTypes.func.isRequired,
};

export default SignInOrRegister;
