import { Button } from '../components/Button';

export const Home = () => {

  return (
    <div className='background-container'>
      <div className='space'>
        <h1 className='title'>Happy Birthday!</h1>
        <Button text="Start game" link="/scene1" hideOnClick="true" />
      </div>
    </div>
  );
};

export default Home;