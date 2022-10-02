import React from 'react'
import GridContentLayout from './styles/GridContentLayout'
import SectionHeader from './shared/SectionHeader'
import DocsCard from './shared/DocsCard'

export default function Docs({ docstList }) {
    return (
        <GridContentLayout>
            <SectionHeader title='documentaire' />
            <div className="grid">
                {
                    docstList?.map(doc => {
                        return (
                            <DocsCard dataSource={doc} key={doc._id} />
                            // END OF MAP RETURN
                        )
                    })
                }
            </div>
        </GridContentLayout>
    )
}
