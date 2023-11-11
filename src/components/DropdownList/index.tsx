import styled from 'styled-components';
import Text from '../@atoms/Text';
import { getColor } from '../../utils/colorUtils';
import { useState } from 'react';

type ListProps = {
  children?: string;
  detail?: string;
};

const DropdownList = ({ children, detail }: ListProps) => {
  const [show, setShow] = useState(false);
  return (
    <>
      <ListContainer onClick={() => setShow(!show)}>
        <ListWrap>
          <Text type='subtitle1'>{children}</Text>
          {show ? (
            <svg
              width='27'
              height='27'
              viewBox='0 0 27 27'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M8.33625 17.3363L13.5 12.1838L18.6637 17.3363L20.25 15.75L13.5 9L6.75 15.75L8.33625 17.3363Z'
                fill='#8D939D'
              />
            </svg>
          ) : (
            <svg
              width='27'
              height='27'
              viewBox='0 0 27 27'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M8.33613 9.66357L13.4999 14.8161L18.6636 9.66357L20.2499 11.2498L13.4999 17.9998L6.74988 11.2498L8.33613 9.66357Z'
                fill='#8D939D'
              />
            </svg>
          )}
        </ListWrap>
      </ListContainer>
      {show && (
        <DetailContainer>
          <DetailWrap>
            <Text type='body1' color='neutral4'>
              {detail}
            </Text>
          </DetailWrap>
        </DetailContainer>
      )}
    </>
  );
};

const ListContainer = styled.button`
  width: 90%;
  min-height: 30px;
  display: flex;
  justify-content: center;
  background: none;
  border: none;
  border-bottom: solid 1px ${getColor('neutral3')};
`;

const ListWrap = styled.div`
  width: 95%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const DetailContainer = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
  min-height: 30px;
  border-bottom: solid 1px ${getColor('neutral3')};
`;

const DetailWrap = styled.div`
  width: 95%;
  padding: 10px 0;
`;
export default DropdownList;
