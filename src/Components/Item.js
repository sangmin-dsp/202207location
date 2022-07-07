import React from 'react';
import Button from './Button'
import './item.css'

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Item = ({ title, desc, backgroundImg, leftBtnTxt, leftBtnLink, rightBtnTxt
, rightBtnLink, twoButtons, first }) => {
  return (
    <div
      className="item"
      style={{
        backgroundImage: `url(${backgroundImg})`,
      }}
    >
      <div class="item__container">
        <div class="item_text">
          <p>{title}</p>
          <div class="item__textDesc">
            <p>{desc}</p>
          </div>
        </div>
        <div class="item__lowerThird">
          <div class="item__buttons">
            <Button imp="pirmary" text={leftBtnLink} link={leftBtnLink} />
            {twoButtons && (
              <Button imp="secondary" text={rightBtnTxt} link={rightBtnLink} />
            )}
          </div>
          {first && (
            <div class="item__expand">
              <ExpandMoreIcon />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Item;
