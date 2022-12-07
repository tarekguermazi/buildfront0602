import React from 'react'
import { i18n } from 'src/i18n'
import BreadCrumbs from '../shared/BreadCrumbs'

export default function Header() {
    return (
        <>
            <BreadCrumbs view={i18n("menu.propos")}/>
            <div className='archieve__header'>
                <h2>{i18n("menu.propos")}</h2>
                <div className='communiquer__bar'></div>
            </div>
        </>
    )
}
