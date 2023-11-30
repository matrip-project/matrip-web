import { useState } from 'react';
import { PlanProps } from '../../../types/postData';
import { TabContainer, TabTitle } from '../../../components/@atoms/TabMenu';
import styled from 'styled-components';

type PlanType = {
  plan: PlanProps[];
};

function Plan({ plan }: PlanType) {
  const [curr, setCurr] = useState(1);

  const handleClick = (day: number) => {
    setCurr(day);
  };

  return (
    <>
      <PlanContainer>
        <PlanWrap>
          {plan.map((plan, index) => (
            <PlanTitle
              key={index}
              onClick={() => handleClick(plan.day)}
              active={curr === plan.day}
            >
              {plan.day}일차
            </PlanTitle>
          ))}
        </PlanWrap>
      </PlanContainer>
      <PlanContent>{plan[curr - 1].content}</PlanContent>
    </>
  );
}

const PlanContainer = styled(TabContainer)`
  justify-content: flex-start;
  margin: 15px 0;
`;

const PlanWrap = styled.div`
  display: flex;
  width: 100%;
  margin-left: 5%;
`;

const PlanTitle = styled(TabTitle)`
  cursor: pointer;
`;
const PlanContent = styled.div`
  ${(props) => props.theme.texts.content2};
  min-height: 100px;
  width: 90%;
  white-space: pre-wrap;
`;

export default Plan;
