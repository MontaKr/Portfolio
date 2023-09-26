import React, { forwardRef } from "react";
import { Wrap, List } from "./styles";
import figma from "../../../assets/icons/figma.png";
import photoshop from "../../../assets/icons/photoshop.png";
import illustrator from "../../../assets/icons/illustrator.png";
import xd from "../../../assets/icons/xd.png";

const SkillPub = forwardRef((props, ref) => {
  const skillArray = [
    { name: figma, src: figma },
    { name: photoshop, src: photoshop },
    { name: illustrator, src: illustrator },
    { name: xd, src: xd },
  ];

  return (
    <Wrap ref={ref}>
      <span className="title anim">Web-Publishing</span>
      <div className="container anim">
        <ul>
          {skillArray.map((val, idx) => {
            return (
              <List className="anim">
                <img src={val.src} loading="lazy" />
              </List>
            );
          })}
        </ul>
      </div>
    </Wrap>
  );
});

export default SkillPub;
