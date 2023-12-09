const splashes = [
    'American pizza\'s not real pizza.',
    '‌‌ ‌‌ ‌‌ ‌‌ ‌‌ ‌‌ ‌‌ ‌‌ ‌‌ ‌‌‌‌  Melons!',
    '‌‌ ‌ ‌ ‌ ‌ ‌ ‌‌  Made in live!',
    'What a unique feature this is',
    '‌ ‌ ‌ ‌ ‌ ‌‌ ‌ Mankind is dead',
    '‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ Blood is fuel',
    '‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ Hell is full',
    '‌ ‌ ‌ ‌ ‌ ‌ ‌ 142.32.66.173',
    '‌ ‌ ‌ ‌ ‌ ‌ ‌ 201.78.14.198',
    '‌ ‌ ‌ ‌ ‌ ‌ ‌ 39.102.67.150',
    'Really long message just to test the boundaries of this! You\'ll have to select me if you wanna read it all!'

    
] 

const randomSplash = Math.floor(Math.random() * splashes.length)

window.onload = function () {
    document.getElementById('status').innerHTML = splashes[randomSplash].replace(/ /g, '&nbsp');
}