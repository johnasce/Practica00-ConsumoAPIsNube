var d = document;


async function carpo() {
    d.getElementById("ocultar").style.visibility = "hidden";
    var url = "https://pokeapi.co/api/v2/pokemon/";
    var xhttp = new XMLHttpRequest();
    var txt_val = d.getElementById("txt").value
    if (txt_val == "") {
        d.getElementById("most").innerHTML += "no Existe ese pokemon"
    } else {
        d.getElementById("id_poke").innerHTML = "";
        xhttp.open("GET", url + txt_val, true);
        xhttp.send();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                console.log(JSON.parse(this.responseText));
                var data = JSON.parse(this.responseText);
                var imagen = data.sprites.other["official-artwork"].front_default;
                d.getElementById("picture").innerHTML = "<img id='picture' class='img-fluid' width='200px'heigth='200px' src='" + imagen + "'alt='foto pokemon'>";
                d.getElementById('id_poke').innerHTML += data.id;
                d.getElementById("name_poke").textContent = data.name;
                d.getElementById("movimientos").textContent = "";
                d.getElementById("habilidades").textContent = "";
                d.getElementById("stats").textContent = "";
                d.getElementById("games").textContent = "";
                for (var obj = 0; obj < data.moves.length; obj++) {
                    d.getElementById("movimientos").innerHTML += data.moves[obj].move.name + "<br>";
                    d.getElementById("txt").value = "";
                }
                for (var obj = 0; obj < data.abilities.length; obj++) {
                    d.getElementById("habilidades").innerHTML += data.abilities[obj].ability.name + "<br>";
                    d.getElementById("txt").value = "";
                }
                for (var obj = 0; obj < data.stats.length; obj++) {
                    d.getElementById("stats").innerHTML += data.stats[obj].base_stat + "<br>";
                    d.getElementById("txt").value = "";
                }
                for (var obj = 0; obj < data.game_indices.length; obj++) {
                    d.getElementById("games").innerHTML += data.game_indices[obj].game_index + "<br>";
                    d.getElementById("txt").value = "";
                }
            }

        }
    }


}

async function nextpoke() {
    var id = d.getElementById('id_poke').textContent;
    id = parseInt(id) + 1;
    id = id.toString();
    d.getElementById("id_poke").innerHTML = "";
    console.log(id)
    var url = "https://pokeapi.co/api/v2/pokemon/" + id;
    var xhttp = new XMLHttpRequest();
    // var txt_val = d.getElementById("txt").value
    xhttp.open("GET", url, true);
    xhttp.send();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log(JSON.parse(this.responseText));
            var data = JSON.parse(this.responseText);
            var imagen = data.sprites.other["official-artwork"].front_default;
            d.getElementById("picture").innerHTML = "<img id='picture' class='img-fluid' width='200px'heigth='200px' src='" + imagen + "'alt='foto pokemon'>";
            d.getElementById('id_poke').innerHTML += data.id;
            d.getElementById("name_poke").textContent = data.name;
            d.getElementById("movimientos").textContent = "";
            d.getElementById("habilidades").textContent = "";
            d.getElementById("stats").textContent = "";
            d.getElementById("games").textContent = "";
            for (var obj = 0; obj < data.moves.length; obj++) {

                d.getElementById("movimientos").innerHTML += data.moves[obj].move.name + "<br>";
            }
            for (var obj = 0; obj < data.abilities.length; obj++) {
                d.getElementById("habilidades").innerHTML += data.abilities[obj].ability.name + "<br>";
                d.getElementById("txt").value = "";
            }
            for (var obj = 0; obj < data.stats.length; obj++) {
                d.getElementById("stats").innerHTML += data.stats[obj].base_stat + "<br>";
                d.getElementById("txt").value = "";
            }
            for (var obj = 0; obj < data.game_indices.length; obj++) {
                d.getElementById("games").innerHTML += data.game_indices[obj].game_index + "<br>";
                d.getElementById("txt").value = "";
            }
        }

    }
}

async function prevpoke() {
    var id = d.getElementById('id_poke').textContent;
    id = parseInt(id) - 1;
    id = id.toString();
    d.getElementById("id_poke").innerHTML = "";
    console.log(id)
    var url = "https://pokeapi.co/api/v2/pokemon/" + id;
    var xhttp = new XMLHttpRequest();
    // var txt_val = d.getElementById("txt").value
    xhttp.open("GET", url, true);
    xhttp.send();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log(JSON.parse(this.responseText));
            var data = JSON.parse(this.responseText);
            var imagen = data.sprites.other["official-artwork"].front_default;
            d.getElementById("picture").innerHTML = "<img id='picture' class='img-fluid' width='200px'heigth='200px' src='" + imagen + "'alt='foto pokemon'>";
            d.getElementById('id_poke').innerHTML += data.id;
            d.getElementById("name_poke").textContent = data.name;
            d.getElementById("movimientos").textContent = "";
            d.getElementById("habilidades").textContent = "";
            d.getElementById("stats").textContent = "";
            d.getElementById("games").textContent = "";
            for (var obj = 0; obj < data.moves.length; obj++) {
                d.getElementById("movimientos").innerHTML += data.moves[obj].move.name + "<br>";
            }
            for (var obj = 0; obj < data.abilities.length; obj++) {
                d.getElementById("habilidades").innerHTML += data.abilities[obj].ability.name + "<br>";
                d.getElementById("txt").value = "";
            }
            for (var obj = 0; obj < data.stats.length; obj++) {
                d.getElementById("stats").innerHTML += data.stats[obj].base_stat + "<br>";
                d.getElementById("txt").value = "";
            }
            for (var obj = 0; obj < data.game_indices.length; obj++) {
                d.getElementById("games").innerHTML += data.game_indices[obj].game_index + "<br>";
                d.getElementById("txt").value = "";
            }
        }

    }
}