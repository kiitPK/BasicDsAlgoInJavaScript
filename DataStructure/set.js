/* 
A set is data structure that can hold a collection of values and must be unique.
can contain mix different type.
Sets are dyynamically sized. YYou don't have decalre the size.
It does not maintain insertion order
its iteratble can be used with for of loop
________________________________________________________

Array can contain duplicate value whereas sets cannot
Insertion order is maintained with array but it is not the case with sets
Serching and deleting is faster than array.
*/



const set = new Set([1,2,3])

set.add(4)
set.delete(2)

for(const item of set){
    console.log(item)
}

set.clear()

for(const item of set){
    console.log(item)
}

