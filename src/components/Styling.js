import { useState } from 'react';
import styles from './styles.module.css';

const Styling = () => {
    const [isActive, setIsActive] = useState(false);


    return (
      <div className="text-center mt-8">
        <button
          className={`px-4 py-2 ${
            isActive
              ? 'bg-green-600 text-white cursor-pointer'
              : 'bg-gray-500 text-white cursor-not-allowed'
          }`}
        >
          {isActive ? 'Active' : 'Inactive'}
        </button>
      </div>
    );
   };

export default Styling;