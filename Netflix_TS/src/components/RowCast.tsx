import "./Row.css";
import { Cast } from "../types/cast";
import CastPoster from "./CastPoster";

interface Props {
  cast: Cast;
  //onSelect: (cast: Cast) => void;
}

function RowCast({ cast }: Props) {
  return (
    <div className="row">
      <br />
      <br />

      <div className="rowalign">
        <CastPoster cast={cast} />
        <h4>{cast.name}</h4>
      </div>
    </div>
  );
}

export default RowCast;