import 'isomorphic-fetch';
import React, { useState } from 'react';

import Error from './_error';
import Layout from '../components/Layout';
import ChannelGrid from '../components/ChannelGrid';
import PodcastListWithClick from '../components/PodcastListWithClick';
import PodcastPlayer from '../components/PodcastPlayer';

const Channel = (props) => {
  const { channel, audioClips, series, statusCode } = props;
  const [podcast, setPodcast] = useState(null);

  const openPodcast = (event, podcast) => {
    event.preventDefault();
    setPodcast(podcast);
  };

  const closePodcast = (event) => {
    event.preventDefault();
    setPodcast(null);
  };

  if (statusCode !== 200) {
    return <Error statusCode={statusCode} />;
  }

  return (
    <Layout title={channel.title}>
      <div
        className="banner"
        style={{
          backgroundImage: `url(${channel.urls.banner_image.original})`,
        }}
      />

      {podcast && (
        <div className="modal">
          <PodcastPlayer clip={podcast} onClose={closePodcast} />
        </div>
      )}

      <h1>{channel.title}</h1>

      {series.length > 0 && (
        <div>
          <h2>Series</h2>
          <ChannelGrid channels={series} />
        </div>
      )}

      <h2>Ultimos Podcasts</h2>
      <PodcastListWithClick
        onClickPodcast={openPodcast}
        podcasts={audioClips}
      />

      <style jsx>{`
        .banner {
          width: 100%;
          padding-bottom: 25%;
          background-position: 50% 50%;
          background-size: cover;
          background-color: #aaa;
        }
        h1 {
          font-weight: 600;
          padding: 15px;
        }
        h2 {
          padding: 15px;
          font-size: 1.2em;
          font-weight: 600;
          margin: 0;
        }

        .modal {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 99999;
        }
      `}</style>
    </Layout>
  );
};

Channel.getInitialProps = async ({ query, res }) => {
  let idChannel = query.id;

  try {
    let [reqChannel, reqSeries, reqAudios] = await Promise.all([
      fetch(`https://api.audioboom.com/channels/${idChannel}`),
      fetch(`https://api.audioboom.com/channels/${idChannel}/child_channels`),
      fetch(`https://api.audioboom.com/channels/${idChannel}/audio_clips`),
    ]);

    if (reqChannel.status >= 404) {
      res.statusCode = reqChannel.status;

      return {
        channel: null,
        audioClips: null,
        series: null,
        statusCode: reqChannel.status,
      };
    }

    let dataChannel = await reqChannel.json();
    let channel = dataChannel.body.channel;

    let dataAudios = await reqAudios.json();
    let audioClips = dataAudios.body.audio_clips;

    let dataSeries = await reqSeries.json();
    let series = dataSeries.body.channels;

    return { channel, audioClips, series, statusCode: 200 };
  } catch (error) {
    return { channel: null, audioClips: null, series: null, statusCode: 503 };
  }
};

export default Channel;
