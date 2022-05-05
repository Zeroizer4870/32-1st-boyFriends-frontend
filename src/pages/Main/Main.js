import React, { useEffect, useRef, useState } from 'react';
import Nav from '../../components/Nav/Nav';
import Header from './components/Header/Header';
import Section from './components/Section/Section';
import './Main.scss';

const Main = () => {
  const [mainData, setMainData] = useState([]);
  const sectionData = [
    { id: 1, title: '# 주목할만한 소식' },
    { id: 2, title: '# 새로 나왔어요' },
    { id: 3, title: '# 베스트 아이템' },
    { id: 4, title: '# 마음껏 둘러보세요' },
  ];

  useEffect(() => {
    fetch('http://10.58.5.56:1234/topic', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => setMainData(data.results));
  }, []);

  return (
    <main className="main">
      <Nav />
      <Header mainData={mainData} />
      {sectionData.map(sectionData => {
        return <Section sectionData={sectionData} mainData={mainData} />;
      })}
    </main>
  );
};
export default Main;
