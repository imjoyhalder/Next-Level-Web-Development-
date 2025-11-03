
const map = new Map()

const courseOne = { courseId: '101' }
const courseTwo = { courseId: '102' }
const courseThree = { courseId: '103' }

map.set(courseOne, { courseName: 'Level1' })
map.set(courseTwo, { courseName: 'Level2' })
map.set(courseThree, { courseName: 'Level3' })

//map.forEach((key, value)=> console.log('Key: ',key, "  Value: ", value))
//? console.log(map.entries());
console.log([...map.keys()]);
