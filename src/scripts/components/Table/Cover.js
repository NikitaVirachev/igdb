import React, { useState } from 'react';

import classes from './Cover.module.scss';
import CoverStub from './CoverStub';

const Cover = function (props) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <a href={props.href}>
      <div class={classes.cover}>
        {isLoaded && (
          <img src={props.imageURL} alt={`Cover of ${props.name}`} />
        )}
        {!isLoaded && <CoverStub />}
      </div>
    </a>
  );
};

export default Cover;
