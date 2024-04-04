import React from 'react';
//instantiated class,
// create an object of the class
//copy
//load class
class UserClass extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}
  componentDidUpdate() {}
  componentWillUnmount() {}
  render() {
    const { name, bio, avatar_url } = this.props;
    console.log(this.props);
    return (
      <div>
        <p>Name: {name}</p>
        <p>Bio:{bio}</p>
        <img src={avatar_url} alt='' />
      </div>
    );
  }
}
export default UserClass;
