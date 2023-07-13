const users = [
    {
        name:'Nelius Wanjiru',
        date:"2018-4-14",
        role:"User",
        status:"inactive",
        _id:1
    },
    {
        name:'Ann Kim',
        date:"2015-03-25",
        role:"User",
        status:"inactive",
        _id:2
    },
    {
        name:'Ken Muthokoi',
        date:"2022-03-25",
        role:"Admin",
        status:"active",
        _id:3
    },
    {
        name:'Samuel Muthee',
        date:"2021-03-25",
        role:"user",
        status:"inactive",
        _id:4
    },
    {
        name:'Peter Kagia',
        date:"2022-03-25",
        role:"Admin",
        status:"active",
        _id:5
    },
    {
        name:'Chris Muigai',
        date:"2017-03-25",
        role:"User",
        status:"inactive",
        _id:6
    },
    {
        name:'Martin Karanja',
        date:"2022-03-25",
        role:"Admin",
        status:"active",
        _id:7
    },
    {
        name:'Grace Njeri',
        date:"2007-03-25",
        role:"User",
        status:"inactive",
        _id:8
    },
    {
        name:'Mary Kamu',
        date:"2023-03-25",
        role:"Admin",
        status:"active",
        _id:9
    },
    {
        name:'Ken Kimani',
        date:"2002-03-25",
        role:"User",
        status:"inactive",
        _id:10
    },
];

export function getUsers(){
    return users;
}

export function saveUser(user){
    let userInDb = users.find(c => c._id===user._id) || {};
    userInDb.name=user.name;
    userInDb.date=user.date;
    userInDb.role=user.role;
    userInDb.status=user.status;

    if(!userInDb._id){
        userInDb._id = users.length + 1;
        users.push(userInDb);
    }

    return userInDb;

}

export function getUser(id){
    return users.find(c => c._id === id);

}
export function deleteUser(id) {
    let userInDb = users.find(c => c._id === id);
    users.splice(users.indexOf(userInDb), 1);
    return userInDb;
  }