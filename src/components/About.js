import React, { useState } from 'react';
import User from './User';
import UserClass from './UserClass';
import { render } from 'react-dom';

// const About = () => {
//   // const [user, setUser] = useState('john');
//   return (
//     <div>
//       {/* <User name={user} email={'functional@gmail.com'} /> */}

//       <UserClass name={'first'} email={'classbased@gmail.com'} />
//       <UserClass name={'second'} email={'classbased@gmail.com'} />
//     </div>
//   );
// };

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      userData: {},
    };
  }
  async componentDidMount() {
    const fetchData = await fetch(
      'https://api.github.com/users/maryamshahnawaz'
    );
    const jsonData = await fetchData.json();
    console.log(jsonData);
    this.setState({
      userData: jsonData,
    });
  }

  componentDidUpdate() {}
  componentWillUnmount() {}
  render() {
    let name1, bio1, avatar_url1;
    if (this.state.userData) {
      const { name, bio, avatar_url } = this.state.userData;
      name1 = name;
      bio1 = bio;
      avatar_url1 = avatar_url;
    }

    return (
      <div>
        <UserClass name={name1} bio={bio1} avatar_url={avatar_url1} />
      </div>
    );
  }
}
// export default About;
// parent constructor

// parent rendered

// first constructor is loaded

// first render is loaded

// second constructor is loaded

// second render is loaded

// first component did mount

// second component did mount
// parent component did mount

//complete render phase in a batch
// first UserClass constructor
// first UserClass render

// second UserClass constructor
//  second UserClass render

// render DOM => Shimmer / Skeleton

// complete the commit cycle in batch

// first UserClass component did mount
// second UserClass component did mount

export default About;
