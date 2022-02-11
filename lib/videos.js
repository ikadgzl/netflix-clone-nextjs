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

    return data?.items.map((item) => {
      const id = item.id?.videoId || item.id;
      const snippet = item.snippet;
      return {
        title: snippet?.title,
        imgUrl: `https://i.ytimg.com/vi/${id}/maxresdefault.jpg`,
        id,
        description: snippet.description,
        publishTime: snippet.publishedAt,
        channelTitle: snippet.channelTitle,
        statistics: item.statistics || { viewCount: 0 }
      };
    });
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

export const getVideosById = (videoId) => {
  return getVideos(
    `videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}`
  );
};
