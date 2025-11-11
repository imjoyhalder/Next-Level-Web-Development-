

const friends: string[] = ['Debojit', "Avi", "Joy", "Arnob", "Hridoy", "Amit"]

const schoolFriends: string[] = ['Bidyut', 'Rahul', 'Polok', "Deep", "Udoy"]

const collegeFriends: string[]  = ['Nondu', "Bosu", "Imon", "Munna", "Sufian"]

friends.push(...schoolFriends,...collegeFriends)
// console.log(friends);


// spread operator use on the object 
const user = {
    name: "Joy",
    phnNo: '0155343434'
}

const otherInfo = {
    hobby: 'Ghoraghuri', 
    profession: 'Programmer'
}

const userInfo = {...user, ...otherInfo}
// console.log(userInfo);


// user rest operator into function 

const sendInvitation = (...friends: string[])=>{
    friends.forEach((friend: string)=> console.log(`Sent Invitation ${friend}`))
}      

sendInvitation('Nondu', "Bosu", "Imon", "Munna", "Sufian")