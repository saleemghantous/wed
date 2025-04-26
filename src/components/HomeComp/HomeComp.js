import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Form, Row, Col, Button } from 'react-bootstrap';
import axios from "axios";
import { useSelector, useDispatch } from 'react-redux';
import { notify } from './../Notification/Notification';
import { setUserProp } from "../redux_slice/UserSlice";

const HomeComp = () => {
    const weddingDate = new Date('2025-07-26T00:00:00');
    const [timeRemaining, setTimeRemaining] = useState(weddingDate - new Date());
    const [isCelebrating, setIsCelebrating] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => {
            const newTimeRemaining = weddingDate - new Date();
            setTimeRemaining(newTimeRemaining);

            if (newTimeRemaining <= 0) {
                clearInterval(timer);
                setIsCelebrating(true);
            }
        }, 1000);

        return () => clearInterval(timer);
    }, [weddingDate]);

    const formatTime = (time) => {
        const days = Math.floor(time / (1000 * 60 * 60 * 24));
        const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((time % (1000 * 60)) / 1000);
        return { days, hours, minutes, seconds };
    };

    const { days, hours, minutes, seconds } = formatTime(timeRemaining);

    return (
        <Container style={{ maxWidth: "600px", textAlign: "center", padding: "20px", backgroundColor: "#f8f9fa", borderRadius: "10px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", position: "relative" }}>
            <div style={{ marginBottom: "20px" }}>
                <h1 style={{ color: "#ff6f61", fontFamily: "'Dancing Script', cursive", fontSize: "2.5rem" }}>
                    Saleem & Elina's Wedding
                </h1>
            </div>
            {isCelebrating ? (
                <div>
                    <h1 style={{ color: "#28a745", fontSize: "2rem" }}>🎉 It's the Wedding Day! 🎉</h1>
                    <h1 style={{ color: "#28a745", fontSize: "2rem" }}>🎉 Let's celebrate! 🎉</h1>
                    <div className="fireworks-container" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", pointerEvents: "none" }}>
                        {[...Array(10)].map((_, i) => (
                            <div
                                key={i}
                                className="firework"
                                style={{
                                    animation: `firework ${1.5 + Math.random()}s infinite ease-out`,
                                    animationDelay: `${Math.random()}s`,
                                    top: `${Math.random() * 100}%`,
                                    left: `${Math.random() * 100}%`,
                                    backgroundColor: `hsl(${Math.random() * 360}, 100%, 70%)`,
                                }}
                            ></div>
                        ))}
                    </div>
                </div>
            ) : (
                <div>
                    <h2 style={{ color: "#007bff", fontFamily: "'Roboto', sans-serif", marginBottom: "20px" }}>Time Remaining</h2>
                    <div dir="ltr" style={{ display: "flex", justifyContent: "center", gap: "15px" }}>
                        <div style={{ textAlign: "center", padding: "10px", backgroundColor: "#e9ecef", borderRadius: "8px", width: "80px" }}>
                            <h3 style={{ margin: "0", color: "#ff6f61" }}>{days}</h3>
                            <p style={{ margin: "0", fontSize: "0.9rem" }}>Days</p>
                        </div>
                        <div style={{ textAlign: "center", padding: "10px", backgroundColor: "#e9ecef", borderRadius: "8px", width: "80px" }}>
                            <h3 style={{ margin: "0", color: "#ff6f61" }}>{hours}</h3>
                            <p style={{ margin: "0", fontSize: "0.9rem" }}>Hours</p>
                        </div>
                        <div style={{ textAlign: "center", padding: "10px", backgroundColor: "#e9ecef", borderRadius: "8px", width: "80px" }}>
                            <h3 style={{ margin: "0", color: "#ff6f61" }}>{minutes}</h3>
                            <p style={{ margin: "0", fontSize: "0.9rem" }}>Minutes</p>
                        </div>
                        <div style={{ textAlign: "center", padding: "10px", backgroundColor: "#e9ecef", borderRadius: "8px", width: "80px" }}>
                            <h3 style={{ margin: "0", color: "#ff6f61" }}>{seconds}</h3>
                            <p style={{ margin: "0", fontSize: "0.9rem" }}>Seconds</p>
                        </div>
                    </div>
                </div>
            )}
            <style>
                {`
                    @keyframes firework {
                        0% {
                            transform: scale(0.5) translate(-50%, -50%);
                            opacity: 1;
                        }
                        100% {
                            transform: scale(2) translate(-50%, -50%);
                            opacity: 0;
                        }
                    }
                    .firework {
                        position: absolute;
                        width: 15px;
                        height: 15px;
                        background-color: #ff6f61;
                        border-radius: 50%;
                        transform: translate(-50%, -50%);
                    }
                `}
            </style>
        </Container>
    );
}

export default HomeComp;
