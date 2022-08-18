/* eslint-disable jsx-a11y/img-redundant-alt */
import "./Gallery.css"

export default function Gallery() {
  return (
    <div className="gallery">
      <div className="gallery__item">
        <img
          src={require("../../../img/hotel-1.jpg")}
          alt="Photo of hotel-1"
          className="gallery__photo"
        />
      </div>
      <div className="gallery__item">
        <img
          src={require("../../../img/hotel-2.jpg")}
          alt="Photo of hotel-2"
          className="gallery__photo"
        />
      </div>
      <div className="gallery__item">
        <img
          src={require("../../../img/hotel-3.jpg")}
          alt="Photo of hotel-3"
          className="gallery__photo"
        />
      </div>
    </div>
  );
}
