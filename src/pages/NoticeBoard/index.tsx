import React from 'react';
import Collapsible from '../../components/@atoms/Collapsible';
import { dateToString } from '../../utils/dateToString';

const data = [
  {
    header: '제목1',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    date: new Date()
  },
  {
    header: '제목2',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    date: new Date()
  }
];

const date = new Date();
console.log(dateToString(date));

const NoticeBoard = () => {
  return (
    <>
      공지사항입니다.
      {data.map((notice, index) => {
        return (
          <Collapsible
            key={index}
            header={notice.header}
            body={notice.body}
            date={dateToString(notice.date)}
          />
        );
      })}
    </>
  );
};

export default NoticeBoard;
