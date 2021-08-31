const splitBySeperator = (korLyrics: string, engLyrics: string, lyricsStartTime: string, lyricsDuration: string) => {
  const korLyricsList = korLyrics.split('/$');
    const engLyricsList = engLyrics.split('/$');
    const lyricsStartTimeList = lyricsStartTime.split('/$');
    const lyricsDurationList = lyricsDuration.split('/$');

    const lyricsObjAll = [];

    for (let i = 0; i < korLyricsList.length; i += 1) {
      lyricsObjAll.push({
        startTime: +lyricsStartTimeList[i],
        duration: +lyricsDurationList[i],
        kor: korLyricsList[i],
        eng: engLyricsList[i],
      });
    }
    return lyricsObjAll;
}

export { splitBySeperator };