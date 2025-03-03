

// This is O(n) Algo example
function x(n){
    for(let i =1;i<n;i++){
        return console.log(i);

    }
}

//Now, O(n2) and O(n3)
//O(n2)
function y(n){
    for(let i = 1;i<n;i++){
        console.log(1);
        for( let j = i ; j<n;j++){
            console.log( j);
            
        }
    }

}
//O(n3)
function z(n){
    for(let i = 1;i<n;i++){
        console.log(1);
        for( let j = i ; j<n;j++){
            console.log( j);
            for( let k =j;j<n;j++){
                console.log( k);
                
            }
            
        }
    }

}