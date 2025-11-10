var twoSum = function(nums, target) {
    
    const map = new Map()
    for(let i=0; i<nums.length; i++){
        let currentVal = nums[i]
        let complement = target-nums[i]
        if(map.has(complement)){
            return [map.get(complement),i]
        }
        map.set(currentVal,i)
    }
    return []
};

console.log(twoSum([2,11,7,15],26));