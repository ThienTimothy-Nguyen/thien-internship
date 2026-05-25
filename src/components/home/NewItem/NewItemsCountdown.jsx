import { useEffect, useState } from 'react';

function NewItemsCountdown({ expiryDate }) {
    const [hourCountDown, setHourCountdown] = useState(0);
    const [minuteCountDown, setMinuteCountdown] = useState(0);
    const [secondCountDown, setSecondCountdown] = useState(0);

    function runTimer() {
        displayTimeRemaining()
        requestAnimationFrame(runTimer)
    }

    useEffect(() => {
        requestAnimationFrame(runTimer)
    }, [])

    function displayTimeRemaining() {
        const currentTime = Date.now()
        let timeRemaining = expiryDate - currentTime;
        if (timeRemaining < 0) {
            setHourCountdown(0)
            setMinuteCountdown(0)
            setSecondCountdown(0)
            return
        }

        let elapsedSeconds = Math.floor(timeRemaining / 1000)
        let elapsedMinutes = Math.floor(elapsedSeconds / 60)
        let elapsedHours = Math.floor(elapsedMinutes / 60)
        
        setHourCountdown(elapsedHours % 24)
        setMinuteCountdown(elapsedMinutes % 60)
        setSecondCountdown(elapsedSeconds % 60)
    }
    
  return (
    <div>
        {hourCountDown}h {minuteCountDown}m {secondCountDown}s
    </div>
  )
}

export default NewItemsCountdown