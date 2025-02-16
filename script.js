function showGenreDescription() {
    const genreSelect = document.getElementById("genre-select");
    const genreDescription = document.getElementById("genre-description");
    const animeContainer = document.getElementById("anime-container");
    const selectedGenre = genreSelect.value;

    let description = "";
    let animeHtml = "";


    switch(selectedGenre) {
        case "action":
            description = "Экшен — динамичные аниме с яркими битвами, приключениями и сильными героями.";
            animeHtml = `
                <div class="anime-card">
                    <img src="https://gen.jut.su/uploads/animethumbs/anime_shingeki-no-kyojin.jpg" alt="Если не грузит, то это значит что у тебя инет говно">
                    <h3><a href="https://jut.su/shingekii-no-kyojin/" id="aa">Атака титанов</a></h3>
                </div>
                <div class="anime-card">
                    <img src="https://gen.jut.su/uploads/animethumbs/anime_hunter-x-hunter.jpg" alt="Если не грузит, то это значит что у тебя инет говно">
                    <h3><a href="https://jut.su/hunter-hunter/" id="aa">Хантер х Хантер</a></h3>
                </div>
                <div class="anime-card">
                    <img src="https://gen.jut.su/uploads/animethumbs/anime_chainsaw-man.jpg" alt="Если не грузит, то это значит что у тебя инет говно">
                    <h3><a href="https://jut.su/chaainsaw-man/" id="aa">Человек-бензопила</a></h3>
                </div>
            `;
            break;
        case "romance":
            description = "Романтика — аниме о любви, чувствах и отношениях между персонажами.";
            animeHtml = `
                <div class="anime-card">
                    <img src="https://gen.jut.su/uploads/animethumbs/anime_horimiya.jpg" alt="Если не грузит, то это значит что у тебя инет говно">
                    <h3><a href="https://jut.su/horimiya/" id="aa">Хоримия</a></h3>
                </div>
                <div class="anime-card">
                    <img src="https://gen.jut.su/uploads/animethumbs/anime_relife.jpg" alt="Если не грузит, то это значит что у тебя инет говно">
                    <h3><a href="https://jut.su/reelife/" id="aa">Повторная жизнь</a></h3>
                </div>
                <div class="anime-card">
                    <img src="https://gen.jut.su/uploads/animethumbs/anime_gotoubun-no-hanayome.jpg" alt="Если не грузит, то это значит что у тебя инет говно">
                    <h3><a href="https://jut.su/gotoubun-no-hanayome/" id="aa">Пять невест</a></h3>
                </div>
            `;
            break;
        case "fantasy":
            description = "Фэнтези — аниме, действие которых происходит в волшебных мирах с магией и мифологией.";
            animeHtml = `
                <div class="anime-card">
                    <img src="https://gen.jut.su/uploads/animethumbs/anime_boku-no-hero-academia.jpg" alt="Если не грузит, то это значит что у тебя инет говно">
                    <h3><a href="https://jut.su/boku-hero-academia/" id="aa">Моя геройская академия</a></h3>
                </div>
                <div class="anime-card">
                    <img src="https://gen.jut.su/uploads/animethumbs/anime_jujutsu-kaisen.jpg" alt="Если не грузит, то это значит что у тебя инет говно">
                    <h3><a href="https://jut.su/jujutsu-kaisen/" id="aa">Магическая битва</a></h3>
                </div>
                <div class="anime-card">
                    <img src="https://gen.jut.su/uploads/animethumbs/anime_kimetsu-no-yaiba.jpg" alt="Если не грузит, то это значит что у тебя инет говно">
                    <h3><a href="https://jut.su/kime-no-yaiba/" id="aa">Клинок, рассекающий демонов</a></h3>
                </div>
            `;
            break;
        case "shonen":
            description = "Сёнен — аниме, ориентированное на подростковую аудиторию, в основном для мальчиков.";
            animeHtml = `
                <div class="anime-card">
                    <img src="https://gen.jut.su/uploads/animethumbs/anime_bleach.jpg" alt="Если не грузит, то это значит что у тебя инет говно">
                    <h3><a href="https://jut.su/bleeach/" id="aa">Блич</a></h3>
                </div>
                <div class="anime-card">
                    <img src="https://gen.jut.su/uploads/animethumbs/anime_ansatsu-kyoushitsu.jpg" alt="Если не грузит, то это значит что у тебя инет говно">
                    <h3><a href="https://jut.su/roomination/" id="aa">Класс убийц</a></h3>
                </div>
                <div class="anime-card">
                    <img src="https://gen.jut.su/uploads/animethumbs/anime_dr-stone.jpg" alt="Если не грузит, то это значит что у тебя инет говно">
                    <h3><a href="https://jut.su/dr-stoune/" id="aa">Доктор Стоун</a></h3>
                </div>
            `;
            break;
        case "shojo":
            description = "Сёдзе — аниме, ориентированное на подростковую аудиторию, в основном для девочек.";
            animeHtml = `
                <div class="anime-card">
                    <img src="https://gen.jut.su/uploads/animethumbs/anime_kaibutsu-kun.jpg" alt="Если не грузит, то это значит что у тебя инет говно">
                    <h3><a href="https://jut.su/kaibutsu-kun/" id="aa">Монстр за соседней партой</a></h3>
                </div>
                <div class="anime-card">
                    <img src="https://gen.jut.su/uploads/animethumbs/anime_orange.jpg" alt="Если не грузит, то это значит что у тебя инет говно">
                    <h3><a href="https://jut.su/orange/" id="aa">Орендж</a></h3>
                </div>
                <div class="anime-card">
                    <img src="https://gen.jut.su/uploads/animethumbs/anime_otome-game.jpg" alt="Если не грузит, то это значит что у тебя инет говно">
                    <h3><a href="https://jut.su/otomes-game/" id="aa">Моя реинкарнация в отомэ-игре в качестве главной злодейки</a></h3>
                </div>
            `;
            break;
        case "mecha":
            description = "Меха — аниме о гигантских роботах и высоких технологиях.";
             animeHtml = `
                <div class="anime-card">
                    <img src="https://gen.jut.su/uploads/animethumbs/anime_evangelion.jpg" alt="Если не грузит, то это значит что у тебя инет говно">
                    <h3><a href="https://jut.su/neon-evangelion/" id="aa">Евангелион</a></h3>
                </div>
                <div class="anime-card">
                    <img src="https://gen.jut.su/uploads/animethumbs/anime_darling-in-the-franxx.jpg" alt="Если не грузит, то это значит что у тебя инет говно">
                    <h3><a href="https://jut.su/darling-in-the-franxx/" id="aa">Милый во Франксе</a></h3>
                </div>
                <div class="anime-card">
                    <img src="https://gen.jut.su/uploads/animethumbs/anime_eighty-six.jpg" alt="Если не грузит, то это значит что у тебя инет говно">
                    <h3><a href="https://jut.su/eighty-six/" id="aa">Восемьдесят шесть</a></h3>
                </div>
            `;
            break;
        default:
            description = "";
            animeHtml = "";
    }

    genreDescription.innerHTML = description;
    animeContainer.innerHTML = animeHtml;
}
function showCategoryDescription(category) {
            const categoryDescription = document.getElementById("category-description");
            const categoryAnimeContainer = document.getElementById("category-anime-container");

            let description = "";
            let animeHtml = "";

            switch(category) {
                case "new":
                    description = "Новые релизы — свежие аниме, только что вышедшие в эфир.";
                    animeHtml = `
                        <div class="anime-card">
                            <img src="https://gen.jut.su/uploads/animethumbs/anime_sakamoto-days.jpg" alt="Если не грузит, то это значит что у тебя инет говно">
                            <h3><a href="https://jut.su/sakamoto-days/" id="aa">Дни Сакамото</a></h3>
                        </div>
                        <div class="anime-card">
                            <img src="https://gen.jut.su/uploads/animethumbs/anime_akuyaku-ojisan.jpg" alt="Если не грузит, то это значит что у тебя инет говно">
                            <h3><a href="https://jut.su/akuyaku-ojisan/" id="aa">Перерождение мужчины средних лет в дочь дворянина</a></h3>
                        </div>
                    `;
                    break;
                case "popular":
                    description = "Популярные аниме — самые любимые и часто обсуждаемые у фанатов.";
                    animeHtml = `
                        <div class="anime-card">
                            <img src="https://gen.jut.su/uploads/animethumbs/anime_kusuriya-no-hitorigoto.jpg" alt="Если не грузит, то это значит что у тебя инет говно">
                            <h3><a href="https://jut.su/kusuriya-no-hitorigoto/" id="aa">Монолог фармацевта</a></h3>
                        </div>
                        <div class="anime-card">
                            <img src="https://gen.jut.su/uploads/animethumbs/anime_tensei-shitara-slime.jpg" alt="Если не грузит, то это значит что у тебя инет говно">
                            <h3><a href="https://jut.su/slime-datta-ken/" id="aa">О моём перерождении в слизь</a></h3>
                        </div>
                    `;
                    break;
                case "top-rated":
                    description = "Лучшие по рейтингу — аниме, получившие наивысшие оценки.";
                    animeHtml = `
                        <div class="anime-card">
                            <img src="https://gen.jut.su/uploads/animethumbs/anime_solo-leveling.jpg" alt="Если не грузит, то это значит что у тебя инет говно">
                            <h3><a href="https://jut.su/solo-leveling/" id="aa">Поднятие уровня в одиночку</a></h3>
                        </div>
                        <div class="anime-card">
                            <img src="https://gen.jut.su/uploads/animethumbs/anime_onepiece.jpg" alt="Если не грузит, то это значит что у тебя инет говно">
                            <h3><a href="https://jut.su/oneepiece/" id="aa">Ван Пис</a></h3>
                        </div>
                    `;
                    break;
                case "classic":
                    description = "Классика — старые, но легендарные аниме.";
                    animeHtml = `
                        <div class="anime-card">
                            <img src="https://gen.jut.su/uploads/animethumbs/anime_mahouka-koukou-no-rettousei.jpg" alt="Если не грузит, то это значит что у тебя инет говно">
                            <h3><a href="https://jut.su/mahokou-no-retto/" id="aa">Непутёвый ученик в школе магии</a></h3>
                        </div>
                        <div class="anime-card">
                            <img src="https://gen.jut.su/uploads/animethumbs/anime_shugi-no-kyoushitsu.jpg" alt="Если не грузит, то это значит что у тебя инет говно">
                            <h3><a href="https://jut.su/shugi-no-kyoushitsu/" id="aa">Класс превосходства</a></h3>
                        </div>
                    `;
                    break;
                default:
                    description = "";
                    animeHtml = "";
            }

            categoryDescription.innerHTML = description;
            categoryAnimeContainer.innerHTML = animeHtml;
        }
