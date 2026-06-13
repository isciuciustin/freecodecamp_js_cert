const playlists = [
  [
    {
      trackId: "trk101",
      artist: "Velvet Comet",
      title: "Crimson Afterglow",
      votes: 5,
      bpm: 122
    },
    {
      trackId: "trk102",
      artist: "Neon Harbor",
      title: "Static Horizon",
      votes: 2,
      bpm: 108
    },
    {
      trackId: "trk103",
      artist: "Lunar Arcade",
      title: "Midnight Frequency",
      votes: 4,
      bpm: 128
    }
  ],
  [
    {
      trackId: "trk201",
      artist: "Solar Echo",
      title: "Glass Skyline",
      votes: 3,
      bpm: 115
    },
    {
      trackId: "trk202",
      artist: "Velvet Comet",
      title: "Satellite Hearts",
      votes: 6,
      bpm: 124
    },
    {
      trackId: "trk102",
      artist: "Neon Harbor",
      title: "Static Horizon",
      votes: 2,
      bpm: 108
    }
  ]
];

function flattenPlaylists(arg){
  let res = [];
  if(!Array.isArray(arg)){
    return res;
  }
  for(let i = 0; i < arg.length; i++){
    let arr = arg[i];
    for(let j = 0; j < arr.length; j++){
      let track = arr[j];
      track.source = [i,j];
      res.push(track);
    }
  }
  return res;
}

function scoreTracks(arr){
  for(let i = 0; i < arr.length; i++){
    arr[i].score = arr[i].votes * 10 - Math.abs(arr[i].bpm - 120);
  }
  return arr;
}

function dedupeTracks(arr){
  let hashis = {};
  let res = [];
  for(let i = 0; i < arr.length; i++){
    if(!hashis[arr[i].trackId]){
      hashis[arr[i].trackId] = true;
      res.push(arr[i]);
    }
  }
  return res;
}

function enforceArtistQuota(arr, num){
  let res = [];
  if(num == 0)
    return res;
  let hashis = {};
  for(let i = 0; i < arr.length; i++){
    if(!hashis[arr[i].artist]){
      hashis[arr[i].artist] = 1;
      res.push(arr[i]);
    }
    else{
      hashis[arr[i].artist] += 1;
      if(hashis[arr[i].artist] <= num){
        res.push(arr[i]);
      }
    }
  }
  return res;
}

function buildSchedule(arr){
  let res = [];
  for(let i = 0; i < arr.length; i++){
    res.push(
      {
        slot: i + 1, 
        trackId: arr[i].trackId
      }
    )
  }
  return res;
}

function remixPlaylist(arr, num){
  let res = flattenPlaylists(arr);
  res = scoreTracks(res);
  res = dedupeTracks(res);
  res = enforceArtistQuota(res,num);
  res = buildSchedule(res);
  return res;
}

console.log(remixPlaylist(playlists, 1))

