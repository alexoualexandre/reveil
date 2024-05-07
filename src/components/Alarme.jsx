import { MyContext } from "./Context";

export function Alarme() {
  const { cadreAlarme, setCadreAlarme, heure, minute } = MyContext();
  const {
    reglageAlarmeHeure,
    setReglageAlarmeHeure,
    reglageAlarmeMinute,
    setReglageAlarmeMinute,
  } = MyContext();

  return (
    <>
      <div className="alarme">
        {(reglageAlarmeHeure > 0 || reglageAlarmeMinute > 0) &&
          cadreAlarme === false &&
          heure == reglageAlarmeHeure &&
          minute == reglageAlarmeMinute && (
            <audio
              controls
              src="./src/components/audio/sonnerie.mp3"
              className="audio"
              autoPlay
              loop
            />
          )}

        <button
          type="button"
          className="button-alarme"
          onClick={() => setCadreAlarme(!cadreAlarme)}
        ></button>
      </div>
      <div className="heure">
        <button
          type="button"
          className="button-heure"
          onClick={() => {
            cadreAlarme === true &&
              setReglageAlarmeHeure(
                reglageAlarmeHeure < 23 ? reglageAlarmeHeure + 1 : 0
              );
          }}
        ></button>
      </div>
      <div className="minute">
        <button
          type="button"
          className="button-minute"
          onClick={() => {
            cadreAlarme === true &&
              setReglageAlarmeMinute(
                reglageAlarmeMinute < 59 ? reglageAlarmeMinute + 1 : 0
              );
            console.log(reglageAlarmeMinute);
          }}
        ></button>
      </div>
      {cadreAlarme && (
        <div className="cadrant">
          <span className="number">
            {reglageAlarmeHeure < 10
              ? `0${reglageAlarmeHeure}`
              : reglageAlarmeHeure}
          </span>
          <span className="number">:</span>
          <span className="number">
            {reglageAlarmeMinute < 10
              ? `0${reglageAlarmeMinute}`
              : reglageAlarmeMinute}
          </span>
          <span className="number">:</span>
          <span className="number">00</span>
        </div>
      )}
    </>
  );
}
