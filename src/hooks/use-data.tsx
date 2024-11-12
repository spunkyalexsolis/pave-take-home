import { CalculatedDataRow, CsvData, CsvKeys } from "@/types/global.types";
import Papa, { ParseResult } from "papaparse";
import { useState, useEffect } from "react";

export function useData() {
    const [data, setData] = useState<CalculatedDataRow[]>([]);

    useEffect(() => {
      const fetchData = async () => {
        const response = await fetch('./data/data_0_0_0.csv'); 
        const text = await response.text();
  
        Papa.parse(text, {
          header: true,
          skipEmptyLines: true,
          complete: (result: ParseResult<CsvData>) => {
            const calculatedData: CalculatedDataRow[] = result.data.map((row: any) => {
                  return {
                    eventDate: row[CsvKeys.EVENT_DATE] ? new Date(row[CsvKeys.EVENT_DATE]) : null,
                    userId: row[CsvKeys.USER_ID],
                    eventStatus: row[CsvKeys.EVENT_STATUS],
                    nextDate: row[CsvKeys.NEXT_DATE] ? new Date(row[CsvKeys.NEXT_DATE]) : null,
                    nextAmount: row[CsvKeys.NEXT_AMOUNT] ? Number(row[CsvKeys.NEXT_AMOUNT]) : null,
                    lastDate: row[CsvKeys.LAST_DATE] ? new Date(row[CsvKeys.LAST_DATE]) : null,
                    tag: row[CsvKeys.TAG],
                    predictionFrequency: row[CsvKeys.PREDICTION_FREQUENCY],    
                  };
            });
  
            setData(calculatedData);
          }
        });
      };
  
      fetchData();
    }, []);

  return {
    data, setData
  };
}