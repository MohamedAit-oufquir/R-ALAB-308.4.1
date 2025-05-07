let csv = 'ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor\'s Assistant,26'
let cell = ''
let table = []
let row = []
for (let i = 0; i < csv.length; i++) {
    let char = csv[i] 
    // console.log(char)
    if (char !== ',' && char !== '\n') {
        cell = cell + char
    } 
    if (char === ',') {
        row.push(cell)
        cell = ''
    } 
    if (char === '\n' || i === csv.length - 1) {
        row.push(cell)
        cell = ''
        table.push(row)
        row = []
    }
}
console.log(table)
    // practice 3 :
        
        let newTable =[]; 
        let keys = table[0]; 
        for(let i=1; i<table.length; i++){ 
            let obj = {}
            for( let j=0; j < keys.length; j++) {
                let key = keys[j].toLowerCase();
                obj[key]= table[i][j]
            }
                newTable.push(obj);
        }
        console.log(newTable) 


        //part 4 
        newTable.pop()
        console.log(newTable) 
        newTable.splice(1,0,{id: "48", name: "Barry", occupation: "Runner", age: "25"})
        console.log(newTable) 
        newTable.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" })
        console.log(newTable) 
        console.log(newTable.length)
        let avgAge = 0;
        let sum = 0;
        for(let i=0; i< newTable.length; i++){
            sum = sum + parseInt(newTable[i].age) 
    
            
    }
    avgAge = sum/newTable.length; 
    console.log(avgAge)
    // part 5 
    let newChar = ""  
    
    for(let i=0; i < newTable.length; i++){
        
        newChar += newTable[i].id + "," + newTable[i].name + "," + newTable[i].occupation+ "," + newTable[i].age  
    
    }
    
    console.log(newChar)
    