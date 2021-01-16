function jumpingOnClouds(c) {

    let noOfJumps =0;
    for(let i = 0; i < c.length - 1;){
        i += (c[i + 2])? 1 : 2
        noOfJumps ++
    }
    return noOfJumps
 
}