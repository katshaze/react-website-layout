import React from 'react'
import {Switch, Route} from 'react-router-dom';

import Header from '../components/common/Header'

import HomeMain from '../components/home_content/HomeMain'
import HomeAside from '../components/home_content/HomeAside'

import MembersMain from '../components/other_pages_content/MembersMain';
import MembersAside from '../components/other_pages_content/MembersAside';
import PhotosMain from '../components/other_pages_content/PhotosMain';
import PhotosAside from '../components/other_pages_content/PhotosAside';
import PagesMain from '../components/other_pages_content/PagesMain';
import PagesAside from '../components/other_pages_content/PagesAside';
import DiscussionsMain from '../components/other_pages_content/DiscussionsMain';
import DiscussionsAside from '../components/other_pages_content/DiscussionsAside';
import MoreMain from '../components/other_pages_content/MoreMain';
import MoreAside from '../components/other_pages_content/MoreAside';

const SiteLayout = () => (
  <div className="site-layout">
    <Header />
    <main>
      <Switch>
        <Route exact path="/" component={HomeMain} />
        <Route exact path="/Members" component={MembersMain} />
        <Route exact path="/Photos" component={PhotosMain} />
        <Route exact path="/Pages" component={PagesMain} />
        <Route exact path="/Discussions" component={DiscussionsMain} />
        <Route exact path="/More" component={MoreMain} />
      </Switch>
    </main>
    <aside>
      <Switch>
        <Route exact path="/" component={HomeAside} />
        <Route exact path="/Members" component={MembersAside} />
        <Route exact path="/Photos" component={PhotosAside} />
        <Route exact path="/Pages" component={PagesAside} />
        <Route exact path="/Discussions" component={DiscussionsAside} />
        <Route exact path="/More" component={MoreAside} />
      </Switch>
    </aside>
  </div>
)

export default SiteLayout
