import React from 'react'

import {
    art1,
    art2,
    art3,
    art4
} from "src/assets/images";

export default function Gallery() {
    return (
        <div className='app__galery'>
            <div className='art__images'>
                <div>Galerie&nbsp;D'art</div>
                <div>
                    <div className='art__photo'>
                        <img className='lazyload' src={art1} alt='' srcSet='' />
                    </div>
                    <div className='art__detaill'>
                        Lorem ipsum dolor sit amet, consectetur
                    </div>
                    <div className='art__author'>Hatem Mekki</div>
                </div>
                <div>
                    <div className='art__photo'>
                        <img className='lazyload' src={art3} alt='' srcSet='' />
                    </div>
                    <div className='art__detaill'>
                        Lorem ipsum dolor sit amet, consectetur
                    </div>
                    <div className='art__author'>Hatem Mekki</div>
                </div>
                <div>
                    <div className='art__photo'>
                        <img className='lazyload' src={art2} alt='' srcSet='' />
                    </div>
                    <div className='art__detaill'>
                        Lorem ipsum dolor sit amet, consectetur
                    </div>
                    <div className='art__author'>Hatem Mekki</div>
                </div>
                <div>
                    <div className='art__photo'>
                        <img className='lazyload' src={art3} alt='' srcSet='' />
                    </div>
                    <div className='art__detaill'>
                        Lorem ipsum dolor sit amet, consectetur
                    </div>
                    <div className='art__author'>Hatem Mekki</div>
                </div>
                <div>
                    <div className='art__photo'>
                        <img className='lazyload' src={art4} alt='' srcSet='' />
                    </div>
                    <div className='art__detaill'>
                        Lorem ipsum dolor sit amet, consectetur
                    </div>
                    <div className='art__author'>Hatem Mekki</div>
                </div>
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
    )
}
