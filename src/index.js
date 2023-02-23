import React from 'react';
import { render } from 'react-dom';
import Videojs from './video.js';

const videoJsOptions = {
  autoplay: false,
  playbackRates: [0.5, 1, 1.25, 1.5, 2],
  width: 720,
  height: 300,
  controls: true,
  sources: [
    {
      // src: '//s3.amazonaws.com/x265.org/video/Tears_400_x265.mp4',
      // src: '//s3.amazonaws.com/x265.org/video/Tears_400_x264.mp4',
      // type: 'video/mp4',
      src: '//filesamples.com/samples/video/flv/sample_1280x720_surfing_with_audio.flv',
      type: 'video/flv'
      // type: 'video/x-flv'
    },
  ],
};

const App = () =>
  <div>
    <Videojs {...videoJsOptions} />
  </div>;

render(<App />, document.getElementById('root'));