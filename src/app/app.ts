import { NgModule } from '@angular/core';
import { CoverComponent, CoverContent } from './cover/cover';
import { CommonModule } from '@angular/common';
import { StoreModule } from 'meepo-store';
@NgModule({
    imports: [
        CommonModule,
        StoreModule
    ],
    exports: [
        CoverComponent,
        CoverContent
    ],
    declarations: [
        CoverComponent,
        CoverContent
    ],
    providers: [],
})
export class CoverModule { }
