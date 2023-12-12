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
import { useUserId } from '../../hooks/useUserId';
import { sortComment } from '../../apis/services/comment';

function Comments() {
  const id = useParams().id;
  const [comments, setComments] = useState<CommentProps[]>([]);
  const [newComment, setNewComment] = useState<boolean>(false);
  const inputFocus = useRef<HTMLInputElement>(null);
  const userId = useUserId();

  useEffect(() => {
    const getData = async () => {
      if (id) {
        await getComments(parseInt(id), 1).then((res) => {
          console.log('get comments success: ', res);
          const sortedComments = sortComment(res);

          setComments(sortedComments);
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
          <CommentWrap>
            {comments?.map((comment, index) => (
              <CommentBoxWrap key={index}>
                {comment.parentId && <ArrowDown />}
                <CommentBox comment={comment} inputFocus={inputFocus} />
              </CommentBoxWrap>
            ))}
          </CommentWrap>
          <CommentInputWrap>
            <CommentInput
              journeyId={parseInt(id!)}
              memberId={userId}
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
  margin-bottom: 30px;
`;

const CommentBoxWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const CommentInputWrap = styled.div`
  width: calc(390px * 0.9);
  height: 50px;
  position: fixed;
  bottom: 10%;
  z-index: 10;
  background-color: ${(props) => props.theme.colors.white};

  @media screen and (max-width: 390px) {
    width: 81%;
  }
`;

export default Comments;
