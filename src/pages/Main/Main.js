import React, { useEffect, useRef, useState } from 'react';
import './Main.scss';
import Header from './components/Header/Header';
import Section from './components/Section/Section';

const Main = () => {
  const [headerData, setHeaderData] = useState([]);
  const [sectionData, setSectionData] = useState([]);

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
    fetch('/data/headerData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => setHeaderData(data));

    fetch('http://10.58.0.223:8000/products/main', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => setSectionData(data), console.log(sectionData));
  }, []);

  return (
    <main>
      <Header headerData={headerData} />
      <div ref={testRef} />
      {sectionData.map(sectionData => {
        return <Section sectionData={sectionData} key={sectionData.id} />;
      })}
    </main>
  );
  //무한 스크롤 추가 해야함
};
export default Main;
