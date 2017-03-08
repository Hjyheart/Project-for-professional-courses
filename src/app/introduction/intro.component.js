"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by hongjiayong on 2017/3/8.
 */
var core_1 = require('@angular/core');
var IntroComponent = (function () {
    function IntroComponent() {
    }
    /**
     * 移动到大屏
     */
    IntroComponent.prototype.moveToHome = function () {
        $.scrollTo('#home', 500);
    };
    /**
     * 移动到概况
     */
    IntroComponent.prototype.moveToAbout = function () {
        $.scrollTo('#about', 500);
    };
    /**
     * 移动到特点
     */
    IntroComponent.prototype.moveToFeatures = function () {
        $.scrollTo('#features', 500);
    };
    /**
     * 移动到开始
     */
    IntroComponent.prototype.moveToGetStart = function () {
        $.scrollTo('#get-start', 500);
    };
    /**
     * 移动到联系我们
     */
    IntroComponent.prototype.moveToContact = function () {
        $.scrollTo('#contact', 500);
    };
    IntroComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-introduction',
            templateUrl: 'intro.component.html',
            styleUrls: ['intro.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], IntroComponent);
    return IntroComponent;
}());
exports.IntroComponent = IntroComponent;
//# sourceMappingURL=intro.component.js.map