const user = {
    name: "Sandro",
    lastName: "Gomes",
    idade: 25,
};

function getUserWithFullName(user){

    return {
    //spread operator:cada propriedade srá cpolocada dentro do novo obj
        ...user,
        //reals ou string liral  
        fullname: ` Ola ${user.name} ${user.lastName} você tem ${user.idade}`
    }

}

const UserWithFullName  = getUserWithFullName(user);

console.log(UserWithFullName);

