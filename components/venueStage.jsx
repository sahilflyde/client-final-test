"use client";

import React from "react";
import Image from "next/image";
import Typography from "./typography";
import { Button } from "./button";
import Container from "./spacing";

/* =========================
   VenueCard
========================= */

const VenueCard = ({ data }) => {
  return (
    <div className="venue-card group flex flex-col items-center rounded-[var(--radius-md)] transition-all duration-300">
      {/* Image */}
      <div className="relative w-full overflow-hidden rounded-[var(--radius-md)]">
        <div className="relative h-[269px] w-full">
          <Image
            src={data.image}
            alt={data.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        <div
          className="!absolute flex flex-col items-center justify-center
          text-white !opacity-100 !bg-[#f9f9f94d]
          !transition-opacity !duration-300 !z-10
          rounded-[var(--radius-xs)]"
          style={{
            top: "var(--sp-91)",
            right: "var(--sp-32)",
            padding: "var(--sp-31)",
            height: "86px",
          }}
        >
          <Typography variant="h2">{data.shows}</Typography>
          <Typography variant="body-6">Shows</Typography>
        </div>
      </div>

      {/* Content */}
      <div className="mt-[var(--sp-26)] flex flex-col items-center text-center">
        <h3 className="text-lg font-medium text-[var(--color-black-500)]">
          {data.title}
        </h3>

        <p className="mt-2 max-w-[90%] text-sm text-[var(--color-black-400)] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          {data.description}
        </p>
      </div>
    </div>
  );
};

/* =========================
   VenueStage
========================= */

export default function VenueStage({
  venues = [],
  containerClass = "",
  buttonText = "",
}) {
  return (
    <Container className="bg-[var(--color-white)]" variant="venueStage">
      <div className={containerClass}>
        {/* GRID */}
        <div className="venue-grid">
          {venues.map((venue, index) => (
            <VenueCard key={index} data={venue} />
          ))}
        </div>

        {/* BUTTON */}
        {buttonText && (
          <div className="mt-[var(--sp-56)] flex justify-center">
            <Button variant="primary" size="xl">
              <Typography variant="h4">{buttonText}</Typography>
            </Button>
          </div>
        )}
      </div>
    </Container>
  );
}
