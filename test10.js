let user ='Admin'
let pass= '1234'

if(user=== 'Admin' && pass==='1234'){
    console.log('Bienvenue Admin')
}else if(user === 'Admin' && pass !='1234'){
    console.log('Mot de passe incorrect')
}else if(user !='Admin' && pass ==='1234'){
    console.log('Utilisateur introuvable')
}else{
    console.log('Utilisateur introuvable est Mot de passe incorrect')
}