import React, { Component } from 'react';

export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
      <div>
            <h1>Hello, world!</h1>
            <p> </p>
            <p><i>Jokes aside</i>, welcome to my portfolio. My name is Bharat Sachdev, and I am pursuing Computer Science at Purdue University. Here's a few things about me:</p>
        <ul>
                <li>I recently relocated to WA with my family from Singapore.</li>
                <li>Internship and work experience wise, my last few years have been tough due to COVID and legal restrictions preventing me from working in Singapore or USA.
                    If you want to know more about this, please feel free to reach out through any of the means on my contact page.</li>
                <li>I have worked hard for and have managed to accelerate my four-year graduation into a three-year one.</li>
                <li>CS is my passion, and I spend a lot of my free time working on either personal projects (like this one) or on LeetCode and HackerRank.</li>
                <li>I am specializing in Software Engineering and hoping to get a related position at graduation in May 2022.</li>
                <li>A final caution: My sense of humor is limited to CS jokes, dad jokes, or a combination of both. If that is something you would want in your workplace, I am your guy. If not, I am still your guy.</li>

        </ul>
        <p>To help you get started, we have also set up:</p>
        <ul>
          <li><strong>Client-side navigation</strong>. For example, click <em>Counter</em> then <em>Back</em> to return here.</li>
          <li><strong>Development server integration</strong>. In development mode, the development server from <code>create-react-app</code> runs in the background automatically, so your client-side resources are dynamically built on demand and the page refreshes when you modify any file.</li>
          <li><strong>Efficient production builds</strong>. In production mode, development-time features are disabled, and your <code>dotnet publish</code> configuration produces minified, efficiently bundled JavaScript files.</li>
        </ul>
        <p>The <code>ClientApp</code> subdirectory is a standard React application based on the <code>create-react-app</code> template. If you open a command prompt in that directory, you can run <code>npm</code> commands such as <code>npm test</code> or <code>npm install</code>.</p>
      </div>
    );
  }
}
