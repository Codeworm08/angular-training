import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class CalcService {
    public add(a: number, b: number): number {
        return a + b;
    }
}