/*
Item delivery needs to take place for a circle of size B. 
Suppose we start from the position C (given) then find the position where the Ath item will be delivered.
----------------------------------------------------------------------------------------------------------
Note: Distribution of Items are performed at the adjacent positions starting from C.
-----------------------------------------------------------------------------------------------------------
Expected Input: Three integers A, B, C
Expected Output: Integer denoting the position of the delivery of the Ath item if started from position C. 
Please submit you code as a repository on Google doc link.
----------------
Example-1:
Input
2,5,1
Output
2
---------
Example-2:
Input
8,5,2
Output
4

*/

function delivery(a,b,c){
    deliveries = a;
    while(deliveries != 0 ){
        if(c === b ){
            c = 1
            deliveries--
        }
        else {
            c++;
            deliveries--
        }
    }
    return c-1
}

console.log(delivery(2,5,1))


