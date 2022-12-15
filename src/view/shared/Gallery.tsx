import React from "react";
import Image from "./Image";

export default function Gallery() {
  return (
    <div className='app__galery'>
      <div className='art__images'>
        <div>Galerie&nbsp;D'art</div>
        {Array.from({ length: 5 }).map((item) => (
          <div>
            <div className='art__photo'>
              <Image
                className='lazyload'
                src={"https://placehold.jp/172x213.png"}
                width={172}
                height={213}
              />
            </div>
            <div className='art__detaill'>
              Lorem ipsum dolor sit amet, consectetur
            </div>
            <div className='art__author'>Hatem Mekki</div>
          </div>
        ))}
      </div>
      <div className='naviation__art'>
        <div className='graph__navigate'>
          <div className='navigate__left'>
            <i className='fa-solid fa-chevron-left' />
          </div>
          <div className='navigate__right'>
            <i className='fa-solid fa-chevron-right' />
          </div>
        </div>
      </div>
    </div>
  );
}
