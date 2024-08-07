
window.onload = function() {
  const leftSide = document.getElementById('leftSide');
  leftSide.style.animation = 'move 3s forwards';

  const rightSide = document.getElementById('rightSide');
  rightSide.style.animation = 'move2 3s forwards'

  const instagram = document.getElementById('instagram')
  instagram.style.animation = 'moveLeft 4s forwards';

  const twitter = document.getElementById('twitter')
  twitter.style.animation = 'moveLeftClose 3s forwards';

  const whatsapp = document.getElementById('whatsapp');
  whatsapp.style.animation = 'moveRight 4s forwards';

  const facebook = document.getElementById('facebook');
  facebook.style.animation = 'moveRightClose 3s forwards'
}

