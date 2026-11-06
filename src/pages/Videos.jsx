import React from 'react';
import SectionWrapper from '../components/layout/SectionWrapper';
import VideoGrid from '../components/youtube/VideoGrid';
import siteConfig from '../config/siteConfig';

const Videos = () => {
  return (
    <div className="pt-24 pb-16">
      <SectionWrapper
        id="video-vault"
        badge="CONTENT ARCHIVE"
        title="Full Video Repertoire"
        subtitle={`Every competitive match, walkthrough, and hardware benchmark produced by ${siteConfig.branding.channelName}.`}
      >
        <VideoGrid showFeatured={true} />
      </SectionWrapper>
    </div>
  );
};

export default Videos;
