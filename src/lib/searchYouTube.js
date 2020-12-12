var searchYouTube = ({ key, query, max = 5 }, callback) => {

  fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=${max}&q=${query}&type=video&videoEmbeddable=true&key=${key}`)
    .then((res) => res.json())
    .then(({items}) => {
      callback(items);
    })
    .then(() => console.log(
      '%c retrieved data: success!',
      'background: #222; color: #bada55'
    ))
    .catch((err) => console.error(err));
};

export default searchYouTube;

// https://youtube.googleapis.com/youtube/v3/search?maxResults=5&q=pizza&type=video&videoEmbeddable=true&key=[YOUR_API_KEY]' \
//   // --header 'Authorization: Bearer [YOUR_ACCESS_TOKEN]' \
//   // --header 'Accept: application/json' \
//   // --compressed



// $.get('https://www.googleapis.com/youtube/v3/search', {
//   part: 'snippet',
//   key: key,
//   q: query,
//   maxResults: max,
//   type: 'video',
//   videoEmbeddable: 'true'
// })
//   .done(({ items }) => {
//     if (callback) {
//       console.log(items);
//       callback(items);
//     }
//   })
//   .fail(({ responseJSON }) => {
//     responseJSON.error.errors.forEach((err) =>
//       console.error(err)
//     );
//   });