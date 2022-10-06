import React from 'react'
import GridContentLayout from '../styles/GridContentLayout'
import SectionHeader from '../shared/SectionHeader'
import AudioPlayer from '../shared/AudioPlayer'

export default function Podcasts({ podcastList }) {
    return (
        <GridContentLayout>
            <SectionHeader title='podcasts' />
            <div className="grid">
                {
                    podcastList?.map(pod => {
                        return (
                            <AudioPlayer dataSource={pod} key={pod._id} />
                            // END OF MAP RETURN
                        )
                    })
                }
            </div>
        </GridContentLayout>
    )
}
