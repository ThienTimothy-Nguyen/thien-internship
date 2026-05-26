import { useEffect, useRef, useState } from 'react';

function ItemCountdown({ expiryDate }) {
    const [timeCountDown, setTimeCountdown] = useState({hours: 0, minutes: 0, seconds: 0});
    const intervalRef = useRef(null);

    useEffect(() => {
        function displayTimeRemaining() {
        const currentTime = Date.now()
        let timeRemaining = expiryDate - currentTime;

        if (timeRemaining <= 0) {
            setTimeCountdown({hours: 0, minutes: 0, seconds: 0})
            clearInterval(intervalRef.current)
            intervalRef.current = null
            return
        }

        let elapsedSeconds = Math.floor(timeRemaining / 1000)
        let elapsedMinutes = Math.floor(elapsedSeconds / 60)
        let elapsedHours = Math.floor(elapsedMinutes / 60)
        
        setTimeCountdown({
            hours: elapsedHours % 24,
            minutes: elapsedMinutes % 60,
            seconds: elapsedSeconds % 60
        });
        }
        displayTimeRemaining();
        intervalRef.current = setInterval(displayTimeRemaining, 1000);

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, [expiryDate]);
    
  return (
    (timeCountDown.hours === 0 && timeCountDown.minutes === 0 && timeCountDown.seconds === 0) ? <></> :
    <div className="de_countdown">
        {timeCountDown.hours}h {timeCountDown.minutes}m {timeCountDown.seconds}s
    </div>
  )
}

export default ItemCountdown