export function groupByDay(data: any, dateKey: string) {
    const result: any = {};
  
    data.forEach((item: any) => {
      const date = new Date(item[dateKey]).toLocaleDateString('en-CA'); // Convert date to string format
      if (!result[date]) {
        result[date] = [];
      }
      result[date].push(item);
    });
  
    return sortGroupData(result);
}

export function groupByMonthAndYear(data: any, dateKey: string) { 
  const result: any = {};
  
  data.forEach((item: any) => {
    const year = new Date(item[dateKey]).getFullYear();
    const month = new Date(item[dateKey]).getMonth() + 1; // JavaScript months are 0-indexed
    const key = `${year}-${month.toString().padStart(2, '0')}`;

    if (!result[key]) {
      result[key] = [];
    }
    result[key].push(item);
  }); 

  return sortGroupData(result);
}

export function sortGroupData(groupedData: any) {
  const orderedGroupData = Object.keys(groupedData).sort().reduce(
    (obj:any, key: any) => { 
      obj[key] = groupedData[key]; 
      return obj;
    }, 
    {}
  );

  return orderedGroupData;
}

export function groupByStatus(data: any, statusKey: string) {
  const result = Object.groupBy(data,(item: any) => item[statusKey]);
  return result;
}

export function aggregate(data: any, type: 'count' | 'total', aggKey: string, valueKey: string) {
  const aggregatedData = data.reduce((result: any, item: any) => {
    if (!result[item[aggKey]]) {
      result[item[aggKey]] = 0;
    }

    if(type === 'total') {
      result[item[aggKey]] += (item[valueKey] || 0);
    } else {
      result[item[aggKey]]++;
    }
  
    return result;
  }, {});

  return aggregatedData;
}

export function aggregateGroupData(groupedData: any, type: 'count' | 'total', aggKey: string, valueKey: string) {
  const aggregateGroupData =  Object.entries(groupedData).map(([key, groupItem]) => {
    return {
      key,
      data: groupItem,
      ...aggregate(groupItem, type, aggKey, valueKey)
    } 
  });

  return aggregateGroupData;
}