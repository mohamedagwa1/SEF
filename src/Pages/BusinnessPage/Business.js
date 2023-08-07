import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../../redux/reducers/BusinessRecentReducer';
import { fetchContentData } from '../../redux/reducers/BusinessContentReducer';
import ButtonTop from '../../Components/ButtonTop/ButtonTop';
import Background from '../../Components/Background/Background';
import MostRecent from '../../Components/MostRecent/MostRecent';
import Content from '../../Components/PageContent/Content';
import image from '../../assets/images/secondary_background.jpg';
import TitleComponent from '../../Components/Title/Title';
import TopNav from '../../Components/TopNav/TopNav';

const Bussiness = () => {
  const { BusinessRecent } = useSelector(state => state.businessRecent);
  const { BusinessContent } = useSelector(state => state.businessContent);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
    dispatch(fetchContentData());
  }, [])

  const mainTitle = () => {
    return <>Lastest Business <br />News</>
  }
  return (
    <section style={{ backgroundColor: '#1a1919' }}>
      <TopNav />
      <Background image={image} />
      <TitleComponent mainTitle={mainTitle} />
      <MostRecent data={BusinessRecent} status={false} />
      <Content data={BusinessContent} />
      <ButtonTop />
    </section>
  )
}
export default Bussiness;
