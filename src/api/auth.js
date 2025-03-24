import axios from 'axios';
import { apiConfig } from '../config/apiConfig';

const api = axios.create({
    baseURL: apiConfig.baseURL,
});

// Register User
export const registerUser = async (userData) => {
    try {
        const response = await api.post('/auth/register', userData);
        return response.data;
    } catch (error) {
        console.error('Error registering user:', error);
        throw error;
    }
};

// Login User
export const loginUser = async (credentials) => {
    try {
        const response = await api.post('/auth/login', credentials);
        return response.data;
    } catch (error) {
        console.error('Error logging in:', error);
        throw error;
    }
};

// Forgot Password
export const forgotPassword = async (data) => {
    try {
        const response = await api.post('/auth/forgot-password', data);
        return response.data;
    } catch (error) {
        console.error('Error resetting password:', error);
        throw error;
    }
};

// Update Profile
export const updateProfile = async (updatedData, token) => {
    try {
        const response = await api.put('/auth/update-profile', updatedData, {
            headers: { Authorization: `Bearer ${token}` },
        });
        return response.data;
    } catch (error) {
        console.error('Error updating profile:', error);
        throw error;
    }
};

// Get User Data (Protected Route)
export const getUserData = async (token) => {
    try {
        const response = await api.get('/auth/user-auth', {
            headers: { Authorization: `${token}` },
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching user data:', error);
        throw error;
    }
};

export default api;
