import React from "react";
import { Wrap } from "./styles";
import SkillList from "../../components/skill/skillList/SkillList";
import SkillPub from "../../components/skill/skillPub/SkillPub";

const SkillsWrap = () => {
  return (
    <Wrap>
      <SkillList />
      <SkillPub />
    </Wrap>
  );
};

export default SkillsWrap;
