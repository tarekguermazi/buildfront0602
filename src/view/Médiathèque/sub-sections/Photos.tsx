import React from 'react'
import GridContentLayout from '../styles/GridContentLayout'
import SectionHeader from '../shared/SectionHeader'
import VerticalPlayer from '../shared/VerticalPlayer'

export default function Photos({ photosList }) {
    return (
        <GridContentLayout>
            <SectionHeader title='photos' />
            <div className="grid">
                {
                    photosList?.map(photo => {
                        return (
                            <VerticalPlayer dataSource={photo} key={photo._id} />
                            // END OF MAP RETURN
                        )
                    })
                }
            </div>
        </GridContentLayout>
    )
}
