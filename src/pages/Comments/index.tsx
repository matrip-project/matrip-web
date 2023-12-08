import { useParams } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { MainBox, MainContainer } from '../../styles/GlobalStyles';
import { ReactComponent as ArrowDown } from '../../asset/arrowDown.svg';
import CommentInput from '../../components/@atoms/CommentInput';
import CommentBox from './commentsCoponents/CommentBox';
import { CommentProps } from '../../types/commentData';
import { getComments } from '../../apis/api/comment';
import Header from '../../components/Header';

function Comments() {
  const id = useParams().id;
  const [comments, setComments] = useState<CommentProps[]>([]);
  const [newComment, setNewComment] = useState<boolean>(false);
  const inputFocus = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const getData = async () => {
      if (id) {
        await getComments(parseInt(id), 1).then((res) => {
          console.log('get comments success: ', res);
          setComments(res);
        });
      }
    };

    getData();
  }, [id, newComment]);

  return (
    <MainContainer>
      <Header edit={false} cnt={comments?.length} />
      <MainBox>
        <CommentContainer>
          {comments?.map((comment, index) => (
            <CommentWrap key={index}>
              {comment.parentId && <ArrowDown />}
              <CommentBox comment={comment} inputFocus={inputFocus} />
            </CommentWrap>
          ))}
          <CommentInputWrap>
            <CommentInput
              journeyId={parseInt(id!)}
              memberId={1}
              newComment={newComment}
              setNew={setNewComment}
              inputFocus={inputFocus}
            />
          </CommentInputWrap>
        </CommentContainer>
      </MainBox>
    </MainContainer>
  );
}

const CommentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 90%;
`;

const CommentWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const CommentInputWrap = styled.div`
  width: calc(390px * 0.9);
  position: fixed;
  bottom: 15%;
  z-index: 10;

  @media screen and (max-width: 390px) {
    width: 81%;
  }
`;

export default Comments;
