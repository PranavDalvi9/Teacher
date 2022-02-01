// show all database
show databases;

// create new database
use champ;

// select database
db;

// create document and insert values
db.user.insert({firstName : "Pranav", lastName : "Dalvi" , email : "pranavdalvi9@gmail.com", gender: "Male" , ipAddress : 1020101 , age : 21});

// show content in documents
show collections;
db.user.find().pretty();

// add data to documents
db.user.insertMany([{firstName : "ram", lastName : "amresh" , email : "pranavdalvi9@gmail.com", gender: "Male" , ipAddress : 1020101 , age : 21}, {firstName : "sham", lastName : "prakash" , email : "pranavdalvi9@gmail.com", gender: "Male" , ipAddress : 1020101 , age : 21}, {firstName : "shyam", lastName : "hari" , email : "pranavdalvi9@gmail.com", gender: "Male" , ipAddress : 1020101 , age : 21} , {firstName : "ravi", lastName : "pablo" , email : "pranavdalvi9@gmail.com", gender: "Male" , ipAddress : 1020101 , age : 21} , {firstName : "pravin", lastName : "pandey" , email : "pranavdalvi9@gmail.com", gender: "Male" , ipAddress : 1020101 , age : 21}, {firstName : "pradeep", lastName : "hari" , email : "pranavdalvi9@gmail.com", gender: "Male" , ipAddress : 1020101 , age : 21}, {firstName : "keshav", lastName : "pandey" , email : "pranavdalvi9@gmail.com", gender: "Male" , ipAddress : 1020101 , age : 21}, {firstName : "amit", lastName : "Dalvi" , email : "pranavdalvi9@gmail.com", gender: "Male" , ipAddress : 1020101 , age : 21}, {firstName : "raju", lastName : "shukla" , email : "pranavdalvi9@gmail.com", gender: "Male" , ipAddress : 1020101 , age : 21}, {firstName : "vicky", lastName : "yadav" , email : "pranavdalvi9@gmail.com", gender: "Male" , ipAddress : 1020101 , age : 21}, {firstName : "ankit", lastName : "gyoli" , email : "pranavdalvi9@gmail.com", gender: "Male" , ipAddress : 1020101 , age : 21} ]);

// find only one object
db.users.findOne();

// find all object and show by order
db.users.find().pretty()

// update the values i.e change the value of abhishek to abhi
db.users.update({fName: "abhishek" },{$set:{fName : "abhi"}})

// update all the name of pranav to champ
db.users.updateMany({fName: "Pranav" },{$set:{fName : "Champ"}})

// delete the champ in the data
db.users.deleteOne({fName: "Champ"})

// delete the whole database
db.dropDatabase()  





















