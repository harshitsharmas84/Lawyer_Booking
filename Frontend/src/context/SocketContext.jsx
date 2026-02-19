/**
 * Socket.io Context — manages WebSocket lifecycle + auth
 */
import { createContext, useContext, useEffect, useRef, useState, useCallback } from 'react';
import { io } from 'socket.io-client';
import { useAuth } from './AuthContext';

const SocketContext = createContext(null);

const SOCKET_URL = import.meta.env.VITE_API_URL?.replace('/api/v1', '') || 'http://localhost:5000';

export function SocketProvider({ children }) {
    const { isAuthenticated, user } = useAuth();
    const socketRef = useRef(null);
    const [connected, setConnected] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('nyaybooker_access_token');
        if (!isAuthenticated || !user || !token) return;

        const socket = io(SOCKET_URL, {
            auth: { token },
            transports: ['websocket', 'polling'], // Try websocket first
            reconnection: true,
            reconnectionAttempts: 10,
            reconnectionDelay: 1000,
        });

        socket.on('connect', () => {
            console.log('[Socket] Connected');
            setConnected(true);
        });

        socket.on('disconnect', (reason) => {
            console.warn('[Socket] Disconnected:', reason);
            setConnected(false);
        });

        socket.on('connect_error', (err) => {
            console.warn('[Socket] Connection error:', err.message);
        });

        socketRef.current = socket;

        return () => {
            socket.disconnect();
            socketRef.current = null;
            setConnected(false);
        };
    }, [isAuthenticated, user]);

    const joinCase = useCallback((caseId) => {
        socketRef.current?.emit('join_case', caseId);
    }, []);

    const leaveCase = useCallback((caseId) => {
        socketRef.current?.emit('leave_case', caseId);
    }, []);

    const sendMessage = useCallback((caseId, content, type = 'TEXT') => {
        socketRef.current?.emit('send_message', { caseId, content, type });
    }, []);

    const sendTyping = useCallback((caseId) => {
        socketRef.current?.emit('typing', { caseId });
    }, []);

    const markRead = useCallback((caseId) => {
        socketRef.current?.emit('mark_read', { caseId });
    }, []);

    const value = {
        socket: socketRef.current,
        connected,
        joinCase,
        leaveCase,
        sendMessage,
        sendTyping,
        markRead,
    };

    return <SocketContext.Provider value={value}>{children}</SocketContext.Provider>;
}

export function useSocket() {
    const ctx = useContext(SocketContext);
    if (!ctx) throw new Error('useSocket must be used within SocketProvider');
    return ctx;
}

export default SocketContext;
