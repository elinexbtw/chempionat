document.getElementById('theme-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark');
    document.body.classList.toggle('light');
});

const planetDescriptions = {
    mercury: 'Меркурий — ближайшая планета к Солнцу и самая маленькая в нашей солнечной системе.',
    venus: 'Венера — похожа на Землю по размеру, но с очень высокой температурой и кислотными облаками.',
    earth: 'Земля — единственная планета, на которой известна жизнь.',
    mars: 'Марс — известен как красная планета, на которой есть следы воды.',
    jupiter: 'Юпитер — самая большая планета в нашей солнечной системе с мощным магнитным полем.',
    saturn: 'Сатурн знаменит своими кольцами, состоящими из льда и камней.',
    uranus: 'Уран — планета с уникальным наклоном оси, из-за чего он вращается на боку.',
    neptune: 'Нептун — планета с самой сильной бурей в солнечной системе, известной как "Большое темное пятно".'
};

const planetImages = {
    mercury: 'https://github.com/elinexbtw/chempionat/blob/main/mercury.png?raw=true',
    venus: 'https://github.com/elinexbtw/chempionat/blob/main/venus.png?raw=true',
    earth: 'https://github.com/elinexbtw/chempionat/blob/main/earth.png?raw=true',
    mars: 'https://github.com/elinexbtw/chempionat/blob/main/mars.png?raw=true',
    jupiter: 'https://github.com/elinexbtw/chempionat/blob/main/jupiter.png?raw=true',
    saturn: 'https://github.com/elinexbtw/chempionat/blob/main/saturn.png?raw=true',
    uranus: 'https://github.com/elinexbtw/chempionat/blob/main/uranus.png?raw=true',
    neptune: 'https://github.com/elinexbtw/chempionat/blob/main/neptune.png?raw=true'
};

document.getElementById('planet-select').addEventListener('change', function() {
    const planet = this.value;
    const infoText = document.getElementById('info-text');
    const planetImage = document.getElementById('planet-image');
    const descriptionText = document.getElementById('description-text');

    if (planet) {
        infoText.textContent = `Вы выбрали ${planet.charAt(0).toUpperCase() + planet.slice(1)}.`;
        planetImage.src = planetImages[planet];
        planetImage.alt = planet.charAt(0).toUpperCase() + planet.slice(1);
        planetImage.style.display = 'block';
        descriptionText.textContent = planetDescriptions[planet];
    } else {
        infoText.textContent = 'Пожалуйста, выберите планету.';
        planetImage.style.display = 'none';
        descriptionText.textContent = '';
    }
});