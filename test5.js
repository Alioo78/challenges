let note = 78
switch (true) {
    case note <=100 && note >= 90:  console.log('A');
        break;
    case note <=89 && note >= 80:  console.log('B');
        break;
    case note <=79 && note >= 60:  console.log('C');
        break;
    case note <=69 && note >= 60:  console.log('D');
        break;
    default : console.log('F')
}