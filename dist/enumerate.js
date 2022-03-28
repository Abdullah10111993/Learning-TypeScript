"use strict";
var Roles;
(function (Roles) {
    Roles[Roles["ADMIN"] = 1] = "ADMIN";
    Roles[Roles["MANAGER"] = 2] = "MANAGER";
    Roles[Roles["DEVOPS"] = 3] = "DEVOPS";
    Roles[Roles["DEVELOPER"] = 4] = "DEVELOPER";
})(Roles || (Roles = {}));
;
let employers = [
    { name: 'Arthur', role: Roles.ADMIN },
    { name: 'Bethy', role: Roles.MANAGER },
    { name: 'Clark', role: Roles.DEVOPS },
    { name: 'Rina', role: Roles.DEVELOPER },
];
for (const employer in employers) {
    if (employers[employer].role === Roles.ADMIN) {
        console.log('Call ' + employers[employer].name);
    }
}
console.log(employers);
