import "./Overview.css";

import { ReactComponent as Star } from "../../../img/star-full.svg";
import { ReactComponent as Location } from "../../../img/location.svg";
export default function Overview() {
  return (
    <div className="overview">
      <h1 className="overview__heading">Hotel Zade</h1>

      <div className="overview__stars">
        <Star className="overview__stars--icon" />
        <Star className="overview__stars--icon" />
        <Star className="overview__stars--icon" />
        <Star className="overview__stars--icon" />
        <Star className="overview__stars--icon" />
      </div>

      <div className="overview__location">
        <Location className="overview__location--icon" />
        <button className="btn-inline">Erzurum, Turkey</button>
      </div>

      <div className="overview__rating">
        <div className="overview__rating--average">8.6</div>
        <div className="overview__rating--count">429 votes</div>
      </div>
    </div>
  );
}
