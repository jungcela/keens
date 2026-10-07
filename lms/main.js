const heroTitles = {
  homework: '“숙제하자” 대신,<br><em>영상부터 켜볼까요?</em>',
  review: '오늘 배운 그 동작,<br><em>집에서 또 춰볼까?</em>',
  basics: '워밍업부터 다시!<br><em>기본기를 차곡차곡.</em>',
  all: '수업 끝나고도,<br><em>춤은 계속!</em>'
};

const angle = new URLSearchParams(window.location.search).get('angle');
if (Object.prototype.hasOwnProperty.call(heroTitles, angle)) {
  document.getElementById('hero-title').innerHTML = heroTitles[angle];
}
