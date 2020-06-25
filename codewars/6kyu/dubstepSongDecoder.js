function songDecoder(song) {
  return song.replace(new RegExp('WUB', 'g'), ' ').replace(/ +/g, ' ').trim();
}

songDecoder('WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB');
// =>  WE ARE THE CHAMPIONS MY FRIEND
