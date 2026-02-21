"use client";

import React from "react";
import SectionHeader from "./sectionHeader";
import Typography from "./typography";
import Container from "./spacing";

export default function ActiveMembers({
  label = "Selected",
  title = "Active Members",
  subtitle = "Our commitment is to use active ingredients of natural origin wherever possible without compromising the quality of the formulas and the results.",
  members = [
    {
      id: 1,
      video: "https://ik.imagekit.io/75zj3bigp/sample-video.mp4",
    },
    {
      id: 2,
      video: "https://ik.imagekit.io/75zj3bigp/sample-video.mp4",
    },
    {
      id: 3,
      video: "https://ik.imagekit.io/75zj3bigp/sample-video.mp4",
    },
  ],
}) {
  return (
    <Container variant="activeMembers">
      <section className="active-members">
        <SectionHeader
          className="active-members-header"
          label={label}
          title={title}
          subtitle={subtitle}
        />

        <div className="active-members__grid">
          {members.map((member) => (
            <div key={member.id} className="active-members__card">
              <video
                className="active-members__video"
                src={member.video}
                autoPlay
                muted
                loop
                playsInline
              />
            </div>
          ))}
        </div>
      </section>
    </Container>
  );
}
