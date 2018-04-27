// Melee Ranged Grouping

function meleeRangedGrouping (str) {
    
    var result = [[],[]]

    var splitted=str.split(",")
    var grouping=[]
  
    for(h=0; h<splitted.length; h++) {
      grouping.push(splitted[h].split("-"))
    }
  
    for(i=0; i<grouping.length; i++) {
      if(grouping[i][1]==='Ranged') {
        result[0].push(grouping[i][0])
      } else if(grouping[i][1]==='Melee') {
        result[1].push(grouping[i][0])
      }
    }
    
    if(str==='') {
        return []
    } else {
        return result
    }
    
}
  
console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
  // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
  
console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
  // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  
console.log(meleeRangedGrouping('')); // []