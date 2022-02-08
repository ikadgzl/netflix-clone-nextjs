// https://youtube.googleapis.com/youtube/v3/search?q=test&key=[YOUR_API_KEY]

export const getVideos = async (url) => {
  try {
    const res = await fetch(
      `https://youtube.googleapis.com/youtube/v3/${url}&maxResults=25&key=${process.env.YOUTUBE_API_KEY}`
    );
    const data = await res.json();

    if (data?.error) {
      console.log(data.error.message);
      return [];
    }

    return data.items.map((item) => ({
      title: item.snippet.title,
      imgUrl: item.snippet.thumbnails.high.url,
      id: item.id?.videoId || item.id
    }));
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const getCommonVideos = (searchQuery) => {
  return getVideos(`search?part=snippet&q=${searchQuery}`);
};

export const getPopularVideos = () => {
  return getVideos(
    `videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US`
  );
};
