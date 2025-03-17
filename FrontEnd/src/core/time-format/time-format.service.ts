import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TimeFormatService {
  constructor() {}

  // YYYY-MM-DDTHH:MM:SS.sssZ → YYYY-MM-DDTHH:MM:SSZ
  convertDateToDateTimeField(date: Date): string {
    // const formattedDateTime = date.toISOString().slice(0, 19) + 'Z';
    const formattedDateTime = date.toISOString();
    return formattedDateTime; // "YYYY-MM-DDTHH:MM:SSZ"
  }

  // YYYY-MM-DDTHH:MM:SS.sssZ → yyyy-mm-dd
  convertDateToDateField(date: Date): string {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // 月は0から始まるので+1
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`; // "yyyy-mm-dd"
  }

  // YYYY-MM-DDTHH:MM:SS.sssZ → HH:MM:SS
  convertDateToTimeField(date: Date): string {
    const formattedTme = date.toLocaleTimeString('ja-JP', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
    });
    return formattedTme; // "HH:MM:SS"
  }

  // ミリ秒(number) → HH:MM:SS
  convertTimeToTimeField(time: number): string {
    const hours = Math.floor(time / (1000 * 60 * 60));
    const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((time % (1000 * 60)) / 1000);
    const formattedTme = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    return formattedTme; // "HH:MM:SS"
  }
}
