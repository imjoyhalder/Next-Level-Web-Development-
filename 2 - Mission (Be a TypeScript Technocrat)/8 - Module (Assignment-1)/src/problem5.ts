type user = {
    id: number,
    name: string,
    email: string,
    isActive: boolean
}

const filterActiveUsers = (users: user[]): user[] => {
    const activeUser = users.filter((user) => user.isActive)
    return activeUser
}

const users = [
    { id: 1, name: 'Rakib', email: 'rakib@example.com', isActive: true },
    { id: 2, name: 'Asha', email: 'asha@example.com', isActive: false },
    { id: 3, name: 'Rumi', email: 'rumi@example.com', isActive: true },
];


console.log(filterActiveUsers(users));
