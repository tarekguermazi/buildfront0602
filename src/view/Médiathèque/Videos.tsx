import React from 'react'
import GridContentLayout from './styles/GridContentLayout'
import SectionHeader from './shared/SectionHeader'
import VerticalPlayer from './shared/VerticalPlayer'
import Skeleton from 'react-loading-skeleton'

export default function Videos({ videosList }) {

    return (
        <GridContentLayout>
            <SectionHeader title='vidéos' />
            <div className="grid">
                {
                    videosList?.map(vid => {
                        return (
                            <VerticalPlayer dataSource={vid} key={vid._id} />
                            // END OF MAP RETURN
                        )
                    })
                }
            </div>
        </GridContentLayout>
    )
}
