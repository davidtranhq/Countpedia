/*eslint-env browser*/
const unsorted_characters = new Map(
[
    ["Edmond Dantès", "edmond"],
    ["Count of Monte Cristo", "edmond"],
    ["Chief Clerk", "edmond"],
    ["Lord Wilmore", "edmond"],
    ["Sinbad the Sailor", "edmond"],
    ["Abbé Busoni", "edmond"],
    ["Number 34", "edmond"],
    ["Baron Danglars", "baron_danglars"],
    ["Madame Danglars", "madame_danglars"],
    ["Eugénie Danglars", "eugenie_danglars"],
    ["Gérard de Villefort", "gerard_villefort"],
    ["Renée de Saint-Méran", "renee"],
    ["Marquis de Saint-Méran", "marquis_st"],
    ["Marquise de Saint-Méran", "marquise_st"],
    ["Valentine de Villefort", "valentine"],
    ["Noirtier de Villefort", "noirtier"],
    ["Héloïse de Villefort", "heloise"],
    ["Édouard de Villefort", "edouard"],
    ["Bendetto", "bendetto"],
    ["Andrea Cavalcanti", "bendetto"],
    ["Mercédès", "mercedes"],
    ["Madame de Morcef", "mercedes"],
    ["Fernand Mondego", "fernand"],
    ["Albert de Morcef", "albert"],
    ["Pierre Morrel", "pierre"],
    ["Monsieur Morrel", "monsieur_morrel"],
    ["Maximilian Morrel", "maximilian"],
    ["Julie Herbault", "julie"],
    ["Emmanuel Herbault", "emmanuel"],
    ["Coclès", "cocles"],
    ["Gaspard Caderousse", "caderousse"],
    ["Louis Dantès", "louis_dantes"],
    ["Baron Franz d'Épinay", "franz"],
    ["Lucien Debray", "lucien"],
    ["Beauchamp", "beauchamp"],
    ["Monsieur de Boville", "boville"],
    ["Barrois", "barrois"],
    ["Monsieur d'Avrigny", "avrigny"],
    ["Bartolomeo Cavalcanti", "bartolomeo"],
    ["Abbé Faria", "faria"],
    ["Giovanni Bertuccio", "bertuccio"],
    ["Luigi Vampa", "luigi"],
    ["Peppino", "peppino"],
    ["Ali", "ali"],
    ["Baptistin", "baptistin"],
    ["Jacopo", "jacopo"],
    ["Haydée", "haydee"]
]);

var characters = new Map([...unsorted_characters].sort());


function createList()
{
    for (const [name, link] of characters.entries())
    {
        let node = document.createElement("li");
        let linkNode = document.createElement("a")
        let linkText = document.createTextNode(name);
        linkNode.appendChild(linkText);
        linkNode.href = "pages/" + link + ".html";
        node.appendChild(linkNode);
        document.getElementById("character_list").appendChild(node);
    }
}

function addListEvents()
{
    var list = document.getElementById("character_list");
    var search = document.getElementById("search_bar");
    search.addEventListener('focus', () => {
        list.style.display = "block";
    });
    search.addEventListener('blur', () => {
        list.style.display = "none";
    });
    list.addEventListener("mousedown", (e) => {
        e.preventDefault();
    });
}

function hideListItems()
{
    let input = document.getElementById("search_bar");
    let filter = input.value.toUpperCase();
    let list = document.getElementById("character_list");
    let items = list.getElementsByTagName("li");
    // hide the items that don't match the search query
    for (const item of items)
    {
        let a = item.getElementsByTagName('a')[0];
        let text = a.textContent || a.innerText;
        if (text.toUpperCase().indexOf(filter) > -1)
            item.style.display = "";
        else
            item.style.display = "none";
    }
}


function init()
{
    createList();
    addListEvents();
    hideListItems();
}

window.onload = init;