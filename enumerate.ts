enum Roles {
    ADMIN = 1,
    MANAGER,
    DEVOPS,
    DEVELOPER
};

let employers: { name: string, role: Roles } [] = [
    {name: 'Arthur', role: Roles.ADMIN},
    {name: 'Bethy', role: Roles.MANAGER},
    {name: 'Clark', role: Roles.DEVOPS},
    {name: 'Rina', role: Roles.DEVELOPER},
]

for (const employer in employers) {
    if (employers[employer].role === Roles.ADMIN) {
        console.log('Call ' + employers[employer].name);
        
    }
}

console.log(employers);

