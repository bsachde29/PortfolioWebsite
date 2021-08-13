﻿import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Projects } from './components/Projects';
import { Socials } from './components/Socials';

import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
            <Route exact path='/' component={Home} />
            <Route path='/projects' component={Projects} />
            <Route path='/socials' component={Socials} />
      </Layout>
    );
  }
}
