import React from "react";

function ProductDetail({ detailedProduct }) {
  return (
    <div className="container">
      <div className="card w-100">
        <div
          id="carouselExampleFade"
          className="carousel carousel-dark slide carousel-fade"
        >
          <div className="carousel-inner">
            <div className="carousel-item active d-flex justify-content-center">
              <img
                src={detailedProduct.indexImgUrl}
                className="justify-self-center d-block w-25"
                alt="..."
              />
            </div>

            <div className="carousel-item d-flex justify-content-center">
              <img
                src={detailedProduct.images[0].original}
                className="justify-self-center d-block w-25"
                alt="..."
              />
            </div>

            <div className="carousel-item d-flex justify-content-center">
              <img
                src={detailedProduct.images[1].original}
                className="d-block w-25"
                alt="..."
              />
            </div>
            <div className="carousel-item d-flex justify-content-center">
              <img
                src={detailedProduct.images[2].original}
                className="d-block w-25"
                alt="..."
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon "
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        <div className="card-body">
          <h5 className="card-title fw-bold fs-2">{detailedProduct.name}</h5>
          <p className="card-text">{detailedProduct.description}</p>
          <p
            className={
              detailedProduct.priceWithDiscount !== 0
                ? ["text-decoration-line-through"]
                : ["text-decoration-none"]
            }
          >
            from {detailedProduct.price} ${" "}
          </p>
          <button
            type="button"
            className={`${"btn btn-danger position-relative"} ,  ${
              detailedProduct.priceWithDiscount === 0 ? ["visually-hidden"] : 0
            }`}
          >
            New price: from{" "}
            {detailedProduct.priceWithDiscount !== 0
              ? detailedProduct.priceWithDiscount
              : 0}
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark">
              -
              {detailedProduct.priceWithDiscount !== 0
                ? parseInt(
                    ((detailedProduct.price -
                      detailedProduct.priceWithDiscount) *
                      100) /
                      detailedProduct.price
                  )
                : 0}
              %<span className="visually-hidden">unread messages</span>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
