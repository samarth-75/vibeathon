import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

// Mock user database in localStorage
const USERS_KEY = 'vaidyaai_users';
const CURRENT_USER_KEY = 'vaidyaai_current_user';

const getStoredUsers = () => {
    try {
        const users = localStorage.getItem(USERS_KEY);
        return users ? JSON.parse(users) : [];
    } catch {
        return [];
    }
};

const saveUsers = (users) => {
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
};

const getCurrentUser = () => {
    try {
        const user = localStorage.getItem(CURRENT_USER_KEY);
        return user ? JSON.parse(user) : null;
    } catch {
        return null;
    }
};

const saveCurrentUser = (user) => {
    if (user) {
        localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user));
    } else {
        localStorage.removeItem(CURRENT_USER_KEY);
    }
};

// Simulate async operation for realistic UX
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Check for existing session on mount
    useEffect(() => {
        const initAuth = async () => {
            await delay(300); // Simulate loading
            const currentUser = getCurrentUser();
            if (currentUser) {
                setUser(currentUser);
            }
            setLoading(false);
        };

        initAuth();
    }, []);

    // Register function (frontend-only, localStorage based)
    const register = async (name, email, password) => {
        await delay(500); // Simulate network delay
        
        const users = getStoredUsers();
        
        // Check if email already exists
        const existingUser = users.find(u => u.email.toLowerCase() === email.toLowerCase());
        if (existingUser) {
            throw new Error('An account with this email already exists');
        }
        
        // Create new user
        const newUser = {
            id: Date.now().toString(),
            name,
            email,
            createdAt: new Date().toISOString()
        };
        
        // Store user (we don't store passwords in a real app, but for demo purposes)
        users.push({ ...newUser, password });
        saveUsers(users);
        
        // Set as current user (without password)
        setUser(newUser);
        saveCurrentUser(newUser);
        
        return { success: true, message: 'Account created successfully!' };
    };

    // Login function (frontend-only, localStorage based)
    const login = async (email, password) => {
        await delay(500); // Simulate network delay
        
        const users = getStoredUsers();
        
        // Find user by email
        const foundUser = users.find(u => u.email.toLowerCase() === email.toLowerCase());
        
        if (!foundUser) {
            throw new Error('No account found with this email');
        }
        
        if (foundUser.password !== password) {
            throw new Error('Incorrect password');
        }
        
        // Set as current user (without password)
        const { password: _, ...userWithoutPassword } = foundUser;
        setUser(userWithoutPassword);
        saveCurrentUser(userWithoutPassword);
        
        return { success: true, message: 'Login successful!' };
    };

    // Logout function
    const logout = () => {
        setUser(null);
        saveCurrentUser(null);
    };

    const value = {
        user,
        loading,
        register,
        login,
        logout,
        isAuthenticated: !!user
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
