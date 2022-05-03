import React, { useEffect, useRef, useState } from 'react';
import Nav from '../../components/Nav/Nav';
import Header from './components/Header/Header';
import Section from './components/Section/Section';
import './Main.scss';

const Main = () => {
  const [mainData, setMainData] = useState([]);

  const sectionData = [
    { id: 1, title: '주목할만한 소식' },
    { id: 2, title: '새로 나왔어요' },
    { id: 3, title: '# 베스트 아이템' },
    { id: 4, title: '마음껏 둘러보세요' },
  ];

  const testRef = useRef(null);
  const [myElementIsVisible, setMyElementIsVisible] = useState();
  console.log('myElementIsVisible: ', myElementIsVisible);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      const entry = entries[0];
      setMyElementIsVisible(entry.isIntersecting);
      console.log('entry:', entry);
    });
    observer.observe(testRef.current);
  }, []);

  useEffect(() => {
    fetch('/data/mainMock/mainMock.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => setMainData(data.result));
    //   fetch('http://10.58.1.186:8000/core/topic', {
    //     method: 'GET',
    //   })
    //     .then(res => res.json())
    //     .then(data => setMainData(data.results));
  }, []);
  // console.log(mainData);

  return (
    <main>
      <Nav />
      <Header mainData={mainData} />
      <div ref={testRef} />
      {sectionData.map(sectionData => {
        return (
          <Section
            sectionData={sectionData}
            mainData={mainData}
            key={sectionData.id}
          />
        );
      })}
    </main>
  );
  //무한 스크롤 추가 해야함
};
export default Main;
