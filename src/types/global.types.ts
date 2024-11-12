export type DataRow = {
    eventDate: Date | null;
    userId: string;
    eventStatus: string;
    nextDate: Date | null;
    nextAmount: number | null;
    lastDate: Date | null;
    tag: string;
    predictionFrequency: string;
}

export type CalculatedDataRow = {
    eventNextDiff?: number;
    nextLastDiff?: number;    
} & DataRow;

export const CsvKeys = {
    EVENT_DATE: 'EVENT_DATE',
    USER_ID: 'USER_ID',
    EVENT_STATUS: 'EVENT_STATUS',
    NEXT_DATE: 'NEXT_DATE',
    NEXT_AMOUNT: 'NEXT_AMOUNT',
    LAST_DATE: 'LAST_DATE',
    TAG: 'TAG',
    PREDICTION_FREQUENCY: 'PREDICTION_FREQUENCY',
}

export interface CsvData {
    EVENT_DATE: string,
    USER_ID: string,
    EVENT_STATUS: string,
    NEXT_DATE: string,
    NEXT_AMOUNT: string,
    LAST_DATE: string,
    TAG: string,
    PREDICTION_FREQUENCY: string,
}