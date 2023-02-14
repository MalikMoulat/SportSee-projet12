export function getCalorieCount(data){
    return data?.keyData?.calorieCount + 'kCal'
}

export function getProteinCount(data){
    return data?.keyData?.proteinCount + 'g'
}

export function getCarbohydrateCount(data){
    return data?.keyData?.carbohydrateCount + 'g'
}

export function getLipideCount(data){
    return data?.keyData?.lipidCount + 'g'
}




export function handleFormatTick(numDay) {
    const days = ["L", "M", "M", "J", "V", "S", "D"];
  
    switch (numDay) {
      case 1:
        return days[0];
      case 2:
        return days[1];
      case 3:
        return days[2];
      case 4:
        return days[3];
      case 5:
        return days[4];
      case 6:
        return days[5];
      case 7:
        return days[6];
    }
  }

  
  function formatedMockedData(mockedData, urlId) {

    return Object.values(mockedData).find(obj => obj.id || obj.userId == urlId.id);
  }

  export default formatedMockedData