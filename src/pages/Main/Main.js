import React, { useEffect, useState } from 'react';
import './Main.scss';
import Header from './components/Header/Header';
import Section from './components/Section/Section';

const Main = () => {
  const [headerData, setHeaderData] = useState([]);
  const [sectionData, setSectionData] = useState([]);

  useEffect(() => {
    fetch('/data/headerData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => setHeaderData(data));

    fetch('/data/sectionData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => setSectionData(data));
  }, []);

  return (
    <main>
      <Header headerData={headerData} />
      {sectionData.map(sectionData => {
        return <Section sectionData={sectionData} key={sectionData.id} />;
      })}
    </main>
  );
  //무한 스크롤 추가 해야함
};
export default Main;
