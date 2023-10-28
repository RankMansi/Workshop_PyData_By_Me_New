import React, { useState } from 'react';

const Timeline = () => {
  const [leftContentVisible, setLeftContentVisible] = useState(false);
  const [middleContentVisible, setMiddleContentVisible] = useState(false);
  const [rightContentVisible, setRightContentVisible] = useState(false);

  const toggleLeftContent = () => {
    setLeftContentVisible((prev) => !prev);
  };

  const toggleMiddleContent = () => {
    setMiddleContentVisible((prev) => !prev);
  };

  const toggleRightContent = () => {
    setRightContentVisible((prev) => !prev);
  };

  return (
    
    <div className="h-screen flex items-center justify-center relative">
      
      <div className="w-2 h-full bg-gray-600 absolute left-1/2 top-0 transform -translate-x-1/2"></div>
      <div className="flex flex-col">
        <div className="flex-1 mb-52">
          <div
            className="w-24 h-24 bg-purple-500 rounded-full flex items-center justify-center cursor-pointer relative"
            onClick={toggleLeftContent}
          >
            <div
              className={`absolute bg-gray-900 rounded p-2 text-purple-200 -top--3 left-32 transform group-hover:scale-100 transition-transform text-2xl `}
            >
              {leftContentVisible ? '' : 'Conditionals'}
            </div>
            {leftContentVisible && (
              <div
                className="absolute bg-gray-900 text-purple-200 -top--3 left-32 transform scale-100 text-2xl"
                onClick={toggleLeftContent}
              >
                <div>if,else,elif, nested if, nested if-else, pass</div>
              </div>
            )}
          </div>
        </div>
        <div className="flex-1 mb-52">
          <div
            className="w-24 h-24 bg-purple-500 rounded-full flex items-center justify-center cursor-pointer relative"
            onClick={toggleMiddleContent}
          >
            <div
              className={`absolute bg-gray-900 rounded p-2 text-purple-200 -top--3 right-32 transform group-hover:scale-100 transition-transform text-2xl`}
            >
              {middleContentVisible ? '' : 'Loops'}
            </div>
            {middleContentVisible && (
              <div
                className="absolute bg-gray-900 text-purple-200 -top--3 right-32 transform scale-100 text-2xl"
                onClick={toggleMiddleContent}
              >
                <div>for,while,nested for, break, continue, for..in..else, do-while, while..else..</div>
              </div>
            )}
          </div>
        </div>
        <div className="flex-1">
          <div
            className="w-24 h-24 bg-purple-500 rounded-full flex items-center justify-center cursor-pointer relative"
            onClick={toggleRightContent}
          >
            <div
              className={`absolute bg-gray-900 rounded p-2 text-purple-200 -top--3 left-32 transform group-hover:scale-100 transition-transform text-2xl`}
            >
              {rightContentVisible ? '' : 'Math Library'}
            </div>
            {rightContentVisible && (
              <div
                className="absolute bg-gray-900 text-purple-200 -top--3 left-32 transform scale-100 text-2xl"
                onClick={toggleRightContent}
              >
                <div>ceil,floor,trunc, sqrt, pow, exp, log, log10, sin,...,tan, mod,gcd,isqrt, factorial,copysign</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
