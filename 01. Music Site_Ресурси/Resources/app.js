window.addEventListener('load', solve);

function solve() {
    let addSongButton = document.querySelector('form #add-btn');
    addSongButton.addEventListener('click', addSong);

    function addSong(event) {
        event.preventDefault();

        let genre = event.target.parentElement.querySelector('#genre').value;
        event.target.parentElement.querySelector('#genre').value = '';
        let name = event.target.parentElement.querySelector('#name').value;
        event.target.parentElement.querySelector('#name').value = '';
        let author = event.target.parentElement.querySelector('#author').value;
        event.target.parentElement.querySelector('#author').value = '';
        let date = event.target.parentElement.querySelector('#date').value;
        event.target.parentElement.querySelector('#date').value = '';
        if (genre != '' || name != '' || author != '' || date != '') {


            function OnLikeSong(event) {
                let likesDiv = document.querySelector('#total-likes .likes');
                let p = likesDiv.querySelector('p');
                let likesNumber = p.textContent.split(': ');
                let newNumber = Number(likesNumber[1]) + 1;
                p.textContent = `${likesNumber[0]}: ${newNumber}`;
                event.target.disabled = true;
            }

            function OnDeleteSong(event) {
                event.target.parentElement.remove();
            }

            function OnSaveSong(event) {
                let div = document.querySelector('#saved-hits .saved-container');
                let savedSongDiv = event.target.parentNode.cloneNode(true);
                savedSongDiv.querySelector('.like-btn').remove();
                savedSongDiv.querySelector('.save-btn').remove();
                savedSongDiv.querySelector('.delete-btn').addEventListener('click', OnDeleteSong);
                div.appendChild(savedSongDiv);
            }


            let divContainerHits = document.querySelector('.all-hits-container');

            let songDivElement = document.createElement('div');

            songDivElement.classList.add('hits-info');
            let img = document.createElement('img');
            img.src = './static/img/img.png';
            let h1Genre = document.createElement('h2');
            h1Genre.textContent = `Genre: ${genre}`;

            let h1Name = document.createElement('h2');
            h1Name.textContent = `Name: ${name}`;

            let h1Author = document.createElement('h2');
            h1Author.textContent = `Author: ${author}`;

            let h1Date = document.createElement('h3');
            h1Date.textContent = `Date: ${date}`;

            let buttonDelete = document.createElement('button');
            buttonDelete.classList.add('delete-btn');
            buttonDelete.textContent = 'Delete';
            buttonDelete.addEventListener('click', OnDeleteSong);

            let buttonSaveSong = document.createElement('button');
            buttonSaveSong.classList.add('save-btn');
            buttonSaveSong.textContent = 'Save song';
            buttonSaveSong.addEventListener('click', OnSaveSong);

            let buttonLike = document.createElement('button');
            buttonLike.classList.add('like-btn');
            buttonLike.textContent = 'Like song';
            buttonLike.addEventListener('click', OnLikeSong);

            songDivElement.appendChild(img);
            songDivElement.appendChild(h1Genre);
            songDivElement.appendChild(h1Name);
            songDivElement.appendChild(h1Author);
            songDivElement.appendChild(h1Date);
            songDivElement.appendChild(buttonSaveSong);
            songDivElement.appendChild(buttonLike);
            songDivElement.append(buttonDelete);

            divContainerHits.appendChild(songDivElement);
        }
    }



}