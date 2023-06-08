var sendNumbers = 51;
switch (sendNumbers) {
    case 25:
        console.log("Son veinte y cinco");
        break;
    case 30:
        console.log("Son treinta");
        break;
    case 50:
        console.log("Son cincuenta");
        break;
    default:
        console.log("No cumplio ninguna condición");
        break;
}
//1 Songs menu
//2 Albums menu
//3 Profile menu
var menus = 2;
/*switch (menus){
    case 1:
        console.log("Acceso a las canciones")
        break;
    case 2:
        console.log("Acceso a los albumes")
        break;
    case 3:
        console.log("Acceso al perfil")
        break;
    default:
        console.log("El menu aun no se a implementado")
}*/
//ENUMS
/*enum tipeMenu{
    songs = 1,
    albums = 2,
    profile = 3
}*/
var tipeMenu;
(function (tipeMenu) {
    tipeMenu[tipeMenu["songs"] = 1] = "songs";
    tipeMenu[tipeMenu["albums"] = 2] = "albums";
    tipeMenu[tipeMenu["profile"] = 3] = "profile";
})(tipeMenu || (tipeMenu = {}));
switch (menus) {
    case tipeMenu.songs:
        console.log("Acceso a las canciones");
        break;
    case tipeMenu.albums:
        console.log("Acceso a los albumes");
        break;
    case tipeMenu.profile:
        console.log("Acceso al perfil");
        break;
    default:
        console.log("El menu aun no se a implementado");
}
