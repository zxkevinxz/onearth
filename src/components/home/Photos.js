import React from "react";
import "./home.css";
import { PhotoCard } from "../PhotoCard/PhotoCard";
import { getMockPhotos } from "../../utility/mockUtil";

export function Photos() {
  return (
    <div className="home-photos">
      {getMockPhotos().map((p, i) => {
        return (
          <PhotoCard
            key={p.title}
            image={p.image}
            title={p.title}
            desc={p.desc}
          />
        );
      })}
    </div>
  );
}
