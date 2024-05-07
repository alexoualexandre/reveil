import { Alarme } from "./Alarme";
import { Cadrant } from "./Cadrant";

export function Reveil() {
  return (
    <>
      <div className="block-reveil">
        <Cadrant />
        <Alarme />
        <img src="./src/images/reveilmat.png" className="reveil" />
      </div>
    </>
  );
}
