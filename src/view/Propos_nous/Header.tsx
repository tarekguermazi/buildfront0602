import React from 'react'
import BreadCrumbs from '../shared/BreadCrumbs'

export default function Header() {
    return (
        <>
            <BreadCrumbs view='a propos' />
            <div className='archieve__header'>
                <h2>A Propos&nbsp;</h2>
                <div className='communiquer__bar'></div>
            </div>
        </>
    )
}
