import React from 'react'
import CreateNewArticles from '../../Components/CreateNewArticles/CreateNewArticles';
import Header from '../../Components/Header/Header';
import TopNav from '../../Components/TopNav/TopNav';
import Footer from '../../Components/Footer/Footer';
import TopNav_Admin from '../../Components/TopNav_admin/TopNav_Admin';

const CreateNewsArticlePage = () => {
  return (
    <div>
      {/* <TopNav/>
      <Header/> */}
      <TopNav_Admin />
      <CreateNewArticles />
      {/* <Footer/> */}
    </div>
  )
}
export default CreateNewsArticlePage;
