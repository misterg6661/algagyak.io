function superDigit(n, k) {
    let szamokOsszege = 0;
    for (let i = 0; i < n.length; i++) {
        szamokOsszege += parseInt(n[i]);
    }
    let teljesOsszeg = szamokOsszege * k;


    function findSuperDigit(szam) {
        if (szam < 10) {
            return szam;
        }
        
        let osszeg = 0;
        while (szam > 0) {
            osszeg += szam % 10;
            szam = Math.floor(szam / 10);
        }
        return findSuperDigit(osszeg);
    }

    return findSuperDigit(teljesOsszeg);
}