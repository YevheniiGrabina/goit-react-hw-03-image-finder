import { Plane } from 'react-loader-spinner';
import s from './LoaderSpinner.module.css';

const LoaderSpinner = () => {
  return (
    <div className={s.Plane}>
      <Plane ariaLabel="loading" color="#00BFFF" height={80} width={80} />
    </div>
  );
};

export default LoaderSpinner;
