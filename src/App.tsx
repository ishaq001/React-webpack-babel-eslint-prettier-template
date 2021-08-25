import './styles.css';
import Image from './mono.svg';
import { ClickCounter } from './ClickCounter';

export const App = () => {
  return (
    <>
      <h1>{process.env.name} sdfsd</h1>
      <img src={Image} height="300" width="300" alt="Hello World!" />
      <ClickCounter />
    </>
  );
};
