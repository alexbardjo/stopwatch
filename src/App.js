import React from 'react';
import './scss/App.scss';


function App() {

    const [time, setTime] = React.useState(0);
    const [timerOn, setTimerOn] = React.useState(false);
    const [arrDate, setArrDate] = React.useState(0);


  React.useEffect(() => {
        let interval = null;

        if (timerOn) {
            interval = setInterval(() => {
                setTime(prevTime => prevTime + 10);
            }, 10);
        } else {
            clearInterval(interval)
        }
      return () => clearInterval(interval);


    }, [timerOn]);

    const onStopClick =() => {
      setTimerOn(false);
      setTime(0)
    };

    const onResetClick =() => {
      setTimerOn(true);
        setTime(0)
    };

  const onDoubleClick = () => {
    setArrDate(Date.now());
      const diff = Date.now() - arrDate;
      if (diff < 300) {
        setTimerOn(false);
    }
  };

    return (
        <div className="wrapper">
            <div className="content">
            <ul className="time">
                <li className="time__elem">{("0" + Math.floor(((time / 3600000) % 60))).slice(-2)}</li>
                <li className="time__elem">{("0" + Math.floor(((time / 60000) % 60))).slice(-2)}</li>
                <li className="time__elem">{("0" + Math.floor(((time / 1000) % 60))).slice(-2)}</li>
            </ul>
            <div className="buttons">
                {!timerOn  && (
                    <button className="buttons__btn buttons__btn--green" onClick={() => setTimerOn(true)}>Start</button>
                )}
                {timerOn && (
                    <button className="buttons__btn buttons__btn--red" onClick={onStopClick}>Stop</button>
                )}
                        <button className="buttons__btn buttons__btn--yellow" onClick={onDoubleClick}>wait</button>
                        <button className="buttons__btn buttons__btn--grey" onClick={onResetClick}>Reset</button>
            </div>
        </div>
        </div>
    )
}

export default App;


