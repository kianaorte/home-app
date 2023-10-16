import { Button } from '../components/Button';
import { Settings } from '../components/Settings';


// interface TitleProps {
//   title: string;
// }

export const Home = () => {

  return (
    <div className='background-container'>
      <div className='space'>
        <h1 className='title'>yeehaw</h1>
        <Button text="Start game" link="/scene1" hideOnClick="true" />
        <Settings />
      </div>
    </div>
  );
};

export default Home;