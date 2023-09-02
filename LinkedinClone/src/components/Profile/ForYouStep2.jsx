const ForYouStep2 = () => {
  return (
    <div className="border rounded p-4">
      <div className="d-flex align-items-center ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48.11"
          height="48.03"
          viewBox="0 0 48.11 48.03"
          id="industry-small"
          data-supported-dps="48x48"
          className="me-3"
        >
          <path d="M14.05 0H39.8a3.22 3.22 0 013.25 3v45h-29z" fill="#56687a" />
          <path
            fill="#788fa5"
            d="M21.05.02h3v24h-3zM33.05.02h3v48h-3zM27.05.02h3v48h-3z"
          />
          <path fill="#fce2ba" d="M21.05 6.02h3v3h-3zM33.05 6.02h3v3h-3z" />
          <path fill="#f8c77e" d="M27.05 12.02h3v3h-3zM33.05 18.02h3v3h-3z" />
          <path fill="#fce2ba" d="M33.05 24.02h3v3h-3zM21.05.02h3v3h-3z" />
          <path fill="#eef3f8" d="M5.05 8.03h9v7.99h-9V8.03z" />
          <path fill="#788fa5" d="M5.05 40.02h22v8h-22v-8z" />
          <path fill="#9db3c8" d="M5.05 32.02h22v8h-22v-8z" />
          <path fill="#c0d1e2" d="M5.05 24.02h22v8h-22v-8z" />
          <path fill="#dce6f1" d="M5.05 16.02h16v8h-16v-8z" />
          <path
            fill="#eef3f8"
            d="M36.05 34.35l-7.5-6.33-7.5 6.33v13.67h15V34.35z"
          />
          <circle cx="28.55" cy="34.52" r="1.5" fill="#56687a" />
          <path fill="#9db3c8" d="M27.05 45.02h3v3h-3z" />
        </svg>
        <h5 className="d-inline-block">In quale settore lavori?</h5>
      </div>
      <p>
        Gli utenti che aggiungono un settore ricevono fino a 2,5 volte più
        visualizzazioni del profilo.
      </p>
      <button className="btn rounded-pill border border-dark">
        Aggiungi settore
      </button>
    </div>
  );
};

export default ForYouStep2;
