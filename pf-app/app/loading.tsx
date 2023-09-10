"use client";

import { Spinner } from "react-bootstrap";

export default function Loading() {
  return (
    <div className="h-100 d-flex justify-content-center align-items-center">
      <Spinner></Spinner>
    </div>
  );
}
