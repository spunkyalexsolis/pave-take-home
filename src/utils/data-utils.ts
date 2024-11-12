export function groupByDay(data: any, dateKey: string) {
    const result: any = {};
  
    data.forEach((item: any) => {
      const date = new Date(item[dateKey]).toDateString(); // Convert date to string format
      if (!result[date]) {
        result[date] = [];
      }
      result[date].push(item);
    });
  
    return result;
}

export function groupByStatus(data: any, statusKey: string) {
  const result = Object.groupBy(data,(item: any) => item[statusKey]);
  return result;
}

export function aggregate(data: any, statusKey: string, valueKey: string) {
  const aggregatedData = data.reduce((result: any, item: any) => {
    if (!result[item[statusKey]]) {
      result[item[statusKey]] = { count: 0, totalAmount: 0 };
    }
  
    result[item[statusKey]].count++;
    result[item[statusKey]].totalAmount += item[valueKey];
  
    return result;
  }, {});

  return aggregatedData;
}

