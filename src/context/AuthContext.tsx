import React, { createContext, useContext, useState, useEffect } from "react";

// Define la estructura de los datos del usuario
interface UserData {
    userId: number;
    username: string;
    email: string;
    address: string;
    city: string;
    state: string;
    postalCode: string;
    phoneNumber: string;
    image: string;
}

// Define la interfaz del contexto
interface AuthContextType {
    userData: UserData | null;
    login: (data: UserData) => void;
    logout: () => void;
}

// Crea el contexto
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Hook para usar el contexto
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth debe ser usado dentro de un AuthProvider");
    }
    return context;
};

// Proveedor de contexto
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [userData, setUserData] = useState<UserData | null>(null);

    useEffect(() => {
        // Cargar los datos del usuario desde localStorage cuando la aplicación se inicia
        const storedUserData = localStorage.getItem("userData");
        if (storedUserData) {
            try {
                const parsedData: UserData = JSON.parse(storedUserData);
                setUserData(parsedData);
            } catch (error) {
                console.error("Error parsing user data from localStorage", error);
            }
        }
    }, []);

    const login = (data: UserData) => {
        // Almacena los datos del usuario en localStorage
        localStorage.setItem("userData", JSON.stringify(data));
        setUserData(data);
    };

    const logout = () => {
        // Elimina los datos del usuario de localStorage
        localStorage.removeItem("userData");
        setUserData(null);
        window.location.href = "/";
    };

    return (
        <AuthContext.Provider value={{ userData, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};