'use strict';

let numberOfFilms;

function start() {
    numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

function showMyDB() {
    if (personalMovieDB.private == false) {
        console.log(personalMovieDB);
    }
}

showMyDB();

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?', ""),
            b = prompt('На сколько оцените?', '');

        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
        } else {
            i--;
        }

    }
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        alert('Просмотрено довольно мало фильмов')
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        alert('Вы классический зритель');
    } else if (personalMovieDB.count >= 30) {
        alert('Вы киноман!');
    } else {
        alert('Ошибка!');
    }
}

detectPersonalLevel();

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        let a = prompt(`Ваш любимый жанр под номером ${i}`, '');
        personalMovieDB.genres[i - 1] = a;
    }
}

writeYourGenres();

// console.log(personalMovieDB);

///////////////



