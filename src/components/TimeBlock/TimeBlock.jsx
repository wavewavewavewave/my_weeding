import { useEffect, useState } from 'react';
import './timeblock.css'

export default function TimeBlock() {
    const targetDate = new Date('2025-09-20T00:00:00');
    const [timeLeft, setTimeLeft] = useState({
        weeks: 0,
        days: 0,    
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const timer = setInterval(() => {
            const now = new Date();
            const diff = targetDate - now;

            if (diff <= 0) {
                setTimeLeft({ weeks: 0, days: 0, hours: 0, minutes: 0, seconds: 0 });
                clearInterval(timer);
                return;
            }

            const totalSeconds = Math.floor(diff / 1000);
            const weeks = Math.floor(totalSeconds / (7 * 24 * 60 * 60));
            const days = Math.floor((totalSeconds % (7 * 24 * 60 * 60)) / (24 * 60 * 60));
            const hours = Math.floor((totalSeconds % (24 * 60 * 60)) / (60 * 60));
            const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
            const seconds = totalSeconds % 60;

            setTimeLeft({ weeks, days, hours, minutes, seconds });
        }, 1000);

        return () => clearInterval(timer);
    }, [targetDate]);

    return (
        <>
            <div className="timer-container">
                <div className="timer-item">
                    <span className="timer-value">{String(timeLeft.weeks).padStart(2, '0')}</span>
                    <span className="timer-label">недель</span>
                </div>
                <div className="timer-item">
                    <span className="timer-value">{String(timeLeft.days).padStart(2, '0')}</span>
                    <span className="timer-label">дней</span>
                </div>
                <div className="timer-item">
                    <span className="timer-value">{String(timeLeft.hours).padStart(2, '0')}</span>
                    <span className="timer-label">часов</span>
                </div>
                <div className="timer-item">
                    <span className="timer-value">{String(timeLeft.minutes).padStart(2, '0')}</span>
                    <span className="timer-label">минут</span>
                </div>
                <div className="timer-item">
                    <span className="timer-value">{String(timeLeft.seconds).padStart(2, '0')}</span>
                    <span className="timer-label">секунд</span>
                </div>
            </div>
        </>
    )
}