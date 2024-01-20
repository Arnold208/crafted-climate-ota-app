import React from 'react';
import Dash from './dash-content';
import Devices from './devices';
import Data from './data';
import Keys from './keys';

const Content = ({ selectedTab }) => {
  const getComponent = () => {
    switch (selectedTab) {
      case 'dashboard':
        return <Dash selectedTab={selectedTab} />;
      case 'device':
        return <Devices selectedTab={selectedTab} />;
      case 'data':
        return <Data selectedTab={selectedTab} />;
      case 'keys':
        return <Keys selectedTab={selectedTab} />;
      default:
        return null;
    }
  };

  return (
    <div className="content">
      <div className="bg-gray-100 text-lg font-bold text-green-500  p-5 rounded shadow">
        {/* <h2>{selectedTab.charAt(0).toUpperCase() + selectedTab.slice(1)}</h2> */}
        <div>
          {getComponent()}
        </div>
      </div>
    </div>
  );
};

export default Content;
