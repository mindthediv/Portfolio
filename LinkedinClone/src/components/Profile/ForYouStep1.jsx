const ForYouStep1 = () => {
  return (
    <div className="border rounded p-4">
      <div className="d-flex align-items-center ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48.11"
          height="48.03"
          viewBox="0 0 48.11 48.03"
          data-supported-dps="48x48"
          className="me-3"
        >
          <path
            d="M1.05 26h46v13.93a3 3 0 01-3 3.09H4.1a3 3 0 01-3-3.09z"
            fill="#788fa5"
          />
          <path
            d="M1.6 9h44.9a1.55 1.55 0 011.55 1.55v15.33A3.1 3.1 0 0145 29H3.15a3.11 3.11 0 01-3.1-3.1V10.59A1.56 1.56 0 011.58 9z"
            fill="#f8c77e"
          />
          <rect
            x="20.05"
            y="25.02"
            width="8"
            height="8"
            rx="1.35"
            fill="#fff"
          />
          <path
            d="M36.05 6a3 3 0 00-3-3h-18a3 3 0 00-3 3v3h2V6a1 1 0 011-1h18a1 1 0 011 1v3h2z"
            fill="#56687a"
          />
        </svg>{" "}
        <h5 className="d-inline-block">Dove lavori attualmente?</h5>
      </div>
      <p>
        I recruiter cercano candidati in base alla loro esperienza lavorativa.
      </p>
      <button className="btn rounded-pill border border-dark">
        Aggiungi posizione
      </button>
    </div>
  );
};

export default ForYouStep1;
