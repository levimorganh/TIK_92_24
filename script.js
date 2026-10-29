const places = {

    acropolis: {
        number: "01 / ATHENS",
        title: "Acropolis",
        description:
            "The Acropolis is one of the most famous ancient landmarks in Athens. Located on a rocky hill above the city, it is home to the iconic Parthenon and represents the cultural and historical importance of ancient Greece.",
        location: "Central Athens",
        type: "Historical Landmark",
        image: "acropolis.jpg"
    },

    academy: {
        number: "02 / ATHENS",
        title: "Academy of Athens",
        description:
            "The Academy of Athens is one of the most important neoclassical buildings in the city. Its architecture was inspired by classical Greek traditions and it continues to represent education, knowledge and Greek culture.",
        location: "Panepistimiou Street",
        type: "Cultural Landmark",
        image: "academy.jpg"
    },

    temple: {
        number: "03 / ATHENS",
        title: "Temple of Hephaestus",
        description:
            "The Temple of Hephaestus is one of the best-preserved ancient Greek temples. It was dedicated to Hephaestus, the god of metalworking, craftsmanship and fire.",
        location: "Ancient Agora",
        type: "Ancient Temple",
        image: "hephaestus.jpg"
    },

    stadium: {
        number: "04 / ATHENS",
        title: "Panathenaic Stadium",
        description:
            "The Panathenaic Stadium is a historic marble stadium that played an important role in the modern Olympic Games. It is also famous for being built entirely from marble.",
        location: "Central Athens",
        type: "Historic Stadium",
        image: "stadium.jpg"
    },

    garden: {
        number: "05 / ATHENS",
        title: "National Garden",
        description:
            "The National Garden is a peaceful green space in the middle of Athens. With its trees, plants and walking paths, it offers a quiet escape from the busy city.",
        location: "Central Athens",
        type: "Public Garden",
        image: "garden.jpg"
    },

    kapnikarea: {
        number: "06 / ATHENS",
        title: "Kapnikarea Church",
        description:
            "Kapnikarea is a historic Byzantine church located in the heart of Athens. Its small scale and distinctive architecture make it a unique landmark among the modern streets surrounding it.",
        location: "Ermou Street",
        type: "Byzantine Church",
        image: "kapnikarea.jpg"
    }
};


function showPlace(place) {

    const selected = places[place];

    document.getElementById("map-page").style.display = "none";
    document.getElementById("info-page").style.display = "block";

    document.getElementById("place-number").textContent = selected.number;
    document.getElementById("place-title").textContent = selected.title;
    document.getElementById("place-description").textContent = selected.description;
    document.getElementById("place-location").textContent = selected.location;
    document.getElementById("place-type").textContent = selected.type;

    document.getElementById("place-image").src = selected.image;
    document.getElementById("place-image").alt = selected.title;

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


function backToMap() {

    document.getElementById("info-page").style.display = "none";
    document.getElementById("map-page").style.display = "block";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}