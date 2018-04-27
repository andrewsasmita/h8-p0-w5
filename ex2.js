// Naik Angkot

function naikAngkot(arrPenumpang) {
   
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    
    listPenumpang =[]

    for(var i=0; i<arrPenumpang.length; i++) {
        listPenumpang.push({})
    }
    
    var awalAkhir=[]

    for(var h=0; h<arrPenumpang.length; h++) {
        
        listPenumpang[h].penumpang=arrPenumpang[h][0]
        listPenumpang[h].naikDari=arrPenumpang[h][1]
        listPenumpang[h].tujuan=arrPenumpang[h][2]

        awalAkhir.push([])
        
        for(var j=0; j<rute.length; j++) {
            
            if(arrPenumpang[h][1]===rute[j]) {
                awalAkhir[h].push(j)
            } 
            if(arrPenumpang[h][2]===rute[j]) {
                awalAkhir[h].push(j)
            }
        }
    }

    for(var y=0; y<awalAkhir.length; y++){

        listPenumpang[y].harga=Math.abs((awalAkhir[y][1]-awalAkhir[y][0])*2000)

    }

    return listPenumpang
}
  
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
  
console.log(naikAngkot([])); //[]