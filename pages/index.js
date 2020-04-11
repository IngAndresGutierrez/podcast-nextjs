import 'isomorphic-fetch';
import ChannelGrid from '../components/ChannelGrid';
import Layout from '../components/Layout';

const Index = (props) => {
  const { channels, statusCode } = props;

  if (statusCode !== 200) {
    return <div>Se rompió el server</div>;
  }

  return (
    <Layout title='Podcasts'>
      <ChannelGrid channels={channels} />
    </Layout>
  );
};

Index.getInitialProps = async () => {
  try {
    let req = await fetch('https://api.audioboom.com/channels/recommended');
    let { body: channels } = await req.json();
    return { channels, statusCode: 200 };
  } catch (e) {
    return { channels: null, statusCode: 500 };
  }
};

export default Index;
