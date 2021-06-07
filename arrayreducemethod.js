[1,2,3,4,5].reduce(function (newArr, array)
{
    newArr.push(array * 2);
    return newArr;
}, []);