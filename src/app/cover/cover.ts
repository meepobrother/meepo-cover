import {
    Component, OnInit, Input, HostBinding,
    ElementRef, ContentChild, AfterContentInit,
    ChangeDetectorRef
} from '@angular/core';
import { DomSanitizer, Title } from '@angular/platform-browser';
import { Directive } from '@angular/core';
import { MeepoCache } from 'meepo-base';
import { StoreService } from 'meepo-store';

@Component({
    selector: 'cover-content',
    template: `
        <div class="cover-content" [style.background-image]="_contentBg"></div>
        <ng-content></ng-content>
    `,
    styleUrls: [
        "./cover-content.scss"
    ]
})
export class CoverContent {
    _contentBg: string = '';
    setBg(val: string) {
        this._contentBg = val;
    }
}

@Component({
    selector: 'cover',
    templateUrl: './cover.html',
    styleUrls: ['./cover.scss']
})
export class CoverComponent extends MeepoCache implements AfterContentInit {
    @HostBinding('style.background-image') _background: any = '';
    @ContentChild(CoverContent) _content: CoverContent;
    _contentBg: any = '';
    @Input()
    set image(val: string) {
        if (val) {
            this._background = `url(${val})`;
        }
    }
    constructor(
        store: StoreService,
        cd: ChangeDetectorRef,
        title: Title
    ) {
        super(store, cd, title);
    }

    ngAfterContentInit() {
        this._content.setBg(this._background);
    }
}