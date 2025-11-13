type genericArray<X> = [X]

type User = { name: string, age: number }

const userList: genericArray<User> = [
    {
        name: "Joy",
        age: 23
    },
    {
        name: 'Himel',
        age: 24
    }
]

console.log(userList);

interface Developer<T, X = null> {
    name: string;
    salary: number;
    device: {
        brand: string;
        model: string;
        releasedYear: string
    };
    smartWatch: T;
    bike?: X;
}

type branchChara = {
    heartRate: string;
    stopWatch: boolean;
}

interface IBike {
    brand: string,
    engineCapacity: string
}

const poorDeveloper: Developer<branchChara, IBike> = {
    name: "Himel",
    salary: 2000,
    device: {
        brand: "Lenovo",
        model: "A21",
        releasedYear: '2020'
    },
    smartWatch: {
        heartRate: '82',
        stopWatch: true
    },
    bike: {
        brand: "Yamaha",
        engineCapacity: "1000cc"
    }

}

interface appleWatch {
    heartRate: string;
    callSupport: boolean;
    AIFeatured: boolean;
}

const richDeveloper: Developer<appleWatch> = {
    name: "Himel",
    salary: 2000,
    device: {
        brand: "Lenovo",
        model: "A21",
        releasedYear: '2020'
    },
    smartWatch: {
        heartRate: '82',
        callSupport: true,
        AIFeatured: true
    }

}
console.log(poorDeveloper);
console.log(richDeveloper);
