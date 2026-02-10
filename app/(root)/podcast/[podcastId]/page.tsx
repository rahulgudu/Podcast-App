"use client"
import { useParams } from 'next/navigation'
import React from 'react'

const PodcastDetails = () => {
    const params = useParams();

  return (
    <div>PodcastDetails for {params.podcastId}</div>
  )
}

export default PodcastDetails