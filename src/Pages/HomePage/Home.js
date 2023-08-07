import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../../redux/reducers/HomeRecentReducer';
import { fetchContentData } from '../../redux/reducers/HomeContentReducer';
import ButtonTop from '../../Components/ButtonTop/ButtonTop';
import Background from '../../Components/Background/Background';
import MostRecent from '../../Components/MostRecent/MostRecent';
import Content from '../../Components/PageContent/Content';
import image from '../../assets/images/secondary_background.jpg';
import TitleComponent from '../../Components/Title/Title';
import TopNav from '../../Components/TopNav/TopNav';

const Home = ({ flag }) => {
  const { HomeRecent } = useSelector(state => state.homeRecent);
  const { HomeContent } = useSelector(state => state.homeContent);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
    dispatch(fetchContentData());
  }, [])

  const mainTitle = () => {
    return <>software engineering <br />for future</>
  }
  return (
    <section style={{ backgroundColor: '#1a1919' }}>
      <TopNav />
      <Background image={image} flag={flag} />
      <TitleComponent mainTitle={mainTitle} />
      <MostRecent data={HomeRecent} status={true} />
      <Content data={HomeContent} />
      <ButtonTop />
    </section>
  )
}
export default Home;
