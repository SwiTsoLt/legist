ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
        center: [53.912845, 27.561094],
        zoom: 17
    }, {
        searchControlProvider: 'yandex#search'
    }),

        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'Специализированная юридическая консультация',
            balloonContent: null
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: '../media/contacts/ymaps_target.png',
            // Размеры метки.
            iconImageSize: [30, 40],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-5, -38]
        });

    myMap.geoObjects
        .add(myPlacemark)
        .add(myPlacemarkWithContent);
});