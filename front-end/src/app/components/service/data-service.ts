import { Injectable } from "@angular/core";
import { Subject } from 'rxjs';

@Injectable(
    {providedIn: 'root'}
)
export class DataService{

    private _subject = new Subject
    getMessage$ = this._subject.asObservable()

    emitMessage(message)
    {
        this._subject.next(message)
    }


    
}