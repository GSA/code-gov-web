var ac_main =
webpackJsonpac__name_([1],{

/***/ "./node_modules/angular2-infinite-scroll/angular2-infinite-scroll.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var infinite_scroll_1 = __webpack_require__("./node_modules/angular2-infinite-scroll/src/infinite-scroll.js");
var scroller_1 = __webpack_require__("./node_modules/angular2-infinite-scroll/src/scroller.js");
var position_resolver_1 = __webpack_require__("./node_modules/angular2-infinite-scroll/src/position-resolver.js");
var axis_resolver_1 = __webpack_require__("./node_modules/angular2-infinite-scroll/src/axis-resolver.js");
var infinite_scroll_2 = __webpack_require__("./node_modules/angular2-infinite-scroll/src/infinite-scroll.js");
exports.InfiniteScroll = infinite_scroll_2.InfiniteScroll;
var scroller_2 = __webpack_require__("./node_modules/angular2-infinite-scroll/src/scroller.js");
exports.Scroller = scroller_2.Scroller;
var position_resolver_2 = __webpack_require__("./node_modules/angular2-infinite-scroll/src/position-resolver.js");
exports.PositionResolver = position_resolver_2.PositionResolver;
exports.PositionResolverFactory = position_resolver_2.PositionResolverFactory;
var axis_resolver_2 = __webpack_require__("./node_modules/angular2-infinite-scroll/src/axis-resolver.js");
exports.AxisResolver = axis_resolver_2.AxisResolver;
exports.AxisResolverFactory = axis_resolver_2.AxisResolverFactory;
var index_1 = __webpack_require__("./node_modules/angular2-infinite-scroll/src/index.js");
exports.InfiniteScrollModule = index_1.InfiniteScrollModule;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    directives: [infinite_scroll_1.InfiniteScroll, scroller_1.Scroller, axis_resolver_1.AxisResolver, position_resolver_1.PositionResolver]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhcjItaW5maW5pdGUtc2Nyb2xsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYW5ndWxhcjItaW5maW5pdGUtc2Nyb2xsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxnQ0FBK0IsdUJBQXVCLENBQUMsQ0FBQTtBQUN2RCx5QkFBeUIsZ0JBQWdCLENBQUMsQ0FBQTtBQUMxQyxrQ0FBaUMseUJBQXlCLENBQUMsQ0FBQTtBQUMzRCw4QkFBNkIscUJBQXFCLENBQUMsQ0FBQTtBQUVuRCxnQ0FBK0IsdUJBQXVCLENBQUM7QUFBOUMsMERBQThDO0FBQ3ZELHlCQUE4QyxnQkFBZ0IsQ0FBQztBQUF0RCx1Q0FBc0Q7QUFDL0Qsa0NBQTRFLHlCQUF5QixDQUFDO0FBQTdGLGdFQUFnQjtBQUFFLDhFQUEyRTtBQUN0Ryw4QkFBa0QscUJBQXFCLENBQUM7QUFBL0Qsb0RBQVk7QUFBRSxrRUFBaUQ7QUFDeEUsc0JBQXFDLGFBQWEsQ0FBQztBQUExQyw0REFBMEM7QUFFbkQ7a0JBQWU7SUFDZCxVQUFVLEVBQUUsQ0FBRSxnQ0FBYyxFQUFFLG1CQUFRLEVBQUUsNEJBQVksRUFBRSxvQ0FBZ0IsQ0FBRTtDQUN4RSxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5maW5pdGVTY3JvbGwgfSBmcm9tICcuL3NyYy9pbmZpbml0ZS1zY3JvbGwnO1xuaW1wb3J0IHsgU2Nyb2xsZXIgfSBmcm9tICcuL3NyYy9zY3JvbGxlcic7XG5pbXBvcnQgeyBQb3NpdGlvblJlc29sdmVyIH0gZnJvbSAnLi9zcmMvcG9zaXRpb24tcmVzb2x2ZXInO1xuaW1wb3J0IHsgQXhpc1Jlc29sdmVyIH0gZnJvbSAnLi9zcmMvYXhpcy1yZXNvbHZlcic7XG5cbmV4cG9ydCB7IEluZmluaXRlU2Nyb2xsIH0gZnJvbSAnLi9zcmMvaW5maW5pdGUtc2Nyb2xsJztcbmV4cG9ydCB7IFNjcm9sbGVyLCBJbmZpbml0ZVNjcm9sbEV2ZW50IH0gZnJvbSAnLi9zcmMvc2Nyb2xsZXInO1xuZXhwb3J0IHsgUG9zaXRpb25SZXNvbHZlciwgUG9zaXRpb25SZXNvbHZlckZhY3RvcnksIFBvc2l0aW9uRWxlbWVudHMgfSBmcm9tICcuL3NyYy9wb3NpdGlvbi1yZXNvbHZlcic7XG5leHBvcnQgeyBBeGlzUmVzb2x2ZXIsIEF4aXNSZXNvbHZlckZhY3RvcnkgfSBmcm9tICcuL3NyYy9heGlzLXJlc29sdmVyJztcbmV4cG9ydCB7IEluZmluaXRlU2Nyb2xsTW9kdWxlIH0gZnJvbSAnLi9zcmMvaW5kZXgnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cdGRpcmVjdGl2ZXM6IFsgSW5maW5pdGVTY3JvbGwsIFNjcm9sbGVyLCBBeGlzUmVzb2x2ZXIsIFBvc2l0aW9uUmVzb2x2ZXIgXVxufVxuaW50ZXJmYWNlIERlY29yYXRvckludm9jYXRpb24ge1xuICB0eXBlOiBGdW5jdGlvbjtcbiAgYXJncz86IGFueVtdO1xufVxuIl19

/***/ },

/***/ "./node_modules/angular2-infinite-scroll/src/axis-resolver.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var AxisResolverFactory = (function () {
    function AxisResolverFactory() {
    }
    AxisResolverFactory.prototype.create = function (vertical) {
        if (vertical === void 0) { vertical = true; }
        return new AxisResolver(vertical);
    };
    AxisResolverFactory.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    AxisResolverFactory.ctorParameters = [];
    return AxisResolverFactory;
}());
exports.AxisResolverFactory = AxisResolverFactory;
var AxisResolver = (function () {
    function AxisResolver(vertical) {
        if (vertical === void 0) { vertical = true; }
        this.vertical = vertical;
    }
    AxisResolver.prototype.clientHeightKey = function () { return this.vertical ? 'clientHeight' : 'clientWidth'; };
    AxisResolver.prototype.offsetHeightKey = function () { return this.vertical ? 'offsetHeight' : 'offsetWidth'; };
    AxisResolver.prototype.scrollHeightKey = function () { return this.vertical ? 'scrollHeight' : 'scrollWidth'; };
    AxisResolver.prototype.pageYOffsetKey = function () { return this.vertical ? 'pageYOffset' : 'pageXOffset'; };
    AxisResolver.prototype.offsetTopKey = function () { return this.vertical ? 'offsetTop' : 'offsetLeft'; };
    AxisResolver.prototype.scrollTopKey = function () { return this.vertical ? 'scrollTop' : 'scrollLeft'; };
    AxisResolver.prototype.topKey = function () { return this.vertical ? 'top' : 'left'; };
    return AxisResolver;
}());
exports.AxisResolver = AxisResolver;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXhpcy1yZXNvbHZlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImF4aXMtcmVzb2x2ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHFCQUFtQyxlQUFlLENBQUMsQ0FBQTtBQUduRDtJQUNFO0lBQWUsQ0FBQztJQUVoQixvQ0FBTSxHQUFOLFVBQVEsUUFBd0I7UUFBeEIsd0JBQXdCLEdBQXhCLGVBQXdCO1FBQzlCLE1BQU0sQ0FBQyxJQUFJLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBQ0ksOEJBQVUsR0FBMEI7UUFDM0MsRUFBRSxJQUFJLEVBQUUsaUJBQVUsRUFBRTtLQUNuQixDQUFDO0lBQ0Ysa0JBQWtCO0lBQ1gsa0NBQWMsR0FBNkQsRUFDakYsQ0FBQztJQUNGLDBCQUFDO0FBQUQsQ0FBQyxBQVpELElBWUM7QUFaWSwyQkFBbUIsc0JBWS9CLENBQUE7QUFFRDtJQUNFLHNCQUFxQixRQUF3QjtRQUFoQyx3QkFBZ0MsR0FBaEMsZUFBZ0M7UUFBeEIsYUFBUSxHQUFSLFFBQVEsQ0FBZ0I7SUFDN0MsQ0FBQztJQUNELHNDQUFlLEdBQWYsY0FBbUIsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsY0FBYyxHQUFHLGFBQWEsQ0FBQSxDQUFBLENBQUM7SUFDekUsc0NBQWUsR0FBZixjQUFtQixNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxjQUFjLEdBQUcsYUFBYSxDQUFBLENBQUEsQ0FBQztJQUN6RSxzQ0FBZSxHQUFmLGNBQW1CLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLGNBQWMsR0FBRyxhQUFhLENBQUEsQ0FBQSxDQUFDO0lBQ3pFLHFDQUFjLEdBQWQsY0FBbUIsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsYUFBYSxHQUFJLGFBQWEsQ0FBQSxDQUFBLENBQUM7SUFDekUsbUNBQVksR0FBWixjQUFtQixNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxXQUFXLEdBQU0sWUFBWSxDQUFBLENBQUEsQ0FBQztJQUN4RSxtQ0FBWSxHQUFaLGNBQW1CLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLFdBQVcsR0FBTSxZQUFZLENBQUEsQ0FBQSxDQUFDO0lBQ3hFLDZCQUFNLEdBQU4sY0FBbUIsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxHQUFZLE1BQU0sQ0FBQSxDQUFBLENBQUM7SUFDcEUsbUJBQUM7QUFBRCxDQUFDLEFBVkQsSUFVQztBQVZZLG9CQUFZLGVBVXhCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5cbmV4cG9ydCBjbGFzcyBBeGlzUmVzb2x2ZXJGYWN0b3J5IHtcbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIGNyZWF0ZSAodmVydGljYWw6IGJvb2xlYW4gPSB0cnVlKSB7XG4gICAgcmV0dXJuIG5ldyBBeGlzUmVzb2x2ZXIodmVydGljYWwpO1xuICB9XG5zdGF0aWMgZGVjb3JhdG9yczogRGVjb3JhdG9ySW52b2NhdGlvbltdID0gW1xueyB0eXBlOiBJbmplY3RhYmxlIH0sXG5dO1xuLyoqIEBub2NvbGxhcHNlICovXG5zdGF0aWMgY3RvclBhcmFtZXRlcnM6ICh7dHlwZTogYW55LCBkZWNvcmF0b3JzPzogRGVjb3JhdG9ySW52b2NhdGlvbltdfXxudWxsKVtdID0gW1xuXTtcbn1cblxuZXhwb3J0IGNsYXNzIEF4aXNSZXNvbHZlciB7XG4gIGNvbnN0cnVjdG9yIChwcml2YXRlIHZlcnRpY2FsOiBib29sZWFuID0gdHJ1ZSkge1xuICB9XG4gIGNsaWVudEhlaWdodEtleSgpIHtyZXR1cm4gdGhpcy52ZXJ0aWNhbCA/ICdjbGllbnRIZWlnaHQnIDogJ2NsaWVudFdpZHRoJ31cbiAgb2Zmc2V0SGVpZ2h0S2V5KCkge3JldHVybiB0aGlzLnZlcnRpY2FsID8gJ29mZnNldEhlaWdodCcgOiAnb2Zmc2V0V2lkdGgnfVxuICBzY3JvbGxIZWlnaHRLZXkoKSB7cmV0dXJuIHRoaXMudmVydGljYWwgPyAnc2Nyb2xsSGVpZ2h0JyA6ICdzY3JvbGxXaWR0aCd9XG4gIHBhZ2VZT2Zmc2V0S2V5KCkgIHtyZXR1cm4gdGhpcy52ZXJ0aWNhbCA/ICdwYWdlWU9mZnNldCcgIDogJ3BhZ2VYT2Zmc2V0J31cbiAgb2Zmc2V0VG9wS2V5KCkgICAge3JldHVybiB0aGlzLnZlcnRpY2FsID8gJ29mZnNldFRvcCcgICAgOiAnb2Zmc2V0TGVmdCd9XG4gIHNjcm9sbFRvcEtleSgpICAgIHtyZXR1cm4gdGhpcy52ZXJ0aWNhbCA/ICdzY3JvbGxUb3AnICAgIDogJ3Njcm9sbExlZnQnfVxuICB0b3BLZXkoKSAgICAgICAgICB7cmV0dXJuIHRoaXMudmVydGljYWwgPyAndG9wJyAgICAgICAgICA6ICdsZWZ0J31cbn1cbmludGVyZmFjZSBEZWNvcmF0b3JJbnZvY2F0aW9uIHtcbiAgdHlwZTogRnVuY3Rpb247XG4gIGFyZ3M/OiBhbnlbXTtcbn1cbiJdfQ==

/***/ },

/***/ "./node_modules/angular2-infinite-scroll/src/index.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var infinite_scroll_1 = __webpack_require__("./node_modules/angular2-infinite-scroll/src/infinite-scroll.js");
var axis_resolver_1 = __webpack_require__("./node_modules/angular2-infinite-scroll/src/axis-resolver.js");
var position_resolver_1 = __webpack_require__("./node_modules/angular2-infinite-scroll/src/position-resolver.js");
var InfiniteScrollModule = (function () {
    function InfiniteScrollModule() {
    }
    InfiniteScrollModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [],
                    declarations: [infinite_scroll_1.InfiniteScroll],
                    exports: [infinite_scroll_1.InfiniteScroll],
                    providers: [axis_resolver_1.AxisResolverFactory, position_resolver_1.PositionResolverFactory]
                },] },
    ];
    /** @nocollapse */
    InfiniteScrollModule.ctorParameters = [];
    return InfiniteScrollModule;
}());
exports.InfiniteScrollModule = InfiniteScrollModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEscUJBQThCLGVBQWUsQ0FBQyxDQUFBO0FBRTlDLGdDQUFnQyxtQkFBbUIsQ0FBQyxDQUFBO0FBQ3BELDhCQUFvQyxpQkFBaUIsQ0FBQyxDQUFBO0FBQ3RELGtDQUF3QyxxQkFBcUIsQ0FBQyxDQUFBO0FBRzlEO0lBQUE7SUFXQSxDQUFDO0lBWDBDLCtCQUFVLEdBQTBCO1FBQy9FLEVBQUUsSUFBSSxFQUFFLGVBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQztvQkFDdkIsT0FBTyxFQUFPLEVBQUk7b0JBQ2xCLFlBQVksRUFBRSxDQUFFLGdDQUFjLENBQUU7b0JBQ2hDLE9BQU8sRUFBTyxDQUFFLGdDQUFjLENBQUU7b0JBQ2hDLFNBQVMsRUFBSyxDQUFFLG1DQUFtQixFQUFFLDJDQUF1QixDQUFFO2lCQUMvRCxFQUFHLEVBQUU7S0FDTCxDQUFDO0lBQ0Ysa0JBQWtCO0lBQ1gsbUNBQWMsR0FBNkQsRUFDakYsQ0FBQztJQUNGLDJCQUFDO0FBQUQsQ0FBQyxBQVhELElBV0M7QUFYWSw0QkFBb0IsdUJBV2hDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9ICAgICAgZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEluZmluaXRlU2Nyb2xsIH0gIGZyb20gJy4vaW5maW5pdGUtc2Nyb2xsJztcbmltcG9ydCB7IEF4aXNSZXNvbHZlckZhY3RvcnkgfSBmcm9tICcuL2F4aXMtcmVzb2x2ZXInO1xuaW1wb3J0IHsgUG9zaXRpb25SZXNvbHZlckZhY3RvcnkgfSBmcm9tICcuL3Bvc2l0aW9uLXJlc29sdmVyJztcblxuXG5leHBvcnQgY2xhc3MgSW5maW5pdGVTY3JvbGxNb2R1bGUgeyBzdGF0aWMgZGVjb3JhdG9yczogRGVjb3JhdG9ySW52b2NhdGlvbltdID0gW1xueyB0eXBlOiBOZ01vZHVsZSwgYXJnczogW3tcbiAgaW1wb3J0czogICAgICBbICBdLFxuICBkZWNsYXJhdGlvbnM6IFsgSW5maW5pdGVTY3JvbGwgXSxcbiAgZXhwb3J0czogICAgICBbIEluZmluaXRlU2Nyb2xsIF0sXG4gIHByb3ZpZGVyczogICAgWyBBeGlzUmVzb2x2ZXJGYWN0b3J5LCBQb3NpdGlvblJlc29sdmVyRmFjdG9yeSBdXG59LCBdIH0sXG5dO1xuLyoqIEBub2NvbGxhcHNlICovXG5zdGF0aWMgY3RvclBhcmFtZXRlcnM6ICh7dHlwZTogYW55LCBkZWNvcmF0b3JzPzogRGVjb3JhdG9ySW52b2NhdGlvbltdfXxudWxsKVtdID0gW1xuXTtcbn1cblxuaW50ZXJmYWNlIERlY29yYXRvckludm9jYXRpb24ge1xuICB0eXBlOiBGdW5jdGlvbjtcbiAgYXJncz86IGFueVtdO1xufVxuIl19

/***/ },

/***/ "./node_modules/angular2-infinite-scroll/src/infinite-scroll.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var scroller_1 = __webpack_require__("./node_modules/angular2-infinite-scroll/src/scroller.js");
var position_resolver_1 = __webpack_require__("./node_modules/angular2-infinite-scroll/src/position-resolver.js");
var InfiniteScroll = (function () {
    function InfiniteScroll(element, zone, positionResolverFactory) {
        this.element = element;
        this.zone = zone;
        this.positionResolverFactory = positionResolverFactory;
        this.throttleType = 'throttle';
        this._distanceDown = 2;
        this._distanceUp = 1.5;
        this._throttle = 300;
        this._disabled = false;
        this.scrollWindow = true;
        this._immediate = false;
        this._horizontal = false;
        this._alwaysCallback = false;
        this.scrolled = new core_1.EventEmitter();
        this.scrolledUp = new core_1.EventEmitter();
    }
    Object.defineProperty(InfiniteScroll.prototype, "debounce", {
        set: function (value) {
            this.throttleType = value === '' || !!value ? 'debounce' : 'throttle';
        },
        enumerable: true,
        configurable: true
    });
    InfiniteScroll.prototype.ngOnInit = function () {
        if (typeof window !== 'undefined') {
            var containerElement = this.scrollWindow ? window : this.element;
            this.scroller = new scroller_1.Scroller(containerElement, setInterval, this.element, this.onScrollDown.bind(this), this.onScrollUp.bind(this), this._distanceDown, this._distanceUp, {}, this._throttle, this._immediate, this._horizontal, this._alwaysCallback, this._disabled, this.positionResolverFactory, this.throttleType);
        }
    };
    InfiniteScroll.prototype.ngOnDestroy = function () {
        if (this.scroller) {
            this.scroller.clean();
        }
    };
    InfiniteScroll.prototype.ngOnChanges = function (changes) {
        if (changes['_disabled'] && this.scroller) {
            this.scroller.handleInfiniteScrollDisabled(changes['_disabled'].currentValue);
        }
    };
    InfiniteScroll.prototype.onScrollDown = function (data) {
        var _this = this;
        if (data === void 0) { data = { currentScrollPosition: 0 }; }
        this.zone.run(function () { return _this.scrolled.next(data); });
    };
    InfiniteScroll.prototype.onScrollUp = function (data) {
        var _this = this;
        if (data === void 0) { data = { currentScrollPosition: 0 }; }
        this.zone.run(function () { return _this.scrolledUp.next(data); });
    };
    InfiniteScroll.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[infinite-scroll]'
                },] },
    ];
    /** @nocollapse */
    InfiniteScroll.ctorParameters = [
        { type: core_1.ElementRef, },
        { type: core_1.NgZone, },
        { type: position_resolver_1.PositionResolverFactory, },
    ];
    InfiniteScroll.propDecorators = {
        '_distanceDown': [{ type: core_1.Input, args: ['infiniteScrollDistance',] },],
        '_distanceUp': [{ type: core_1.Input, args: ['infiniteScrollUpDistance',] },],
        '_throttle': [{ type: core_1.Input, args: ['infiniteScrollThrottle',] },],
        '_disabled': [{ type: core_1.Input, args: ['infiniteScrollDisabled',] },],
        'scrollWindow': [{ type: core_1.Input, args: ['scrollWindow',] },],
        '_immediate': [{ type: core_1.Input, args: ['immediateCheck',] },],
        '_horizontal': [{ type: core_1.Input, args: ['horizontal',] },],
        '_alwaysCallback': [{ type: core_1.Input, args: ['alwaysCallback',] },],
        'debounce': [{ type: core_1.Input },],
        'scrolled': [{ type: core_1.Output },],
        'scrolledUp': [{ type: core_1.Output },],
    };
    return InfiniteScroll;
}());
exports.InfiniteScroll = InfiniteScroll;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5maW5pdGUtc2Nyb2xsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaW5maW5pdGUtc2Nyb2xsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxxQkFBd0gsZUFBZSxDQUFDLENBQUE7QUFDeEkseUJBQThDLFlBQVksQ0FBQyxDQUFBO0FBQzNELGtDQUF3QyxxQkFBcUIsQ0FBQyxDQUFBO0FBRzlEO0lBb0JFLHdCQUNVLE9BQW1CLEVBQ25CLElBQVksRUFDWix1QkFBZ0Q7UUFGaEQsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQUNuQixTQUFJLEdBQUosSUFBSSxDQUFRO1FBQ1osNEJBQXVCLEdBQXZCLHVCQUF1QixDQUF5QjtRQXJCbEQsaUJBQVksR0FBVyxVQUFVLENBQUE7UUFFeEMsa0JBQWEsR0FBVyxDQUFDLENBQUM7UUFDMUIsZ0JBQVcsR0FBVyxHQUFHLENBQUM7UUFDMUIsY0FBUyxHQUFXLEdBQUcsQ0FBQztRQUN4QixjQUFTLEdBQVksS0FBSyxDQUFDO1FBQzNCLGlCQUFZLEdBQVksSUFBSSxDQUFDO1FBQzdCLGVBQVUsR0FBWSxLQUFLLENBQUM7UUFDNUIsZ0JBQVcsR0FBWSxLQUFLLENBQUM7UUFDN0Isb0JBQWUsR0FBWSxLQUFLLENBQUM7UUFNakMsYUFBUSxHQUFHLElBQUksbUJBQVksRUFBdUIsQ0FBQztRQUNuRCxlQUFVLEdBQUcsSUFBSSxtQkFBWSxFQUF1QixDQUFDO0lBTW5ELENBQUM7SUFYSixzQkFBSSxvQ0FBUTthQUFaLFVBQWEsS0FBdUI7WUFDbEMsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQyxLQUFLLEdBQUcsVUFBVSxHQUFHLFVBQVUsQ0FBQTtRQUN2RSxDQUFDOzs7T0FBQTtJQVdELGlDQUFRLEdBQVI7UUFDRSxFQUFFLENBQUMsQ0FBQyxPQUFPLE1BQU0sS0FBSyxXQUFXLENBQUMsQ0FBQyxDQUFDO1lBQ2xDLElBQU0sZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLFlBQVksR0FBRyxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNuRSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksbUJBQVEsQ0FBQyxnQkFBZ0IsRUFBRSxXQUFXLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFDcEUsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQ3hELElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxFQUFFLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFDeEQsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxlQUFlLEVBQ3ZELElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLHVCQUF1QixFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUN2RSxDQUFDO0lBQ0gsQ0FBQztJQUVELG9DQUFXLEdBQVg7UUFDRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUNsQixJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3hCLENBQUM7SUFDSCxDQUFDO0lBRUQsb0NBQVcsR0FBWCxVQUFZLE9BQXNCO1FBQ2hDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUMxQyxJQUFJLENBQUMsUUFBUSxDQUFDLDRCQUE0QixDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUNoRixDQUFDO0lBQ0gsQ0FBQztJQUVELHFDQUFZLEdBQVosVUFBYSxJQUF3RDtRQUFyRSxpQkFFQztRQUZZLG9CQUF3RCxHQUF4RCxTQUE4QixxQkFBcUIsRUFBRSxDQUFDLEVBQUU7UUFDbkUsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUF4QixDQUF3QixDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUVELG1DQUFVLEdBQVYsVUFBVyxJQUF3RDtRQUFuRSxpQkFFQztRQUZVLG9CQUF3RCxHQUF4RCxTQUE4QixxQkFBcUIsRUFBRSxDQUFDLEVBQUU7UUFDakUsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUExQixDQUEwQixDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUNJLHlCQUFVLEdBQTBCO1FBQzNDLEVBQUUsSUFBSSxFQUFFLGdCQUFTLEVBQUUsSUFBSSxFQUFFLENBQUM7b0JBQ3hCLFFBQVEsRUFBRSxtQkFBbUI7aUJBQzlCLEVBQUcsRUFBRTtLQUNMLENBQUM7SUFDRixrQkFBa0I7SUFDWCw2QkFBYyxHQUE2RDtRQUNsRixFQUFDLElBQUksRUFBRSxpQkFBVSxHQUFHO1FBQ3BCLEVBQUMsSUFBSSxFQUFFLGFBQU0sR0FBRztRQUNoQixFQUFDLElBQUksRUFBRSwyQ0FBdUIsR0FBRztLQUNoQyxDQUFDO0lBQ0ssNkJBQWMsR0FBMkM7UUFDaEUsZUFBZSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsWUFBSyxFQUFFLElBQUksRUFBRSxDQUFDLHdCQUF3QixFQUFHLEVBQUUsRUFBRTtRQUN2RSxhQUFhLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxZQUFLLEVBQUUsSUFBSSxFQUFFLENBQUMsMEJBQTBCLEVBQUcsRUFBRSxFQUFFO1FBQ3ZFLFdBQVcsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFlBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQyx3QkFBd0IsRUFBRyxFQUFFLEVBQUU7UUFDbkUsV0FBVyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsWUFBSyxFQUFFLElBQUksRUFBRSxDQUFDLHdCQUF3QixFQUFHLEVBQUUsRUFBRTtRQUNuRSxjQUFjLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxZQUFLLEVBQUUsSUFBSSxFQUFFLENBQUMsY0FBYyxFQUFHLEVBQUUsRUFBRTtRQUM1RCxZQUFZLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxZQUFLLEVBQUUsSUFBSSxFQUFFLENBQUMsZ0JBQWdCLEVBQUcsRUFBRSxFQUFFO1FBQzVELGFBQWEsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFlBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQyxZQUFZLEVBQUcsRUFBRSxFQUFFO1FBQ3pELGlCQUFpQixFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsWUFBSyxFQUFFLElBQUksRUFBRSxDQUFDLGdCQUFnQixFQUFHLEVBQUUsRUFBRTtRQUNqRSxVQUFVLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxZQUFLLEVBQUUsRUFBRTtRQUM5QixVQUFVLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxhQUFNLEVBQUUsRUFBRTtRQUMvQixZQUFZLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxhQUFNLEVBQUUsRUFBRTtLQUNoQyxDQUFDO0lBQ0YscUJBQUM7QUFBRCxDQUFDLEFBaEZELElBZ0ZDO0FBaEZZLHNCQUFjLGlCQWdGMUIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBPbkRlc3Ryb3ksIE9uSW5pdCwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzLCBOZ1pvbmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNjcm9sbGVyLCBJbmZpbml0ZVNjcm9sbEV2ZW50IH0gZnJvbSAnLi9zY3JvbGxlcic7XG5pbXBvcnQgeyBQb3NpdGlvblJlc29sdmVyRmFjdG9yeSB9IGZyb20gJy4vcG9zaXRpb24tcmVzb2x2ZXInO1xuXG5cbmV4cG9ydCBjbGFzcyBJbmZpbml0ZVNjcm9sbCBpbXBsZW1lbnRzIE9uRGVzdHJveSwgT25Jbml0LCBPbkNoYW5nZXMge1xuICBwdWJsaWMgc2Nyb2xsZXI6IFNjcm9sbGVyO1xuICBwcml2YXRlIHRocm90dGxlVHlwZTogc3RyaW5nID0gJ3Rocm90dGxlJ1xuXG4gICBfZGlzdGFuY2VEb3duOiBudW1iZXIgPSAyO1xuICAgX2Rpc3RhbmNlVXA6IG51bWJlciA9IDEuNTtcbiAgIF90aHJvdHRsZTogbnVtYmVyID0gMzAwO1xuICAgX2Rpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XG4gICBzY3JvbGxXaW5kb3c6IGJvb2xlYW4gPSB0cnVlO1xuICAgX2ltbWVkaWF0ZTogYm9vbGVhbiA9IGZhbHNlO1xuICAgX2hvcml6b250YWw6IGJvb2xlYW4gPSBmYWxzZTtcbiAgIF9hbHdheXNDYWxsYmFjazogYm9vbGVhbiA9IGZhbHNlO1xuICBcbiAgc2V0IGRlYm91bmNlKHZhbHVlOiBzdHJpbmcgfCBib29sZWFuKSB7XG4gICAgdGhpcy50aHJvdHRsZVR5cGUgPSB2YWx1ZSA9PT0gJycgfHwgISF2YWx1ZSA/ICdkZWJvdW5jZScgOiAndGhyb3R0bGUnXG4gIH1cblxuICAgc2Nyb2xsZWQgPSBuZXcgRXZlbnRFbWl0dGVyPEluZmluaXRlU2Nyb2xsRXZlbnQ+KCk7XG4gICBzY3JvbGxlZFVwID0gbmV3IEV2ZW50RW1pdHRlcjxJbmZpbml0ZVNjcm9sbEV2ZW50PigpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZWxlbWVudDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIHpvbmU6IE5nWm9uZSxcbiAgICBwcml2YXRlIHBvc2l0aW9uUmVzb2x2ZXJGYWN0b3J5OiBQb3NpdGlvblJlc29sdmVyRmFjdG9yeVxuICApIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25zdCBjb250YWluZXJFbGVtZW50ID0gdGhpcy5zY3JvbGxXaW5kb3cgPyB3aW5kb3cgOiB0aGlzLmVsZW1lbnQ7XG4gICAgICB0aGlzLnNjcm9sbGVyID0gbmV3IFNjcm9sbGVyKGNvbnRhaW5lckVsZW1lbnQsIHNldEludGVydmFsLCB0aGlzLmVsZW1lbnQsXG4gICAgICAgICAgdGhpcy5vblNjcm9sbERvd24uYmluZCh0aGlzKSwgdGhpcy5vblNjcm9sbFVwLmJpbmQodGhpcyksXG4gICAgICAgICAgdGhpcy5fZGlzdGFuY2VEb3duLCB0aGlzLl9kaXN0YW5jZVVwLCB7fSwgdGhpcy5fdGhyb3R0bGUsXG4gICAgICAgICAgdGhpcy5faW1tZWRpYXRlLCB0aGlzLl9ob3Jpem9udGFsLCB0aGlzLl9hbHdheXNDYWxsYmFjayxcbiAgICAgICAgICB0aGlzLl9kaXNhYmxlZCwgdGhpcy5wb3NpdGlvblJlc29sdmVyRmFjdG9yeSwgdGhpcy50aHJvdHRsZVR5cGUpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95ICgpIHtcbiAgICBpZiAodGhpcy5zY3JvbGxlcikge1xuICAgICAgdGhpcy5zY3JvbGxlci5jbGVhbigpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICBpZiAoY2hhbmdlc1snX2Rpc2FibGVkJ10gJiYgdGhpcy5zY3JvbGxlcikge1xuICAgICAgdGhpcy5zY3JvbGxlci5oYW5kbGVJbmZpbml0ZVNjcm9sbERpc2FibGVkKGNoYW5nZXNbJ19kaXNhYmxlZCddLmN1cnJlbnRWYWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgb25TY3JvbGxEb3duKGRhdGE6IEluZmluaXRlU2Nyb2xsRXZlbnQgPSB7IGN1cnJlbnRTY3JvbGxQb3NpdGlvbjogMCB9KSB7XG4gICAgdGhpcy56b25lLnJ1bigoKSA9PiB0aGlzLnNjcm9sbGVkLm5leHQoZGF0YSkpO1xuICB9XG5cbiAgb25TY3JvbGxVcChkYXRhOiBJbmZpbml0ZVNjcm9sbEV2ZW50ID0geyBjdXJyZW50U2Nyb2xsUG9zaXRpb246IDAgfSkge1xuICAgIHRoaXMuem9uZS5ydW4oKCkgPT4gdGhpcy5zY3JvbGxlZFVwLm5leHQoZGF0YSkpO1xuICB9XG5zdGF0aWMgZGVjb3JhdG9yczogRGVjb3JhdG9ySW52b2NhdGlvbltdID0gW1xueyB0eXBlOiBEaXJlY3RpdmUsIGFyZ3M6IFt7XG4gIHNlbGVjdG9yOiAnW2luZmluaXRlLXNjcm9sbF0nXG59LCBdIH0sXG5dO1xuLyoqIEBub2NvbGxhcHNlICovXG5zdGF0aWMgY3RvclBhcmFtZXRlcnM6ICh7dHlwZTogYW55LCBkZWNvcmF0b3JzPzogRGVjb3JhdG9ySW52b2NhdGlvbltdfXxudWxsKVtdID0gW1xue3R5cGU6IEVsZW1lbnRSZWYsIH0sXG57dHlwZTogTmdab25lLCB9LFxue3R5cGU6IFBvc2l0aW9uUmVzb2x2ZXJGYWN0b3J5LCB9LFxuXTtcbnN0YXRpYyBwcm9wRGVjb3JhdG9yczoge1trZXk6IHN0cmluZ106IERlY29yYXRvckludm9jYXRpb25bXX0gPSB7XG4nX2Rpc3RhbmNlRG93bic6IFt7IHR5cGU6IElucHV0LCBhcmdzOiBbJ2luZmluaXRlU2Nyb2xsRGlzdGFuY2UnLCBdIH0sXSxcbidfZGlzdGFuY2VVcCc6IFt7IHR5cGU6IElucHV0LCBhcmdzOiBbJ2luZmluaXRlU2Nyb2xsVXBEaXN0YW5jZScsIF0gfSxdLFxuJ190aHJvdHRsZSc6IFt7IHR5cGU6IElucHV0LCBhcmdzOiBbJ2luZmluaXRlU2Nyb2xsVGhyb3R0bGUnLCBdIH0sXSxcbidfZGlzYWJsZWQnOiBbeyB0eXBlOiBJbnB1dCwgYXJnczogWydpbmZpbml0ZVNjcm9sbERpc2FibGVkJywgXSB9LF0sXG4nc2Nyb2xsV2luZG93JzogW3sgdHlwZTogSW5wdXQsIGFyZ3M6IFsnc2Nyb2xsV2luZG93JywgXSB9LF0sXG4nX2ltbWVkaWF0ZSc6IFt7IHR5cGU6IElucHV0LCBhcmdzOiBbJ2ltbWVkaWF0ZUNoZWNrJywgXSB9LF0sXG4nX2hvcml6b250YWwnOiBbeyB0eXBlOiBJbnB1dCwgYXJnczogWydob3Jpem9udGFsJywgXSB9LF0sXG4nX2Fsd2F5c0NhbGxiYWNrJzogW3sgdHlwZTogSW5wdXQsIGFyZ3M6IFsnYWx3YXlzQ2FsbGJhY2snLCBdIH0sXSxcbidkZWJvdW5jZSc6IFt7IHR5cGU6IElucHV0IH0sXSxcbidzY3JvbGxlZCc6IFt7IHR5cGU6IE91dHB1dCB9LF0sXG4nc2Nyb2xsZWRVcCc6IFt7IHR5cGU6IE91dHB1dCB9LF0sXG59O1xufVxuXG5pbnRlcmZhY2UgRGVjb3JhdG9ySW52b2NhdGlvbiB7XG4gIHR5cGU6IEZ1bmN0aW9uO1xuICBhcmdzPzogYW55W107XG59XG4iXX0=

/***/ },

/***/ "./node_modules/angular2-infinite-scroll/src/position-resolver.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var axis_resolver_1 = __webpack_require__("./node_modules/angular2-infinite-scroll/src/axis-resolver.js");
var PositionResolverFactory = (function () {
    function PositionResolverFactory(axisResolver) {
        this.axisResolver = axisResolver;
    }
    PositionResolverFactory.prototype.create = function (options) {
        return new PositionResolver(this.axisResolver.create(!options.horizontal), options);
    };
    PositionResolverFactory.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    PositionResolverFactory.ctorParameters = [
        { type: axis_resolver_1.AxisResolverFactory, },
    ];
    return PositionResolverFactory;
}());
exports.PositionResolverFactory = PositionResolverFactory;
var PositionResolver = (function () {
    function PositionResolver(axis, options) {
        this.axis = axis;
        this.options = options;
    }
    PositionResolver.prototype.calculatePoints = function (element) {
        return this.options.isContainerWindow
            ? this.calculatePointsForWindow(element)
            : this.calculatePointsForElement(element);
    };
    PositionResolver.prototype.calculatePointsForWindow = function (element) {
        // container's height
        var height = this.height(this.options.container);
        // scrolled until now / current y point
        var scrolledUntilNow = height + this.pageYOffset(this.options.documentElement);
        // total height / most bottom y point
        var totalToScroll = this.offsetTop(element.nativeElement) + this.height(element.nativeElement);
        return { height: height, scrolledUntilNow: scrolledUntilNow, totalToScroll: totalToScroll };
    };
    PositionResolver.prototype.calculatePointsForElement = function (element) {
        var scrollTop = this.axis.scrollTopKey();
        var scrollHeight = this.axis.scrollHeightKey();
        var height = this.height(this.options.container);
        // perhaps use this.container.offsetTop instead of 'scrollTop'
        var scrolledUntilNow = this.options.container[scrollTop];
        var containerTopOffset = 0;
        var offsetTop = this.offsetTop(this.options.container);
        if (offsetTop !== void 0) {
            containerTopOffset = offsetTop;
        }
        var totalToScroll = this.options.container[scrollHeight];
        // const totalToScroll = this.offsetTop(this.$elementRef.nativeElement) - containerTopOffset + this.height(this.$elementRef.nativeElement);
        return { height: height, scrolledUntilNow: scrolledUntilNow, totalToScroll: totalToScroll };
    };
    PositionResolver.prototype.height = function (elem) {
        var offsetHeight = this.axis.offsetHeightKey();
        var clientHeight = this.axis.clientHeightKey();
        // elem = elem.nativeElement;
        if (isNaN(elem[offsetHeight])) {
            return this.options.documentElement[clientHeight];
        }
        else {
            return elem[offsetHeight];
        }
    };
    PositionResolver.prototype.offsetTop = function (elem) {
        var top = this.axis.topKey();
        // elem = elem.nativeElement;
        if (!elem.getBoundingClientRect) {
            return;
        }
        return elem.getBoundingClientRect()[top] + this.pageYOffset(elem);
    };
    PositionResolver.prototype.pageYOffset = function (elem) {
        var pageYOffset = this.axis.pageYOffsetKey();
        var scrollTop = this.axis.scrollTopKey();
        var offsetTop = this.axis.offsetTopKey();
        // elem = elem.nativeElement;
        if (isNaN(window[pageYOffset])) {
            return this.options.documentElement[scrollTop];
        }
        else if (elem.ownerDocument) {
            return elem.ownerDocument.defaultView[pageYOffset];
        }
        else {
            return elem[offsetTop];
        }
    };
    return PositionResolver;
}());
exports.PositionResolver = PositionResolver;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zaXRpb24tcmVzb2x2ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwb3NpdGlvbi1yZXNvbHZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEscUJBQXVDLGVBQWUsQ0FBQyxDQUFBO0FBQ3ZELDhCQUFrRCxpQkFBaUIsQ0FBQyxDQUFBO0FBVXBFO0lBRUUsaUNBQW9CLFlBQWlDO1FBQWpDLGlCQUFZLEdBQVosWUFBWSxDQUFxQjtJQUNyRCxDQUFDO0lBRUQsd0NBQU0sR0FBTixVQUFRLE9BQXlCO1FBQy9CLE1BQU0sQ0FBQyxJQUFJLGdCQUFnQixDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ3RGLENBQUM7SUFDSSxrQ0FBVSxHQUEwQjtRQUMzQyxFQUFFLElBQUksRUFBRSxpQkFBVSxFQUFFO0tBQ25CLENBQUM7SUFDRixrQkFBa0I7SUFDWCxzQ0FBYyxHQUE2RDtRQUNsRixFQUFDLElBQUksRUFBRSxtQ0FBbUIsR0FBRztLQUM1QixDQUFDO0lBQ0YsOEJBQUM7QUFBRCxDQUFDLEFBZkQsSUFlQztBQWZZLCtCQUF1QiwwQkFlbkMsQ0FBQTtBQUVEO0lBQ0UsMEJBQXFCLElBQWtCLEVBQVUsT0FBeUI7UUFBckQsU0FBSSxHQUFKLElBQUksQ0FBYztRQUFVLFlBQU8sR0FBUCxPQUFPLENBQWtCO0lBQzFFLENBQUM7SUFFRCwwQ0FBZSxHQUFmLFVBQWlCLE9BQW1CO1FBQ2xDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGlCQUFpQjtjQUNqQyxJQUFJLENBQUMsd0JBQXdCLENBQUMsT0FBTyxDQUFDO2NBQ3RDLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBRUQsbURBQXdCLEdBQXhCLFVBQTBCLE9BQW1CO1FBQzNDLHFCQUFxQjtRQUNyQixJQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDbkQsdUNBQXVDO1FBQ3ZDLElBQU0sZ0JBQWdCLEdBQUcsTUFBTSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUNqRixxQ0FBcUM7UUFDckMsSUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDakcsTUFBTSxDQUFDLEVBQUUsY0FBTSxFQUFFLGtDQUFnQixFQUFFLDRCQUFhLEVBQUUsQ0FBQztJQUNyRCxDQUFDO0lBRUQsb0RBQXlCLEdBQXpCLFVBQTJCLE9BQW1CO1FBQzVDLElBQUksU0FBUyxHQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDNUMsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUUvQyxJQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDbkQsOERBQThEO1FBQzlELElBQU0sZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDM0QsSUFBSSxrQkFBa0IsR0FBRyxDQUFDLENBQUM7UUFDM0IsSUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3pELEVBQUUsQ0FBQyxDQUFDLFNBQVMsS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDekIsa0JBQWtCLEdBQUcsU0FBUyxDQUFDO1FBQ2pDLENBQUM7UUFDRCxJQUFNLGFBQWEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUMzRCwySUFBMkk7UUFDM0ksTUFBTSxDQUFDLEVBQUUsY0FBTSxFQUFFLGtDQUFnQixFQUFFLDRCQUFhLEVBQUUsQ0FBQztJQUNyRCxDQUFDO0lBRU8saUNBQU0sR0FBZCxVQUFnQixJQUFTO1FBQ3ZCLElBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDL0MsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUUvQyw2QkFBNkI7UUFDN0IsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM5QixNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDcEQsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUM1QixDQUFDO0lBQ0gsQ0FBQztJQUVPLG9DQUFTLEdBQWpCLFVBQW1CLElBQVM7UUFDMUIsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUU3Qiw2QkFBNkI7UUFDN0IsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDO1lBQ2hDLE1BQU0sQ0FBQztRQUNULENBQUM7UUFDRCxNQUFNLENBQUMsSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNwRSxDQUFDO0lBRUQsc0NBQVcsR0FBWCxVQUFhLElBQVM7UUFDcEIsSUFBSSxXQUFXLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUM3QyxJQUFJLFNBQVMsR0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQzNDLElBQUksU0FBUyxHQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFFM0MsNkJBQTZCO1FBQzdCLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDL0IsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ2pELENBQUM7UUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7WUFDOUIsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3JELENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNOLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDekIsQ0FBQztJQUNILENBQUM7SUFDSCx1QkFBQztBQUFELENBQUMsQUF6RUQsSUF5RUM7QUF6RVksd0JBQWdCLG1CQXlFNUIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEF4aXNSZXNvbHZlciwgQXhpc1Jlc29sdmVyRmFjdG9yeSB9IGZyb20gJy4vYXhpcy1yZXNvbHZlcic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUG9zaXRpb25FbGVtZW50cyB7XG4gIGNvbnRhaW5lcjogRWxlbWVudFJlZjtcbiAgZG9jdW1lbnRFbGVtZW50OiBhbnk7XG4gIGlzQ29udGFpbmVyV2luZG93OiBib29sZWFuO1xuICBob3Jpem9udGFsOiBib29sZWFuO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBQb3NpdGlvblJlc29sdmVyRmFjdG9yeSB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBheGlzUmVzb2x2ZXI6IEF4aXNSZXNvbHZlckZhY3RvcnkpIHtcbiAgfVxuXG4gIGNyZWF0ZSAob3B0aW9uczogUG9zaXRpb25FbGVtZW50cykge1xuICAgIHJldHVybiBuZXcgUG9zaXRpb25SZXNvbHZlcih0aGlzLmF4aXNSZXNvbHZlci5jcmVhdGUoIW9wdGlvbnMuaG9yaXpvbnRhbCksIG9wdGlvbnMpO1xuICB9XG5zdGF0aWMgZGVjb3JhdG9yczogRGVjb3JhdG9ySW52b2NhdGlvbltdID0gW1xueyB0eXBlOiBJbmplY3RhYmxlIH0sXG5dO1xuLyoqIEBub2NvbGxhcHNlICovXG5zdGF0aWMgY3RvclBhcmFtZXRlcnM6ICh7dHlwZTogYW55LCBkZWNvcmF0b3JzPzogRGVjb3JhdG9ySW52b2NhdGlvbltdfXxudWxsKVtdID0gW1xue3R5cGU6IEF4aXNSZXNvbHZlckZhY3RvcnksIH0sXG5dO1xufVxuXG5leHBvcnQgY2xhc3MgUG9zaXRpb25SZXNvbHZlciB7XG4gIGNvbnN0cnVjdG9yIChwcml2YXRlIGF4aXM6IEF4aXNSZXNvbHZlciwgcHJpdmF0ZSBvcHRpb25zOiBQb3NpdGlvbkVsZW1lbnRzKSB7XG4gIH1cblxuICBjYWxjdWxhdGVQb2ludHMgKGVsZW1lbnQ6IEVsZW1lbnRSZWYpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLmlzQ29udGFpbmVyV2luZG93XG4gICAgICA/IHRoaXMuY2FsY3VsYXRlUG9pbnRzRm9yV2luZG93KGVsZW1lbnQpXG4gICAgICA6IHRoaXMuY2FsY3VsYXRlUG9pbnRzRm9yRWxlbWVudChlbGVtZW50KTtcbiAgfVxuXG4gIGNhbGN1bGF0ZVBvaW50c0ZvcldpbmRvdyAoZWxlbWVudDogRWxlbWVudFJlZikge1xuICAgIC8vIGNvbnRhaW5lcidzIGhlaWdodFxuICAgIGNvbnN0IGhlaWdodCA9IHRoaXMuaGVpZ2h0KHRoaXMub3B0aW9ucy5jb250YWluZXIpO1xuICAgIC8vIHNjcm9sbGVkIHVudGlsIG5vdyAvIGN1cnJlbnQgeSBwb2ludFxuICAgIGNvbnN0IHNjcm9sbGVkVW50aWxOb3cgPSBoZWlnaHQgKyB0aGlzLnBhZ2VZT2Zmc2V0KHRoaXMub3B0aW9ucy5kb2N1bWVudEVsZW1lbnQpO1xuICAgIC8vIHRvdGFsIGhlaWdodCAvIG1vc3QgYm90dG9tIHkgcG9pbnRcbiAgICBjb25zdCB0b3RhbFRvU2Nyb2xsID0gdGhpcy5vZmZzZXRUb3AoZWxlbWVudC5uYXRpdmVFbGVtZW50KSArIHRoaXMuaGVpZ2h0KGVsZW1lbnQubmF0aXZlRWxlbWVudCk7XG4gICAgcmV0dXJuIHsgaGVpZ2h0LCBzY3JvbGxlZFVudGlsTm93LCB0b3RhbFRvU2Nyb2xsIH07XG4gIH1cblxuICBjYWxjdWxhdGVQb2ludHNGb3JFbGVtZW50IChlbGVtZW50OiBFbGVtZW50UmVmKSB7XG4gICAgbGV0IHNjcm9sbFRvcCAgICA9IHRoaXMuYXhpcy5zY3JvbGxUb3BLZXkoKTtcbiAgICBsZXQgc2Nyb2xsSGVpZ2h0ID0gdGhpcy5heGlzLnNjcm9sbEhlaWdodEtleSgpO1xuXG4gICAgY29uc3QgaGVpZ2h0ID0gdGhpcy5oZWlnaHQodGhpcy5vcHRpb25zLmNvbnRhaW5lcik7XG4gICAgLy8gcGVyaGFwcyB1c2UgdGhpcy5jb250YWluZXIub2Zmc2V0VG9wIGluc3RlYWQgb2YgJ3Njcm9sbFRvcCdcbiAgICBjb25zdCBzY3JvbGxlZFVudGlsTm93ID0gdGhpcy5vcHRpb25zLmNvbnRhaW5lcltzY3JvbGxUb3BdO1xuICAgIGxldCBjb250YWluZXJUb3BPZmZzZXQgPSAwO1xuICAgIGNvbnN0IG9mZnNldFRvcCA9IHRoaXMub2Zmc2V0VG9wKHRoaXMub3B0aW9ucy5jb250YWluZXIpO1xuICAgIGlmIChvZmZzZXRUb3AgIT09IHZvaWQgMCkge1xuICAgICAgY29udGFpbmVyVG9wT2Zmc2V0ID0gb2Zmc2V0VG9wO1xuICAgIH1cbiAgICBjb25zdCB0b3RhbFRvU2Nyb2xsID0gdGhpcy5vcHRpb25zLmNvbnRhaW5lcltzY3JvbGxIZWlnaHRdO1xuICAgIC8vIGNvbnN0IHRvdGFsVG9TY3JvbGwgPSB0aGlzLm9mZnNldFRvcCh0aGlzLiRlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpIC0gY29udGFpbmVyVG9wT2Zmc2V0ICsgdGhpcy5oZWlnaHQodGhpcy4kZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KTtcbiAgICByZXR1cm4geyBoZWlnaHQsIHNjcm9sbGVkVW50aWxOb3csIHRvdGFsVG9TY3JvbGwgfTtcbiAgfVxuXG4gIHByaXZhdGUgaGVpZ2h0IChlbGVtOiBhbnkpIHtcbiAgICBsZXQgb2Zmc2V0SGVpZ2h0ID0gdGhpcy5heGlzLm9mZnNldEhlaWdodEtleSgpO1xuICAgIGxldCBjbGllbnRIZWlnaHQgPSB0aGlzLmF4aXMuY2xpZW50SGVpZ2h0S2V5KCk7XG5cbiAgICAvLyBlbGVtID0gZWxlbS5uYXRpdmVFbGVtZW50O1xuICAgIGlmIChpc05hTihlbGVtW29mZnNldEhlaWdodF0pKSB7XG4gICAgICByZXR1cm4gdGhpcy5vcHRpb25zLmRvY3VtZW50RWxlbWVudFtjbGllbnRIZWlnaHRdO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZWxlbVtvZmZzZXRIZWlnaHRdO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgb2Zmc2V0VG9wIChlbGVtOiBhbnkpIHtcbiAgICBsZXQgdG9wID0gdGhpcy5heGlzLnRvcEtleSgpO1xuXG4gICAgLy8gZWxlbSA9IGVsZW0ubmF0aXZlRWxlbWVudDtcbiAgICBpZiAoIWVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KSB7IC8vIHx8IGVsZW0uY3NzKCdub25lJykpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgcmV0dXJuIGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClbdG9wXSArIHRoaXMucGFnZVlPZmZzZXQoZWxlbSk7XG4gIH1cblxuICBwYWdlWU9mZnNldCAoZWxlbTogYW55KSB7XG4gICAgbGV0IHBhZ2VZT2Zmc2V0ID0gdGhpcy5heGlzLnBhZ2VZT2Zmc2V0S2V5KCk7XG4gICAgbGV0IHNjcm9sbFRvcCAgID0gdGhpcy5heGlzLnNjcm9sbFRvcEtleSgpO1xuICAgIGxldCBvZmZzZXRUb3AgICA9IHRoaXMuYXhpcy5vZmZzZXRUb3BLZXkoKTtcblxuICAgIC8vIGVsZW0gPSBlbGVtLm5hdGl2ZUVsZW1lbnQ7XG4gICAgaWYgKGlzTmFOKHdpbmRvd1twYWdlWU9mZnNldF0pKSB7XG4gICAgICByZXR1cm4gdGhpcy5vcHRpb25zLmRvY3VtZW50RWxlbWVudFtzY3JvbGxUb3BdO1xuICAgIH0gZWxzZSBpZiAoZWxlbS5vd25lckRvY3VtZW50KSB7XG4gICAgICByZXR1cm4gZWxlbS5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3W3BhZ2VZT2Zmc2V0XTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGVsZW1bb2Zmc2V0VG9wXTtcbiAgICB9XG4gIH1cbn1cbmludGVyZmFjZSBEZWNvcmF0b3JJbnZvY2F0aW9uIHtcbiAgdHlwZTogRnVuY3Rpb247XG4gIGFyZ3M/OiBhbnlbXTtcbn1cbiJdfQ==

/***/ },

/***/ "./node_modules/angular2-infinite-scroll/src/scroller.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__("./node_modules/rxjs/Observable.js");
__webpack_require__("./node_modules/rxjs/add/observable/fromEvent.js");
__webpack_require__("./node_modules/rxjs/add/observable/timer.js");
__webpack_require__("./node_modules/rxjs/add/operator/debounce.js");
__webpack_require__("./node_modules/rxjs/add/operator/throttle.js");
__webpack_require__("./node_modules/rxjs/add/operator/filter.js");
__webpack_require__("./node_modules/rxjs/add/operator/delay.js");
;
var Scroller = (function () {
    function Scroller(windowElement, $interval, $elementRef, infiniteScrollDownCallback, infiniteScrollUpCallback, infiniteScrollDownDistance, infiniteScrollUpDistance, infiniteScrollParent, infiniteScrollThrottle, isImmediate, horizontal, alwaysCallback, scrollDisabled, _positionResolver, throttleType) {
        if (horizontal === void 0) { horizontal = false; }
        if (alwaysCallback === void 0) { alwaysCallback = false; }
        if (scrollDisabled === void 0) { scrollDisabled = false; }
        if (throttleType === void 0) { throttleType = 'throttle'; }
        this.windowElement = windowElement;
        this.$interval = $interval;
        this.$elementRef = $elementRef;
        this.infiniteScrollDownCallback = infiniteScrollDownCallback;
        this.infiniteScrollUpCallback = infiniteScrollUpCallback;
        this.infiniteScrollThrottle = infiniteScrollThrottle;
        this.isImmediate = isImmediate;
        this.horizontal = horizontal;
        this.alwaysCallback = alwaysCallback;
        this.scrollDisabled = scrollDisabled;
        this._positionResolver = _positionResolver;
        this.throttleType = throttleType;
        this.lastScrollPosition = 0;
        this.isContainerWindow = Object.prototype.toString.call(this.windowElement).includes('Window');
        this.documentElement = this.isContainerWindow ? this.windowElement.document.documentElement : null;
        this.handleInfiniteScrollDistance(infiniteScrollDownDistance, infiniteScrollUpDistance);
        // if (attrs.infiniteScrollParent != null) {
        // 	attachEvent(angular.element(elem.parent()));
        // }
        this.handleInfiniteScrollDisabled(scrollDisabled);
        this.defineContainer();
        this.positionResolver = this._positionResolver.create({
            container: this.container,
            documentElement: this.documentElement,
            isContainerWindow: this.isContainerWindow,
            horizontal: horizontal
        });
        this.createInterval();
    }
    Scroller.prototype.defineContainer = function () {
        if (this.isContainerWindow) {
            this.container = this.windowElement;
        }
        else {
            this.container = this.windowElement.nativeElement;
        }
        this.attachEvent(this.container);
    };
    Scroller.prototype.createInterval = function () {
        var _this = this;
        if (this.isImmediate) {
            this.checkInterval = this.$interval(function () {
                return _this.handler();
            }, 0);
        }
    };
    Scroller.prototype.handler = function () {
        var _this = this;
        var container = this.positionResolver.calculatePoints(this.$elementRef);
        var scrollingDown = this.lastScrollPosition < container.scrolledUntilNow;
        this.lastScrollPosition = container.scrolledUntilNow;
        var remaining;
        var containerBreakpoint;
        if (scrollingDown) {
            remaining = container.totalToScroll - container.scrolledUntilNow;
            containerBreakpoint = container.height * this.scrollDownDistance + 1;
        }
        else {
            remaining = container.scrolledUntilNow;
            containerBreakpoint = container.height * this.scrollUpDistance + 1;
        }
        var shouldScroll = remaining <= containerBreakpoint;
        var triggerCallback = (this.alwaysCallback || shouldScroll) && this.scrollEnabled;
        var shouldClearInterval = !shouldScroll && this.checkInterval;
        // if (this.useDocumentBottom) {
        // 	container.totalToScroll = this.height(this.$elementRef.nativeElement.ownerDocument);
        // }
        this.checkWhenEnabled = shouldScroll;
        if (triggerCallback) {
            var infiniteScrollEvent = {
                currentScrollPosition: container.scrolledUntilNow
            };
            if (scrollingDown) {
                this.infiniteScrollDownCallback(infiniteScrollEvent);
            }
            else {
                this.infiniteScrollUpCallback(infiniteScrollEvent);
            }
        }
        if (shouldClearInterval) {
            clearInterval(this.checkInterval);
        }
        setTimeout(function () {
            var container = _this.positionResolver.calculatePoints(_this.$elementRef);
            if (container.scrolledUntilNow >= container.totalToScroll) {
                _this.handler();
            }
        }, this.infiniteScrollThrottle);
    };
    Scroller.prototype.handleInfiniteScrollDistance = function (scrollDownDistance, scrollUpDistance) {
        this.scrollDownDistance = parseFloat(scrollDownDistance) || 0;
        this.scrollUpDistance = parseFloat(scrollUpDistance) || 0;
    };
    Scroller.prototype.attachEvent = function (newContainer) {
        var _this = this;
        this.clean();
        if (newContainer) {
            var throttle_1 = this.infiniteScrollThrottle;
            this.disposeScroll = Observable_1.Observable.fromEvent(this.container, 'scroll')[this.throttleType](function () { return Observable_1.Observable.timer(throttle_1); })
                .filter(function () { return _this.scrollEnabled; })
                .subscribe(function () { return _this.handler(); });
        }
    };
    Scroller.prototype.clean = function () {
        if (this.disposeScroll) {
            this.disposeScroll.unsubscribe();
        }
    };
    Scroller.prototype.handleInfiniteScrollDisabled = function (scrollDisabled) {
        this.scrollEnabled = !scrollDisabled;
    };
    return Scroller;
}());
exports.Scroller = Scroller;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzY3JvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsMkJBQTJCLGlCQUFpQixDQUFDLENBQUE7QUFJN0MsUUFBTywrQkFBK0IsQ0FBQyxDQUFBO0FBQ3ZDLFFBQU8sMkJBQTJCLENBQUMsQ0FBQTtBQUNuQyxRQUFPLDRCQUE0QixDQUFDLENBQUE7QUFDcEMsUUFBTyw0QkFBNEIsQ0FBQyxDQUFBO0FBQ3BDLFFBQU8sMEJBQTBCLENBQUMsQ0FBQTtBQUNsQyxRQUFPLHlCQUF5QixDQUFDLENBQUE7QUFJaEMsQ0FBQztBQUVGO0lBZ0JFLGtCQUNVLGFBQXdDLEVBQ3hDLFNBQW1CLEVBQ25CLFdBQXVCLEVBQ3ZCLDBCQUFvQyxFQUNwQyx3QkFBa0MsRUFDMUMsMEJBQWtDLEVBQ2xDLHdCQUFnQyxFQUNoQyxvQkFBK0MsRUFDdkMsc0JBQThCLEVBQzlCLFdBQW9CLEVBQ3BCLFVBQTJCLEVBQzNCLGNBQStCLEVBQy9CLGNBQStCLEVBQy9CLGlCQUEwQyxFQUMxQyxZQUFpQztRQUp6QywwQkFBbUMsR0FBbkMsa0JBQW1DO1FBQ25DLDhCQUF1QyxHQUF2QyxzQkFBdUM7UUFDdkMsOEJBQXVDLEdBQXZDLHNCQUF1QztRQUV2Qyw0QkFBeUMsR0FBekMseUJBQXlDO1FBZGpDLGtCQUFhLEdBQWIsYUFBYSxDQUEyQjtRQUN4QyxjQUFTLEdBQVQsU0FBUyxDQUFVO1FBQ25CLGdCQUFXLEdBQVgsV0FBVyxDQUFZO1FBQ3ZCLCtCQUEwQixHQUExQiwwQkFBMEIsQ0FBVTtRQUNwQyw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQVU7UUFJbEMsMkJBQXNCLEdBQXRCLHNCQUFzQixDQUFRO1FBQzlCLGdCQUFXLEdBQVgsV0FBVyxDQUFTO1FBQ3BCLGVBQVUsR0FBVixVQUFVLENBQWlCO1FBQzNCLG1CQUFjLEdBQWQsY0FBYyxDQUFpQjtRQUMvQixtQkFBYyxHQUFkLGNBQWMsQ0FBaUI7UUFDL0Isc0JBQWlCLEdBQWpCLGlCQUFpQixDQUF5QjtRQUMxQyxpQkFBWSxHQUFaLFlBQVksQ0FBcUI7UUFuQnBDLHVCQUFrQixHQUFXLENBQUMsQ0FBQztRQXFCcEMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQy9GLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7UUFDbkcsSUFBSSxDQUFDLDRCQUE0QixDQUFDLDBCQUEwQixFQUFFLHdCQUF3QixDQUFDLENBQUM7UUFFeEYsNENBQTRDO1FBQzVDLGdEQUFnRDtRQUNoRCxJQUFJO1FBQ0osSUFBSSxDQUFDLDRCQUE0QixDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ2xELElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sQ0FBQztZQUNwRCxTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVM7WUFDekIsZUFBZSxFQUFFLElBQUksQ0FBQyxlQUFlO1lBQ3JDLGlCQUFpQixFQUFFLElBQUksQ0FBQyxpQkFBaUI7WUFDekMsVUFBVSxFQUFFLFVBQVU7U0FDdkIsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFFRCxrQ0FBZSxHQUFmO1FBQ0UsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQztZQUMzQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDdEMsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQztRQUNwRCxDQUFDO1FBQ0QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVELGlDQUFjLEdBQWQ7UUFBQSxpQkFNQztRQUxDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1lBQ3JCLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztnQkFDbEMsTUFBTSxDQUFDLEtBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUN4QixDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDUixDQUFDO0lBQ0gsQ0FBQztJQUVELDBCQUFPLEdBQVA7UUFBQSxpQkF5Q0M7UUF4Q0MsSUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDMUUsSUFBTSxhQUFhLEdBQVksSUFBSSxDQUFDLGtCQUFrQixHQUFHLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQztRQUNwRixJQUFJLENBQUMsa0JBQWtCLEdBQUcsU0FBUyxDQUFDLGdCQUFnQixDQUFDO1FBRXJELElBQUksU0FBaUIsQ0FBQztRQUN0QixJQUFJLG1CQUEyQixDQUFDO1FBQ2hDLEVBQUUsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7WUFDbEIsU0FBUyxHQUFHLFNBQVMsQ0FBQyxhQUFhLEdBQUcsU0FBUyxDQUFDLGdCQUFnQixDQUFDO1lBQ2pFLG1CQUFtQixHQUFHLFNBQVMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixHQUFHLENBQUMsQ0FBQztRQUN2RSxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixTQUFTLEdBQUcsU0FBUyxDQUFDLGdCQUFnQixDQUFDO1lBQ3ZDLG1CQUFtQixHQUFHLFNBQVMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixHQUFHLENBQUMsQ0FBQztRQUNyRSxDQUFDO1FBQ0QsSUFBTSxZQUFZLEdBQVksU0FBUyxJQUFJLG1CQUFtQixDQUFDO1FBQy9ELElBQU0sZUFBZSxHQUFZLENBQUMsSUFBSSxDQUFDLGNBQWMsSUFBSSxZQUFZLENBQUMsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQzdGLElBQU0sbUJBQW1CLEdBQUcsQ0FBQyxZQUFZLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUNoRSxnQ0FBZ0M7UUFDaEMsd0ZBQXdGO1FBQ3hGLElBQUk7UUFDSixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsWUFBWSxDQUFDO1FBRXJDLEVBQUUsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7WUFDcEIsSUFBTSxtQkFBbUIsR0FBd0I7Z0JBQy9DLHFCQUFxQixFQUFFLFNBQVMsQ0FBQyxnQkFBZ0I7YUFDbEQsQ0FBQztZQUNGLEVBQUUsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7Z0JBQ2xCLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1lBQ3ZELENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDTixJQUFJLENBQUMsd0JBQXdCLENBQUMsbUJBQW1CLENBQUMsQ0FBQztZQUNyRCxDQUFDO1FBQ0gsQ0FBQztRQUNELEVBQUUsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQztZQUN4QixhQUFhLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ3BDLENBQUM7UUFDRCxVQUFVLENBQUM7WUFDVCxJQUFNLFNBQVMsR0FBRyxLQUFJLENBQUMsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLEtBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUMxRSxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLElBQUksU0FBUyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7Z0JBQzFELEtBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNqQixDQUFDO1FBQ0gsQ0FBQyxFQUFFLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFFRCwrQ0FBNEIsR0FBNUIsVUFBOEIsa0JBQWdDLEVBQUUsZ0JBQThCO1FBQzVGLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxVQUFVLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDOUQsSUFBSSxDQUFDLGdCQUFnQixHQUFHLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM1RCxDQUFDO0lBRUQsOEJBQVcsR0FBWCxVQUFhLFlBQXVDO1FBQXBELGlCQVNDO1FBUkMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2IsRUFBRSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztZQUNqQixJQUFNLFVBQVEsR0FBVyxJQUFJLENBQUMsc0JBQXNCLENBQUM7WUFDckQsSUFBSSxDQUFDLGFBQWEsR0FBRyx1QkFBVSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLFFBQVEsQ0FBQyxDQUNoRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsY0FBTSxPQUFBLHVCQUFVLENBQUMsS0FBSyxDQUFDLFVBQVEsQ0FBQyxFQUExQixDQUEwQixDQUFDO2lCQUNwRCxNQUFNLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxhQUFhLEVBQWxCLENBQWtCLENBQUM7aUJBQ2hDLFNBQVMsQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLE9BQU8sRUFBRSxFQUFkLENBQWMsQ0FBQyxDQUFDO1FBQ3JDLENBQUM7SUFDSCxDQUFDO0lBRUQsd0JBQUssR0FBTDtRQUNFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbkMsQ0FBQztJQUNILENBQUM7SUFFRCwrQ0FBNEIsR0FBNUIsVUFBOEIsY0FBdUI7UUFDbkQsSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLGNBQWMsQ0FBQztJQUN2QyxDQUFDO0lBQ0gsZUFBQztBQUFELENBQUMsQUF6SUQsSUF5SUM7QUF6SVksZ0JBQVEsV0F5SXBCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMvU3Vic2NyaXB0aW9uJztcbmltcG9ydCB7IEF4aXNSZXNvbHZlciB9IGZyb20gJy4vYXhpcy1yZXNvbHZlcic7XG5pbXBvcnQgeyBQb3NpdGlvblJlc29sdmVyLCBQb3NpdGlvblJlc29sdmVyRmFjdG9yeSB9IGZyb20gJy4vcG9zaXRpb24tcmVzb2x2ZXInO1xuaW1wb3J0ICdyeGpzL2FkZC9vYnNlcnZhYmxlL2Zyb21FdmVudCc7XG5pbXBvcnQgJ3J4anMvYWRkL29ic2VydmFibGUvdGltZXInO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9kZWJvdW5jZSc7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL3Rocm90dGxlJztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvZmlsdGVyJztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvZGVsYXknO1xuXG5leHBvcnQgaW50ZXJmYWNlIEluZmluaXRlU2Nyb2xsRXZlbnQge1xuICBjdXJyZW50U2Nyb2xsUG9zaXRpb246IG51bWJlcjtcbn07XG5cbmV4cG9ydCBjbGFzcyBTY3JvbGxlciB7XG4gIHB1YmxpYyBzY3JvbGxEb3duRGlzdGFuY2U6IG51bWJlcjtcbiAgcHVibGljIHNjcm9sbFVwRGlzdGFuY2U6IG51bWJlcjtcbiAgcHVibGljIHNjcm9sbEVuYWJsZWQ6IGJvb2xlYW47XG4gIHB1YmxpYyBjaGVja1doZW5FbmFibGVkOiBib29sZWFuO1xuICBwdWJsaWMgY29udGFpbmVyOiBXaW5kb3cgfCBFbGVtZW50UmVmIHwgYW55O1xuICBwdWJsaWMgaW1tZWRpYXRlQ2hlY2s6IGJvb2xlYW47XG4gIHB1YmxpYyB1c2VEb2N1bWVudEJvdHRvbTogYm9vbGVhbjtcbiAgcHVibGljIGNoZWNrSW50ZXJ2YWw6IG51bWJlcjtcbiAgcHJpdmF0ZSBkb2N1bWVudEVsZW1lbnQ6IFdpbmRvdyB8IEVsZW1lbnRSZWYgfCBhbnk7XG4gIHByaXZhdGUgaXNDb250YWluZXJXaW5kb3c6IGJvb2xlYW47XG4gIHByaXZhdGUgZGlzcG9zZVNjcm9sbDogU3Vic2NyaXB0aW9uO1xuICBwdWJsaWMgbGFzdFNjcm9sbFBvc2l0aW9uOiBudW1iZXIgPSAwO1xuICAvLyBwcml2YXRlIGF4aXM6IEF4aXNSZXNvbHZlcjtcbiAgcHJpdmF0ZSBwb3NpdGlvblJlc29sdmVyOiBQb3NpdGlvblJlc29sdmVyO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgd2luZG93RWxlbWVudDogV2luZG93IHwgRWxlbWVudFJlZiB8IGFueSxcbiAgICBwcml2YXRlICRpbnRlcnZhbDogRnVuY3Rpb24sXG4gICAgcHJpdmF0ZSAkZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIGluZmluaXRlU2Nyb2xsRG93bkNhbGxiYWNrOiBGdW5jdGlvbixcbiAgICBwcml2YXRlIGluZmluaXRlU2Nyb2xsVXBDYWxsYmFjazogRnVuY3Rpb24sXG4gICAgaW5maW5pdGVTY3JvbGxEb3duRGlzdGFuY2U6IG51bWJlcixcbiAgICBpbmZpbml0ZVNjcm9sbFVwRGlzdGFuY2U6IG51bWJlcixcbiAgICBpbmZpbml0ZVNjcm9sbFBhcmVudDogV2luZG93IHwgRWxlbWVudFJlZiB8IGFueSxcbiAgICBwcml2YXRlIGluZmluaXRlU2Nyb2xsVGhyb3R0bGU6IG51bWJlcixcbiAgICBwcml2YXRlIGlzSW1tZWRpYXRlOiBib29sZWFuLFxuICAgIHByaXZhdGUgaG9yaXpvbnRhbDogYm9vbGVhbiA9IGZhbHNlLFxuICAgIHByaXZhdGUgYWx3YXlzQ2FsbGJhY2s6IGJvb2xlYW4gPSBmYWxzZSxcbiAgICBwcml2YXRlIHNjcm9sbERpc2FibGVkOiBib29sZWFuID0gZmFsc2UsXG4gICAgcHJpdmF0ZSBfcG9zaXRpb25SZXNvbHZlcjogUG9zaXRpb25SZXNvbHZlckZhY3RvcnksXG4gICAgcHJpdmF0ZSB0aHJvdHRsZVR5cGU6IHN0cmluZyA9ICd0aHJvdHRsZSdcbiAgKSB7XG4gICAgdGhpcy5pc0NvbnRhaW5lcldpbmRvdyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh0aGlzLndpbmRvd0VsZW1lbnQpLmluY2x1ZGVzKCdXaW5kb3cnKTtcbiAgICB0aGlzLmRvY3VtZW50RWxlbWVudCA9IHRoaXMuaXNDb250YWluZXJXaW5kb3cgPyB0aGlzLndpbmRvd0VsZW1lbnQuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50IDogbnVsbDtcbiAgICB0aGlzLmhhbmRsZUluZmluaXRlU2Nyb2xsRGlzdGFuY2UoaW5maW5pdGVTY3JvbGxEb3duRGlzdGFuY2UsIGluZmluaXRlU2Nyb2xsVXBEaXN0YW5jZSk7XG5cbiAgICAvLyBpZiAoYXR0cnMuaW5maW5pdGVTY3JvbGxQYXJlbnQgIT0gbnVsbCkge1xuICAgIC8vIFx0YXR0YWNoRXZlbnQoYW5ndWxhci5lbGVtZW50KGVsZW0ucGFyZW50KCkpKTtcbiAgICAvLyB9XG4gICAgdGhpcy5oYW5kbGVJbmZpbml0ZVNjcm9sbERpc2FibGVkKHNjcm9sbERpc2FibGVkKTtcbiAgICB0aGlzLmRlZmluZUNvbnRhaW5lcigpO1xuICAgIHRoaXMucG9zaXRpb25SZXNvbHZlciA9IHRoaXMuX3Bvc2l0aW9uUmVzb2x2ZXIuY3JlYXRlKHtcbiAgICAgIGNvbnRhaW5lcjogdGhpcy5jb250YWluZXIsXG4gICAgICBkb2N1bWVudEVsZW1lbnQ6IHRoaXMuZG9jdW1lbnRFbGVtZW50LFxuICAgICAgaXNDb250YWluZXJXaW5kb3c6IHRoaXMuaXNDb250YWluZXJXaW5kb3csXG4gICAgICBob3Jpem9udGFsOiBob3Jpem9udGFsXG4gICAgfSk7XG5cbiAgICB0aGlzLmNyZWF0ZUludGVydmFsKCk7XG4gIH1cblxuICBkZWZpbmVDb250YWluZXIgKCkge1xuICAgIGlmICh0aGlzLmlzQ29udGFpbmVyV2luZG93KSB7XG4gICAgICB0aGlzLmNvbnRhaW5lciA9IHRoaXMud2luZG93RWxlbWVudDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jb250YWluZXIgPSB0aGlzLndpbmRvd0VsZW1lbnQubmF0aXZlRWxlbWVudDtcbiAgICB9XG4gICAgdGhpcy5hdHRhY2hFdmVudCh0aGlzLmNvbnRhaW5lcik7XG4gIH1cblxuICBjcmVhdGVJbnRlcnZhbCAoKSB7XG4gICAgaWYgKHRoaXMuaXNJbW1lZGlhdGUpIHtcbiAgICAgIHRoaXMuY2hlY2tJbnRlcnZhbCA9IHRoaXMuJGludGVydmFsKCgpID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlcigpO1xuICAgICAgfSwgMCk7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlciAoKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gdGhpcy5wb3NpdGlvblJlc29sdmVyLmNhbGN1bGF0ZVBvaW50cyh0aGlzLiRlbGVtZW50UmVmKTtcbiAgICBjb25zdCBzY3JvbGxpbmdEb3duOiBib29sZWFuID0gdGhpcy5sYXN0U2Nyb2xsUG9zaXRpb24gPCBjb250YWluZXIuc2Nyb2xsZWRVbnRpbE5vdztcbiAgICB0aGlzLmxhc3RTY3JvbGxQb3NpdGlvbiA9IGNvbnRhaW5lci5zY3JvbGxlZFVudGlsTm93O1xuXG4gICAgbGV0IHJlbWFpbmluZzogbnVtYmVyO1xuICAgIGxldCBjb250YWluZXJCcmVha3BvaW50OiBudW1iZXI7XG4gICAgaWYgKHNjcm9sbGluZ0Rvd24pIHtcbiAgICAgIHJlbWFpbmluZyA9IGNvbnRhaW5lci50b3RhbFRvU2Nyb2xsIC0gY29udGFpbmVyLnNjcm9sbGVkVW50aWxOb3c7XG4gICAgICBjb250YWluZXJCcmVha3BvaW50ID0gY29udGFpbmVyLmhlaWdodCAqIHRoaXMuc2Nyb2xsRG93bkRpc3RhbmNlICsgMTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtYWluaW5nID0gY29udGFpbmVyLnNjcm9sbGVkVW50aWxOb3c7XG4gICAgICBjb250YWluZXJCcmVha3BvaW50ID0gY29udGFpbmVyLmhlaWdodCAqIHRoaXMuc2Nyb2xsVXBEaXN0YW5jZSArIDE7XG4gICAgfVxuICAgIGNvbnN0IHNob3VsZFNjcm9sbDogYm9vbGVhbiA9IHJlbWFpbmluZyA8PSBjb250YWluZXJCcmVha3BvaW50O1xuICAgIGNvbnN0IHRyaWdnZXJDYWxsYmFjazogYm9vbGVhbiA9ICh0aGlzLmFsd2F5c0NhbGxiYWNrIHx8IHNob3VsZFNjcm9sbCkgJiYgdGhpcy5zY3JvbGxFbmFibGVkO1xuICAgIGNvbnN0IHNob3VsZENsZWFySW50ZXJ2YWwgPSAhc2hvdWxkU2Nyb2xsICYmIHRoaXMuY2hlY2tJbnRlcnZhbDtcbiAgICAvLyBpZiAodGhpcy51c2VEb2N1bWVudEJvdHRvbSkge1xuICAgIC8vIFx0Y29udGFpbmVyLnRvdGFsVG9TY3JvbGwgPSB0aGlzLmhlaWdodCh0aGlzLiRlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQub3duZXJEb2N1bWVudCk7XG4gICAgLy8gfVxuICAgIHRoaXMuY2hlY2tXaGVuRW5hYmxlZCA9IHNob3VsZFNjcm9sbDtcblxuICAgIGlmICh0cmlnZ2VyQ2FsbGJhY2spIHtcbiAgICAgIGNvbnN0IGluZmluaXRlU2Nyb2xsRXZlbnQ6IEluZmluaXRlU2Nyb2xsRXZlbnQgPSB7XG4gICAgICAgIGN1cnJlbnRTY3JvbGxQb3NpdGlvbjogY29udGFpbmVyLnNjcm9sbGVkVW50aWxOb3dcbiAgICAgIH07XG4gICAgICBpZiAoc2Nyb2xsaW5nRG93bikge1xuICAgICAgICB0aGlzLmluZmluaXRlU2Nyb2xsRG93bkNhbGxiYWNrKGluZmluaXRlU2Nyb2xsRXZlbnQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5pbmZpbml0ZVNjcm9sbFVwQ2FsbGJhY2soaW5maW5pdGVTY3JvbGxFdmVudCk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChzaG91bGRDbGVhckludGVydmFsKSB7XG4gICAgICBjbGVhckludGVydmFsKHRoaXMuY2hlY2tJbnRlcnZhbCk7XG4gICAgfVxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgY29uc3QgY29udGFpbmVyID0gdGhpcy5wb3NpdGlvblJlc29sdmVyLmNhbGN1bGF0ZVBvaW50cyh0aGlzLiRlbGVtZW50UmVmKTtcbiAgICAgIGlmIChjb250YWluZXIuc2Nyb2xsZWRVbnRpbE5vdyA+PSBjb250YWluZXIudG90YWxUb1Njcm9sbCkge1xuICAgICAgICB0aGlzLmhhbmRsZXIoKTtcbiAgICAgIH1cbiAgICB9LCB0aGlzLmluZmluaXRlU2Nyb2xsVGhyb3R0bGUpO1xuICB9XG5cbiAgaGFuZGxlSW5maW5pdGVTY3JvbGxEaXN0YW5jZSAoc2Nyb2xsRG93bkRpc3RhbmNlOiBudW1iZXIgfCBhbnksIHNjcm9sbFVwRGlzdGFuY2U6IG51bWJlciB8IGFueSkge1xuICAgIHRoaXMuc2Nyb2xsRG93bkRpc3RhbmNlID0gcGFyc2VGbG9hdChzY3JvbGxEb3duRGlzdGFuY2UpIHx8IDA7XG4gICAgdGhpcy5zY3JvbGxVcERpc3RhbmNlID0gcGFyc2VGbG9hdChzY3JvbGxVcERpc3RhbmNlKSB8fCAwO1xuICB9XG5cbiAgYXR0YWNoRXZlbnQgKG5ld0NvbnRhaW5lcjogV2luZG93IHwgRWxlbWVudFJlZiB8IGFueSkge1xuICAgIHRoaXMuY2xlYW4oKTtcbiAgICBpZiAobmV3Q29udGFpbmVyKSB7XG4gICAgICBjb25zdCB0aHJvdHRsZTogbnVtYmVyID0gdGhpcy5pbmZpbml0ZVNjcm9sbFRocm90dGxlO1xuICAgICAgdGhpcy5kaXNwb3NlU2Nyb2xsID0gT2JzZXJ2YWJsZS5mcm9tRXZlbnQodGhpcy5jb250YWluZXIsICdzY3JvbGwnKVxuICAgICAgICBbdGhpcy50aHJvdHRsZVR5cGVdKCgpID0+IE9ic2VydmFibGUudGltZXIodGhyb3R0bGUpKVxuICAgICAgICAuZmlsdGVyKCgpID0+IHRoaXMuc2Nyb2xsRW5hYmxlZClcbiAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLmhhbmRsZXIoKSk7XG4gICAgfVxuICB9XG5cbiAgY2xlYW4gKCkge1xuICAgIGlmICh0aGlzLmRpc3Bvc2VTY3JvbGwpIHtcbiAgICAgIHRoaXMuZGlzcG9zZVNjcm9sbC51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZUluZmluaXRlU2Nyb2xsRGlzYWJsZWQgKHNjcm9sbERpc2FibGVkOiBib29sZWFuKSB7XG4gICAgdGhpcy5zY3JvbGxFbmFibGVkID0gIXNjcm9sbERpc2FibGVkO1xuICB9XG59XG5cbmludGVyZmFjZSBEZWNvcmF0b3JJbnZvY2F0aW9uIHtcbiAgdHlwZTogRnVuY3Rpb247XG4gIGFyZ3M/OiBhbnlbXTtcbn1cbiJdfQ==

/***/ },

/***/ "./node_modules/angulartics2/dist/core/angulartics2.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var ReplaySubject_1 = __webpack_require__("./node_modules/rxjs/ReplaySubject.js");
var common_1 = __webpack_require__("./node_modules/@angular/common/index.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/index.js");
__webpack_require__("./node_modules/rxjs/add/operator/filter.js");
var Angulartics2 = (function () {
    function Angulartics2(location, router) {
        this.settings = {
            pageTracking: {
                autoTrackVirtualPages: true,
                basePath: '',
                excludedRoutes: []
            },
            eventTracking: {},
            developerMode: false
        };
        this.pageTrack = new ReplaySubject_1.ReplaySubject();
        this.eventTrack = new ReplaySubject_1.ReplaySubject();
        this.exceptionTrack = new ReplaySubject_1.ReplaySubject();
        this.setAlias = new ReplaySubject_1.ReplaySubject();
        this.setUsername = new ReplaySubject_1.ReplaySubject();
        this.setUserProperties = new ReplaySubject_1.ReplaySubject();
        this.setUserPropertiesOnce = new ReplaySubject_1.ReplaySubject();
        this.setSuperProperties = new ReplaySubject_1.ReplaySubject();
        this.setSuperPropertiesOnce = new ReplaySubject_1.ReplaySubject();
        this.userTimings = new ReplaySubject_1.ReplaySubject();
        this.trackLocation(location, router);
    }
    Angulartics2.prototype.trackLocation = function (location, router) {
        var _this = this;
        router.events
            .filter(function (event) { return event instanceof router_1.NavigationEnd; })
            .subscribe(function (event) {
            if (!_this.settings.developerMode) {
                _this.trackUrlChange(event.urlAfterRedirects, location);
            }
        });
        if (!this.settings.developerMode) {
            this.trackUrlChange(location.path(), location);
        }
    };
    Angulartics2.prototype.virtualPageviews = function (value) {
        this.settings.pageTracking.autoTrackVirtualPages = value;
    };
    Angulartics2.prototype.excludeRoutes = function (routes) {
        this.settings.pageTracking.excludedRoutes = routes;
    };
    Angulartics2.prototype.firstPageview = function (value) {
        this.settings.pageTracking.autoTrackFirstPage = value;
    };
    Angulartics2.prototype.withBase = function (value) {
        this.settings.pageTracking.basePath = (value);
    };
    Angulartics2.prototype.developerMode = function (value) {
        this.settings.developerMode = value;
    };
    Angulartics2.prototype.trackUrlChange = function (url, location) {
        if (!this.settings.developerMode) {
            if (this.settings.pageTracking.autoTrackVirtualPages && !this.matchesExcludedRoute(url)) {
                this.pageTrack.next({
                    path: this.settings.pageTracking.basePath.length ? this.settings.pageTracking.basePath + url : location.prepareExternalUrl(url),
                    location: location
                });
            }
        }
    };
    Angulartics2.prototype.matchesExcludedRoute = function (url) {
        for (var _i = 0, _a = this.settings.pageTracking.excludedRoutes; _i < _a.length; _i++) {
            var excludedRoute = _a[_i];
            if ((excludedRoute instanceof RegExp && excludedRoute.test(url)) || url.indexOf(excludedRoute) > -1) {
                return true;
            }
        }
        return false;
    };
    Angulartics2.decorators = [
        { type: core_1.Injectable },
    ];
    Angulartics2.ctorParameters = [
        { type: common_1.Location, },
        { type: router_1.Router, },
    ];
    return Angulartics2;
}());
exports.Angulartics2 = Angulartics2;


/***/ },

/***/ "./node_modules/angulartics2/dist/core/angulartics2On.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/index.js");
var angulartics2_1 = __webpack_require__("./node_modules/angulartics2/dist/core/angulartics2.js");
var Angulartics2On = (function () {
    function Angulartics2On(elRef, angulartics2, eventManager) {
        this.elRef = elRef;
        this.angulartics2 = angulartics2;
        this.eventManager = eventManager;
        this.el = elRef.nativeElement;
    }
    Angulartics2On.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.eventManager.addEventListener(this.el, this.angulartics2On || 'click', function (event) { return _this.eventTrack(event); });
    };
    Angulartics2On.prototype.eventTrack = function (event) {
        var action = this.angularticsEvent;
        var properties = {
            eventType: event.type
        };
        if (this.angularticsCategory) {
            properties.category = this.angularticsCategory;
        }
        if (this.angularticsProperties) {
            Object.assign(properties, this.angularticsProperties);
        }
        this.angulartics2.eventTrack.next({
            action: action,
            properties: properties
        });
    };
    Angulartics2On.decorators = [
        { type: core_1.Injectable },
        { type: core_1.Directive, args: [{
                    selector: '[angulartics2On]'
                },] },
    ];
    Angulartics2On.ctorParameters = [
        { type: core_1.ElementRef, },
        { type: angulartics2_1.Angulartics2, },
        { type: platform_browser_1.EventManager, },
    ];
    Angulartics2On.propDecorators = {
        'angulartics2On': [{ type: core_1.Input, args: ['angulartics2On',] },],
        'angularticsEvent': [{ type: core_1.Input },],
        'angularticsCategory': [{ type: core_1.Input },],
        'angularticsProperties': [{ type: core_1.Input },],
    };
    return Angulartics2On;
}());
exports.Angulartics2On = Angulartics2On;


/***/ },

/***/ "./node_modules/angulartics2/dist/index.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var angulartics2_1 = __webpack_require__("./node_modules/angulartics2/dist/core/angulartics2.js");
var angulartics2On_1 = __webpack_require__("./node_modules/angulartics2/dist/core/angulartics2On.js");
__export(__webpack_require__("./node_modules/angulartics2/dist/core/angulartics2.js"));
__export(__webpack_require__("./node_modules/angulartics2/dist/core/angulartics2On.js"));
__export(__webpack_require__("./node_modules/angulartics2/dist/providers/index.js"));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    providers: [angulartics2_1.Angulartics2]
};
var Angulartics2Module = (function () {
    function Angulartics2Module(parentModule) {
        if (parentModule) {
            throw new Error('Angulartics2Module already loaded; Import in root module only.');
        }
    }
    Angulartics2Module.forRoot = function () {
        return {
            ngModule: Angulartics2Module,
            providers: [angulartics2_1.Angulartics2]
        };
    };
    Angulartics2Module.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [angulartics2On_1.Angulartics2On],
                    exports: [angulartics2On_1.Angulartics2On]
                },] },
    ];
    Angulartics2Module.ctorParameters = [
        { type: Angulartics2Module, decorators: [{ type: core_1.Optional }, { type: core_1.SkipSelf },] },
    ];
    return Angulartics2Module;
}());
exports.Angulartics2Module = Angulartics2Module;


/***/ },

/***/ "./node_modules/angulartics2/dist/providers/baidu/angulartics2-baidu-analytics.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var angulartics2_1 = __webpack_require__("./node_modules/angulartics2/dist/core/angulartics2.js");
var Angulartics2BaiduAnalytics = (function () {
    function Angulartics2BaiduAnalytics(angulartics2) {
        var _this = this;
        this.angulartics2 = angulartics2;
        if (typeof (hmt) === 'undefined') {
            hmt = [];
        }
        else {
            hmt.push(['_ setAutoPageview', false]);
        }
        this.angulartics2.pageTrack.subscribe(function (x) { return _this.pageTrack(x.path); });
        this.angulartics2.eventTrack.subscribe(function (x) { return _this.eventTrack(x.action, x.properties); });
        this.angulartics2.setUsername.subscribe(function (x) { return _this.setUsername(x); });
        this.angulartics2.setUserProperties.subscribe(function (x) { return _this.setUserProperties(x); });
    }
    Angulartics2BaiduAnalytics.prototype.pageTrack = function (path) {
        if (typeof hmt !== 'undefined' && hmt) {
            hmt.push(['_trackPageview', path]);
        }
    };
    Angulartics2BaiduAnalytics.prototype.eventTrack = function (action, properties) {
        if (!properties || !properties.category) {
            properties = properties || {};
            properties.category = 'Event';
            properties.opt_label = 'default';
            properties.opt_value = 'default';
        }
        if (typeof hmt !== 'undefined' && hmt) {
            hmt.push(['_trackEvent', properties.category, action, properties.opt_label, properties.opt_value]);
        }
    };
    Angulartics2BaiduAnalytics.prototype.setUsername = function (userId) {
        hmt.push(['_setCustomVar', 1, 'identity', userId]);
    };
    Angulartics2BaiduAnalytics.prototype.setUserProperties = function (properties) {
        hmt.push(['_setCustomVar', 2, 'user', JSON.stringify(properties)]);
    };
    Angulartics2BaiduAnalytics.decorators = [
        { type: core_1.Injectable },
    ];
    Angulartics2BaiduAnalytics.ctorParameters = [
        { type: angulartics2_1.Angulartics2, },
    ];
    return Angulartics2BaiduAnalytics;
}());
exports.Angulartics2BaiduAnalytics = Angulartics2BaiduAnalytics;


/***/ },

/***/ "./node_modules/angulartics2/dist/providers/facebook/angulartics2-facebook.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var angulartics2_1 = __webpack_require__("./node_modules/angulartics2/dist/core/angulartics2.js");
var Angulartics2Facebook = (function () {
    function Angulartics2Facebook(angulartics2) {
        var _this = this;
        this.angulartics2 = angulartics2;
        this.angulartics2.settings.pageTracking.trackRelativePath = true;
        this.angulartics2.eventTrack.subscribe(function (x) { return _this.eventTrack(x.action, x.properties); });
    }
    Angulartics2Facebook.prototype.eventTrack = function (action, properties) {
        properties = properties || {};
        var eventList = [
            'ViewContent',
            'Search',
            'AddToCart',
            'AddToWishlist',
            'InitiateCheckout',
            'AddPaymentInfo',
            'Purchase',
            'Lead',
            'CompleteRegistration'
        ];
        if (typeof fbq !== 'undefined' && fbq) {
            eventList.indexOf(action) === -1 ?
                fbq('trackCustom', action, properties) :
                fbq('track', action, properties);
        }
    };
    Angulartics2Facebook.decorators = [
        { type: core_1.Injectable },
    ];
    Angulartics2Facebook.ctorParameters = [
        { type: angulartics2_1.Angulartics2, },
    ];
    return Angulartics2Facebook;
}());
exports.Angulartics2Facebook = Angulartics2Facebook;


/***/ },

/***/ "./node_modules/angulartics2/dist/providers/ga/angulartics2-ga.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var angulartics2_1 = __webpack_require__("./node_modules/angulartics2/dist/core/angulartics2.js");
var Angulartics2GoogleAnalytics = (function () {
    function Angulartics2GoogleAnalytics(angulartics2) {
        var _this = this;
        this.angulartics2 = angulartics2;
        this.angulartics2.settings.pageTracking.trackRelativePath = true;
        this.angulartics2.settings.ga = {
            additionalAccountNames: [],
            userId: null
        };
        this.angulartics2.pageTrack.subscribe(function (x) { return _this.pageTrack(x.path); });
        this.angulartics2.eventTrack.subscribe(function (x) { return _this.eventTrack(x.action, x.properties); });
        this.angulartics2.exceptionTrack.subscribe(function (x) { return _this.exceptionTrack(x); });
        this.angulartics2.setUsername.subscribe(function (x) { return _this.setUsername(x); });
        this.angulartics2.setUserProperties.subscribe(function (x) { return _this.setUserProperties(x); });
        this.angulartics2.userTimings.subscribe(function (x) { return _this.userTimings(x); });
    }
    Angulartics2GoogleAnalytics.prototype.pageTrack = function (path) {
        if (typeof _gaq !== 'undefined' && _gaq) {
            _gaq.push(['_trackPageview', path]);
            for (var _i = 0, _a = this.angulartics2.settings.ga.additionalAccountNames; _i < _a.length; _i++) {
                var accountName = _a[_i];
                _gaq.push([accountName + '._trackPageview', path]);
            }
            ;
        }
        if (typeof ga !== 'undefined' && ga) {
            if (this.angulartics2.settings.ga.userId) {
                ga('set', '&uid', this.angulartics2.settings.ga.userId);
            }
            ga('send', 'pageview', path);
            for (var _b = 0, _c = this.angulartics2.settings.ga.additionalAccountNames; _b < _c.length; _b++) {
                var accountName = _c[_b];
                ga(accountName + '.send', 'pageview', path);
            }
            ;
        }
    };
    Angulartics2GoogleAnalytics.prototype.eventTrack = function (action, properties) {
        if (!properties || !properties.category) {
            properties = properties || {};
            properties.category = 'Event';
        }
        if (properties.value) {
            var parsed = parseInt(properties.value, 10);
            properties.value = isNaN(parsed) ? 0 : parsed;
        }
        if (ga) {
            var eventOptions = {
                eventCategory: properties.category,
                eventAction: action,
                eventLabel: properties.label,
                eventValue: properties.value,
                nonInteraction: properties.noninteraction,
                page: properties.page || location.hash.substring(1) || location.pathname,
                userId: this.angulartics2.settings.ga.userId
            };
            this.setDimensionsAndMetrics(properties);
            if (this.angulartics2.settings.ga.transport) {
                ga('send', 'event', eventOptions, { transport: this.angulartics2.settings.ga.transport });
            }
            else {
                ga('send', 'event', eventOptions);
            }
            for (var _i = 0, _a = this.angulartics2.settings.ga.additionalAccountNames; _i < _a.length; _i++) {
                var accountName = _a[_i];
                ga(accountName + '.send', 'event', eventOptions);
            }
        }
        else if (_gaq) {
            _gaq.push(['_trackEvent', properties.category, action, properties.label, properties.value, properties.noninteraction]);
        }
    };
    Angulartics2GoogleAnalytics.prototype.exceptionTrack = function (properties) {
        if (!properties || !properties.appId || !properties.appName || !properties.appVersion) {
            console.error('Must be setted appId, appName and appVersion.');
            return;
        }
        if (properties.fatal === undefined) {
            console.log('No "fatal" provided, sending with fatal=true');
            properties.exFatal = true;
        }
        properties.exDescription = properties.description;
        ga('send', 'exception', properties);
    };
    Angulartics2GoogleAnalytics.prototype.setUsername = function (userId) {
        this.angulartics2.settings.ga.userId = userId;
    };
    Angulartics2GoogleAnalytics.prototype.setUserProperties = function (properties) {
        this.setDimensionsAndMetrics(properties);
    };
    Angulartics2GoogleAnalytics.prototype.userTimings = function (properties) {
        if (!properties || !properties.timingCategory || !properties.timingVar || !properties.timingValue) {
            console.error('Properties timingCategory, timingVar, and timingValue are required to be set.');
            return;
        }
        if (ga) {
            ga('send', 'timing', properties);
        }
    };
    Angulartics2GoogleAnalytics.prototype.setDimensionsAndMetrics = function (properties) {
        if (ga) {
            for (var idx = 1; idx <= 200; idx++) {
                if (properties['dimension' + idx.toString()]) {
                    ga('set', 'dimension' + idx.toString(), properties['dimension' + idx.toString()]);
                }
                if (properties['metric' + idx.toString()]) {
                    ga('set', 'metric' + idx.toString(), properties['metric' + idx.toString()]);
                }
            }
        }
    };
    Angulartics2GoogleAnalytics.decorators = [
        { type: core_1.Injectable },
    ];
    Angulartics2GoogleAnalytics.ctorParameters = [
        { type: angulartics2_1.Angulartics2, },
    ];
    return Angulartics2GoogleAnalytics;
}());
exports.Angulartics2GoogleAnalytics = Angulartics2GoogleAnalytics;


/***/ },

/***/ "./node_modules/angulartics2/dist/providers/gtm/angulartics2-gtm.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var angulartics2_1 = __webpack_require__("./node_modules/angulartics2/dist/core/angulartics2.js");
var Angulartics2GoogleTagManager = (function () {
    function Angulartics2GoogleTagManager(angulartics2) {
        var _this = this;
        this.angulartics2 = angulartics2;
        if (typeof dataLayer !== 'undefined' && dataLayer) {
            dataLayer = window.dataLayer = window.dataLayer || [];
        }
        this.angulartics2.settings.pageTracking.trackRelativePath = true;
        this.angulartics2.settings.gtm = {
            userId: null
        };
        this.angulartics2.pageTrack.subscribe(function (x) { return _this.pageTrack(x.path); });
        this.angulartics2.eventTrack.subscribe(function (x) { return _this.eventTrack(x.action, x.properties); });
        this.angulartics2.exceptionTrack.subscribe(function (x) { return _this.exceptionTrack(x); });
        this.angulartics2.setUsername.subscribe(function (x) { return _this.setUsername(x); });
    }
    Angulartics2GoogleTagManager.prototype.pageTrack = function (path) {
        if (typeof dataLayer !== 'undefined' && dataLayer) {
            dataLayer.push({
                'event': 'Page View',
                'content-name': path,
                'userId': this.angulartics2.settings.gtm.userId
            });
        }
    };
    Angulartics2GoogleTagManager.prototype.eventTrack = function (action, properties) {
        properties = properties || {};
        if (typeof dataLayer !== 'undefined' && dataLayer) {
            dataLayer.push({
                event: properties.event || 'interaction',
                target: properties.category || 'Event',
                action: action,
                targetProperties: properties.label,
                value: properties.value,
                interactionType: properties.noninteraction,
                userId: this.angulartics2.settings.gtm.userId
            });
        }
    };
    Angulartics2GoogleTagManager.prototype.exceptionTrack = function (properties) {
        if (!properties || !properties.appId || !properties.appName || !properties.appVersion) {
            console.error('Must be setted appId, appName and appVersion.');
            return;
        }
        if (properties.fatal === undefined) {
            console.log('No "fatal" provided, sending with fatal=true');
            properties.exFatal = true;
        }
        properties.exDescription = properties.event ? properties.event.stack : properties.description;
        this.eventTrack("Exception thrown for " + properties.appName + " <" + properties.appId + "@" + properties.appVersion + ">", {
            'category': 'Exception',
            'label': properties.exDescription
        });
    };
    Angulartics2GoogleTagManager.prototype.setUsername = function (userId) {
        this.angulartics2.settings.gtm.userId = userId;
    };
    Angulartics2GoogleTagManager.decorators = [
        { type: core_1.Injectable },
    ];
    Angulartics2GoogleTagManager.ctorParameters = [
        { type: angulartics2_1.Angulartics2, },
    ];
    return Angulartics2GoogleTagManager;
}());
exports.Angulartics2GoogleTagManager = Angulartics2GoogleTagManager;


/***/ },

/***/ "./node_modules/angulartics2/dist/providers/index.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__("./node_modules/angulartics2/dist/providers/baidu/angulartics2-baidu-analytics.js"));
__export(__webpack_require__("./node_modules/angulartics2/dist/providers/ga/angulartics2-ga.js"));
__export(__webpack_require__("./node_modules/angulartics2/dist/providers/gtm/angulartics2-gtm.js"));
__export(__webpack_require__("./node_modules/angulartics2/dist/providers/kissmetrics/angulartics2-kissmetrics.js"));
__export(__webpack_require__("./node_modules/angulartics2/dist/providers/mixpanel/angulartics2-mixpanel.js"));
__export(__webpack_require__("./node_modules/angulartics2/dist/providers/piwik/angulartics2-piwik.js"));
__export(__webpack_require__("./node_modules/angulartics2/dist/providers/segment/angulartics2-segment.js"));
__export(__webpack_require__("./node_modules/angulartics2/dist/providers/facebook/angulartics2-facebook.js"));


/***/ },

/***/ "./node_modules/angulartics2/dist/providers/kissmetrics/angulartics2-kissmetrics.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var angulartics2_1 = __webpack_require__("./node_modules/angulartics2/dist/core/angulartics2.js");
var Angulartics2Kissmetrics = (function () {
    function Angulartics2Kissmetrics(angulartics2) {
        var _this = this;
        this.angulartics2 = angulartics2;
        if (typeof (_kmq) === 'undefined') {
            _kmq = [];
        }
        this.angulartics2.pageTrack.subscribe(function (x) { return _this.pageTrack(x.path, x.location); });
        this.angulartics2.eventTrack.subscribe(function (x) { return _this.eventTrack(x.action, x.properties); });
        this.angulartics2.setUsername.subscribe(function (x) { return _this.setUsername(x); });
        this.angulartics2.setUserProperties.subscribe(function (x) { return _this.setUserProperties(x); });
    }
    Angulartics2Kissmetrics.prototype.pageTrack = function (path, location) {
        _kmq.push(['record', 'Pageview', { 'Page': path }]);
    };
    Angulartics2Kissmetrics.prototype.eventTrack = function (action, properties) {
        _kmq.push(['record', action, properties]);
    };
    Angulartics2Kissmetrics.prototype.setUsername = function (userId) {
        _kmq.push(['identify', userId]);
    };
    Angulartics2Kissmetrics.prototype.setUserProperties = function (properties) {
        _kmq.push(['set', properties]);
    };
    Angulartics2Kissmetrics.decorators = [
        { type: core_1.Injectable },
    ];
    Angulartics2Kissmetrics.ctorParameters = [
        { type: angulartics2_1.Angulartics2, },
    ];
    return Angulartics2Kissmetrics;
}());
exports.Angulartics2Kissmetrics = Angulartics2Kissmetrics;


/***/ },

/***/ "./node_modules/angulartics2/dist/providers/mixpanel/angulartics2-mixpanel.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var angulartics2_1 = __webpack_require__("./node_modules/angulartics2/dist/core/angulartics2.js");
var Angulartics2Mixpanel = (function () {
    function Angulartics2Mixpanel(angulartics2) {
        var _this = this;
        this.angulartics2 = angulartics2;
        this.angulartics2.pageTrack.subscribe(function (x) { return _this.pageTrack(x.path, x.location); });
        this.angulartics2.eventTrack.subscribe(function (x) { return _this.eventTrack(x.action, x.properties); });
        this.angulartics2.setUsername.subscribe(function (x) { return _this.setUsername(x); });
        this.angulartics2.setUserProperties.subscribe(function (x) { return _this.setUserProperties(x); });
        this.angulartics2.setUserPropertiesOnce.subscribe(function (x) { return _this.setUserPropertiesOnce(x); });
        this.angulartics2.setSuperProperties.subscribe(function (x) { return _this.setSuperProperties(x); });
        this.angulartics2.setSuperPropertiesOnce.subscribe(function (x) { return _this.setSuperPropertiesOnce(x); });
        this.angulartics2.setAlias.subscribe(function (x) { return _this.setAlias(x); });
    }
    Angulartics2Mixpanel.prototype.pageTrack = function (path, location) {
        try {
            mixpanel.track('Page Viewed', { page: path });
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    };
    Angulartics2Mixpanel.prototype.eventTrack = function (action, properties) {
        try {
            mixpanel.track(action, properties);
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    };
    Angulartics2Mixpanel.prototype.setUsername = function (userId) {
        try {
            mixpanel.identify(userId);
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    };
    Angulartics2Mixpanel.prototype.setUserProperties = function (properties) {
        try {
            mixpanel.people.set(properties);
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    };
    Angulartics2Mixpanel.prototype.setUserPropertiesOnce = function (properties) {
        try {
            mixpanel.people.set_once(properties);
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    };
    Angulartics2Mixpanel.prototype.setSuperProperties = function (properties) {
        try {
            mixpanel.register(properties);
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    };
    Angulartics2Mixpanel.prototype.setSuperPropertiesOnce = function (properties) {
        try {
            mixpanel.register_once(properties);
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    };
    Angulartics2Mixpanel.prototype.setAlias = function (alias) {
        try {
            mixpanel.alias(alias);
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    };
    Angulartics2Mixpanel.decorators = [
        { type: core_1.Injectable },
    ];
    Angulartics2Mixpanel.ctorParameters = [
        { type: angulartics2_1.Angulartics2, },
    ];
    return Angulartics2Mixpanel;
}());
exports.Angulartics2Mixpanel = Angulartics2Mixpanel;


/***/ },

/***/ "./node_modules/angulartics2/dist/providers/piwik/angulartics2-piwik.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var angulartics2_1 = __webpack_require__("./node_modules/angulartics2/dist/core/angulartics2.js");
var Angulartics2Piwik = (function () {
    function Angulartics2Piwik(angulartics2) {
        var _this = this;
        this.angulartics2 = angulartics2;
        if (typeof (_paq) === 'undefined') {
            console.warn('Piwik not found');
        }
        this.angulartics2.pageTrack.subscribe(function (x) { return _this.pageTrack(x.path, x.location); });
        this.angulartics2.eventTrack.subscribe(function (x) { return _this.eventTrack(x.action, x.properties); });
        this.angulartics2.setUsername.subscribe(function (x) { return _this.setUsername(x); });
        this.angulartics2.setUserProperties.subscribe(function (x) { return _this.setUserProperties(x); });
    }
    Angulartics2Piwik.prototype.pageTrack = function (path, location) {
        try {
            _paq.push(['setDocumentTitle', window.document.title]);
            _paq.push(['setCustomUrl', path]);
            _paq.push(['trackPageView']);
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    };
    Angulartics2Piwik.prototype.eventTrack = function (action, properties) {
        try {
            if (properties.value) {
                var parsed = parseInt(properties.value, 10);
                properties.value = isNaN(parsed) ? 0 : parsed;
            }
            _paq.push(['trackEvent', properties.category, action, properties.label, properties.value]);
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    };
    Angulartics2Piwik.prototype.setUsername = function (userId) {
        try {
            _paq.push(['setUserId', userId]);
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    };
    Angulartics2Piwik.prototype.setUserProperties = function (properties) {
        try {
            _paq.push(['setCustomVariable', properties]);
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    };
    Angulartics2Piwik.decorators = [
        { type: core_1.Injectable },
    ];
    Angulartics2Piwik.ctorParameters = [
        { type: angulartics2_1.Angulartics2, },
    ];
    return Angulartics2Piwik;
}());
exports.Angulartics2Piwik = Angulartics2Piwik;


/***/ },

/***/ "./node_modules/angulartics2/dist/providers/segment/angulartics2-segment.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var angulartics2_1 = __webpack_require__("./node_modules/angulartics2/dist/core/angulartics2.js");
var Angulartics2Segment = (function () {
    function Angulartics2Segment(angulartics2) {
        var _this = this;
        this.angulartics2 = angulartics2;
        this.angulartics2.pageTrack.subscribe(function (x) { return _this.pageTrack(x.path, x.location); });
        this.angulartics2.eventTrack.subscribe(function (x) { return _this.eventTrack(x.action, x.properties); });
        this.angulartics2.setUserProperties.subscribe(function (x) { return _this.setUserProperties(x); });
        this.angulartics2.setUserPropertiesOnce.subscribe(function (x) { return _this.setUserProperties(x); });
        this.angulartics2.setAlias.subscribe(function (x) { return _this.setAlias(x); });
    }
    Angulartics2Segment.prototype.pageTrack = function (path, location) {
        try {
            analytics.page(path);
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    };
    Angulartics2Segment.prototype.eventTrack = function (action, properties) {
        try {
            analytics.track(action, properties);
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    };
    Angulartics2Segment.prototype.setUserProperties = function (properties) {
        try {
            if (properties.userId) {
                analytics.identify(properties.userId, properties);
            }
            else {
                analytics.identify(properties);
            }
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    };
    Angulartics2Segment.prototype.setAlias = function (alias) {
        try {
            analytics.alias(alias);
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    };
    Angulartics2Segment.decorators = [
        { type: core_1.Injectable },
    ];
    Angulartics2Segment.ctorParameters = [
        { type: angulartics2_1.Angulartics2, },
    ];
    return Angulartics2Segment;
}());
exports.Angulartics2Segment = Angulartics2Segment;


/***/ },

/***/ "./node_modules/pluralize/pluralize.js":
/***/ function(module, exports, __webpack_require__) {

/* global define */

(function (root, pluralize) {
  /* istanbul ignore else */
  if (true) {
    // Node.
    module.exports = pluralize();
  } else if (typeof define === 'function' && define.amd) {
    // AMD, registers as an anonymous module.
    define(function () {
      return pluralize();
    });
  } else {
    // Browser global.
    root.pluralize = pluralize();
  }
})(this, function () {
  // Rule storage - pluralize and singularize need to be run sequentially,
  // while other rules can be optimized using an object for instant lookups.
  var pluralRules = [];
  var singularRules = [];
  var uncountables = {};
  var irregularPlurals = {};
  var irregularSingles = {};

  /**
   * Title case a string.
   *
   * @param  {string} str
   * @return {string}
   */
  function toTitleCase (str) {
    return str.charAt(0).toUpperCase() + str.substr(1).toLowerCase();
  }

  /**
   * Sanitize a pluralization rule to a usable regular expression.
   *
   * @param  {(RegExp|string)} rule
   * @return {RegExp}
   */
  function sanitizeRule (rule) {
    if (typeof rule === 'string') {
      return new RegExp('^' + rule + '$', 'i');
    }

    return rule;
  }

  /**
   * Pass in a word token to produce a function that can replicate the case on
   * another word.
   *
   * @param  {string}   word
   * @param  {string}   token
   * @return {Function}
   */
  function restoreCase (word, token) {
    // Tokens are an exact match.
    if (word === token) {
      return token;
    }

    // Upper cased words. E.g. "HELLO".
    if (word === word.toUpperCase()) {
      return token.toUpperCase();
    }

    // Title cased words. E.g. "Title".
    if (word[0] === word[0].toUpperCase()) {
      return toTitleCase(token);
    }

    // Lower cased words. E.g. "test".
    return token.toLowerCase();
  }

  /**
   * Interpolate a regexp string.
   *
   * @param  {string} str
   * @param  {Array}  args
   * @return {string}
   */
  function interpolate (str, args) {
    return str.replace(/\$(\d{1,2})/g, function (match, index) {
      return args[index] || '';
    });
  }

  /**
   * Sanitize a word by passing in the word and sanitization rules.
   *
   * @param  {string}   token
   * @param  {string}   word
   * @param  {Array}    collection
   * @return {string}
   */
  function sanitizeWord (token, word, collection) {
    // Empty string or doesn't need fixing.
    if (!token.length || uncountables.hasOwnProperty(token)) {
      return word;
    }

    var len = collection.length;

    // Iterate over the sanitization rules and use the first one to match.
    while (len--) {
      var rule = collection[len];

      // If the rule passes, return the replacement.
      if (rule[0].test(word)) {
        return word.replace(rule[0], function (match, index, word) {
          var result = interpolate(rule[1], arguments);

          if (match === '') {
            return restoreCase(word[index - 1], result);
          }

          return restoreCase(match, result);
        });
      }
    }

    return word;
  }

  /**
   * Replace a word with the updated word.
   *
   * @param  {Object}   replaceMap
   * @param  {Object}   keepMap
   * @param  {Array}    rules
   * @return {Function}
   */
  function replaceWord (replaceMap, keepMap, rules) {
    return function (word) {
      // Get the correct token and case restoration functions.
      var token = word.toLowerCase();

      // Check against the keep object map.
      if (keepMap.hasOwnProperty(token)) {
        return restoreCase(word, token);
      }

      // Check against the replacement map for a direct word replacement.
      if (replaceMap.hasOwnProperty(token)) {
        return restoreCase(word, replaceMap[token]);
      }

      // Run all the rules against the word.
      return sanitizeWord(token, word, rules);
    };
  }

  /**
   * Pluralize or singularize a word based on the passed in count.
   *
   * @param  {string}  word
   * @param  {number}  count
   * @param  {boolean} inclusive
   * @return {string}
   */
  function pluralize (word, count, inclusive) {
    var pluralized = count === 1
      ? pluralize.singular(word) : pluralize.plural(word);

    return (inclusive ? count + ' ' : '') + pluralized;
  }

  /**
   * Pluralize a word.
   *
   * @type {Function}
   */
  pluralize.plural = replaceWord(
    irregularSingles, irregularPlurals, pluralRules
  );

  /**
   * Singularize a word.
   *
   * @type {Function}
   */
  pluralize.singular = replaceWord(
    irregularPlurals, irregularSingles, singularRules
  );

  /**
   * Add a pluralization rule to the collection.
   *
   * @param {(string|RegExp)} rule
   * @param {string}          replacement
   */
  pluralize.addPluralRule = function (rule, replacement) {
    pluralRules.push([sanitizeRule(rule), replacement]);
  };

  /**
   * Add a singularization rule to the collection.
   *
   * @param {(string|RegExp)} rule
   * @param {string}          replacement
   */
  pluralize.addSingularRule = function (rule, replacement) {
    singularRules.push([sanitizeRule(rule), replacement]);
  };

  /**
   * Add an uncountable word rule.
   *
   * @param {(string|RegExp)} word
   */
  pluralize.addUncountableRule = function (word) {
    if (typeof word === 'string') {
      uncountables[word.toLowerCase()] = true;
      return;
    }

    // Set singular and plural references for the word.
    pluralize.addPluralRule(word, '$0');
    pluralize.addSingularRule(word, '$0');
  };

  /**
   * Add an irregular word definition.
   *
   * @param {string} single
   * @param {string} plural
   */
  pluralize.addIrregularRule = function (single, plural) {
    plural = plural.toLowerCase();
    single = single.toLowerCase();

    irregularSingles[single] = plural;
    irregularPlurals[plural] = single;
  };

  /**
   * Irregular rules.
   */
  [
    // Pronouns.
    ['I', 'we'],
    ['me', 'us'],
    ['he', 'they'],
    ['she', 'they'],
    ['them', 'them'],
    ['myself', 'ourselves'],
    ['yourself', 'yourselves'],
    ['itself', 'themselves'],
    ['herself', 'themselves'],
    ['himself', 'themselves'],
    ['themself', 'themselves'],
    ['is', 'are'],
    ['was', 'were'],
    ['has', 'have'],
    ['this', 'these'],
    ['that', 'those'],
    // Words ending in with a consonant and `o`.
    ['echo', 'echoes'],
    ['dingo', 'dingoes'],
    ['volcano', 'volcanoes'],
    ['tornado', 'tornadoes'],
    ['torpedo', 'torpedoes'],
    // Ends with `us`.
    ['genus', 'genera'],
    ['viscus', 'viscera'],
    // Ends with `ma`.
    ['stigma', 'stigmata'],
    ['stoma', 'stomata'],
    ['dogma', 'dogmata'],
    ['lemma', 'lemmata'],
    ['schema', 'schemata'],
    ['anathema', 'anathemata'],
    // Other irregular rules.
    ['ox', 'oxen'],
    ['axe', 'axes'],
    ['die', 'dice'],
    ['yes', 'yeses'],
    ['foot', 'feet'],
    ['eave', 'eaves'],
    ['goose', 'geese'],
    ['tooth', 'teeth'],
    ['quiz', 'quizzes'],
    ['human', 'humans'],
    ['proof', 'proofs'],
    ['carve', 'carves'],
    ['valve', 'valves'],
    ['looey', 'looies'],
    ['thief', 'thieves'],
    ['groove', 'grooves'],
    ['pickaxe', 'pickaxes'],
    ['whiskey', 'whiskies']
  ].forEach(function (rule) {
    return pluralize.addIrregularRule(rule[0], rule[1]);
  });

  /**
   * Pluralization rules.
   */
  [
    [/s?$/i, 's'],
    [/([^aeiou]ese)$/i, '$1'],
    [/(ax|test)is$/i, '$1es'],
    [/(alias|[^aou]us|tlas|gas|ris)$/i, '$1es'],
    [/(e[mn]u)s?$/i, '$1s'],
    [/([^l]ias|[aeiou]las|[emjzr]as|[iu]am)$/i, '$1'],
    [/(alumn|syllab|octop|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i, '$1i'],
    [/(alumn|alg|vertebr)(?:a|ae)$/i, '$1ae'],
    [/(seraph|cherub)(?:im)?$/i, '$1im'],
    [/(her|at|gr)o$/i, '$1oes'],
    [/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|automat|quor)(?:a|um)$/i, '$1a'],
    [/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)(?:a|on)$/i, '$1a'],
    [/sis$/i, 'ses'],
    [/(?:(kni|wi|li)fe|(ar|l|ea|eo|oa|hoo)f)$/i, '$1$2ves'],
    [/([^aeiouy]|qu)y$/i, '$1ies'],
    [/([^ch][ieo][ln])ey$/i, '$1ies'],
    [/(x|ch|ss|sh|zz)$/i, '$1es'],
    [/(matr|cod|mur|sil|vert|ind|append)(?:ix|ex)$/i, '$1ices'],
    [/(m|l)(?:ice|ouse)$/i, '$1ice'],
    [/(pe)(?:rson|ople)$/i, '$1ople'],
    [/(child)(?:ren)?$/i, '$1ren'],
    [/eaux$/i, '$0'],
    [/m[ae]n$/i, 'men'],
    ['thou', 'you']
  ].forEach(function (rule) {
    return pluralize.addPluralRule(rule[0], rule[1]);
  });

  /**
   * Singularization rules.
   */
  [
    [/s$/i, ''],
    [/(ss)$/i, '$1'],
    [/((a)naly|(b)a|(d)iagno|(p)arenthe|(p)rogno|(s)ynop|(t)he)(?:sis|ses)$/i, '$1sis'],
    [/(^analy)(?:sis|ses)$/i, '$1sis'],
    [/(wi|kni|(?:after|half|high|low|mid|non|night|[^\w]|^)li)ves$/i, '$1fe'],
    [/(ar|(?:wo|[ae])l|[eo][ao])ves$/i, '$1f'],
    [/ies$/i, 'y'],
    [/\b([pl]|zomb|(?:neck|cross)?t|coll|faer|food|gen|goon|group|lass|talk|goal|cut)ies$/i, '$1ie'],
    [/\b(mon|smil)ies$/i, '$1ey'],
    [/(m|l)ice$/i, '$1ouse'],
    [/(seraph|cherub)im$/i, '$1'],
    [/(x|ch|ss|sh|zz|tto|go|cho|alias|[^aou]us|tlas|gas|(?:her|at|gr)o|ris)(?:es)?$/i, '$1'],
    [/(e[mn]u)s?$/i, '$1'],
    [/(movie|twelve)s$/i, '$1'],
    [/(cris|test|diagnos)(?:is|es)$/i, '$1is'],
    [/(alumn|syllab|octop|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i, '$1us'],
    [/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|quor)a$/i, '$1um'],
    [/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)a$/i, '$1on'],
    [/(alumn|alg|vertebr)ae$/i, '$1a'],
    [/(cod|mur|sil|vert|ind)ices$/i, '$1ex'],
    [/(matr|append)ices$/i, '$1ix'],
    [/(pe)(rson|ople)$/i, '$1rson'],
    [/(child)ren$/i, '$1'],
    [/(eau)x?$/i, '$1'],
    [/men$/i, 'man']
  ].forEach(function (rule) {
    return pluralize.addSingularRule(rule[0], rule[1]);
  });

  /**
   * Uncountable rules.
   */
  [
    // Singular words with no plurals.
    'advice',
    'adulthood',
    'agenda',
    'aid',
    'alcohol',
    'ammo',
    'athletics',
    'bison',
    'blood',
    'bream',
    'buffalo',
    'butter',
    'carp',
    'cash',
    'chassis',
    'chess',
    'clothing',
    'commerce',
    'cod',
    'cooperation',
    'corps',
    'digestion',
    'debris',
    'diabetes',
    'energy',
    'equipment',
    'elk',
    'excretion',
    'expertise',
    'flounder',
    'fun',
    'gallows',
    'garbage',
    'graffiti',
    'headquarters',
    'health',
    'herpes',
    'highjinks',
    'homework',
    'housework',
    'information',
    'jeans',
    'justice',
    'kudos',
    'labour',
    'literature',
    'machinery',
    'mackerel',
    'mail',
    'media',
    'mews',
    'moose',
    'music',
    'news',
    'pike',
    'plankton',
    'pliers',
    'pollution',
    'premises',
    'rain',
    'research',
    'rice',
    'salmon',
    'scissors',
    'series',
    'sewage',
    'shambles',
    'shrimp',
    'species',
    'staff',
    'swine',
    'trout',
    'traffic',
    'transporation',
    'tuna',
    'wealth',
    'welfare',
    'whiting',
    'wildebeest',
    'wildlife',
    'you',
    // Regexes.
    /pox$/i, // "chickpox", "smallpox"
    /ois$/i,
    /deer$/i, // "deer", "reindeer"
    /fish$/i, // "fish", "blowfish", "angelfish"
    /sheep$/i,
    /measles$/i,
    /[^aeiou]ese$/i // "chinese", "japanese"
  ].forEach(pluralize.addUncountableRule);

  return pluralize;
});


/***/ },

/***/ "./node_modules/rxjs/ReplaySubject.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subject_1 = __webpack_require__("./node_modules/rxjs/Subject.js");
var queue_1 = __webpack_require__("./node_modules/rxjs/scheduler/queue.js");
var observeOn_1 = __webpack_require__("./node_modules/rxjs/operator/observeOn.js");
/**
 * @class ReplaySubject<T>
 */
var ReplaySubject = (function (_super) {
    __extends(ReplaySubject, _super);
    function ReplaySubject(bufferSize, windowTime, scheduler) {
        if (bufferSize === void 0) { bufferSize = Number.POSITIVE_INFINITY; }
        if (windowTime === void 0) { windowTime = Number.POSITIVE_INFINITY; }
        _super.call(this);
        this.scheduler = scheduler;
        this._events = [];
        this._bufferSize = bufferSize < 1 ? 1 : bufferSize;
        this._windowTime = windowTime < 1 ? 1 : windowTime;
    }
    ReplaySubject.prototype.next = function (value) {
        var now = this._getNow();
        this._events.push(new ReplayEvent(now, value));
        this._trimBufferThenGetEvents();
        _super.prototype.next.call(this, value);
    };
    ReplaySubject.prototype._subscribe = function (subscriber) {
        var _events = this._trimBufferThenGetEvents();
        var scheduler = this.scheduler;
        if (scheduler) {
            subscriber.add(subscriber = new observeOn_1.ObserveOnSubscriber(subscriber, scheduler));
        }
        var len = _events.length;
        for (var i = 0; i < len && !subscriber.closed; i++) {
            subscriber.next(_events[i].value);
        }
        return _super.prototype._subscribe.call(this, subscriber);
    };
    ReplaySubject.prototype._getNow = function () {
        return (this.scheduler || queue_1.queue).now();
    };
    ReplaySubject.prototype._trimBufferThenGetEvents = function () {
        var now = this._getNow();
        var _bufferSize = this._bufferSize;
        var _windowTime = this._windowTime;
        var _events = this._events;
        var eventsCount = _events.length;
        var spliceCount = 0;
        // Trim events that fall out of the time window.
        // Start at the front of the list. Break early once
        // we encounter an event that falls within the window.
        while (spliceCount < eventsCount) {
            if ((now - _events[spliceCount].time) < _windowTime) {
                break;
            }
            spliceCount++;
        }
        if (eventsCount > _bufferSize) {
            spliceCount = Math.max(spliceCount, eventsCount - _bufferSize);
        }
        if (spliceCount > 0) {
            _events.splice(0, spliceCount);
        }
        return _events;
    };
    return ReplaySubject;
}(Subject_1.Subject));
exports.ReplaySubject = ReplaySubject;
var ReplayEvent = (function () {
    function ReplayEvent(time, value) {
        this.time = time;
        this.value = value;
    }
    return ReplayEvent;
}());
//# sourceMappingURL=ReplaySubject.js.map

/***/ },

/***/ "./node_modules/rxjs/Scheduler.js":
/***/ function(module, exports) {

"use strict";
"use strict";
/**
 * An execution context and a data structure to order tasks and schedule their
 * execution. Provides a notion of (potentially virtual) time, through the
 * `now()` getter method.
 *
 * Each unit of work in a Scheduler is called an {@link Action}.
 *
 * ```ts
 * class Scheduler {
 *   now(): number;
 *   schedule(work, delay?, state?): Subscription;
 * }
 * ```
 *
 * @class Scheduler
 */
var Scheduler = (function () {
    function Scheduler(SchedulerAction, now) {
        if (now === void 0) { now = Scheduler.now; }
        this.SchedulerAction = SchedulerAction;
        this.now = now;
    }
    /**
     * Schedules a function, `work`, for execution. May happen at some point in
     * the future, according to the `delay` parameter, if specified. May be passed
     * some context object, `state`, which will be passed to the `work` function.
     *
     * The given arguments will be processed an stored as an Action object in a
     * queue of actions.
     *
     * @param {function(state: ?T): ?Subscription} work A function representing a
     * task, or some unit of work to be executed by the Scheduler.
     * @param {number} [delay] Time to wait before executing the work, where the
     * time unit is implicit and defined by the Scheduler itself.
     * @param {T} [state] Some contextual data that the `work` function uses when
     * called by the Scheduler.
     * @return {Subscription} A subscription in order to be able to unsubscribe
     * the scheduled work.
     */
    Scheduler.prototype.schedule = function (work, delay, state) {
        if (delay === void 0) { delay = 0; }
        return new this.SchedulerAction(this, work).schedule(state, delay);
    };
    Scheduler.now = Date.now ? Date.now : function () { return +new Date(); };
    return Scheduler;
}());
exports.Scheduler = Scheduler;
//# sourceMappingURL=Scheduler.js.map

/***/ },

/***/ "./node_modules/rxjs/add/observable/fromEvent.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__("./node_modules/rxjs/Observable.js");
var fromEvent_1 = __webpack_require__("./node_modules/rxjs/observable/fromEvent.js");
Observable_1.Observable.fromEvent = fromEvent_1.fromEvent;
//# sourceMappingURL=fromEvent.js.map

/***/ },

/***/ "./node_modules/rxjs/add/observable/of.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__("./node_modules/rxjs/Observable.js");
var of_1 = __webpack_require__("./node_modules/rxjs/observable/of.js");
Observable_1.Observable.of = of_1.of;
//# sourceMappingURL=of.js.map

/***/ },

/***/ "./node_modules/rxjs/add/observable/timer.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__("./node_modules/rxjs/Observable.js");
var timer_1 = __webpack_require__("./node_modules/rxjs/observable/timer.js");
Observable_1.Observable.timer = timer_1.timer;
//# sourceMappingURL=timer.js.map

/***/ },

/***/ "./node_modules/rxjs/add/operator/debounce.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__("./node_modules/rxjs/Observable.js");
var debounce_1 = __webpack_require__("./node_modules/rxjs/operator/debounce.js");
Observable_1.Observable.prototype.debounce = debounce_1.debounce;
//# sourceMappingURL=debounce.js.map

/***/ },

/***/ "./node_modules/rxjs/add/operator/delay.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__("./node_modules/rxjs/Observable.js");
var delay_1 = __webpack_require__("./node_modules/rxjs/operator/delay.js");
Observable_1.Observable.prototype.delay = delay_1.delay;
//# sourceMappingURL=delay.js.map

/***/ },

/***/ "./node_modules/rxjs/add/operator/filter.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__("./node_modules/rxjs/Observable.js");
var filter_1 = __webpack_require__("./node_modules/rxjs/operator/filter.js");
Observable_1.Observable.prototype.filter = filter_1.filter;
//# sourceMappingURL=filter.js.map

/***/ },

/***/ "./node_modules/rxjs/add/operator/throttle.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__("./node_modules/rxjs/Observable.js");
var throttle_1 = __webpack_require__("./node_modules/rxjs/operator/throttle.js");
Observable_1.Observable.prototype.throttle = throttle_1.throttle;
//# sourceMappingURL=throttle.js.map

/***/ },

/***/ "./node_modules/rxjs/observable/FromEventObservable.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Observable_1 = __webpack_require__("./node_modules/rxjs/Observable.js");
var tryCatch_1 = __webpack_require__("./node_modules/rxjs/util/tryCatch.js");
var isFunction_1 = __webpack_require__("./node_modules/rxjs/util/isFunction.js");
var errorObject_1 = __webpack_require__("./node_modules/rxjs/util/errorObject.js");
var Subscription_1 = __webpack_require__("./node_modules/rxjs/Subscription.js");
function isNodeStyleEventEmmitter(sourceObj) {
    return !!sourceObj && typeof sourceObj.addListener === 'function' && typeof sourceObj.removeListener === 'function';
}
function isJQueryStyleEventEmitter(sourceObj) {
    return !!sourceObj && typeof sourceObj.on === 'function' && typeof sourceObj.off === 'function';
}
function isNodeList(sourceObj) {
    return !!sourceObj && sourceObj.toString() === '[object NodeList]';
}
function isHTMLCollection(sourceObj) {
    return !!sourceObj && sourceObj.toString() === '[object HTMLCollection]';
}
function isEventTarget(sourceObj) {
    return !!sourceObj && typeof sourceObj.addEventListener === 'function' && typeof sourceObj.removeEventListener === 'function';
}
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @extends {Ignored}
 * @hide true
 */
var FromEventObservable = (function (_super) {
    __extends(FromEventObservable, _super);
    function FromEventObservable(sourceObj, eventName, selector, options) {
        _super.call(this);
        this.sourceObj = sourceObj;
        this.eventName = eventName;
        this.selector = selector;
        this.options = options;
    }
    /* tslint:enable:max-line-length */
    /**
     * Creates an Observable that emits events of a specific type coming from the
     * given event target.
     *
     * <span class="informal">Creates an Observable from DOM events, or Node
     * EventEmitter events or others.</span>
     *
     * <img src="./img/fromEvent.png" width="100%">
     *
     * Creates an Observable by attaching an event listener to an "event target",
     * which may be an object with `addEventListener` and `removeEventListener`,
     * a Node.js EventEmitter, a jQuery style EventEmitter, a NodeList from the
     * DOM, or an HTMLCollection from the DOM. The event handler is attached when
     * the output Observable is subscribed, and removed when the Subscription is
     * unsubscribed.
     *
     * @example <caption>Emits clicks happening on the DOM document</caption>
     * var clicks = Rx.Observable.fromEvent(document, 'click');
     * clicks.subscribe(x => console.log(x));
     *
     * @see {@link from}
     * @see {@link fromEventPattern}
     *
     * @param {EventTargetLike} target The DOMElement, event target, Node.js
     * EventEmitter, NodeList or HTMLCollection to attach the event handler to.
     * @param {string} eventName The event name of interest, being emitted by the
     * `target`.
     * @parm {EventListenerOptions} [options] Options to pass through to addEventListener
     * @param {SelectorMethodSignature<T>} [selector] An optional function to
     * post-process results. It takes the arguments from the event handler and
     * should return a single value.
     * @return {Observable<T>}
     * @static true
     * @name fromEvent
     * @owner Observable
     */
    FromEventObservable.create = function (target, eventName, options, selector) {
        if (isFunction_1.isFunction(options)) {
            selector = options;
            options = undefined;
        }
        return new FromEventObservable(target, eventName, selector, options);
    };
    FromEventObservable.setupSubscription = function (sourceObj, eventName, handler, subscriber, options) {
        var unsubscribe;
        if (isNodeList(sourceObj) || isHTMLCollection(sourceObj)) {
            for (var i = 0, len = sourceObj.length; i < len; i++) {
                FromEventObservable.setupSubscription(sourceObj[i], eventName, handler, subscriber, options);
            }
        }
        else if (isEventTarget(sourceObj)) {
            var source_1 = sourceObj;
            sourceObj.addEventListener(eventName, handler, options);
            unsubscribe = function () { return source_1.removeEventListener(eventName, handler); };
        }
        else if (isJQueryStyleEventEmitter(sourceObj)) {
            var source_2 = sourceObj;
            sourceObj.on(eventName, handler);
            unsubscribe = function () { return source_2.off(eventName, handler); };
        }
        else if (isNodeStyleEventEmmitter(sourceObj)) {
            var source_3 = sourceObj;
            sourceObj.addListener(eventName, handler);
            unsubscribe = function () { return source_3.removeListener(eventName, handler); };
        }
        subscriber.add(new Subscription_1.Subscription(unsubscribe));
    };
    FromEventObservable.prototype._subscribe = function (subscriber) {
        var sourceObj = this.sourceObj;
        var eventName = this.eventName;
        var options = this.options;
        var selector = this.selector;
        var handler = selector ? function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i - 0] = arguments[_i];
            }
            var result = tryCatch_1.tryCatch(selector).apply(void 0, args);
            if (result === errorObject_1.errorObject) {
                subscriber.error(errorObject_1.errorObject.e);
            }
            else {
                subscriber.next(result);
            }
        } : function (e) { return subscriber.next(e); };
        FromEventObservable.setupSubscription(sourceObj, eventName, handler, subscriber, options);
    };
    return FromEventObservable;
}(Observable_1.Observable));
exports.FromEventObservable = FromEventObservable;
//# sourceMappingURL=FromEventObservable.js.map

/***/ },

/***/ "./node_modules/rxjs/observable/TimerObservable.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var isNumeric_1 = __webpack_require__("./node_modules/rxjs/util/isNumeric.js");
var Observable_1 = __webpack_require__("./node_modules/rxjs/Observable.js");
var async_1 = __webpack_require__("./node_modules/rxjs/scheduler/async.js");
var isScheduler_1 = __webpack_require__("./node_modules/rxjs/util/isScheduler.js");
var isDate_1 = __webpack_require__("./node_modules/rxjs/util/isDate.js");
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @extends {Ignored}
 * @hide true
 */
var TimerObservable = (function (_super) {
    __extends(TimerObservable, _super);
    function TimerObservable(dueTime, period, scheduler) {
        if (dueTime === void 0) { dueTime = 0; }
        _super.call(this);
        this.period = -1;
        this.dueTime = 0;
        if (isNumeric_1.isNumeric(period)) {
            this.period = Number(period) < 1 && 1 || Number(period);
        }
        else if (isScheduler_1.isScheduler(period)) {
            scheduler = period;
        }
        if (!isScheduler_1.isScheduler(scheduler)) {
            scheduler = async_1.async;
        }
        this.scheduler = scheduler;
        this.dueTime = isDate_1.isDate(dueTime) ?
            (+dueTime - this.scheduler.now()) :
            dueTime;
    }
    /**
     * Creates an Observable that starts emitting after an `initialDelay` and
     * emits ever increasing numbers after each `period` of time thereafter.
     *
     * <span class="informal">Its like {@link interval}, but you can specify when
     * should the emissions start.</span>
     *
     * <img src="./img/timer.png" width="100%">
     *
     * `timer` returns an Observable that emits an infinite sequence of ascending
     * integers, with a constant interval of time, `period` of your choosing
     * between those emissions. The first emission happens after the specified
     * `initialDelay`. The initial delay may be a {@link Date}. By default, this
     * operator uses the `async` Scheduler to provide a notion of time, but you
     * may pass any Scheduler to it. If `period` is not specified, the output
     * Observable emits only one value, `0`. Otherwise, it emits an infinite
     * sequence.
     *
     * @example <caption>Emits ascending numbers, one every second (1000ms), starting after 3 seconds</caption>
     * var numbers = Rx.Observable.timer(3000, 1000);
     * numbers.subscribe(x => console.log(x));
     *
     * @example <caption>Emits one number after five seconds</caption>
     * var numbers = Rx.Observable.timer(5000);
     * numbers.subscribe(x => console.log(x));
     *
     * @see {@link interval}
     * @see {@link delay}
     *
     * @param {number|Date} initialDelay The initial delay time to wait before
     * emitting the first value of `0`.
     * @param {number} [period] The period of time between emissions of the
     * subsequent numbers.
     * @param {Scheduler} [scheduler=async] The Scheduler to use for scheduling
     * the emission of values, and providing a notion of "time".
     * @return {Observable} An Observable that emits a `0` after the
     * `initialDelay` and ever increasing numbers after each `period` of time
     * thereafter.
     * @static true
     * @name timer
     * @owner Observable
     */
    TimerObservable.create = function (initialDelay, period, scheduler) {
        if (initialDelay === void 0) { initialDelay = 0; }
        return new TimerObservable(initialDelay, period, scheduler);
    };
    TimerObservable.dispatch = function (state) {
        var index = state.index, period = state.period, subscriber = state.subscriber;
        var action = this;
        subscriber.next(index);
        if (subscriber.closed) {
            return;
        }
        else if (period === -1) {
            return subscriber.complete();
        }
        state.index = index + 1;
        action.schedule(state, period);
    };
    TimerObservable.prototype._subscribe = function (subscriber) {
        var index = 0;
        var _a = this, period = _a.period, dueTime = _a.dueTime, scheduler = _a.scheduler;
        return scheduler.schedule(TimerObservable.dispatch, dueTime, {
            index: index, period: period, subscriber: subscriber
        });
    };
    return TimerObservable;
}(Observable_1.Observable));
exports.TimerObservable = TimerObservable;
//# sourceMappingURL=TimerObservable.js.map

/***/ },

/***/ "./node_modules/rxjs/observable/fromEvent.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var FromEventObservable_1 = __webpack_require__("./node_modules/rxjs/observable/FromEventObservable.js");
exports.fromEvent = FromEventObservable_1.FromEventObservable.create;
//# sourceMappingURL=fromEvent.js.map

/***/ },

/***/ "./node_modules/rxjs/observable/timer.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var TimerObservable_1 = __webpack_require__("./node_modules/rxjs/observable/TimerObservable.js");
exports.timer = TimerObservable_1.TimerObservable.create;
//# sourceMappingURL=timer.js.map

/***/ },

/***/ "./node_modules/rxjs/operator/debounce.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var OuterSubscriber_1 = __webpack_require__("./node_modules/rxjs/OuterSubscriber.js");
var subscribeToResult_1 = __webpack_require__("./node_modules/rxjs/util/subscribeToResult.js");
/**
 * Emits a value from the source Observable only after a particular time span
 * determined by another Observable has passed without another source emission.
 *
 * <span class="informal">It's like {@link debounceTime}, but the time span of
 * emission silence is determined by a second Observable.</span>
 *
 * <img src="./img/debounce.png" width="100%">
 *
 * `debounce` delays values emitted by the source Observable, but drops previous
 * pending delayed emissions if a new value arrives on the source Observable.
 * This operator keeps track of the most recent value from the source
 * Observable, and spawns a duration Observable by calling the
 * `durationSelector` function. The value is emitted only when the duration
 * Observable emits a value or completes, and if no other value was emitted on
 * the source Observable since the duration Observable was spawned. If a new
 * value appears before the duration Observable emits, the previous value will
 * be dropped and will not be emitted on the output Observable.
 *
 * Like {@link debounceTime}, this is a rate-limiting operator, and also a
 * delay-like operator since output emissions do not necessarily occur at the
 * same time as they did on the source Observable.
 *
 * @example <caption>Emit the most recent click after a burst of clicks</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.debounce(() => Rx.Observable.interval(1000));
 * result.subscribe(x => console.log(x));
 *
 * @see {@link audit}
 * @see {@link debounceTime}
 * @see {@link delayWhen}
 * @see {@link throttle}
 *
 * @param {function(value: T): Observable|Promise} durationSelector A function
 * that receives a value from the source Observable, for computing the timeout
 * duration for each source value, returned as an Observable or a Promise.
 * @return {Observable} An Observable that delays the emissions of the source
 * Observable by the specified duration Observable returned by
 * `durationSelector`, and may drop some values if they occur too frequently.
 * @method debounce
 * @owner Observable
 */
function debounce(durationSelector) {
    return this.lift(new DebounceOperator(durationSelector));
}
exports.debounce = debounce;
var DebounceOperator = (function () {
    function DebounceOperator(durationSelector) {
        this.durationSelector = durationSelector;
    }
    DebounceOperator.prototype.call = function (subscriber, source) {
        return source._subscribe(new DebounceSubscriber(subscriber, this.durationSelector));
    };
    return DebounceOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var DebounceSubscriber = (function (_super) {
    __extends(DebounceSubscriber, _super);
    function DebounceSubscriber(destination, durationSelector) {
        _super.call(this, destination);
        this.durationSelector = durationSelector;
        this.hasValue = false;
        this.durationSubscription = null;
    }
    DebounceSubscriber.prototype._next = function (value) {
        try {
            var result = this.durationSelector.call(this, value);
            if (result) {
                this._tryNext(value, result);
            }
        }
        catch (err) {
            this.destination.error(err);
        }
    };
    DebounceSubscriber.prototype._complete = function () {
        this.emitValue();
        this.destination.complete();
    };
    DebounceSubscriber.prototype._tryNext = function (value, duration) {
        var subscription = this.durationSubscription;
        this.value = value;
        this.hasValue = true;
        if (subscription) {
            subscription.unsubscribe();
            this.remove(subscription);
        }
        subscription = subscribeToResult_1.subscribeToResult(this, duration);
        if (!subscription.closed) {
            this.add(this.durationSubscription = subscription);
        }
    };
    DebounceSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        this.emitValue();
    };
    DebounceSubscriber.prototype.notifyComplete = function () {
        this.emitValue();
    };
    DebounceSubscriber.prototype.emitValue = function () {
        if (this.hasValue) {
            var value = this.value;
            var subscription = this.durationSubscription;
            if (subscription) {
                this.durationSubscription = null;
                subscription.unsubscribe();
                this.remove(subscription);
            }
            this.value = null;
            this.hasValue = false;
            _super.prototype._next.call(this, value);
        }
    };
    return DebounceSubscriber;
}(OuterSubscriber_1.OuterSubscriber));
//# sourceMappingURL=debounce.js.map

/***/ },

/***/ "./node_modules/rxjs/operator/delay.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var async_1 = __webpack_require__("./node_modules/rxjs/scheduler/async.js");
var isDate_1 = __webpack_require__("./node_modules/rxjs/util/isDate.js");
var Subscriber_1 = __webpack_require__("./node_modules/rxjs/Subscriber.js");
var Notification_1 = __webpack_require__("./node_modules/rxjs/Notification.js");
/**
 * Delays the emission of items from the source Observable by a given timeout or
 * until a given Date.
 *
 * <span class="informal">Time shifts each item by some specified amount of
 * milliseconds.</span>
 *
 * <img src="./img/delay.png" width="100%">
 *
 * If the delay argument is a Number, this operator time shifts the source
 * Observable by that amount of time expressed in milliseconds. The relative
 * time intervals between the values are preserved.
 *
 * If the delay argument is a Date, this operator time shifts the start of the
 * Observable execution until the given date occurs.
 *
 * @example <caption>Delay each click by one second</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var delayedClicks = clicks.delay(1000); // each click emitted after 1 second
 * delayedClicks.subscribe(x => console.log(x));
 *
 * @example <caption>Delay all clicks until a future date happens</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var date = new Date('March 15, 2050 12:00:00'); // in the future
 * var delayedClicks = clicks.delay(date); // click emitted only after that date
 * delayedClicks.subscribe(x => console.log(x));
 *
 * @see {@link debounceTime}
 * @see {@link delayWhen}
 *
 * @param {number|Date} delay The delay duration in milliseconds (a `number`) or
 * a `Date` until which the emission of the source items is delayed.
 * @param {Scheduler} [scheduler=async] The Scheduler to use for
 * managing the timers that handle the time-shift for each item.
 * @return {Observable} An Observable that delays the emissions of the source
 * Observable by the specified timeout or Date.
 * @method delay
 * @owner Observable
 */
function delay(delay, scheduler) {
    if (scheduler === void 0) { scheduler = async_1.async; }
    var absoluteDelay = isDate_1.isDate(delay);
    var delayFor = absoluteDelay ? (+delay - scheduler.now()) : Math.abs(delay);
    return this.lift(new DelayOperator(delayFor, scheduler));
}
exports.delay = delay;
var DelayOperator = (function () {
    function DelayOperator(delay, scheduler) {
        this.delay = delay;
        this.scheduler = scheduler;
    }
    DelayOperator.prototype.call = function (subscriber, source) {
        return source._subscribe(new DelaySubscriber(subscriber, this.delay, this.scheduler));
    };
    return DelayOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var DelaySubscriber = (function (_super) {
    __extends(DelaySubscriber, _super);
    function DelaySubscriber(destination, delay, scheduler) {
        _super.call(this, destination);
        this.delay = delay;
        this.scheduler = scheduler;
        this.queue = [];
        this.active = false;
        this.errored = false;
    }
    DelaySubscriber.dispatch = function (state) {
        var source = state.source;
        var queue = source.queue;
        var scheduler = state.scheduler;
        var destination = state.destination;
        while (queue.length > 0 && (queue[0].time - scheduler.now()) <= 0) {
            queue.shift().notification.observe(destination);
        }
        if (queue.length > 0) {
            var delay_1 = Math.max(0, queue[0].time - scheduler.now());
            this.schedule(state, delay_1);
        }
        else {
            source.active = false;
        }
    };
    DelaySubscriber.prototype._schedule = function (scheduler) {
        this.active = true;
        this.add(scheduler.schedule(DelaySubscriber.dispatch, this.delay, {
            source: this, destination: this.destination, scheduler: scheduler
        }));
    };
    DelaySubscriber.prototype.scheduleNotification = function (notification) {
        if (this.errored === true) {
            return;
        }
        var scheduler = this.scheduler;
        var message = new DelayMessage(scheduler.now() + this.delay, notification);
        this.queue.push(message);
        if (this.active === false) {
            this._schedule(scheduler);
        }
    };
    DelaySubscriber.prototype._next = function (value) {
        this.scheduleNotification(Notification_1.Notification.createNext(value));
    };
    DelaySubscriber.prototype._error = function (err) {
        this.errored = true;
        this.queue = [];
        this.destination.error(err);
    };
    DelaySubscriber.prototype._complete = function () {
        this.scheduleNotification(Notification_1.Notification.createComplete());
    };
    return DelaySubscriber;
}(Subscriber_1.Subscriber));
var DelayMessage = (function () {
    function DelayMessage(time, notification) {
        this.time = time;
        this.notification = notification;
    }
    return DelayMessage;
}());
//# sourceMappingURL=delay.js.map

/***/ },

/***/ "./node_modules/rxjs/operator/throttle.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var OuterSubscriber_1 = __webpack_require__("./node_modules/rxjs/OuterSubscriber.js");
var subscribeToResult_1 = __webpack_require__("./node_modules/rxjs/util/subscribeToResult.js");
/**
 * Emits a value from the source Observable, then ignores subsequent source
 * values for a duration determined by another Observable, then repeats this
 * process.
 *
 * <span class="informal">It's like {@link throttleTime}, but the silencing
 * duration is determined by a second Observable.</span>
 *
 * <img src="./img/throttle.png" width="100%">
 *
 * `throttle` emits the source Observable values on the output Observable
 * when its internal timer is disabled, and ignores source values when the timer
 * is enabled. Initially, the timer is disabled. As soon as the first source
 * value arrives, it is forwarded to the output Observable, and then the timer
 * is enabled by calling the `durationSelector` function with the source value,
 * which returns the "duration" Observable. When the duration Observable emits a
 * value or completes, the timer is disabled, and this process repeats for the
 * next source value.
 *
 * @example <caption>Emit clicks at a rate of at most one click per second</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.throttle(ev => Rx.Observable.interval(1000));
 * result.subscribe(x => console.log(x));
 *
 * @see {@link audit}
 * @see {@link debounce}
 * @see {@link delayWhen}
 * @see {@link sample}
 * @see {@link throttleTime}
 *
 * @param {function(value: T): Observable|Promise} durationSelector A function
 * that receives a value from the source Observable, for computing the silencing
 * duration for each source value, returned as an Observable or a Promise.
 * @return {Observable<T>} An Observable that performs the throttle operation to
 * limit the rate of emissions from the source.
 * @method throttle
 * @owner Observable
 */
function throttle(durationSelector) {
    return this.lift(new ThrottleOperator(durationSelector));
}
exports.throttle = throttle;
var ThrottleOperator = (function () {
    function ThrottleOperator(durationSelector) {
        this.durationSelector = durationSelector;
    }
    ThrottleOperator.prototype.call = function (subscriber, source) {
        return source._subscribe(new ThrottleSubscriber(subscriber, this.durationSelector));
    };
    return ThrottleOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var ThrottleSubscriber = (function (_super) {
    __extends(ThrottleSubscriber, _super);
    function ThrottleSubscriber(destination, durationSelector) {
        _super.call(this, destination);
        this.destination = destination;
        this.durationSelector = durationSelector;
    }
    ThrottleSubscriber.prototype._next = function (value) {
        if (!this.throttled) {
            this.tryDurationSelector(value);
        }
    };
    ThrottleSubscriber.prototype.tryDurationSelector = function (value) {
        var duration = null;
        try {
            duration = this.durationSelector(value);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        this.emitAndThrottle(value, duration);
    };
    ThrottleSubscriber.prototype.emitAndThrottle = function (value, duration) {
        this.add(this.throttled = subscribeToResult_1.subscribeToResult(this, duration));
        this.destination.next(value);
    };
    ThrottleSubscriber.prototype._unsubscribe = function () {
        var throttled = this.throttled;
        if (throttled) {
            this.remove(throttled);
            this.throttled = null;
            throttled.unsubscribe();
        }
    };
    ThrottleSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        this._unsubscribe();
    };
    ThrottleSubscriber.prototype.notifyComplete = function () {
        this._unsubscribe();
    };
    return ThrottleSubscriber;
}(OuterSubscriber_1.OuterSubscriber));
//# sourceMappingURL=throttle.js.map

/***/ },

/***/ "./node_modules/rxjs/scheduler/Action.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscription_1 = __webpack_require__("./node_modules/rxjs/Subscription.js");
/**
 * A unit of work to be executed in a {@link Scheduler}. An action is typically
 * created from within a Scheduler and an RxJS user does not need to concern
 * themselves about creating and manipulating an Action.
 *
 * ```ts
 * class Action<T> extends Subscription {
 *   new (scheduler: Scheduler, work: (state?: T) => void);
 *   schedule(state?: T, delay: number = 0): Subscription;
 * }
 * ```
 *
 * @class Action<T>
 */
var Action = (function (_super) {
    __extends(Action, _super);
    function Action(scheduler, work) {
        _super.call(this);
    }
    /**
     * Schedules this action on its parent Scheduler for execution. May be passed
     * some context object, `state`. May happen at some point in the future,
     * according to the `delay` parameter, if specified.
     * @param {T} [state] Some contextual data that the `work` function uses when
     * called by the Scheduler.
     * @param {number} [delay] Time to wait before executing the work, where the
     * time unit is implicit and defined by the Scheduler.
     * @return {void}
     */
    Action.prototype.schedule = function (state, delay) {
        if (delay === void 0) { delay = 0; }
        return this;
    };
    return Action;
}(Subscription_1.Subscription));
exports.Action = Action;
//# sourceMappingURL=Action.js.map

/***/ },

/***/ "./node_modules/rxjs/scheduler/AsyncAction.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var root_1 = __webpack_require__("./node_modules/rxjs/util/root.js");
var Action_1 = __webpack_require__("./node_modules/rxjs/scheduler/Action.js");
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var AsyncAction = (function (_super) {
    __extends(AsyncAction, _super);
    function AsyncAction(scheduler, work) {
        _super.call(this, scheduler, work);
        this.scheduler = scheduler;
        this.work = work;
        this.pending = false;
    }
    AsyncAction.prototype.schedule = function (state, delay) {
        if (delay === void 0) { delay = 0; }
        if (this.closed) {
            return this;
        }
        // Always replace the current state with the new state.
        this.state = state;
        // Set the pending flag indicating that this action has been scheduled, or
        // has recursively rescheduled itself.
        this.pending = true;
        var id = this.id;
        var scheduler = this.scheduler;
        //
        // Important implementation note:
        //
        // Actions only execute once by default, unless rescheduled from within the
        // scheduled callback. This allows us to implement single and repeat
        // actions via the same code path, without adding API surface area, as well
        // as mimic traditional recursion but across asynchronous boundaries.
        //
        // However, JS runtimes and timers distinguish between intervals achieved by
        // serial `setTimeout` calls vs. a single `setInterval` call. An interval of
        // serial `setTimeout` calls can be individually delayed, which delays
        // scheduling the next `setTimeout`, and so on. `setInterval` attempts to
        // guarantee the interval callback will be invoked more precisely to the
        // interval period, regardless of load.
        //
        // Therefore, we use `setInterval` to schedule single and repeat actions.
        // If the action reschedules itself with the same delay, the interval is not
        // canceled. If the action doesn't reschedule, or reschedules with a
        // different delay, the interval will be canceled after scheduled callback
        // execution.
        //
        if (id != null) {
            this.id = this.recycleAsyncId(scheduler, id, delay);
        }
        this.delay = delay;
        // If this action has already an async Id, don't request a new one.
        this.id = this.id || this.requestAsyncId(scheduler, this.id, delay);
        return this;
    };
    AsyncAction.prototype.requestAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) { delay = 0; }
        return root_1.root.setInterval(scheduler.flush.bind(scheduler, this), delay);
    };
    AsyncAction.prototype.recycleAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) { delay = 0; }
        // If this action is rescheduled with the same delay time, don't clear the interval id.
        if (delay !== null && this.delay === delay) {
            return id;
        }
        // Otherwise, if the action's delay time is different from the current delay,
        // clear the interval id
        return root_1.root.clearInterval(id) && undefined || undefined;
    };
    /**
     * Immediately executes this action and the `work` it contains.
     * @return {any}
     */
    AsyncAction.prototype.execute = function (state, delay) {
        if (this.closed) {
            return new Error('executing a cancelled action');
        }
        this.pending = false;
        var error = this._execute(state, delay);
        if (error) {
            return error;
        }
        else if (this.pending === false && this.id != null) {
            // Dequeue if the action didn't reschedule itself. Don't call
            // unsubscribe(), because the action could reschedule later.
            // For example:
            // ```
            // scheduler.schedule(function doWork(counter) {
            //   /* ... I'm a busy worker bee ... */
            //   var originalAction = this;
            //   /* wait 100ms before rescheduling the action */
            //   setTimeout(function () {
            //     originalAction.schedule(counter + 1);
            //   }, 100);
            // }, 1000);
            // ```
            this.id = this.recycleAsyncId(this.scheduler, this.id, null);
        }
    };
    AsyncAction.prototype._execute = function (state, delay) {
        var errored = false;
        var errorValue = undefined;
        try {
            this.work(state);
        }
        catch (e) {
            errored = true;
            errorValue = !!e && e || new Error(e);
        }
        if (errored) {
            this.unsubscribe();
            return errorValue;
        }
    };
    AsyncAction.prototype._unsubscribe = function () {
        var id = this.id;
        var scheduler = this.scheduler;
        var actions = scheduler.actions;
        var index = actions.indexOf(this);
        this.work = null;
        this.delay = null;
        this.state = null;
        this.pending = false;
        this.scheduler = null;
        if (index !== -1) {
            actions.splice(index, 1);
        }
        if (id != null) {
            this.id = this.recycleAsyncId(scheduler, id, null);
        }
    };
    return AsyncAction;
}(Action_1.Action));
exports.AsyncAction = AsyncAction;
//# sourceMappingURL=AsyncAction.js.map

/***/ },

/***/ "./node_modules/rxjs/scheduler/AsyncScheduler.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Scheduler_1 = __webpack_require__("./node_modules/rxjs/Scheduler.js");
var AsyncScheduler = (function (_super) {
    __extends(AsyncScheduler, _super);
    function AsyncScheduler() {
        _super.apply(this, arguments);
        this.actions = [];
        /**
         * A flag to indicate whether the Scheduler is currently executing a batch of
         * queued actions.
         * @type {boolean}
         */
        this.active = false;
        /**
         * An internal ID used to track the latest asynchronous task such as those
         * coming from `setTimeout`, `setInterval`, `requestAnimationFrame`, and
         * others.
         * @type {any}
         */
        this.scheduled = undefined;
    }
    AsyncScheduler.prototype.flush = function (action) {
        var actions = this.actions;
        if (this.active) {
            actions.push(action);
            return;
        }
        var error;
        this.active = true;
        do {
            if (error = action.execute(action.state, action.delay)) {
                break;
            }
        } while (action = actions.shift()); // exhaust the scheduler queue
        this.active = false;
        if (error) {
            while (action = actions.shift()) {
                action.unsubscribe();
            }
            throw error;
        }
    };
    return AsyncScheduler;
}(Scheduler_1.Scheduler));
exports.AsyncScheduler = AsyncScheduler;
//# sourceMappingURL=AsyncScheduler.js.map

/***/ },

/***/ "./node_modules/rxjs/scheduler/QueueAction.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AsyncAction_1 = __webpack_require__("./node_modules/rxjs/scheduler/AsyncAction.js");
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var QueueAction = (function (_super) {
    __extends(QueueAction, _super);
    function QueueAction(scheduler, work) {
        _super.call(this, scheduler, work);
        this.scheduler = scheduler;
        this.work = work;
    }
    QueueAction.prototype.schedule = function (state, delay) {
        if (delay === void 0) { delay = 0; }
        if (delay > 0) {
            return _super.prototype.schedule.call(this, state, delay);
        }
        this.delay = delay;
        this.state = state;
        this.scheduler.flush(this);
        return this;
    };
    QueueAction.prototype.execute = function (state, delay) {
        return (delay > 0 || this.closed) ?
            _super.prototype.execute.call(this, state, delay) :
            this._execute(state, delay);
    };
    QueueAction.prototype.requestAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) { delay = 0; }
        // If delay is greater than 0, enqueue as an async action.
        if (delay !== null && delay > 0) {
            return _super.prototype.requestAsyncId.call(this, scheduler, id, delay);
        }
        // Otherwise flush the scheduler starting with this action.
        return scheduler.flush(this);
    };
    return QueueAction;
}(AsyncAction_1.AsyncAction));
exports.QueueAction = QueueAction;
//# sourceMappingURL=QueueAction.js.map

/***/ },

/***/ "./node_modules/rxjs/scheduler/QueueScheduler.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AsyncScheduler_1 = __webpack_require__("./node_modules/rxjs/scheduler/AsyncScheduler.js");
var QueueScheduler = (function (_super) {
    __extends(QueueScheduler, _super);
    function QueueScheduler() {
        _super.apply(this, arguments);
    }
    return QueueScheduler;
}(AsyncScheduler_1.AsyncScheduler));
exports.QueueScheduler = QueueScheduler;
//# sourceMappingURL=QueueScheduler.js.map

/***/ },

/***/ "./node_modules/rxjs/scheduler/async.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var AsyncAction_1 = __webpack_require__("./node_modules/rxjs/scheduler/AsyncAction.js");
var AsyncScheduler_1 = __webpack_require__("./node_modules/rxjs/scheduler/AsyncScheduler.js");
exports.async = new AsyncScheduler_1.AsyncScheduler(AsyncAction_1.AsyncAction);
//# sourceMappingURL=async.js.map

/***/ },

/***/ "./node_modules/rxjs/scheduler/queue.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var QueueAction_1 = __webpack_require__("./node_modules/rxjs/scheduler/QueueAction.js");
var QueueScheduler_1 = __webpack_require__("./node_modules/rxjs/scheduler/QueueScheduler.js");
exports.queue = new QueueScheduler_1.QueueScheduler(QueueAction_1.QueueAction);
//# sourceMappingURL=queue.js.map

/***/ },

/***/ "./node_modules/rxjs/util/isDate.js":
/***/ function(module, exports) {

"use strict";
"use strict";
function isDate(value) {
    return value instanceof Date && !isNaN(+value);
}
exports.isDate = isDate;
//# sourceMappingURL=isDate.js.map

/***/ },

/***/ "./node_modules/rxjs/util/isNumeric.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var isArray_1 = __webpack_require__("./node_modules/rxjs/util/isArray.js");
function isNumeric(val) {
    // parseFloat NaNs numeric-cast false positives (null|true|false|"")
    // ...but misinterprets leading-number strings, particularly hex literals ("0x...")
    // subtraction forces infinities to NaN
    // adding 1 corrects loss of precision from parseFloat (#15100)
    return !isArray_1.isArray(val) && (val - parseFloat(val) + 1) >= 0;
}
exports.isNumeric = isNumeric;
;
//# sourceMappingURL=isNumeric.js.map

/***/ },

/***/ "./src/app/app.module.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/index.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/index.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/index.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/index.js");
var hmr_1 = __webpack_require__("./node_modules/@angularclass/hmr/dist/index.js");
var common_1 = __webpack_require__("./node_modules/@angular/common/index.js");
var angulartics2_1 = __webpack_require__("./node_modules/angulartics2/dist/index.js");
var angular2_infinite_scroll_1 = __webpack_require__("./node_modules/angular2-infinite-scroll/angular2-infinite-scroll.js");
/*
 * Platform and Environment providers/directives/pipes
 */
var environment_1 = __webpack_require__("./src/app/environment.ts");
var app_routes_1 = __webpack_require__("./src/app/app.routes.ts");
// App is our top level component
var app_resolver_1 = __webpack_require__("./src/app/app.resolver.ts");
var external_link_1 = __webpack_require__("./src/app/directives/external-link/index.ts");
var toggle_menu_1 = __webpack_require__("./src/app/directives/toggle-menu/index.ts");
var language_icon_1 = __webpack_require__("./src/app/pipes/language-icon/index.ts");
var pluralize_1 = __webpack_require__("./src/app/pipes/pluralize/index.ts");
var truncate_1 = __webpack_require__("./src/app/pipes/truncate/index.ts");
var app_components_1 = __webpack_require__("./src/app/utils/app-components/index.ts");
var is_defined_1 = __webpack_require__("./src/app/pipes/is-defined/index.ts");
var app_components_2 = __webpack_require__("./src/app/utils/app-components/index.ts");
var agency_1 = __webpack_require__("./src/app/services/agency/index.ts");
var api_1 = __webpack_require__("./src/app/services/api/index.ts");
var mobile_1 = __webpack_require__("./src/app/services/mobile/index.ts");
var modal_1 = __webpack_require__("./src/app/services/modal/index.ts");
var repo_1 = __webpack_require__("./src/app/services/repo/index.ts");
var search_1 = __webpack_require__("./src/app/services/search/index.ts");
var seo_1 = __webpack_require__("./src/app/services/seo/index.ts");
var state_1 = __webpack_require__("./src/app/services/state/index.ts");
var term_1 = __webpack_require__("./src/app/services/term/index.ts");
// Application wide providers
var APP_PROVIDERS = app_resolver_1.APP_RESOLVER_PROVIDERS.concat([
    agency_1.AgencyService,
    api_1.ApiService,
    mobile_1.MobileService,
    modal_1.ModalService,
    repo_1.RepoService,
    search_1.SearchService,
    seo_1.SeoService,
    state_1.StateService,
    term_1.TermService,
]);
/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
var AppModule = (function () {
    function AppModule(appRef) {
        this.appRef = appRef;
    }
    AppModule.prototype.hmrAfterDestroy = function (store) {
        // display new elements
        store.disposeOldHosts();
        delete store.disposeOldHosts;
    };
    AppModule.prototype.hmrOnDestroy = function (store) {
        var cmpLocation = this.appRef.components.map(function (cmp) { return cmp.location.nativeElement; });
        // recreate elements
        store.disposeOldHosts = hmr_1.createNewHosts(cmpLocation);
        // remove styles
        hmr_1.removeNgStyles();
    };
    AppModule.prototype.hmrOnInit = function (store) {
        console.log('HMR store', store);
    };
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            angulartics2_1.Angulartics2Module.forRoot(),
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            angular2_infinite_scroll_1.InfiniteScrollModule,
            forms_1.ReactiveFormsModule,
            router_1.RouterModule.forRoot(app_routes_1.ROUTES, { useHash: true })
        ],
        declarations: [
            app_components_2.APP_COMPONENTS,
            external_link_1.ExternalLinkDirective,
            language_icon_1.LanguageIconPipe,
            pluralize_1.PluralizePipe,
            is_defined_1.IsDefinedPipe,
            toggle_menu_1.ToggleMenuDirective,
            truncate_1.TruncatePipe
        ],
        providers: [
            environment_1.ENV_PROVIDERS,
            { provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy },
            APP_PROVIDERS,
            angulartics2_1.Angulartics2GoogleTagManager
        ],
        bootstrap: [app_components_1.AppComponent]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof core_1.ApplicationRef !== "undefined" && core_1.ApplicationRef) === "function" && _a || Object])
], AppModule);
exports.AppModule = AppModule;
var _a;


/***/ },

/***/ "./src/app/app.resolver.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var Observable_1 = __webpack_require__("./node_modules/rxjs/Observable.js");
__webpack_require__("./node_modules/rxjs/add/observable/of.js");
var DataResolver = (function () {
    function DataResolver() {
    }
    DataResolver.prototype.resolve = function (route, state) {
        return Observable_1.Observable.of({ res: 'I am data' });
    };
    return DataResolver;
}());
DataResolver = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], DataResolver);
exports.DataResolver = DataResolver;
// an array of services to resolve routes with data
exports.APP_RESOLVER_PROVIDERS = [
    DataResolver
];


/***/ },

/***/ "./src/app/app.routes.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var app_components_1 = __webpack_require__("./src/app/utils/app-components/index.ts");
var agencies_1 = __webpack_require__("./src/app/routes/agencies/index.ts");
var explore_code_1 = __webpack_require__("./src/app/routes/explore-code/index.ts");
var policy_guide_1 = __webpack_require__("./src/app/routes/policy-guide/index.ts");
var repos_1 = __webpack_require__("./src/app/routes/repos/index.ts");
exports.ROUTES = [
    { path: '', component: app_components_1.HomeComponent }
].concat(agencies_1.AGENCY_ROUTES, explore_code_1.EXPLORE_CODE_ROUTES, policy_guide_1.POLICY_GUIDE_ROUTES, repos_1.REPO_ROUTES, [
    { path: 'search', component: app_components_1.SearchResultsComponent },
    { path: 'privacy-policy', component: app_components_1.PrivacyPolicyComponent },
    { path: '404', component: app_components_1.FourOhFourComponent },
    { path: '**', component: app_components_1.FourOhFourComponent }
]);


/***/ },

/***/ "./src/app/components/activity-list/activity-list.component.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var ActivityListComponent = (function () {
    function ActivityListComponent() {
    }
    ActivityListComponent.prototype.ngAfterViewChecked = function () {
        var _this = this;
        setTimeout(function (_) { return _this.activities = _this.eventRepo.events; });
    };
    return ActivityListComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], ActivityListComponent.prototype, "eventRepo", void 0);
ActivityListComponent = __decorate([
    core_1.Component({
        selector: 'activity-list',
        styles: [__webpack_require__("./src/app/components/activity-list/activity-list.style.scss")],
        template: __webpack_require__("./src/app/components/activity-list/activity-list.template.html")
    }),
    __metadata("design:paramtypes", [])
], ActivityListComponent);
exports.ActivityListComponent = ActivityListComponent;


/***/ },

/***/ "./src/app/components/activity-list/activity-list.style.scss":
/***/ function(module, exports) {

module.exports = "html {\n  box-sizing: border-box; }\n\n*, *::after, *::before {\n  box-sizing: inherit; }\n\n@-webkit-keyframes fadeInUp {\n  from {\n    -webkit-transform: translateY(0.5em);\n    opacity: 0;\n    visibility: hidden; }\n  to {\n    -webkit-transform: translateY(0);\n    opacity: 1;\n    visibility: visible; } }\n\n@-moz-keyframes fadeInUp {\n  from {\n    -moz-transform: translateY(0.5em);\n    opacity: 0;\n    visibility: hidden; }\n  to {\n    -moz-transform: translateY(0);\n    opacity: 1;\n    visibility: visible; } }\n\n@keyframes fadeInUp {\n  from {\n    -webkit-transform: translateY(0.5em);\n    -moz-transform: translateY(0.5em);\n    -ms-transform: translateY(0.5em);\n    -o-transform: translateY(0.5em);\n    transform: translateY(0.5em);\n    opacity: 0;\n    visibility: hidden; }\n  to {\n    -webkit-transform: translateY(0);\n    -moz-transform: translateY(0);\n    -ms-transform: translateY(0);\n    -o-transform: translateY(0);\n    transform: translateY(0);\n    opacity: 1;\n    visibility: visible; } }\n\n@-webkit-keyframes fadeIn {\n  from {\n    opacity: 0;\n    visibility: hidden; }\n  to {\n    opacity: 1;\n    visibility: visible; } }\n\n@-moz-keyframes fadeIn {\n  from {\n    opacity: 0;\n    visibility: hidden; }\n  to {\n    opacity: 1;\n    visibility: visible; } }\n\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n    visibility: hidden; }\n  to {\n    opacity: 1;\n    visibility: visible; } }\n\n@-webkit-keyframes blink {\n  from, to {\n    color: transparent; }\n  50% {\n    color: #23c0ba; } }\n\n@-moz-keyframes blink {\n  from, to {\n    color: transparent; }\n  50% {\n    color: #23c0ba; } }\n\n@keyframes blink {\n  from, to {\n    color: transparent; }\n  50% {\n    color: #23c0ba; } }\n\nbody {\n  -webkit-font-feature-settings: \"kern\", \"liga\", \"pnum\";\n  -moz-font-feature-settings: \"kern\", \"liga\", \"pnum\";\n  -ms-font-feature-settings: \"kern\", \"liga\", \"pnum\";\n  font-feature-settings: \"kern\", \"liga\", \"pnum\";\n  -webkit-font-smoothing: antialiased; }\n\nlabel {\n  -webkit-font-feature-settings: \"kern\", \"liga\", \"pnum\";\n  -moz-font-feature-settings: \"kern\", \"liga\", \"pnum\";\n  -ms-font-feature-settings: \"kern\", \"liga\", \"pnum\";\n  font-feature-settings: \"kern\", \"liga\", \"pnum\";\n  -webkit-font-smoothing: antialiased; }\n\na:focus {\n  box-shadow: 0 0 3px rgba(50, 58, 69, 0.25), 0 0 7px rgba(50, 58, 69, 0.25);\n  outline: 0; }\n\nh1,\nh2,\nh3,\nh4,\nh5 h6 {\n  color: #323a45;\n  font-family: \"TT Lakes\", \"Helvetica Neue\", \"Helvetica\", \"Roboto\", \"Arial\", sans-serif;\n  font-weight: 500; }\n  h1:first-child,\n  h2:first-child,\n  h3:first-child,\n  h4:first-child,\n  h5 h6:first-child {\n    margin-top: 0; }\n\np {\n  color: #5b616b; }\n  @media screen and (min-width: 40em) {\n    p {\n      font-size: 1.1em; } }\n\n.usa-button,\n.usa-button.usa-button-big,\n.usa-button-primary.usa-button-big,\n.usa-button:visited.usa-button-big,\n.usa-button-primary:visited.usa-button-big,\nbutton.usa-button-big,\n[type=\"button\"].usa-button-big,\n[type=\"submit\"].usa-button-big,\n[type=\"reset\"].usa-button-big,\n[type=\"image\"].usa-button-big {\n  -webkit-transition: all 0.2s ease;\n  -moz-transition: all 0.2s ease;\n  transition: all 0.2s ease; }\n  .usa-button:hover,\n  .usa-button.usa-button-big:hover,\n  .usa-button-primary.usa-button-big:hover,\n  .usa-button:visited.usa-button-big:hover,\n  .usa-button-primary:visited.usa-button-big:hover,\n  button.usa-button-big:hover,\n  [type=\"button\"].usa-button-big:hover,\n  [type=\"submit\"].usa-button-big:hover,\n  [type=\"reset\"].usa-button-big:hover,\n  [type=\"image\"].usa-button-big:hover {\n    -webkit-transform: translateY(-2px);\n    -moz-transform: translateY(-2px);\n    -ms-transform: translateY(-2px);\n    -o-transform: translateY(-2px);\n    transform: translateY(-2px); }\n\n.activity {\n  background-color: #ffffff;\n  border: 1px solid #e9e9e9;\n  box-sizing: border-box;\n  padding: 0.5em; }\n  @media screen and (min-width: 40em) {\n    .activity {\n      padding: 1em; } }\n\n.activity {\n  margin-bottom: 1em;\n  padding-left: 3.5em;\n  padding-right: 0.5em;\n  position: relative; }\n  @media screen and (min-width: 40em) {\n    .activity {\n      padding-left: 4.75em;\n      padding-right: 1em; } }\n  .activity h3 {\n    font-size: 1em; }\n    @media screen and (min-width: 40em) {\n      .activity h3 {\n        font-size: 1.25em; } }\n  .activity p {\n    margin: 0; }\n  .activity .activity-icon {\n    border: 2px solid #23c0ba;\n    border-radius: 50%;\n    left: 0.5em;\n    padding: 0.4em 0.6em;\n    position: absolute;\n    text-align: center;\n    top: 0.5em;\n    vertical-align: middle; }\n    @media screen and (min-width: 40em) {\n      .activity .activity-icon {\n        left: 1em;\n        padding: 0.75em 0.75em 0.7em;\n        top: 1em; } }\n    .activity .activity-icon i {\n      color: #23c0ba;\n      font-size: 1em;\n      height: 1em;\n      line-height: 0.85em;\n      width: 1em; }\n      @media screen and (min-width: 40em) {\n        .activity .activity-icon i {\n          font-size: 1.25em;\n          line-height: 1em; } }\n  .activity .activity-content {\n    min-height: 2.75em; }\n    @media screen and (min-width: 40em) {\n      .activity .activity-content {\n        min-height: 3.5em; } }\n  .activity .activity-heading::after {\n    clear: both;\n    content: \"\";\n    display: block; }\n  .activity .activity-heading div {\n    float: left;\n    display: block;\n    margin-right: 2.35765%;\n    width: 48.82117%; }\n    .activity .activity-heading div:last-child {\n      margin-right: 0; }\n  .activity .activity-heading h3 {\n    margin-bottom: 0; }\n  .activity .date {\n    font-size: 0.9em;\n    text-align: right; }\n  .activity .message {\n    font-size: 0.9em; }\n"

/***/ },

/***/ "./src/app/components/activity-list/activity-list.template.html":
/***/ function(module, exports) {

module.exports = "<ul *ngIf=\"activities\" class=\"usa-unstyled-list\">\n  <li *ngFor=\"let activity of activities\" class=\"activity\">\n    <div class=\"activity-icon\">\n      <i class=\"fa fa-file-text-o\"></i>\n    </div>\n    <div class=\"activity-content\">\n      <div class=\"activity-heading\">\n        <div *ngIf=\"activity.type\">\n          <h3>{{ activity.type }}</h3>\n        </div>\n        <div *ngIf=\"activity.time\">\n          <p class=\"date\">{{ activity.time | date }}</p>\n        </div>\n      </div>\n      <div *ngIf=\"activity.message\">\n        <p class=\"message\">\n          {{ activity.message | truncate : 80 }}\n        </p>\n      </div>\n    </div>\n  </li>\n</ul>\n"

/***/ },

/***/ "./src/app/components/activity-list/index.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__("./src/app/components/activity-list/activity-list.component.ts"));


/***/ },

/***/ "./src/app/components/agencies/agencies.component.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var mobile_1 = __webpack_require__("./src/app/services/mobile/index.ts");
var state_1 = __webpack_require__("./src/app/services/state/index.ts");
var AgenciesComponent = (function () {
    function AgenciesComponent(stateService, mobileService) {
        this.stateService = stateService;
        this.mobileService = mobileService;
        this.stateService.set('section', 'explore-code');
        this.mobileService.hideMenu();
    }
    return AgenciesComponent;
}());
AgenciesComponent = __decorate([
    core_1.Component({
        selector: 'agencies',
        styles: [__webpack_require__("./src/app/components/agencies/agencies.style.scss")],
        template: __webpack_require__("./src/app/components/agencies/agencies.template.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof state_1.StateService !== "undefined" && state_1.StateService) === "function" && _a || Object, typeof (_b = typeof mobile_1.MobileService !== "undefined" && mobile_1.MobileService) === "function" && _b || Object])
], AgenciesComponent);
exports.AgenciesComponent = AgenciesComponent;
var _a, _b;


/***/ },

/***/ "./src/app/components/agencies/agencies.style.scss":
/***/ function(module, exports) {

module.exports = "html {\n  box-sizing: border-box; }\n\n*, *::after, *::before {\n  box-sizing: inherit; }\n\n@-webkit-keyframes fadeInUp {\n  from {\n    -webkit-transform: translateY(0.5em);\n    opacity: 0;\n    visibility: hidden; }\n  to {\n    -webkit-transform: translateY(0);\n    opacity: 1;\n    visibility: visible; } }\n\n@-moz-keyframes fadeInUp {\n  from {\n    -moz-transform: translateY(0.5em);\n    opacity: 0;\n    visibility: hidden; }\n  to {\n    -moz-transform: translateY(0);\n    opacity: 1;\n    visibility: visible; } }\n\n@keyframes fadeInUp {\n  from {\n    -webkit-transform: translateY(0.5em);\n    -moz-transform: translateY(0.5em);\n    -ms-transform: translateY(0.5em);\n    -o-transform: translateY(0.5em);\n    transform: translateY(0.5em);\n    opacity: 0;\n    visibility: hidden; }\n  to {\n    -webkit-transform: translateY(0);\n    -moz-transform: translateY(0);\n    -ms-transform: translateY(0);\n    -o-transform: translateY(0);\n    transform: translateY(0);\n    opacity: 1;\n    visibility: visible; } }\n\n@-webkit-keyframes fadeIn {\n  from {\n    opacity: 0;\n    visibility: hidden; }\n  to {\n    opacity: 1;\n    visibility: visible; } }\n\n@-moz-keyframes fadeIn {\n  from {\n    opacity: 0;\n    visibility: hidden; }\n  to {\n    opacity: 1;\n    visibility: visible; } }\n\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n    visibility: hidden; }\n  to {\n    opacity: 1;\n    visibility: visible; } }\n\n@-webkit-keyframes blink {\n  from, to {\n    color: transparent; }\n  50% {\n    color: #23c0ba; } }\n\n@-moz-keyframes blink {\n  from, to {\n    color: transparent; }\n  50% {\n    color: #23c0ba; } }\n\n@keyframes blink {\n  from, to {\n    color: transparent; }\n  50% {\n    color: #23c0ba; } }\n\nbody {\n  -webkit-font-feature-settings: \"kern\", \"liga\", \"pnum\";\n  -moz-font-feature-settings: \"kern\", \"liga\", \"pnum\";\n  -ms-font-feature-settings: \"kern\", \"liga\", \"pnum\";\n  font-feature-settings: \"kern\", \"liga\", \"pnum\";\n  -webkit-font-smoothing: antialiased; }\n\nlabel {\n  -webkit-font-feature-settings: \"kern\", \"liga\", \"pnum\";\n  -moz-font-feature-settings: \"kern\", \"liga\", \"pnum\";\n  -ms-font-feature-settings: \"kern\", \"liga\", \"pnum\";\n  font-feature-settings: \"kern\", \"liga\", \"pnum\";\n  -webkit-font-smoothing: antialiased; }\n\na:focus {\n  box-shadow: 0 0 3px rgba(50, 58, 69, 0.25), 0 0 7px rgba(50, 58, 69, 0.25);\n  outline: 0; }\n\nh1,\nh2,\nh3,\nh4,\nh5\nh6 {\n  color: #323a45;\n  font-family: \"TT Lakes\", \"Helvetica Neue\", \"Helvetica\", \"Roboto\", \"Arial\", sans-serif;\n  font-weight: 500; }\n  h1:first-child,\n  h2:first-child,\n  h3:first-child,\n  h4:first-child,\n  h5\nh6:first-child {\n    margin-top: 0; }\n\np {\n  color: #5b616b; }\n  @media screen and (min-width: 40em) {\n    p {\n      font-size: 1.1em; } }\n\n.usa-button,\n.usa-button.usa-button-big,\n.usa-button-primary.usa-button-big,\n.usa-button:visited.usa-button-big,\n.usa-button-primary:visited.usa-button-big,\nbutton.usa-button-big,\n[type=\"button\"].usa-button-big,\n[type=\"submit\"].usa-button-big,\n[type=\"reset\"].usa-button-big,\n[type=\"image\"].usa-button-big {\n  -webkit-transition: all 0.2s ease;\n  -moz-transition: all 0.2s ease;\n  transition: all 0.2s ease; }\n  .usa-button:hover,\n  .usa-button.usa-button-big:hover,\n  .usa-button-primary.usa-button-big:hover,\n  .usa-button:visited.usa-button-big:hover,\n  .usa-button-primary:visited.usa-button-big:hover,\n  button.usa-button-big:hover,\n  [type=\"button\"].usa-button-big:hover,\n  [type=\"submit\"].usa-button-big:hover,\n  [type=\"reset\"].usa-button-big:hover,\n  [type=\"image\"].usa-button-big:hover {\n    -webkit-transform: translateY(-2px);\n    -moz-transform: translateY(-2px);\n    -ms-transform: translateY(-2px);\n    -o-transform: translateY(-2px);\n    transform: translateY(-2px); }\n\n@media screen and (min-width: 40em) {\n  .content-col {\n    float: left;\n    display: block;\n    margin-right: 2.35765%;\n    width: 74.41059%; }\n    .content-col:last-child {\n      margin-right: 0; } }\n\n.load-more-button {\n  font-size: 1.1em;\n  margin-top: 1em;\n  padding: 0.75em 2em; }\n\n.no-repos {\n  margin-top: 3em; }\n\n.repos-count {\n  font-size: 1.1em;\n  font-weight: bold; }\n\n.search-container {\n  background-color: #e4e4e4;\n  padding: 0.5em 0; }\n\n.agencies-content {\n  padding-bottom: 4em; }\n  @media screen and (min-width: 40em) {\n    .agencies-content {\n      min-height: 25em; } }\n"

/***/ },

/***/ "./src/app/components/agencies/agencies.template.html":
/***/ function(module, exports) {

module.exports = "<div class='agencies-content'>\n  <div class=\"search-container\">\n    <div class=\"usa-grid\">\n      <div class=\"content-col\">\n        <repos-search></repos-search>\n      </div>\n    </div>\n  </div>\n  <div class=\"usa-grid\">\n    <div class=\"content-col\">\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n</div>\n"

/***/ },

/***/ "./src/app/components/agencies/index.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__("./src/app/components/agencies/agencies.component.ts"));


/***/ },

/***/ "./src/app/components/agency-sidebar/agency-sidebar.component.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var agency_1 = __webpack_require__("./src/app/services/agency/index.ts");
var mobile_1 = __webpack_require__("./src/app/services/mobile/index.ts");
var AgencySidebarComponent = (function () {
    function AgencySidebarComponent(agencyService, mobileService) {
        this.agencyService = agencyService;
        this.mobileService = mobileService;
        this.menuActive = mobileService.activeMobileMenu$;
    }
    AgencySidebarComponent.prototype.ngOnInit = function () {
        this.agencies = this.agencyService.getAgencies();
    };
    return AgencySidebarComponent;
}());
AgencySidebarComponent = __decorate([
    core_1.Component({
        selector: 'agency-sidebar',
        styles: [__webpack_require__("./src/app/components/agency-sidebar/agency-sidebar.style.scss")],
        template: __webpack_require__("./src/app/components/agency-sidebar/agency-sidebar.template.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof agency_1.AgencyService !== "undefined" && agency_1.AgencyService) === "function" && _a || Object, typeof (_b = typeof mobile_1.MobileService !== "undefined" && mobile_1.MobileService) === "function" && _b || Object])
], AgencySidebarComponent);
exports.AgencySidebarComponent = AgencySidebarComponent;
var _a, _b;


/***/ },

/***/ "./src/app/components/agency-sidebar/agency-sidebar.style.scss":
/***/ function(module, exports) {

module.exports = "html {\n  box-sizing: border-box; }\n\n*, *::after, *::before {\n  box-sizing: inherit; }\n\n@-webkit-keyframes fadeInUp {\n  from {\n    -webkit-transform: translateY(0.5em);\n    opacity: 0;\n    visibility: hidden; }\n  to {\n    -webkit-transform: translateY(0);\n    opacity: 1;\n    visibility: visible; } }\n\n@-moz-keyframes fadeInUp {\n  from {\n    -moz-transform: translateY(0.5em);\n    opacity: 0;\n    visibility: hidden; }\n  to {\n    -moz-transform: translateY(0);\n    opacity: 1;\n    visibility: visible; } }\n\n@keyframes fadeInUp {\n  from {\n    -webkit-transform: translateY(0.5em);\n    -moz-transform: translateY(0.5em);\n    -ms-transform: translateY(0.5em);\n    -o-transform: translateY(0.5em);\n    transform: translateY(0.5em);\n    opacity: 0;\n    visibility: hidden; }\n  to {\n    -webkit-transform: translateY(0);\n    -moz-transform: translateY(0);\n    -ms-transform: translateY(0);\n    -o-transform: translateY(0);\n    transform: translateY(0);\n    opacity: 1;\n    visibility: visible; } }\n\n@-webkit-keyframes fadeIn {\n  from {\n    opacity: 0;\n    visibility: hidden; }\n  to {\n    opacity: 1;\n    visibility: visible; } }\n\n@-moz-keyframes fadeIn {\n  from {\n    opacity: 0;\n    visibility: hidden; }\n  to {\n    opacity: 1;\n    visibility: visible; } }\n\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n    visibility: hidden; }\n  to {\n    opacity: 1;\n    visibility: visible; } }\n\n@-webkit-keyframes blink {\n  from, to {\n    color: transparent; }\n  50% {\n    color: #23c0ba; } }\n\n@-moz-keyframes blink {\n  from, to {\n    color: transparent; }\n  50% {\n    color: #23c0ba; } }\n\n@keyframes blink {\n  from, to {\n    color: transparent; }\n  50% {\n    color: #23c0ba; } }\n\nbody {\n  -webkit-font-feature-settings: \"kern\", \"liga\", \"pnum\";\n  -moz-font-feature-settings: \"kern\", \"liga\", \"pnum\";\n  -ms-font-feature-settings: \"kern\", \"liga\", \"pnum\";\n  font-feature-settings: \"kern\", \"liga\", \"pnum\";\n  -webkit-font-smoothing: antialiased; }\n\nlabel {\n  -webkit-font-feature-settings: \"kern\", \"liga\", \"pnum\";\n  -moz-font-feature-settings: \"kern\", \"liga\", \"pnum\";\n  -ms-font-feature-settings: \"kern\", \"liga\", \"pnum\";\n  font-feature-settings: \"kern\", \"liga\", \"pnum\";\n  -webkit-font-smoothing: antialiased; }\n\na:focus {\n  box-shadow: 0 0 3px rgba(50, 58, 69, 0.25), 0 0 7px rgba(50, 58, 69, 0.25);\n  outline: 0; }\n\nh1,\nh2,\nh3,\nh4,\nh5\nh6 {\n  color: #323a45;\n  font-family: \"TT Lakes\", \"Helvetica Neue\", \"Helvetica\", \"Roboto\", \"Arial\", sans-serif;\n  font-weight: 500; }\n  h1:first-child,\n  h2:first-child,\n  h3:first-child,\n  h4:first-child,\n  h5\nh6:first-child {\n    margin-top: 0; }\n\np {\n  color: #5b616b; }\n  @media screen and (min-width: 40em) {\n    p {\n      font-size: 1.1em; } }\n\n.usa-button,\n.usa-button.usa-button-big,\n.usa-button-primary.usa-button-big,\n.usa-button:visited.usa-button-big,\n.usa-button-primary:visited.usa-button-big,\nbutton.usa-button-big,\n[type=\"button\"].usa-button-big,\n[type=\"submit\"].usa-button-big,\n[type=\"reset\"].usa-button-big,\n[type=\"image\"].usa-button-big {\n  -webkit-transition: all 0.2s ease;\n  -moz-transition: all 0.2s ease;\n  transition: all 0.2s ease; }\n  .usa-button:hover,\n  .usa-button.usa-button-big:hover,\n  .usa-button-primary.usa-button-big:hover,\n  .usa-button:visited.usa-button-big:hover,\n  .usa-button-primary:visited.usa-button-big:hover,\n  button.usa-button-big:hover,\n  [type=\"button\"].usa-button-big:hover,\n  [type=\"submit\"].usa-button-big:hover,\n  [type=\"reset\"].usa-button-big:hover,\n  [type=\"image\"].usa-button-big:hover {\n    -webkit-transform: translateY(-2px);\n    -moz-transform: translateY(-2px);\n    -ms-transform: translateY(-2px);\n    -o-transform: translateY(-2px);\n    transform: translateY(-2px); }\n\nh3 {\n  display: none; }\n  @media screen and (min-width: 40em) {\n    h3 {\n      display: block; } }\n\n.menu-icon {\n  -webkit-transform: rotate(0deg);\n  -moz-transform: rotate(0deg);\n  -ms-transform: rotate(0deg);\n  -o-transform: rotate(0deg);\n  transform: rotate(0deg);\n  -webkit-transition: 0.3s ease-in-out;\n  -moz-transition: 0.3s ease-in-out;\n  transition: 0.3s ease-in-out;\n  cursor: pointer;\n  display: inline-block;\n  height: 16px;\n  position: relative;\n  width: 18px; }\n  @media screen and (min-width: 40em) {\n    .menu-icon {\n      display: none; } }\n  .menu-icon .line {\n    -webkit-transform: rotate(0deg);\n    -moz-transform: rotate(0deg);\n    -ms-transform: rotate(0deg);\n    -o-transform: rotate(0deg);\n    transform: rotate(0deg);\n    -webkit-transition: 0.2s ease-in-out;\n    -moz-transition: 0.2s ease-in-out;\n    transition: 0.2s ease-in-out;\n    background: white;\n    border-radius: 3px;\n    display: block;\n    height: 2px;\n    left: 0;\n    opacity: 1;\n    position: absolute;\n    width: 100%; }\n    .menu-icon .line:nth-child(1) {\n      top: 0; }\n    .menu-icon .line:nth-child(2), .menu-icon .line:nth-child(3) {\n      top: 6px; }\n    .menu-icon .line:nth-child(4) {\n      top: 12px; }\n\n.menu-text {\n  display: inline-block;\n  margin-left: 0.2em;\n  vertical-align: top; }\n\n.mobile-submenu {\n  font-size: 0.95em;\n  margin-bottom: 1.25em;\n  padding: 0.75em 0.5em 0.65em;\n  width: auto; }\n  @media screen and (min-width: 40em) {\n    .mobile-submenu {\n      display: none; } }\n\n.active .menu-icon .line:nth-child(1) {\n  left: 50%;\n  top: 6px;\n  width: 0%; }\n\n.active .menu-icon .line:nth-child(2) {\n  -webkit-transform: rotate(45deg);\n  -moz-transform: rotate(45deg);\n  -ms-transform: rotate(45deg);\n  -o-transform: rotate(45deg);\n  transform: rotate(45deg); }\n\n.active .menu-icon .line:nth-child(3) {\n  -webkit-transform: rotate(-45deg);\n  -moz-transform: rotate(-45deg);\n  -ms-transform: rotate(-45deg);\n  -o-transform: rotate(-45deg);\n  transform: rotate(-45deg); }\n\n.active .menu-icon .line:nth-child(4) {\n  left: 50%;\n  top: 6px;\n  width: 0%; }\n\n.active .sidebar-agencies-list {\n  display: block; }\n\n.sidebar-agencies-list {\n  background-color: #e3e4e6;\n  display: none;\n  margin-bottom: 2em;\n  padding: 1em;\n  position: relative; }\n  .sidebar-agencies-list::before {\n    border-bottom: 10px solid #e3e4e6;\n    border-left: 10px solid transparent;\n    border-right: 10px solid transparent;\n    content: \"\";\n    height: 0;\n    left: 1em;\n    position: absolute;\n    top: -10px;\n    width: 0; }\n    @media screen and (min-width: 40em) {\n      .sidebar-agencies-list::before {\n        display: none; } }\n  @media screen and (min-width: 40em) {\n    .sidebar-agencies-list {\n      background-color: transparent;\n      display: block;\n      margin-bottom: 0;\n      padding: 0; } }\n  .sidebar-agencies-list img {\n    left: 0.5em;\n    max-width: 1.5em;\n    position: absolute; }\n  .sidebar-agencies-list li {\n    border-top: 1px solid #d1d2d5;\n    font-size: 0.9em;\n    position: relative; }\n    .sidebar-agencies-list li:first-child {\n      border-top: 0; }\n  .sidebar-agencies-list span {\n    display: inline-block;\n    margin-left: 1.75em; }\n"

/***/ },

/***/ "./src/app/components/agency-sidebar/agency-sidebar.template.html":
/***/ function(module, exports) {

module.exports = "<h3>Agencies</h3>\n<nav [ngClass]=\"{active: menuActive | async}\" role=\"navigation\">\n  <button toggle-menu class=\"mobile-submenu\" role=\"button\" aria-pressed=\"false\">\n    <span class=\"menu-icon\">\n      <span class=\"line\"></span>\n      <span class=\"line\"></span>\n      <span class=\"line\"></span>\n      <span class=\"line\"></span>\n    </span>\n    <span class=\"menu-text\">\n      Agencies\n    </span>\n  </button>\n  <ul class=\"sidebar-agencies-list usa-sidenav-list\">\n    <li *ngFor=\"let agency of agencies\">\n      <a toggle-menu routerLink=\"{{agency.id}}\" routerLinkActive=\"usa-current\">\n        <img src=\"assets/img/logos/agencies/{{agency.id}}-50x50.png\" alt=\"{{agency.name}}\"/>\n        <span>\n          {{agency.name}}\n        </span>\n      </a>\n    </li>\n  </ul>\n</nav>\n"

/***/ },

/***/ "./src/app/components/agency-sidebar/index.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__("./src/app/components/agency-sidebar/agency-sidebar.component.ts"));


/***/ },

/***/ "./src/app/components/agency/agency.component.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/index.js");
var agency_1 = __webpack_require__("./src/app/services/agency/index.ts");
var seo_1 = __webpack_require__("./src/app/services/seo/index.ts");
var AgencyComponent = (function () {
    function AgencyComponent(agencyService, route, seoService) {
        this.agencyService = agencyService;
        this.route = route;
        this.seoService = seoService;
        this.hasRepos = false;
    }
    AgencyComponent.prototype.routeParams = function () {
        return this.route.params;
    };
    AgencyComponent.prototype.newRouteSubscription = function () {
        var _this = this;
        return this.routeParams().subscribe(function (response) {
            var id = response['id'];
            if (_this.agencyService.agencies) {
                //Agencies already fetched from API
                _this.setAgency(id);
            }
            else {
                //Set the list of Agencies to limit API requests
                _this.agencyService.getAgencies().subscribe(function (response) {
                    _this.agencyService.setAgencies(response['agencies']);
                    _this.setAgency(id);
                });
            }
        });
    };
    AgencyComponent.prototype.ngOnDestroy = function () {
        this.hasRepos = false;
        this.agency = null;
        if (this.agencySub)
            this.agencySub.unsubscribe();
    };
    AgencyComponent.prototype.ngOnInit = function () {
        this.agencySub = this.newRouteSubscription();
    };
    AgencyComponent.prototype.setAgency = function (id) {
        var agencyQuery = this.agencyService.getAgency('acronym', id);
        //Check for Agency before setting it
        if (agencyQuery) {
            this.searchQuery = 'agency.acronym=' + id;
            this.agency = this.agencyService.getAgency('acronym', id);
        }
    };
    return AgencyComponent;
}());
AgencyComponent = __decorate([
    core_1.Component({
        selector: 'agency',
        styles: [__webpack_require__("./src/app/components/agency/agency.styles.scss")],
        template: __webpack_require__("./src/app/components/agency/agency.template.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof agency_1.AgencyService !== "undefined" && agency_1.AgencyService) === "function" && _a || Object, typeof (_b = typeof router_1.ActivatedRoute !== "undefined" && router_1.ActivatedRoute) === "function" && _b || Object, typeof (_c = typeof seo_1.SeoService !== "undefined" && seo_1.SeoService) === "function" && _c || Object])
], AgencyComponent);
exports.AgencyComponent = AgencyComponent;
var _a, _b, _c;


/***/ },

/***/ "./src/app/components/agency/agency.styles.scss":
/***/ function(module, exports) {

module.exports = "html {\n  box-sizing: border-box; }\n\n*, *::after, *::before {\n  box-sizing: inherit; }\n\n@-webkit-keyframes fadeInUp {\n  from {\n    -webkit-transform: translateY(0.5em);\n    opacity: 0;\n    visibility: hidden; }\n  to {\n    -webkit-transform: translateY(0);\n    opacity: 1;\n    visibility: visible; } }\n\n@-moz-keyframes fadeInUp {\n  from {\n    -moz-transform: translateY(0.5em);\n    opacity: 0;\n    visibility: hidden; }\n  to {\n    -moz-transform: translateY(0);\n    opacity: 1;\n    visibility: visible; } }\n\n@keyframes fadeInUp {\n  from {\n    -webkit-transform: translateY(0.5em);\n    -moz-transform: translateY(0.5em);\n    -ms-transform: translateY(0.5em);\n    -o-transform: translateY(0.5em);\n    transform: translateY(0.5em);\n    opacity: 0;\n    visibility: hidden; }\n  to {\n    -webkit-transform: translateY(0);\n    -moz-transform: translateY(0);\n    -ms-transform: translateY(0);\n    -o-transform: translateY(0);\n    transform: translateY(0);\n    opacity: 1;\n    visibility: visible; } }\n\n@-webkit-keyframes fadeIn {\n  from {\n    opacity: 0;\n    visibility: hidden; }\n  to {\n    opacity: 1;\n    visibility: visible; } }\n\n@-moz-keyframes fadeIn {\n  from {\n    opacity: 0;\n    visibility: hidden; }\n  to {\n    opacity: 1;\n    visibility: visible; } }\n\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n    visibility: hidden; }\n  to {\n    opacity: 1;\n    visibility: visible; } }\n\n@-webkit-keyframes blink {\n  from, to {\n    color: transparent; }\n  50% {\n    color: #23c0ba; } }\n\n@-moz-keyframes blink {\n  from, to {\n    color: transparent; }\n  50% {\n    color: #23c0ba; } }\n\n@keyframes blink {\n  from, to {\n    color: transparent; }\n  50% {\n    color: #23c0ba; } }\n\nbody {\n  -webkit-font-feature-settings: \"kern\", \"liga\", \"pnum\";\n  -moz-font-feature-settings: \"kern\", \"liga\", \"pnum\";\n  -ms-font-feature-settings: \"kern\", \"liga\", \"pnum\";\n  font-feature-settings: \"kern\", \"liga\", \"pnum\";\n  -webkit-font-smoothing: antialiased; }\n\nlabel {\n  -webkit-font-feature-settings: \"kern\", \"liga\", \"pnum\";\n  -moz-font-feature-settings: \"kern\", \"liga\", \"pnum\";\n  -ms-font-feature-settings: \"kern\", \"liga\", \"pnum\";\n  font-feature-settings: \"kern\", \"liga\", \"pnum\";\n  -webkit-font-smoothing: antialiased; }\n\na:focus {\n  box-shadow: 0 0 3px rgba(50, 58, 69, 0.25), 0 0 7px rgba(50, 58, 69, 0.25);\n  outline: 0; }\n\nh1,\nh2,\nh3,\nh4,\nh5 h6 {\n  color: #323a45;\n  font-family: \"TT Lakes\", \"Helvetica Neue\", \"Helvetica\", \"Roboto\", \"Arial\", sans-serif;\n  font-weight: 500; }\n  h1:first-child,\n  h2:first-child,\n  h3:first-child,\n  h4:first-child,\n  h5 h6:first-child {\n    margin-top: 0; }\n\np {\n  color: #5b616b; }\n  @media screen and (min-width: 40em) {\n    p {\n      font-size: 1.1em; } }\n\n.usa-button,\n.usa-button.usa-button-big,\n.usa-button-primary.usa-button-big,\n.usa-button:visited.usa-button-big,\n.usa-button-primary:visited.usa-button-big,\nbutton.usa-button-big,\n[type=\"button\"].usa-button-big,\n[type=\"submit\"].usa-button-big,\n[type=\"reset\"].usa-button-big,\n[type=\"image\"].usa-button-big {\n  -webkit-transition: all 0.2s ease;\n  -moz-transition: all 0.2s ease;\n  transition: all 0.2s ease; }\n  .usa-button:hover,\n  .usa-button.usa-button-big:hover,\n  .usa-button-primary.usa-button-big:hover,\n  .usa-button:visited.usa-button-big:hover,\n  .usa-button-primary:visited.usa-button-big:hover,\n  button.usa-button-big:hover,\n  [type=\"button\"].usa-button-big:hover,\n  [type=\"submit\"].usa-button-big:hover,\n  [type=\"reset\"].usa-button-big:hover,\n  [type=\"image\"].usa-button-big:hover {\n    -webkit-transform: translateY(-2px);\n    -moz-transform: translateY(-2px);\n    -ms-transform: translateY(-2px);\n    -o-transform: translateY(-2px);\n    transform: translateY(-2px); }\n\n.repo a {\n  background-color: #ffffff;\n  border: 1px solid #e9e9e9;\n  box-sizing: border-box;\n  padding: 0.5em; }\n  @media screen and (min-width: 40em) {\n    .repo a {\n      padding: 1em; } }\n\n.agency-container h1 {\n  font-size: 1.8em;\n  margin-bottom: 0;\n  margin-top: 1em; }\n\n.repo a {\n  -webkit-transition: all 0.2s ease;\n  -moz-transition: all 0.2s ease;\n  transition: all 0.2s ease;\n  color: #5b616b;\n  display: block;\n  font-size: 0.95em;\n  margin-bottom: 1em;\n  text-decoration: none; }\n  .repo a:hover {\n    box-shadow: 0 3px 5px rgba(50, 58, 69, 0.25); }\n    .repo a:hover h3 {\n      color: #0071bc; }\n\n.repo p {\n  font-size: 0.95em;\n  margin: 0; }\n\n.repos-count {\n  margin: 0 0 1.5em; }\n\n.repo-features {\n  margin-top: 1em; }\n  .repo-features i {\n    color: #23c0ba; }\n  .repo-features li {\n    display: inline-block;\n    margin-right: 0.75em; }\n    .repo-features li:last-child {\n      margin-right: 0; }\n      .repo-features li:last-child i {\n        margin-right: 0.2em; }\n"

/***/ },

/***/ "./src/app/components/agency/agency.template.html":
/***/ function(module, exports) {

module.exports = "<div *ngIf=\"agency\" class=\"agency-container\">\n  <h1>{{ agency.name }}</h1>\n\n  <repo-list [query]=\"searchQuery\"></repo-list>\n</div>\n"

/***/ },

/***/ "./src/app/components/agency/index.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__("./src/app/components/agency/agency.component.ts"));


/***/ },

/***/ "./src/app/components/app/app.component.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var angulartics2_1 = __webpack_require__("./node_modules/angulartics2/dist/index.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/index.js");
var state_1 = __webpack_require__("./src/app/services/state/index.ts");
var AppComponent = (function () {
    function AppComponent(angulartics2, angulartics2Gtm, router, stateService) {
        this.angulartics2 = angulartics2;
        this.angulartics2Gtm = angulartics2Gtm;
        this.router = router;
        this.stateService = stateService;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.eventSub = this.router.events.subscribe(function (evt) {
            if (!(evt instanceof router_1.NavigationEnd)) {
                return;
            }
            document.body.scrollTop = 0;
        });
    };
    AppComponent.prototype.ngOnDestroy = function () {
        if (this.eventSub)
            this.eventSub.unsubscribe();
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'app',
        encapsulation: core_1.ViewEncapsulation.None,
        styles: [__webpack_require__("./src/app/components/app/app.style.scss")],
        template: __webpack_require__("./src/app/components/app/app.template.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof angulartics2_1.Angulartics2 !== "undefined" && angulartics2_1.Angulartics2) === "function" && _a || Object, typeof (_b = typeof angulartics2_1.Angulartics2GoogleTagManager !== "undefined" && angulartics2_1.Angulartics2GoogleTagManager) === "function" && _b || Object, typeof (_c = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _c || Object, typeof (_d = typeof state_1.StateService !== "undefined" && state_1.StateService) === "function" && _d || Object])
], AppComponent);
exports.AppComponent = AppComponent;
var _a, _b, _c, _d;


/***/ },

/***/ "./src/app/components/app/app.style.scss":
/***/ function(module, exports) {

module.exports = "html {\n  box-sizing: border-box; }\n\n*, *::after, *::before {\n  box-sizing: inherit; }\n\n@-webkit-keyframes fadeInUp {\n  from {\n    -webkit-transform: translateY(0.5em);\n    opacity: 0;\n    visibility: hidden; }\n  to {\n    -webkit-transform: translateY(0);\n    opacity: 1;\n    visibility: visible; } }\n\n@-moz-keyframes fadeInUp {\n  from {\n    -moz-transform: translateY(0.5em);\n    opacity: 0;\n    visibility: hidden; }\n  to {\n    -moz-transform: translateY(0);\n    opacity: 1;\n    visibility: visible; } }\n\n@keyframes fadeInUp {\n  from {\n    -webkit-transform: translateY(0.5em);\n    -moz-transform: translateY(0.5em);\n    -ms-transform: translateY(0.5em);\n    -o-transform: translateY(0.5em);\n    transform: translateY(0.5em);\n    opacity: 0;\n    visibility: hidden; }\n  to {\n    -webkit-transform: translateY(0);\n    -moz-transform: translateY(0);\n    -ms-transform: translateY(0);\n    -o-transform: translateY(0);\n    transform: translateY(0);\n    opacity: 1;\n    visibility: visible; } }\n\n@-webkit-keyframes fadeIn {\n  from {\n    opacity: 0;\n    visibility: hidden; }\n  to {\n    opacity: 1;\n    visibility: visible; } }\n\n@-moz-keyframes fadeIn {\n  from {\n    opacity: 0;\n    visibility: hidden; }\n  to {\n    opacity: 1;\n    visibility: visible; } }\n\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n    visibility: hidden; }\n  to {\n    opacity: 1;\n    visibility: visible; } }\n\n@-webkit-keyframes blink {\n  from, to {\n    color: transparent; }\n  50% {\n    color: #23c0ba; } }\n\n@-moz-keyframes blink {\n  from, to {\n    color: transparent; }\n  50% {\n    color: #23c0ba; } }\n\n@keyframes blink {\n  from, to {\n    color: transparent; }\n  50% {\n    color: #23c0ba; } }\n\nbody {\n  -webkit-font-feature-settings: \"kern\", \"liga\", \"pnum\";\n  -moz-font-feature-settings: \"kern\", \"liga\", \"pnum\";\n  -ms-font-feature-settings: \"kern\", \"liga\", \"pnum\";\n  font-feature-settings: \"kern\", \"liga\", \"pnum\";\n  -webkit-font-smoothing: antialiased; }\n\nlabel {\n  -webkit-font-feature-settings: \"kern\", \"liga\", \"pnum\";\n  -moz-font-feature-settings: \"kern\", \"liga\", \"pnum\";\n  -ms-font-feature-settings: \"kern\", \"liga\", \"pnum\";\n  font-feature-settings: \"kern\", \"liga\", \"pnum\";\n  -webkit-font-smoothing: antialiased; }\n\na:focus {\n  box-shadow: 0 0 3px rgba(50, 58, 69, 0.25), 0 0 7px rgba(50, 58, 69, 0.25);\n  outline: 0; }\n\nh1,\nh2,\nh3,\nh4,\nh5 h6 {\n  color: #323a45;\n  font-family: \"TT Lakes\", \"Helvetica Neue\", \"Helvetica\", \"Roboto\", \"Arial\", sans-serif;\n  font-weight: 500; }\n  h1:first-child,\n  h2:first-child,\n  h3:first-child,\n  h4:first-child,\n  h5 h6:first-child {\n    margin-top: 0; }\n\np {\n  color: #5b616b; }\n  @media screen and (min-width: 40em) {\n    p {\n      font-size: 1.1em; } }\n\n.usa-button,\n.usa-button.usa-button-big,\n.usa-button-primary.usa-button-big,\n.usa-button:visited.usa-button-big,\n.usa-button-primary:visited.usa-button-big,\nbutton.usa-button-big,\n[type=\"button\"].usa-button-big,\n[type=\"submit\"].usa-button-big,\n[type=\"reset\"].usa-button-big,\n[type=\"image\"].usa-button-big {\n  -webkit-transition: all 0.2s ease;\n  -moz-transition: all 0.2s ease;\n  transition: all 0.2s ease; }\n  .usa-button:hover,\n  .usa-button.usa-button-big:hover,\n  .usa-button-primary.usa-button-big:hover,\n  .usa-button:visited.usa-button-big:hover,\n  .usa-button-primary:visited.usa-button-big:hover,\n  button.usa-button-big:hover,\n  [type=\"button\"].usa-button-big:hover,\n  [type=\"submit\"].usa-button-big:hover,\n  [type=\"reset\"].usa-button-big:hover,\n  [type=\"image\"].usa-button-big:hover {\n    -webkit-transform: translateY(-2px);\n    -moz-transform: translateY(-2px);\n    -ms-transform: translateY(-2px);\n    -o-transform: translateY(-2px);\n    transform: translateY(-2px); }\n\n.subnav {\n  background-color: #f1f1f1; }\n  .subnav a {\n    color: #5b616b;\n    display: inline-block;\n    font-size: 0.95em;\n    font-weight: bold;\n    padding: 0.75em 1.25em;\n    text-decoration: none; }\n    .subnav a:hover {\n      background-color: #485568;\n      color: #ffffff; }\n    .subnav a.active {\n      background-color: #485568;\n      color: #ffffff; }\n  .subnav li {\n    display: inline-block;\n    margin-right: 1.5em; }\n    .subnav li i {\n      font-size: 0.9em;\n      margin-left: 0.4em;\n      vertical-align: middle; }\n  .subnav .active a {\n    background-color: #485568;\n    color: #ffffff; }\n\n.home .app-logo .cls-1 {\n  fill: #ffffff; }\n\n.home .app-navigation {\n  background-color: #005289; }\n  .home .app-navigation a {\n    color: #d0d6df; }\n    .home .app-navigation a:focus {\n      box-shadow: 0 0 3px rgba(255, 255, 255, 0.25), 0 0 7px rgba(255, 255, 255, 0.25); }\n    .home .app-navigation a:hover {\n      color: #ffffff; }\n\n.agency-logos li {\n  display: inline-block;\n  margin-right: 0.5em; }\n\n.agency-logos .gsa,\n.agency-logos .pif {\n  max-width: 2.75em; }\n\n.agency-logos .whitehouse {\n  max-width: 4em; }\n\n.app-footer {\n  background-color: #e4e4e4;\n  padding: 2em 0 3em; }\n  .app-footer label {\n    color: #4f555d;\n    font-size: 0.8em;\n    margin-top: 0; }\n  .app-footer p {\n    color: #323a45;\n    font-size: 0.9em;\n    margin-top: 0; }\n  .app-footer .email-signup {\n    margin-top: 2em; }\n    @media screen and (min-width: 40em) {\n      .app-footer .email-signup {\n        margin-top: 0; } }\n  .app-footer .email {\n    border: 1px solid #8e949e;\n    font-size: 0.9em; }\n  .app-footer .submit {\n    -webkit-transition: all 0.2s ease;\n    -moz-transition: all 0.2s ease;\n    transition: all 0.2s ease;\n    background-color: #42519F;\n    font-size: 0.9em;\n    margin: 0.75em 0 0; }\n    .app-footer .submit:hover {\n      -webkit-transform: translateY(-2px);\n      -moz-transform: translateY(-2px);\n      -ms-transform: translateY(-2px);\n      -o-transform: translateY(-2px);\n      transform: translateY(-2px);\n      background-color: #333f7b; }\n\n.app-links {\n  display: block;\n  float: right; }\n  .app-links a {\n    color: #323a45;\n    text-decoration: none; }\n    .app-links a:hover {\n      border-bottom: 3px solid #23c0ba;\n      color: #1c4772; }\n    .app-links a.active {\n      color: #1c4772;\n      font-weight: bold; }\n  .app-links li {\n    display: inline-block;\n    font-size: 1em;\n    margin-left: 1em; }\n\n.app-logo {\n  float: left;\n  width: 6em; }\n  .app-logo a {\n    display: block; }\n    .app-logo a:focus {\n      box-shadow: none;\n      outline: 0; }\n  .app-logo svg {\n    height: 100%;\n    left: 0;\n    position: absolute;\n    top: 0;\n    width: 100%; }\n  .app-logo .svg-container {\n    height: 0;\n    padding-top: 29%;\n    position: relative;\n    width: 100%; }\n\n.app-navigation {\n  font-size: 0.8em;\n  padding: 1.75em 0; }\n  @media screen and (min-width: 30.0625em) {\n    .app-navigation {\n      font-size: 1em; } }\n  .app-navigation a {\n    text-decoration: none; }\n\n.footer-links {\n  margin-bottom: 1em; }\n  .footer-links a {\n    color: #5b616b;\n    font-size: 0.9em;\n    text-decoration: none; }\n    .footer-links a:hover {\n      border-bottom: 3px solid #23c0ba;\n      color: #1c4772; }\n  .footer-links li {\n    display: inline-block;\n    margin-right: 1em; }\n\n.usa-disclaimer {\n  height: auto;\n  padding: 0.3em 0; }\n  .usa-disclaimer a {\n    color: #1c4772;\n    font-weight: bold;\n    text-decoration: none; }\n  .usa-disclaimer img {\n    max-width: 1.5em; }\n  .usa-disclaimer .usa-disclaimer-stage {\n    margin-bottom: 0;\n    margin-top: 0; }\n"

/***/ },

/***/ "./src/app/components/app/app.template.html":
/***/ function(module, exports) {

module.exports = "<div class=\"app-container {{ stateService.state.section }}\">\n  <header role=\"banner\">\n    <div class=\"usa-disclaimer\">\n      <div class=\"usa-grid\">\n        <span class=\"usa-disclaimer-official\">\n          <img src=\"assets/img/us_flag_small.png\" alt=\"U.S. flag\"/>\n          An official website of the United States Government\n        </span>\n        <span class=\"usa-disclaimer-stage\">\n          This site is currently in beta.\n        </span>\n      </div>\n    </div>\n\n    <nav class=\"app-navigation\" role=\"navigation\">\n      <div class=\"usa-grid\">\n        <div class=\"app-logo\">\n          <a [routerLink]=\" ['./'] \">\n            <div class=\"svg-container\">\n              <svg id=\"Layer_1\" data-name=\"Layer 1\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 628.17 152.05\"><defs><style>.cls-1{fill:#485567;}.cls-2{fill:#0ac0bb;}</style></defs><title>code.gov</title><path class=\"cls-1\" d=\"M73,113.49q0-5.11,5.19-5.11H90.61q5.19,0,5.19,5.15v4.12q0,33-33.21,33h-28q-33.21,0-33.21-32.9V74.53q0-32.9,33.21-32.9h28q33.21,0,33.21,32.95V78.7q0,5.15-5.19,5.15H78.16Q73,83.85,73,78.74V75.67q0-6.13-3.63-9.71t-9.86-3.58H37.68q-6.23,0-9.86,3.58t-3.63,9.71v40.88q0,6.13,3.63,9.71t9.86,3.58H59.48q6.23,0,9.86-3.58T73,116.56Z\"/><path class=\"cls-1\" d=\"M120.71,74.53q0-32.9,33.21-32.9H184q33.21,0,33.21,32.9v43.18q0,32.89-33.21,32.9h-30.1q-33.21,0-33.21-32.9Zm22.83,42q0,6.13,3.63,9.71t9.86,3.58H180.9q6.23,0,9.86-3.58t3.63-9.71V75.68q0-6.13-3.63-9.71t-9.86-3.58H157q-6.23,0-9.86,3.58t-3.63,9.71Z\"/><path class=\"cls-1\" d=\"M315.81,42.67V9.33q0-5.05,5.19-5.05h12.45q5.19,0,5.19,5.19V144.38q0,5.19-5.19,5.19H321q-5.19,0-5.19-5.43V138.7h-1a19.33,19.33,0,0,1-4.57,6,28.11,28.11,0,0,1-6.43,4.07A22.58,22.58,0,0,1,294,150.6H277.41q-33.21,0-33.21-33.21V75.88q0-33.2,33.21-33.21Zm0,20.76H280.52q-6.23,0-9.86,3.63T267,76.92v39.44q0,6.23,3.63,9.86t9.86,3.63h17.64q7.88,0,12.77-4.88t4.88-12.77Z\"/><path class=\"cls-1\" d=\"M439.3,118.43q0-5.19,5.19-5.19h12.45q5.19,0,5.19,5.19,0,15.57-8.41,23.87t-24.8,8.3h-28q-33.21,0-33.21-32.9V74.53q0-32.9,33.21-32.9h28q33.21,0,33.21,32.66V98.8q0,5.11-5.19,5.11H390.53v12.45q0,6.23,3.63,9.86t9.86,3.63h23.87Q439.3,129.85,439.3,118.43ZM390.53,84.19H439.3V75.27q0-5.95-3.63-9.41t-9.86-3.47H404q-6.23,0-9.86,3.47t-3.63,9.41Z\"/><rect class=\"cls-2\" x=\"485.66\" y=\"126.41\" width=\"139.23\" height=\"24.13\" rx=\"3\" ry=\"3\"/></svg>\n            </div>\n          </a>\n        </div>\n        <ul class=\"app-links usa-unstyled-list\">\n          <li>\n            <a routerLink=\"explore-code\" routerLinkActive=\"active\">\n              Explore Code\n            </a>\n          </li>\n          <li>\n            <a routerLink=\"policy-guide\" routerLinkActive=\"active\">\n              Policy Info\n            </a>\n          </li>\n        </ul>\n      </div>\n    </nav>\n  </header>\n\n  <main role=\"main\">\n    <router-outlet></router-outlet>\n  </main>\n\n  <footer class=\"app-footer\" role=\"contentinfo\">\n    <div class=\"usa-grid\">\n      <div class=\"usa-width-two-thirds\">\n        <div class=\"row\">\n          <nav class=\"footer-links\">\n            <ul class=\"usa-unstyled-list\">\n              <li>\n                <a routerLink=\"privacy-policy\">Privacy Policy</a>\n              </li>\n              <li>\n                <a href=\"https://github.com/presidential-innovation-fellows/code-gov-web\" target=\"_blank\" rel=\"noopener\">Visit Project Page</a>\n              </li>\n            </ul>\n          </nav>\n        </div>\n        <div class=\"row\">\n          <ul class=\"agency-logos usa-unstyled-list\">\n            <li class=\"whitehouse\">\n              <a href=\"https://whitehouse.gov\" target=\"_blank\" rel=\"noopener\">\n                <img src=\"assets/img/logos/whitehouse.png\" alt=\"The White House\">\n              </a>\n            </li>\n            <li class=\"pif\">\n              <a href=\"https://presidentialinnovationfellows.gov/\" target=\"_blank\" rel=\"noopener\">\n                <img src=\"assets/img/logos/PIF.png\" alt=\"Presidential Innovation Fellows\">\n              </a>\n            </li>\n            <li class=\"gsa\">\n              <a href=\"//www.gsa.gov\" target=\"_blank\" rel=\"noopener\">\n                <img src=\"assets/img/logos/GSA.png\" alt=\"General Services Administration\">\n              </a>\n            </li>\n          </ul>\n        </div>\n      </div>\n    </div>\n  </footer>\n</div>\n"

/***/ },

/***/ "./src/app/components/app/index.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__("./src/app/components/app/app.component.ts"));


/***/ },

/***/ "./src/app/components/autocomplete-result/autocomplete-result.component.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var agency_1 = __webpack_require__("./src/app/services/agency/index.ts");
var term_1 = __webpack_require__("./src/app/services/term/index.ts");
var AutocompleteResultComponent = (function () {
    function AutocompleteResultComponent(agencyService, termService) {
        this.agencyService = agencyService;
        this.termService = termService;
        this.resourceLoaded = false;
        this.resource = {};
    }
    AutocompleteResultComponent.prototype.filterTermType = function (position) {
        var splitTermType = this.result.term_type.split('.');
        return splitTermType[position];
    };
    AutocompleteResultComponent.prototype.newAgenciesQuery = function () {
        return this.agencyService.getAgencies();
    };
    AutocompleteResultComponent.prototype.newAgenciesSubscription = function () {
        var _this = this;
        return this.newAgenciesQuery().subscribe(function (response) {
            if (response['agencies'].length > 0) {
                _this.agencyService.setAgencies(response['agencies']);
                _this.agency = _this.agencyService.getAgency(_this.resource['agencyAttribute'], _this.result.term);
                _this.resource['name'] = _this.agency['name'];
                if (_this.termService.uniqueTerm(_this.resource['name'])) {
                    _this.termService.addTerm(_this.resource);
                    _this.resource['iconId'] = 'assets/img/logos/agencies/' + _this.agency['acronym'] + '-50x50.png';
                    _this.resource['imageIcon'] = true;
                    _this.resource['url'] = '/agencies/' + _this.agency['acronym'];
                    _this.resourceLoaded = true;
                }
            }
        });
    };
    AutocompleteResultComponent.prototype.getResourceAttributes = function (resource) {
        switch (resource.termType) {
            case 'agency':
                this.setAgencyAttribute();
                if (typeof this.agenciesSub === 'undefined') {
                    this.agenciesSub = this.newAgenciesSubscription();
                }
                else {
                    this.agency = this.agencyService.getAgency(this.resource['agencyAttribute'], this.result.term);
                }
                break;
            default:
                //Do nothing & hide the resource?
                break;
        }
    };
    AutocompleteResultComponent.prototype.ngOnDestroy = function () {
        if (typeof this.agenciesSub !== 'undefined') {
            this.agenciesSub.unsubscribe();
        }
    };
    AutocompleteResultComponent.prototype.ngOnInit = function () {
        this.setTermType();
        this.getResourceAttributes(this.resource);
    };
    AutocompleteResultComponent.prototype.setAgencyAttribute = function () {
        this.resource['agencyAttribute'] = this.filterTermType(1);
    };
    AutocompleteResultComponent.prototype.setTermType = function () {
        this.resource['termType'] = this.filterTermType(0);
    };
    return AutocompleteResultComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], AutocompleteResultComponent.prototype, "result", void 0);
AutocompleteResultComponent = __decorate([
    core_1.Component({
        selector: 'autocomplete-result',
        styles: [__webpack_require__("./src/app/components/autocomplete-result/autocomplete-result.style.scss")],
        template: __webpack_require__("./src/app/components/autocomplete-result/autocomplete-result.template.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof agency_1.AgencyService !== "undefined" && agency_1.AgencyService) === "function" && _a || Object, typeof (_b = typeof term_1.TermService !== "undefined" && term_1.TermService) === "function" && _b || Object])
], AutocompleteResultComponent);
exports.AutocompleteResultComponent = AutocompleteResultComponent;
var _a, _b;


/***/ },

/***/ "./src/app/components/autocomplete-result/autocomplete-result.style.scss":
/***/ function(module, exports) {

module.exports = ".autocomplete-result {\n  display: block;\n  padding: 0.5em;\n  text-decoration: none;\n  text-transform: none; }\n  .autocomplete-result::after {\n    clear: both;\n    content: \"\";\n    display: table; }\n  .autocomplete-result:hover {\n    background-color: #7baddf; }\n\n.icon {\n  float: left;\n  height: 2em;\n  margin-right: 0.5em;\n  width: 2em; }\n  .icon img {\n    height: auto;\n    width: 100%; }\n\n.info {\n  line-height: 3em;\n  overflow: hidden;\n  vertical-align: center; }\n  .info p {\n    color: #323a45;\n    font-size: 0.9em;\n    margin: 0; }\n"

/***/ },

/***/ "./src/app/components/autocomplete-result/autocomplete-result.template.html":
/***/ function(module, exports) {

module.exports = "<a *ngIf=\"resourceLoaded\" class=\"autocomplete-result\" routerLink=\"{{resource.url}}\">\n  <div *ngIf=\"resource.imageIcon\" class=\"icon\">\n    <img src=\"{{resource.iconId}}\">\n  </div>\n  <div *ngIf=\"!resource.imageIcon\" class=\"icon\">\n    <i class=\"fa {{resource.iconId}}\"></i>\n  </div>\n  <div class=\"info\">\n    <p class=\"name\">{{resource.name}}</p>\n  </div>\n</a>\n"

/***/ },

/***/ "./src/app/components/autocomplete-result/index.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__("./src/app/components/autocomplete-result/autocomplete-result.component.ts"));


/***/ },

/***/ "./src/app/components/autocomplete/autocomplete.component.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var term_1 = __webpack_require__("./src/app/services/term/index.ts");
var AutocompleteComponent = (function () {
    function AutocompleteComponent(termService) {
        this.termService = termService;
        this.hasResults = false;
    }
    AutocompleteComponent.prototype.newTermsSubscription = function () {
        var _this = this;
        return this.newTermQuery().subscribe(function (response) {
            if (response['terms'].length > 0 && _this.results != response['terms']) {
                _this.termService.resetTerms();
                _this.results = response['terms'];
                _this.hasResults = true;
            }
        });
    };
    AutocompleteComponent.prototype.newTermQuery = function () {
        return this.termService.getTerms('term=' + this.query + '&size=4&term_type=agency.acronym&term_type=agency.name');
    };
    AutocompleteComponent.prototype.ngOnChanges = function () {
        this.termsSub = this.newTermsSubscription();
    };
    AutocompleteComponent.prototype.ngOnDestroy = function () {
        if (typeof this.termsSub !== 'undefined') {
            this.termsSub.unsubscribe();
        }
    };
    return AutocompleteComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], AutocompleteComponent.prototype, "query", void 0);
AutocompleteComponent = __decorate([
    core_1.Component({
        selector: 'autocomplete',
        styles: [__webpack_require__("./src/app/components/autocomplete/autocomplete.style.scss")],
        template: __webpack_require__("./src/app/components/autocomplete/autocomplete.template.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof term_1.TermService !== "undefined" && term_1.TermService) === "function" && _a || Object])
], AutocompleteComponent);
exports.AutocompleteComponent = AutocompleteComponent;
var _a;


/***/ },

/***/ "./src/app/components/autocomplete/autocomplete.style.scss":
/***/ function(module, exports) {

module.exports = "li {\n  text-align: left; }\n\n.autocomplete {\n  background-color: #ffffff;\n  border: 1px solid #307ac4;\n  position: absolute;\n  top: 0.25em;\n  width: 100%;\n  z-index: 1000; }\n"

/***/ },

/***/ "./src/app/components/autocomplete/autocomplete.template.html":
/***/ function(module, exports) {

module.exports = "<div *ngIf=\"hasResults\" class=\"autocomplete\">\n  <ul class=\"usa-unstyled-list\">\n    <li *ngFor=\"let result of results\">\n      <autocomplete-result [result]=\"result\"></autocomplete-result>\n    </li>\n  </ul>\n</div>\n"

/***/ },

/***/ "./src/app/components/autocomplete/index.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__("./src/app/components/autocomplete/autocomplete.component.ts"));


/***/ },

/***/ "./src/app/components/explore-code/explore-code.component.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var state_1 = __webpack_require__("./src/app/services/state/index.ts");
var ExploreCodeComponent = (function () {
    function ExploreCodeComponent(stateService) {
        this.stateService = stateService;
        this.stateService.set('section', 'explore-code');
    }
    return ExploreCodeComponent;
}());
ExploreCodeComponent = __decorate([
    core_1.Component({
        selector: 'explore-code',
        styles: [__webpack_require__("./src/app/components/explore-code/explore-code.style.scss")],
        template: __webpack_require__("./src/app/components/explore-code/explore-code.template.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof state_1.StateService !== "undefined" && state_1.StateService) === "function" && _a || Object])
], ExploreCodeComponent);
exports.ExploreCodeComponent = ExploreCodeComponent;
var _a;


/***/ },

/***/ "./src/app/components/explore-code/explore-code.style.scss":
/***/ function(module, exports) {

module.exports = "html {\n  box-sizing: border-box; }\n\n*, *::after, *::before {\n  box-sizing: inherit; }\n\n@-webkit-keyframes fadeInUp {\n  from {\n    -webkit-transform: translateY(0.5em);\n    opacity: 0;\n    visibility: hidden; }\n  to {\n    -webkit-transform: translateY(0);\n    opacity: 1;\n    visibility: visible; } }\n\n@-moz-keyframes fadeInUp {\n  from {\n    -moz-transform: translateY(0.5em);\n    opacity: 0;\n    visibility: hidden; }\n  to {\n    -moz-transform: translateY(0);\n    opacity: 1;\n    visibility: visible; } }\n\n@keyframes fadeInUp {\n  from {\n    -webkit-transform: translateY(0.5em);\n    -moz-transform: translateY(0.5em);\n    -ms-transform: translateY(0.5em);\n    -o-transform: translateY(0.5em);\n    transform: translateY(0.5em);\n    opacity: 0;\n    visibility: hidden; }\n  to {\n    -webkit-transform: translateY(0);\n    -moz-transform: translateY(0);\n    -ms-transform: translateY(0);\n    -o-transform: translateY(0);\n    transform: translateY(0);\n    opacity: 1;\n    visibility: visible; } }\n\n@-webkit-keyframes fadeIn {\n  from {\n    opacity: 0;\n    visibility: hidden; }\n  to {\n    opacity: 1;\n    visibility: visible; } }\n\n@-moz-keyframes fadeIn {\n  from {\n    opacity: 0;\n    visibility: hidden; }\n  to {\n    opacity: 1;\n    visibility: visible; } }\n\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n    visibility: hidden; }\n  to {\n    opacity: 1;\n    visibility: visible; } }\n\n@-webkit-keyframes blink {\n  from, to {\n    color: transparent; }\n  50% {\n    color: #23c0ba; } }\n\n@-moz-keyframes blink {\n  from, to {\n    color: transparent; }\n  50% {\n    color: #23c0ba; } }\n\n@keyframes blink {\n  from, to {\n    color: transparent; }\n  50% {\n    color: #23c0ba; } }\n\nbody {\n  -webkit-font-feature-settings: \"kern\", \"liga\", \"pnum\";\n  -moz-font-feature-settings: \"kern\", \"liga\", \"pnum\";\n  -ms-font-feature-settings: \"kern\", \"liga\", \"pnum\";\n  font-feature-settings: \"kern\", \"liga\", \"pnum\";\n  -webkit-font-smoothing: antialiased; }\n\nlabel {\n  -webkit-font-feature-settings: \"kern\", \"liga\", \"pnum\";\n  -moz-font-feature-settings: \"kern\", \"liga\", \"pnum\";\n  -ms-font-feature-settings: \"kern\", \"liga\", \"pnum\";\n  font-feature-settings: \"kern\", \"liga\", \"pnum\";\n  -webkit-font-smoothing: antialiased; }\n\na:focus {\n  box-shadow: 0 0 3px rgba(50, 58, 69, 0.25), 0 0 7px rgba(50, 58, 69, 0.25);\n  outline: 0; }\n\nh1,\nh2,\nh3,\nh4,\nh5\nh6 {\n  color: #323a45;\n  font-family: \"TT Lakes\", \"Helvetica Neue\", \"Helvetica\", \"Roboto\", \"Arial\", sans-serif;\n  font-weight: 500; }\n  h1:first-child,\n  h2:first-child,\n  h3:first-child,\n  h4:first-child,\n  h5\nh6:first-child {\n    margin-top: 0; }\n\np {\n  color: #5b616b; }\n  @media screen and (min-width: 40em) {\n    p {\n      font-size: 1.1em; } }\n\n.usa-button,\n.usa-button.usa-button-big,\n.usa-button-primary.usa-button-big,\n.usa-button:visited.usa-button-big,\n.usa-button-primary:visited.usa-button-big,\nbutton.usa-button-big,\n[type=\"button\"].usa-button-big,\n[type=\"submit\"].usa-button-big,\n[type=\"reset\"].usa-button-big,\n[type=\"image\"].usa-button-big {\n  -webkit-transition: all 0.2s ease;\n  -moz-transition: all 0.2s ease;\n  transition: all 0.2s ease; }\n  .usa-button:hover,\n  .usa-button.usa-button-big:hover,\n  .usa-button-primary.usa-button-big:hover,\n  .usa-button:visited.usa-button-big:hover,\n  .usa-button-primary:visited.usa-button-big:hover,\n  button.usa-button-big:hover,\n  [type=\"button\"].usa-button-big:hover,\n  [type=\"submit\"].usa-button-big:hover,\n  [type=\"reset\"].usa-button-big:hover,\n  [type=\"image\"].usa-button-big:hover {\n    -webkit-transform: translateY(-2px);\n    -moz-transform: translateY(-2px);\n    -ms-transform: translateY(-2px);\n    -o-transform: translateY(-2px);\n    transform: translateY(-2px); }\n\nh1 {\n  text-align: center; }\n\n@media screen and (min-width: 40em) {\n  .content-col {\n    float: left;\n    display: block;\n    margin-right: 2.35765%;\n    width: 74.41059%; }\n    .content-col:last-child {\n      margin-right: 0; } }\n\n.explore-code-content {\n  background-color: #f6f6f6;\n  padding: 0.75em 0 3em; }\n  @media screen and (min-width: 40em) {\n    .explore-code-content {\n      padding: 2em 0 3em; } }\n\n.explore-code-nav {\n  background-color: #e4e4e4;\n  padding: 0.5em 0; }\n"

/***/ },

/***/ "./src/app/components/explore-code/explore-code.template.html":
/***/ function(module, exports) {

module.exports = "<div class=\"explore-code-content\">\n  <div class=\"usa-grid\">\n    <h1>Discover Thousands of Repos</h1>\n    <repos-search></repos-search>\n    <a routerLink=\"/agencies\">Explore By Agency</a>\n  </div>\n</div>\n"

/***/ },

/***/ "./src/app/components/explore-code/index.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__("./src/app/components/explore-code/explore-code.component.ts"));


/***/ },

/***/ "./src/app/components/four-oh-four/four-oh-four.component.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var state_1 = __webpack_require__("./src/app/services/state/index.ts");
var FourOhFourComponent = (function () {
    function FourOhFourComponent(stateService) {
        this.stateService = stateService;
        this.stateService.set('section', 'four-oh-four');
    }
    return FourOhFourComponent;
}());
FourOhFourComponent = __decorate([
    core_1.Component({
        selector: 'four-oh-four',
        styles: [__webpack_require__("./src/app/components/four-oh-four/four-oh-four.style.scss")],
        template: __webpack_require__("./src/app/components/four-oh-four/four-oh-four.template.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof state_1.StateService !== "undefined" && state_1.StateService) === "function" && _a || Object])
], FourOhFourComponent);
exports.FourOhFourComponent = FourOhFourComponent;
var _a;


/***/ },

/***/ "./src/app/components/four-oh-four/four-oh-four.style.scss":
/***/ function(module, exports) {

module.exports = ".four-oh-four-container {\n  padding-bottom: 5em;\n  padding-top: 5em; }\n"

/***/ },

/***/ "./src/app/components/four-oh-four/four-oh-four.template.html":
/***/ function(module, exports) {

module.exports = "<div class=\"usa-grid four-oh-four-container\">\n  <h1>We can’t find the page you’re looking for.</h1>\n  <p>\n    If you’re looking for code, <a routerLink=\"/explore-code\">start here</a>.\n  </p>\n  <p>\n    Otherwise, check out how you can implment the Federal Open Source Code Policy <a routerLink=\"/policy-guide\">here</a>.\n  </p>\n</div>\n"

/***/ },

/***/ "./src/app/components/four-oh-four/index.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__("./src/app/components/four-oh-four/four-oh-four.component.ts"));


/***/ },

/***/ "./src/app/components/home/banner-art/banner-art.component.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var BannerArtComponent = (function () {
    function BannerArtComponent() {
    }
    return BannerArtComponent;
}());
BannerArtComponent = __decorate([
    core_1.Component({
        // The selector is what angular internally uses
        // for `document.querySelectorAll(selector)` in our index.html
        // where, in this case, selector is the string 'home'
        selector: 'banner-art',
        styles: [__webpack_require__("./src/app/components/home/banner-art/banner-art.style.scss")],
        template: __webpack_require__("./src/app/components/home/banner-art/banner-art.template.html")
    }),
    __metadata("design:paramtypes", [])
], BannerArtComponent);
exports.BannerArtComponent = BannerArtComponent;


/***/ },

/***/ "./src/app/components/home/banner-art/banner-art.style.scss":
/***/ function(module, exports) {

module.exports = "html {\n  box-sizing: border-box; }\n\n*, *::after, *::before {\n  box-sizing: inherit; }\n\n@-webkit-keyframes fadeInUp {\n  from {\n    -webkit-transform: translateY(0.5em);\n    opacity: 0;\n    visibility: hidden; }\n  to {\n    -webkit-transform: translateY(0);\n    opacity: 1;\n    visibility: visible; } }\n\n@-moz-keyframes fadeInUp {\n  from {\n    -moz-transform: translateY(0.5em);\n    opacity: 0;\n    visibility: hidden; }\n  to {\n    -moz-transform: translateY(0);\n    opacity: 1;\n    visibility: visible; } }\n\n@keyframes fadeInUp {\n  from {\n    -webkit-transform: translateY(0.5em);\n    -moz-transform: translateY(0.5em);\n    -ms-transform: translateY(0.5em);\n    -o-transform: translateY(0.5em);\n    transform: translateY(0.5em);\n    opacity: 0;\n    visibility: hidden; }\n  to {\n    -webkit-transform: translateY(0);\n    -moz-transform: translateY(0);\n    -ms-transform: translateY(0);\n    -o-transform: translateY(0);\n    transform: translateY(0);\n    opacity: 1;\n    visibility: visible; } }\n\n@-webkit-keyframes fadeIn {\n  from {\n    opacity: 0;\n    visibility: hidden; }\n  to {\n    opacity: 1;\n    visibility: visible; } }\n\n@-moz-keyframes fadeIn {\n  from {\n    opacity: 0;\n    visibility: hidden; }\n  to {\n    opacity: 1;\n    visibility: visible; } }\n\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n    visibility: hidden; }\n  to {\n    opacity: 1;\n    visibility: visible; } }\n\n@-webkit-keyframes blink {\n  from, to {\n    color: transparent; }\n  50% {\n    color: #23c0ba; } }\n\n@-moz-keyframes blink {\n  from, to {\n    color: transparent; }\n  50% {\n    color: #23c0ba; } }\n\n@keyframes blink {\n  from, to {\n    color: transparent; }\n  50% {\n    color: #23c0ba; } }\n\nbody {\n  -webkit-font-feature-settings: \"kern\", \"liga\", \"pnum\";\n  -moz-font-feature-settings: \"kern\", \"liga\", \"pnum\";\n  -ms-font-feature-settings: \"kern\", \"liga\", \"pnum\";\n  font-feature-settings: \"kern\", \"liga\", \"pnum\";\n  -webkit-font-smoothing: antialiased; }\n\nlabel {\n  -webkit-font-feature-settings: \"kern\", \"liga\", \"pnum\";\n  -moz-font-feature-settings: \"kern\", \"liga\", \"pnum\";\n  -ms-font-feature-settings: \"kern\", \"liga\", \"pnum\";\n  font-feature-settings: \"kern\", \"liga\", \"pnum\";\n  -webkit-font-smoothing: antialiased; }\n\na:focus {\n  box-shadow: 0 0 3px rgba(50, 58, 69, 0.25), 0 0 7px rgba(50, 58, 69, 0.25);\n  outline: 0; }\n\nh1,\nh2,\nh3,\nh4,\nh5\nh6 {\n  color: #323a45;\n  font-family: \"TT Lakes\", \"Helvetica Neue\", \"Helvetica\", \"Roboto\", \"Arial\", sans-serif;\n  font-weight: 500; }\n  h1:first-child,\n  h2:first-child,\n  h3:first-child,\n  h4:first-child,\n  h5\nh6:first-child {\n    margin-top: 0; }\n\np {\n  color: #5b616b; }\n  @media screen and (min-width: 40em) {\n    p {\n      font-size: 1.1em; } }\n\n.usa-button,\n.usa-button.usa-button-big,\n.usa-button-primary.usa-button-big,\n.usa-button:visited.usa-button-big,\n.usa-button-primary:visited.usa-button-big,\nbutton.usa-button-big,\n[type=\"button\"].usa-button-big,\n[type=\"submit\"].usa-button-big,\n[type=\"reset\"].usa-button-big,\n[type=\"image\"].usa-button-big {\n  -webkit-transition: all 0.2s ease;\n  -moz-transition: all 0.2s ease;\n  transition: all 0.2s ease; }\n  .usa-button:hover,\n  .usa-button.usa-button-big:hover,\n  .usa-button-primary.usa-button-big:hover,\n  .usa-button:visited.usa-button-big:hover,\n  .usa-button-primary:visited.usa-button-big:hover,\n  button.usa-button-big:hover,\n  [type=\"button\"].usa-button-big:hover,\n  [type=\"submit\"].usa-button-big:hover,\n  [type=\"reset\"].usa-button-big:hover,\n  [type=\"image\"].usa-button-big:hover {\n    -webkit-transform: translateY(-2px);\n    -moz-transform: translateY(-2px);\n    -ms-transform: translateY(-2px);\n    -o-transform: translateY(-2px);\n    transform: translateY(-2px); }\n\n.artwork {\n  bottom: 0;\n  left: 50%;\n  margin-left: -10em;\n  overflow: hidden;\n  position: absolute;\n  width: 20em; }\n  @media screen and (min-width: 30.0625em) {\n    .artwork {\n      margin-left: -13em;\n      width: 26em; } }\n  @media screen and (min-width: 40em) {\n    .artwork {\n      margin-left: -18.5em;\n      width: 37em; } }\n  @media screen and (min-width: 53.75em) {\n    .artwork {\n      margin-left: -22.5em;\n      width: 45em; } }\n  .artwork a {\n    color: #43ddd7;\n    padding-bottom: 0.1em;\n    text-decoration: none; }\n    .artwork a:focus {\n      box-shadow: 0 0 3px rgba(255, 255, 255, 0.25), 0 0 7px rgba(255, 255, 255, 0.25); }\n    .artwork a:hover {\n      border-bottom: 2px solid #23c0ba; }\n  .artwork p {\n    color: #d0d6df;\n    font-size: 0.85em;\n    margin: 0 0 0.1em; }\n    @media screen and (min-width: 40em) {\n      .artwork p {\n        font-size: 0.9em; } }\n    @media screen and (min-width: 53.75em) {\n      .artwork p {\n        font-size: 1em; } }\n  .artwork .circle {\n    border-radius: 50%;\n    display: inline-block;\n    height: 0.53em;\n    margin-right: 0.1em;\n    width: 0.53em; }\n    @media screen and (min-width: 40em) {\n      .artwork .circle {\n        height: 0.65em;\n        margin-right: 0.25em;\n        width: 0.65em; } }\n    .artwork .circle.green {\n      background-color: #34c84a; }\n    .artwork .circle.red {\n      background-color: #fc625d; }\n    .artwork .circle.yellow {\n      background-color: #fdbc40; }\n  .artwork .content {\n    background-color: #323a45;\n    font-family: \"TT Lakes\", \"Helvetica Neue\", \"Helvetica\", \"Roboto\", \"Arial\", sans-serif;\n    font-size: 0.8em;\n    padding: 0.75em; }\n    @media screen and (min-width: 40em) {\n      .artwork .content {\n        padding: 1em; } }\n  .artwork .cursor {\n    -webkit-animation: blink 0.8s step-end infinite;\n    -moz-animation: blink 0.8s step-end infinite;\n    animation: blink 0.8s step-end infinite;\n    color: #23c0ba;\n    font-size: 1.1em; }\n  .artwork .dolla {\n    margin-right: 0.5em; }\n  .artwork .topbar {\n    background-color: #e4e4e4;\n    border-radius: 0.3em 0.3em 0 0;\n    padding: 0.05em 0.75em; }\n    @media screen and (min-width: 40em) {\n      .artwork .topbar {\n        padding: 0.25em 1em; } }\n"

/***/ },

/***/ "./src/app/components/home/banner-art/banner-art.template.html":
/***/ function(module, exports) {

module.exports = "<div class=\"artwork\">\n  <div class=\"topbar\">\n    <span class=\"circle red\"></span>\n    <span class=\"circle yellow\"></span>\n    <span class=\"circle green\"></span>\n  </div>\n  <div class=\"content\">\n    <p>\n      <span class=\"dolla\">$</span>\n      Want to contribute to <a href=\"./\">Code.gov</a>?\n    </p>\n    <p class=\"second-line\">\n      <span class=\"dolla\">$</span>\n      Visit our <a href=\"https://github.com/presidential-innovation-fellows/code-gov-web\" target=\"_blank\" rel=\"noopener\">project page</a> or git clone git@github.com:presidential-innovation-fellows/code-gov-web.git\n      <span class=\"cursor\">&#x275a;</span>\n    </p>\n  </div>\n</div>\n"

/***/ },

/***/ "./src/app/components/home/banner-art/index.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__("./src/app/components/home/banner-art/banner-art.component.ts"));


/***/ },

/***/ "./src/app/components/home/home.component.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var seo_1 = __webpack_require__("./src/app/services/seo/index.ts");
var state_1 = __webpack_require__("./src/app/services/state/index.ts");
var HomeComponent = (function () {
    function HomeComponent(stateService, seoService) {
        this.stateService = stateService;
        this.seoService = seoService;
        this.url = 'https://pif.gov';
        this.stateService.set('section', 'home');
        this.seoService.setTitle('Code.gov', false);
        this.seoService.setMetaDescription('Code.gov is a platform designed to improve access to the federal government’s custom-developed software.');
    }
    return HomeComponent;
}());
HomeComponent = __decorate([
    core_1.Component({
        // The selector is what angular internally uses
        // for `document.querySelectorAll(selector)` in our index.html
        // where, in this case, selector is the string 'home'
        selector: 'home',
        styles: [__webpack_require__("./src/app/components/home/home.style.scss")],
        template: __webpack_require__("./src/app/components/home/home.template.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof state_1.StateService !== "undefined" && state_1.StateService) === "function" && _a || Object, typeof (_b = typeof seo_1.SeoService !== "undefined" && seo_1.SeoService) === "function" && _b || Object])
], HomeComponent);
exports.HomeComponent = HomeComponent;
var _a, _b;


/***/ },

/***/ "./src/app/components/home/home.style.scss":
/***/ function(module, exports) {

module.exports = "@charset \"UTF-8\";\nhtml {\n  box-sizing: border-box; }\n\n*, *::after, *::before {\n  box-sizing: inherit; }\n\n@-webkit-keyframes fadeInUp {\n  from {\n    -webkit-transform: translateY(0.5em);\n    opacity: 0;\n    visibility: hidden; }\n  to {\n    -webkit-transform: translateY(0);\n    opacity: 1;\n    visibility: visible; } }\n\n@-moz-keyframes fadeInUp {\n  from {\n    -moz-transform: translateY(0.5em);\n    opacity: 0;\n    visibility: hidden; }\n  to {\n    -moz-transform: translateY(0);\n    opacity: 1;\n    visibility: visible; } }\n\n@keyframes fadeInUp {\n  from {\n    -webkit-transform: translateY(0.5em);\n    -moz-transform: translateY(0.5em);\n    -ms-transform: translateY(0.5em);\n    -o-transform: translateY(0.5em);\n    transform: translateY(0.5em);\n    opacity: 0;\n    visibility: hidden; }\n  to {\n    -webkit-transform: translateY(0);\n    -moz-transform: translateY(0);\n    -ms-transform: translateY(0);\n    -o-transform: translateY(0);\n    transform: translateY(0);\n    opacity: 1;\n    visibility: visible; } }\n\n@-webkit-keyframes fadeIn {\n  from {\n    opacity: 0;\n    visibility: hidden; }\n  to {\n    opacity: 1;\n    visibility: visible; } }\n\n@-moz-keyframes fadeIn {\n  from {\n    opacity: 0;\n    visibility: hidden; }\n  to {\n    opacity: 1;\n    visibility: visible; } }\n\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n    visibility: hidden; }\n  to {\n    opacity: 1;\n    visibility: visible; } }\n\n@-webkit-keyframes blink {\n  from, to {\n    color: transparent; }\n  50% {\n    color: #23c0ba; } }\n\n@-moz-keyframes blink {\n  from, to {\n    color: transparent; }\n  50% {\n    color: #23c0ba; } }\n\n@keyframes blink {\n  from, to {\n    color: transparent; }\n  50% {\n    color: #23c0ba; } }\n\nbody {\n  -webkit-font-feature-settings: \"kern\", \"liga\", \"pnum\";\n  -moz-font-feature-settings: \"kern\", \"liga\", \"pnum\";\n  -ms-font-feature-settings: \"kern\", \"liga\", \"pnum\";\n  font-feature-settings: \"kern\", \"liga\", \"pnum\";\n  -webkit-font-smoothing: antialiased; }\n\nlabel {\n  -webkit-font-feature-settings: \"kern\", \"liga\", \"pnum\";\n  -moz-font-feature-settings: \"kern\", \"liga\", \"pnum\";\n  -ms-font-feature-settings: \"kern\", \"liga\", \"pnum\";\n  font-feature-settings: \"kern\", \"liga\", \"pnum\";\n  -webkit-font-smoothing: antialiased; }\n\na:focus {\n  box-shadow: 0 0 3px rgba(50, 58, 69, 0.25), 0 0 7px rgba(50, 58, 69, 0.25);\n  outline: 0; }\n\nh1,\nh2,\nh3,\nh4,\nh5 h6 {\n  color: #323a45;\n  font-family: \"TT Lakes\", \"Helvetica Neue\", \"Helvetica\", \"Roboto\", \"Arial\", sans-serif;\n  font-weight: 500; }\n  h1:first-child,\n  h2:first-child,\n  h3:first-child,\n  h4:first-child,\n  h5 h6:first-child {\n    margin-top: 0; }\n\np {\n  color: #5b616b; }\n  @media screen and (min-width: 40em) {\n    p {\n      font-size: 1.1em; } }\n\n.usa-button,\n.usa-button.usa-button-big,\n.usa-button-primary.usa-button-big,\n.usa-button:visited.usa-button-big,\n.usa-button-primary:visited.usa-button-big,\nbutton.usa-button-big,\n[type=\"button\"].usa-button-big,\n[type=\"submit\"].usa-button-big,\n[type=\"reset\"].usa-button-big,\n[type=\"image\"].usa-button-big {\n  -webkit-transition: all 0.2s ease;\n  -moz-transition: all 0.2s ease;\n  transition: all 0.2s ease; }\n  .usa-button:hover,\n  .usa-button.usa-button-big:hover,\n  .usa-button-primary.usa-button-big:hover,\n  .usa-button:visited.usa-button-big:hover,\n  .usa-button-primary:visited.usa-button-big:hover,\n  button.usa-button-big:hover,\n  [type=\"button\"].usa-button-big:hover,\n  [type=\"submit\"].usa-button-big:hover,\n  [type=\"reset\"].usa-button-big:hover,\n  [type=\"image\"].usa-button-big:hover {\n    -webkit-transform: translateY(-2px);\n    -moz-transform: translateY(-2px);\n    -ms-transform: translateY(-2px);\n    -o-transform: translateY(-2px);\n    transform: translateY(-2px); }\n\n.about li {\n  background-color: #ffffff;\n  border: 1px solid #e9e9e9;\n  box-sizing: border-box;\n  padding: 0.5em; }\n  @media screen and (min-width: 40em) {\n    .about li {\n      padding: 1em; } }\n\nbody {\n  background-color: #ffffff; }\n\n.about {\n  border-bottom: 1px solid #f1f1f1;\n  padding: 2em 0 1em; }\n  @media screen and (min-width: 40em) {\n    .about {\n      padding: 4em 0; } }\n  .about header {\n    margin: 0 auto;\n    text-align: center; }\n    @media screen and (min-width: 30.0625em) {\n      .about header {\n        max-width: 43em; } }\n    .about header h1 {\n      font-size: 1.75em;\n      margin: 0 auto;\n      max-width: 17em; }\n      @media screen and (min-width: 30.0625em) {\n        .about header h1 {\n          font-size: 2em; } }\n      @media screen and (min-width: 40em) {\n        .about header h1 {\n          font-size: 4rem; } }\n    .about header p {\n      font-size: 1em; }\n      @media screen and (min-width: 40em) {\n        .about header p {\n          font-size: 1.2em; } }\n  .about .usa-button {\n    background-color: #42519F; }\n    .about .usa-button:hover {\n      background-color: #333f7b; }\n\n.about-actions {\n  margin-top: 2em;\n  padding: 0; }\n  @media screen and (min-width: 40em) {\n    .about-actions {\n      margin-top: 4em; } }\n  .about-actions h2 {\n    font-size: 1.3em;\n    margin-top: 0; }\n  .about-actions li {\n    margin-bottom: 2em;\n    padding-left: 3em;\n    position: relative; }\n    .about-actions li .icon {\n      left: 1em;\n      position: absolute;\n      top: 1em; }\n    .about-actions li i {\n      color: #23c0ba;\n      font-size: 1.2em; }\n  .about-actions p {\n    font-size: 0.95em; }\n\n.banner {\n  background-color: #005289;\n  background-size: cover;\n  background-repeat: no-repeat;\n  padding: 2em 0 9em;\n  position: relative; }\n  @media screen and (min-width: 30.0625em) {\n    .banner {\n      padding: 4em 0 8em; } }\n  .banner h1 {\n    color: #ffffff;\n    font-size: 2em;\n    margin: 0 0 0.25em; }\n    @media screen and (min-width: 30.0625em) {\n      .banner h1 {\n        font-size: 2.8em; } }\n    @media screen and (min-width: 40em) {\n      .banner h1 {\n        font-size: 3.2em; } }\n  .banner p {\n    color: #d0d6df;\n    font-size: 1em;\n    margin-top: 0; }\n    @media screen and (min-width: 30.0625em) {\n      .banner p {\n        font-size: 1.2em; } }\n    @media screen and (min-width: 40em) {\n      .banner p {\n        font-size: 1.4em; } }\n  .banner .usa-button {\n    box-shadow: 0 3px 7px rgba(0, 0, 0, 0.1);\n    font-size: 1em;\n    margin: 0 auto;\n    max-width: 12em; }\n    .banner .usa-button:hover {\n      background-color: #004370; }\n    @media screen and (min-width: 30.0625em) {\n      .banner .usa-button {\n        font-size: 1.2em;\n        max-width: none; } }\n\n.banner-container {\n  background-color: #005289;\n  margin: 0 auto;\n  max-width: 30em;\n  text-align: center; }\n\n.press {\n  padding: 4em 0; }\n  .press h2 {\n    color: #aeb0b5;\n    font-size: 1em;\n    margin-bottom: 2em;\n    text-align: center;\n    text-transform: uppercase; }\n\n.press-container {\n  margin: 0 auto;\n  max-width: 43em; }\n  .press-container::after {\n    clear: both;\n    content: \"\";\n    display: block; }\n\n.press-links {\n  margin-top: 2em;\n  text-align: center; }\n  @media screen and (min-width: 40em) {\n    .press-links {\n      margin-top: 0;\n      text-align: right; } }\n  .press-links img {\n    -webkit-backface-visibility: visible;\n    backface-visibility: visible;\n    -webkit-transition: all 0.2s ease;\n    -moz-transition: all 0.2s ease;\n    transition: all 0.2s ease;\n    -webkit-transform-style: preserve-3d;\n    -moz-transform-style: preserve-3d;\n    -ms-transform-style: preserve-3d;\n    -o-transform-style: preserve-3d;\n    transform-style: preserve-3d;\n    -webkit-transform: translate3d(0, 0, 0);\n    -moz-transform: translate3d(0, 0, 0);\n    -ms-transform: translate3d(0, 0, 0);\n    -o-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n    max-width: 7.5em;\n    -webkit-perspective: 1000; }\n    .press-links img:hover {\n      -webkit-transform: translateY(-2px);\n      -moz-transform: translateY(-2px);\n      -ms-transform: translateY(-2px);\n      -o-transform: translateY(-2px);\n      transform: translateY(-2px); }\n  .press-links li {\n    margin-bottom: 0.5em; }\n\n.quote-large h1 {\n  color: #485568;\n  font-size: 1.75em;\n  margin-bottom: 0.2em;\n  padding-left: 0.75em;\n  position: relative; }\n  @media screen and (min-width: 40em) {\n    .quote-large h1 {\n      font-size: 2.5em; } }\n  .quote-large h1::before {\n    color: #23c0ba;\n    content: \"“\";\n    font-size: 1.75em;\n    left: 0em;\n    position: absolute;\n    top: -0.275em; }\n    @media screen and (min-width: 40em) {\n      .quote-large h1::before {\n        font-size: 2.5em; } }\n\n.quote-large .attribution {\n  border-top: 1px solid #c9cacd;\n  display: inline-block;\n  margin-left: 1.3em;\n  padding-top: 0.75em; }\n  @media screen and (min-width: 40em) {\n    .quote-large .attribution {\n      margin-left: 2em; } }\n  .quote-large .attribution img {\n    -webkit-backface-visibility: visible;\n    backface-visibility: visible;\n    -webkit-transition: all 0.2s ease;\n    -moz-transition: all 0.2s ease;\n    transition: all 0.2s ease;\n    -webkit-transform-style: preserve-3d;\n    -moz-transform-style: preserve-3d;\n    -ms-transform-style: preserve-3d;\n    -o-transform-style: preserve-3d;\n    transform-style: preserve-3d;\n    max-width: 5em;\n    -webkit-perspective: 1000; }\n    .quote-large .attribution img:hover {\n      -webkit-transform: translateY(-2px);\n      -moz-transform: translateY(-2px);\n      -ms-transform: translateY(-2px);\n      -o-transform: translateY(-2px);\n      transform: translateY(-2px); }\n"

/***/ },

/***/ "./src/app/components/home/home.template.html":
/***/ function(module, exports) {

module.exports = "<section class=\"banner\">\n  <div class=\"usa-grid\">\n    <div class=\"banner-container\">\n      <div class=\"banner-content\">\n        <h1>The People’s Code</h1>\n        <p>\n          Unlock the tremendous potential of the Federal Government’s software.\n        </p>\n        <repos-search></repos-search>\n      </div>\n    </div>\n    <banner-art></banner-art>\n  </div>\n</section>\n<section class=\"about\">\n  <div class=\"usa-grid\">\n    <header>\n      <h1>Help propel America’s next breakthrough in innovation.</h1>\n      <p>\n        Code.gov is a platform designed to improve access to the federal\n        government’s custom-developed software.\n      </p>\n    </header>\n    <ul class=\"usa-unstyled-list usa-grid about-actions\">\n      <li class=\"usa-width-one-half\">\n        <div class=\"icon\">\n          <i class=\"fa fa-code\"></i>\n        </div>\n        <h2>Explore Code</h2>\n        <p>\n           Choose from dozens of open source projects that you can reuse or\n           contribute to.\n        </p>\n        <a routerLink=\"explore-code\" class=\"usa-button\">\n          Browse Code\n        </a>\n      </li>\n      <li class=\"usa-width-one-half\">\n        <div class=\"icon\">\n          <i class=\"fa fa-book\"></i>\n        </div>\n        <h2>Implement Policy</h2>\n        <p>\n           Discover tools and resources designed to help federal\n           agencies implement the Federal Source Code Policy.\n        </p>\n        <a routerLink=\"policy-guide\" class=\"usa-button\">\n          Get Started\n        </a>\n      </li>\n    </ul>\n  </div>\n</section>\n\n<section class=\"press\">\n  <div class=\"usa-grid\">\n    <h2>Press</h2>\n    <div class=\"press-container\">\n      <div class=\"usa-width-two-thirds quote-large\">\n        <h1>\n          It’s the latest in a long line of high-profile victories for the open\n          source movement.\n        </h1>\n        <div class=\"attribution\">\n          <a external-link href=\"https://www.wired.com/2016/08/open-source-won-now/\">\n            <img src=\"assets/img/logos/press/wired.svg\" alt=\"Wired\">\n          </a>\n        </div>\n      </div>\n      <div class=\"usa-width-one-third\">\n        <ul class=\"usa-unstyled-list press-links\">\n          <li>\n            <a external-link href=\"https://techcrunch.com/2016/08/08/the-white-house-just-released-the-federal-source-code-policy-to-help-government-agencies-go-open-source/\">\n              <img src=\"assets/img/logos/press/techcrunch.png\" alt=\"TechCrunch\">\n            </a>\n          </li>\n          <li>\n            <a external-link href=\"http://www.pcmag.com/news/346860/white-house-releases-open-source-software-policy\">\n              <img src=\"assets/img/logos/press/pcmag.png\" alt=\"PC Mag\">\n            </a>\n          </li>\n          <li>\n            <a external-link href=\"https://fcw.com/articles/2016/08/08/open-source-rockwell.aspx\">\n              <img src=\"assets/img/logos/press/fcw.jpg\" alt=\"FCW\">\n            </a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</section>\n<modal></modal>\n"

/***/ },

/***/ "./src/app/components/home/index.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__("./src/app/components/home/home.component.ts"));


/***/ },

/***/ "./src/app/components/modal/index.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__("./src/app/components/modal/modal.component.ts"));


/***/ },

/***/ "./src/app/components/modal/modal.component.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var angulartics2_1 = __webpack_require__("./node_modules/angulartics2/dist/index.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var modal_1 = __webpack_require__("./src/app/services/modal/index.ts");
var ModalComponent = (function () {
    function ModalComponent(angulartics2, modalService) {
        var _this = this;
        this.angulartics2 = angulartics2;
        this.modalService = modalService;
        this.modalSub = modalService.modalActivated$.subscribe(function (modal) {
            _this.description = modal['description'];
            _this.title = modal['title'];
            _this.url = modal['url'];
            _this.visible = true;
        });
    }
    ModalComponent.prototype.ngOnDestroy = function () {
        if (this.modalSub)
            this.modalSub.unsubscribe();
    };
    ModalComponent.prototype.close = function () {
        this.angulartics2.eventTrack.next({ action: 'Close', properties: { category: 'Modal' } });
        this.visible = false;
    };
    return ModalComponent;
}());
ModalComponent = __decorate([
    core_1.Component({
        selector: 'modal',
        styles: [__webpack_require__("./src/app/components/modal/modal.style.scss")],
        template: __webpack_require__("./src/app/components/modal/modal.template.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof angulartics2_1.Angulartics2 !== "undefined" && angulartics2_1.Angulartics2) === "function" && _a || Object, typeof (_b = typeof modal_1.ModalService !== "undefined" && modal_1.ModalService) === "function" && _b || Object])
], ModalComponent);
exports.ModalComponent = ModalComponent;
var _a, _b;


/***/ },

/***/ "./src/app/components/modal/modal.style.scss":
/***/ function(module, exports) {

module.exports = "html {\n  box-sizing: border-box; }\n\n*, *::after, *::before {\n  box-sizing: inherit; }\n\n@-webkit-keyframes fadeInUp {\n  from {\n    -webkit-transform: translateY(0.5em);\n    opacity: 0;\n    visibility: hidden; }\n  to {\n    -webkit-transform: translateY(0);\n    opacity: 1;\n    visibility: visible; } }\n\n@-moz-keyframes fadeInUp {\n  from {\n    -moz-transform: translateY(0.5em);\n    opacity: 0;\n    visibility: hidden; }\n  to {\n    -moz-transform: translateY(0);\n    opacity: 1;\n    visibility: visible; } }\n\n@keyframes fadeInUp {\n  from {\n    -webkit-transform: translateY(0.5em);\n    -moz-transform: translateY(0.5em);\n    -ms-transform: translateY(0.5em);\n    -o-transform: translateY(0.5em);\n    transform: translateY(0.5em);\n    opacity: 0;\n    visibility: hidden; }\n  to {\n    -webkit-transform: translateY(0);\n    -moz-transform: translateY(0);\n    -ms-transform: translateY(0);\n    -o-transform: translateY(0);\n    transform: translateY(0);\n    opacity: 1;\n    visibility: visible; } }\n\n@-webkit-keyframes fadeIn {\n  from {\n    opacity: 0;\n    visibility: hidden; }\n  to {\n    opacity: 1;\n    visibility: visible; } }\n\n@-moz-keyframes fadeIn {\n  from {\n    opacity: 0;\n    visibility: hidden; }\n  to {\n    opacity: 1;\n    visibility: visible; } }\n\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n    visibility: hidden; }\n  to {\n    opacity: 1;\n    visibility: visible; } }\n\n@-webkit-keyframes blink {\n  from, to {\n    color: transparent; }\n  50% {\n    color: #23c0ba; } }\n\n@-moz-keyframes blink {\n  from, to {\n    color: transparent; }\n  50% {\n    color: #23c0ba; } }\n\n@keyframes blink {\n  from, to {\n    color: transparent; }\n  50% {\n    color: #23c0ba; } }\n\nbody {\n  -webkit-font-feature-settings: \"kern\", \"liga\", \"pnum\";\n  -moz-font-feature-settings: \"kern\", \"liga\", \"pnum\";\n  -ms-font-feature-settings: \"kern\", \"liga\", \"pnum\";\n  font-feature-settings: \"kern\", \"liga\", \"pnum\";\n  -webkit-font-smoothing: antialiased; }\n\nlabel {\n  -webkit-font-feature-settings: \"kern\", \"liga\", \"pnum\";\n  -moz-font-feature-settings: \"kern\", \"liga\", \"pnum\";\n  -ms-font-feature-settings: \"kern\", \"liga\", \"pnum\";\n  font-feature-settings: \"kern\", \"liga\", \"pnum\";\n  -webkit-font-smoothing: antialiased; }\n\na:focus {\n  box-shadow: 0 0 3px rgba(50, 58, 69, 0.25), 0 0 7px rgba(50, 58, 69, 0.25);\n  outline: 0; }\n\nh1,\nh2,\nh3,\nh4,\nh5\nh6 {\n  color: #323a45;\n  font-family: \"TT Lakes\", \"Helvetica Neue\", \"Helvetica\", \"Roboto\", \"Arial\", sans-serif;\n  font-weight: 500; }\n  h1:first-child,\n  h2:first-child,\n  h3:first-child,\n  h4:first-child,\n  h5\nh6:first-child {\n    margin-top: 0; }\n\np {\n  color: #5b616b; }\n  @media screen and (min-width: 40em) {\n    p {\n      font-size: 1.1em; } }\n\n.usa-button,\n.usa-button.usa-button-big,\n.usa-button-primary.usa-button-big,\n.usa-button:visited.usa-button-big,\n.usa-button-primary:visited.usa-button-big,\nbutton.usa-button-big,\n[type=\"button\"].usa-button-big,\n[type=\"submit\"].usa-button-big,\n[type=\"reset\"].usa-button-big,\n[type=\"image\"].usa-button-big {\n  -webkit-transition: all 0.2s ease;\n  -moz-transition: all 0.2s ease;\n  transition: all 0.2s ease; }\n  .usa-button:hover,\n  .usa-button.usa-button-big:hover,\n  .usa-button-primary.usa-button-big:hover,\n  .usa-button:visited.usa-button-big:hover,\n  .usa-button-primary:visited.usa-button-big:hover,\n  button.usa-button-big:hover,\n  [type=\"button\"].usa-button-big:hover,\n  [type=\"submit\"].usa-button-big:hover,\n  [type=\"reset\"].usa-button-big:hover,\n  [type=\"image\"].usa-button-big:hover {\n    -webkit-transform: translateY(-2px);\n    -moz-transform: translateY(-2px);\n    -ms-transform: translateY(-2px);\n    -o-transform: translateY(-2px);\n    transform: translateY(-2px); }\n\n.modal-container {\n  -webkit-animation: fadeInUp 0.2s ease;\n  -moz-animation: fadeInUp 0.2s ease;\n  animation: fadeInUp 0.2s ease;\n  -webkit-animation-fill-mode: forwards;\n  -moz-animation-fill-mode: forwards;\n  animation-fill-mode: forwards;\n  background-color: #ffffff;\n  left: 2em;\n  padding: 2em 1em;\n  position: fixed;\n  right: 2em;\n  text-align: center;\n  top: 2em; }\n  @media screen and (min-width: 30.0625em) {\n    .modal-container {\n      padding: 3em 2em; } }\n  @media screen and (min-width: 40em) {\n    .modal-container {\n      left: 50%;\n      margin: -10em 0 0 -16em;\n      right: auto;\n      top: 50%;\n      width: 32em; } }\n  .modal-container a {\n    color: #1b9590;\n    overflow-wrap: break-word;\n    word-wrap: break-word; }\n  .modal-container button {\n    -webkit-transition: all 0.2s ease;\n    -moz-transition: all 0.2s ease;\n    transition: all 0.2s ease;\n    background-color: transparent;\n    color: #5b616b;\n    padding: 0; }\n    .modal-container button:hover {\n      background-color: transparent;\n      color: #44484f; }\n  .modal-container h1 {\n    font-size: 1.5em; }\n    @media screen and (min-width: 30.0625em) {\n      .modal-container h1 {\n        font-size: 1.75em; } }\n  .modal-container .close {\n    position: absolute;\n    right: 0.2em;\n    top: 0; }\n  .modal-container .link-pretext {\n    margin-bottom: 0.1em; }\n\n.overlay {\n  background-color: rgba(51, 60, 74, 0.75);\n  bottom: 0;\n  left: 0;\n  position: fixed;\n  right: 0;\n  top: 0;\n  z-index: 1000; }\n"

/***/ },

/***/ "./src/app/components/modal/modal.template.html":
/***/ function(module, exports) {

module.exports = "<div *ngIf=\"visible\" class=\"overlay\" (click)=\"close()\">\n  <div class=\"modal-container\" tabindex=\"-1\">\n    <div class=\"close\">\n      <button (click)=\"close()\" aria-label=\"close\">\n        <i class=\"fa fa-times\"></i>\n      </button>\n    </div>\n    <div *ngIf=\"title\" class=\"modal-header\">\n      <h1>{{ title }}</h1>\n    </div>\n    <div class=\"modal-content\">\n      <p *ngIf=\"description\">{{ description }}</p>\n      <p class=\"link-pretext\">Continue to:</p>\n      <a *ngIf=\"url\" angulartics2On=\"click\" angularticsEvent=\"Link Click\" angularticsCategory=\"Modal\" [angularticsProperties]=\"{ label: url }\" href=\"{{ url }}\" target=\"_blank\" rel=\"noopener\">\n        {{ url }}\n      </a>\n    </div>\n  </div>\n</div>\n"

/***/ },

/***/ "./src/app/components/policy-guide/docs/capacity/capacity-basics/capacity-basics.component.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var CapacityBasicsComponent = (function () {
    function CapacityBasicsComponent() {
    }
    return CapacityBasicsComponent;
}());
CapacityBasicsComponent = __decorate([
    core_1.Component({
        selector: 'basics',
        template: __webpack_require__("./src/app/components/policy-guide/docs/capacity/capacity-basics/capacity-basics.template.html")
    }),
    __metadata("design:paramtypes", [])
], CapacityBasicsComponent);
exports.CapacityBasicsComponent = CapacityBasicsComponent;


/***/ },

/***/ "./src/app/components/policy-guide/docs/capacity/capacity-basics/capacity-basics.template.html":
/***/ function(module, exports) {

module.exports = "<h1>Basics</h1>\n<p>Content goes here</p>\n"

/***/ },

/***/ "./src/app/components/policy-guide/docs/capacity/capacity-basics/index.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__("./src/app/components/policy-guide/docs/capacity/capacity-basics/capacity-basics.component.ts"));


/***/ },

/***/ "./src/app/components/policy-guide/docs/capacity/capacity-collaboration/capacity-collaboration.component.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var CapacityCollaborationComponent = (function () {
    function CapacityCollaborationComponent() {
    }
    return CapacityCollaborationComponent;
}());
CapacityCollaborationComponent = __decorate([
    core_1.Component({
        selector: 'collaboration',
        template: __webpack_require__("./src/app/components/policy-guide/docs/capacity/capacity-collaboration/capacity-collaboration.template.html")
    }),
    __metadata("design:paramtypes", [])
], CapacityCollaborationComponent);
exports.CapacityCollaborationComponent = CapacityCollaborationComponent;


/***/ },

/***/ "./src/app/components/policy-guide/docs/capacity/capacity-collaboration/capacity-collaboration.template.html":
/***/ function(module, exports) {

module.exports = "<h1>Collaboration</h1>\n<p>Content goes here</p>\n"

/***/ },

/***/ "./src/app/components/policy-guide/docs/capacity/capacity-collaboration/index.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__("./src/app/components/policy-guide/docs/capacity/capacity-collaboration/capacity-collaboration.component.ts"));


/***/ },

/***/ "./src/app/components/policy-guide/docs/capacity/capacity-interagency-sharing/capacity-interagency-sharing.component.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var CapacityInteragencySharingComponent = (function () {
    function CapacityInteragencySharingComponent() {
    }
    return CapacityInteragencySharingComponent;
}());
CapacityInteragencySharingComponent = __decorate([
    core_1.Component({
        selector: 'interagency-sharing',
        template: __webpack_require__("./src/app/components/policy-guide/docs/capacity/capacity-interagency-sharing/capacity-interagency-sharing.template.html")
    }),
    __metadata("design:paramtypes", [])
], CapacityInteragencySharingComponent);
exports.CapacityInteragencySharingComponent = CapacityInteragencySharingComponent;


/***/ },

/***/ "./src/app/components/policy-guide/docs/capacity/capacity-interagency-sharing/capacity-interagency-sharing.template.html":
/***/ function(module, exports) {

module.exports = "<h1>Interagency Code Sharing</h1>\n<p>Content goes here</p>\n"

/***/ },

/***/ "./src/app/components/policy-guide/docs/capacity/capacity-interagency-sharing/index.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__("./src/app/components/policy-guide/docs/capacity/capacity-interagency-sharing/capacity-interagency-sharing.component.ts"));


/***/ },

/***/ "./src/app/components/policy-guide/docs/capacity/capacity-introduction/capacity-introduction.component.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var seo_1 = __webpack_require__("./src/app/services/seo/index.ts");
var CapacityIntroductionComponent = (function () {
    function CapacityIntroductionComponent(seoService) {
        this.seoService = seoService;
        seoService.setTitle('Introduction - Building your Agency\'s Open Source Practice', true);
        seoService.setMetaDescription('Recommendations for an interdisciplinary approach to Open Source for Federal agencies.');
        seoService.setMetaRobots('Index, Follow');
    }
    return CapacityIntroductionComponent;
}());
CapacityIntroductionComponent = __decorate([
    core_1.Component({
        selector: 'introduction',
        template: __webpack_require__("./src/app/components/policy-guide/docs/capacity/capacity-introduction/capacity-introduction.template.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof seo_1.SeoService !== "undefined" && seo_1.SeoService) === "function" && _a || Object])
], CapacityIntroductionComponent);
exports.CapacityIntroductionComponent = CapacityIntroductionComponent;
var _a;


/***/ },

/***/ "./src/app/components/policy-guide/docs/capacity/capacity-introduction/capacity-introduction.template.html":
/***/ function(module, exports) {

module.exports = "<h1>Introduction - Building Your Agency's Open Source Practice</h1>\n<p>\n<a rel=\"noopener\" target=\"_blank\" href=\"https://sourcecode.cio.gov/OSS#open-source-software\">Section 5 of the Federal Source Code Policy</a> outlines an Open Source Pilot Program that requires the release of a portion of Federal source code over the next three years. This section of code.gov provides advice for agencies in satisfying the requirements of the pilot.\n</p>\n<p>The open source practice for the U.S. government is expected to rapidly evolve and become more sophisticated over the next several years, so the advice provided here will also evolve.</p>\n<p>In addition to the requirements outline in <a rel=\"noopener\" target=\"_blank\" href=\"https://sourcecode.cio.gov/OSS#open-source-software\">Section 5</a> of the policy, <a rel=\"noopener\" target=\"_blank\" href=\"https://sourcecode.cio.gov/Implementation/#roles-and-responsibilities\">Section 7.1</a> of the policy discusses roles and responsibilities within agencies in meeting the requirements of the policy. Regarding the Open Source Pilot Program specifically, it notes that:</p>\n<blockquote>\n  <p>\n    Agencies should strengthen internal capacity to efficiently and securely deliver OSS as part of regular operations.\n  </p>\n</blockquote>\n<p>Whether it is with a focus on building capacity in software acquisition, development, or both, agencies will benefit from developing staff expertise in a number of areas. In some cases, agencies may also want to build in-house technical capacity.</p>\n\n<h2>Engaged and supportive agency leadership</h2>\n<p>Agencies and teams that have been most successful in establishing their open source practice have benefited from engaged and supportive agency leadership who have helped teams navigate key legal, security, and operational issues. Strong engagement from the agency CIO and other leadership can have the effect of convening the necessary stakeholders to have a serious conversation. It can also greatly accelerate the establishment of clear, repeatable processes and foundational policy. With this foundation in place, your agency's teams can refine policy and process as they learn together.</p>\n\n<h2>Open Source is an interdisciplinary practice</h2>\n<p> <a rel=\"noopener\" target=\"_blank\" href=\"https://sourcecode.cio.gov/Implementation/#roles-and-responsibilities\">Section 7.1</a> of the policy provides a long (and non-exhaustive) list of individuals and teams who have a role in your agency's open source practice:</p>\n<blockquote>\n  <p>\n    [..] agency heads must ensure that CIOs and Senior Agency Officials,including CAOs, are positioned with the responsibility and authority necessary to implement the requirements of this policy. As appropriate, Senior Agency Officials should also work with the agency&rsquo;s public affairs staff, open government staff, web manager or digital strategist, program owners, and other leadership to properly identify, publish, and collaborate with communities on their OSS projects.\n  </p>\n</blockquote>\n<p>In order to be successful in meeting the requirements of the policy and realize return on its investment in open source, your agency shouldn't treat it as merely a technical or acquisitions issue. Instead, the most successful agencies will approach open source in a similar manner to security and change management - as an essentially interdisciplinary capability that requires deliberate, formal coordination across the organization.</p>\n<h2>Consult with peer agencies and share practices</h2>\n<p>In the spirit of open source development, agencies can benefit greatly from adopting each other&rsquo;s approaches to open source generally and even specific language that has been developed with regards to issues like licensing and contracting. Complex topics like security, communications, and even how to run a successful hackathon are ripe for collaboration between agencies to share lessons learned and pool limited resources.</p>\n"

/***/ },

/***/ "./src/app/components/policy-guide/docs/capacity/capacity-introduction/index.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__("./src/app/components/policy-guide/docs/capacity/capacity-introduction/capacity-introduction.component.ts"));


/***/ },

/***/ "./src/app/components/policy-guide/docs/capacity/capacity-resources/capacity-resources.component.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var seo_1 = __webpack_require__("./src/app/services/seo/index.ts");
var CapacityResourcesComponent = (function () {
    function CapacityResourcesComponent(seoService) {
        this.seoService = seoService;
        seoService.setTitle('Tools and Resources', true);
        seoService.setMetaDescription('A growing list of tools and resources that agencies can use to share and open source their code.');
        seoService.setMetaRobots('Index, Follow');
    }
    return CapacityResourcesComponent;
}());
CapacityResourcesComponent = __decorate([
    core_1.Component({
        selector: 'resources',
        template: __webpack_require__("./src/app/components/policy-guide/docs/capacity/capacity-resources/capacity-resources.template.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof seo_1.SeoService !== "undefined" && seo_1.SeoService) === "function" && _a || Object])
], CapacityResourcesComponent);
exports.CapacityResourcesComponent = CapacityResourcesComponent;
var _a;


/***/ },

/***/ "./src/app/components/policy-guide/docs/capacity/capacity-resources/capacity-resources.template.html":
/***/ function(module, exports) {

module.exports = "<h1>Tools and Resources</h1>\n<p><a rel=\"noopener\" target=\"_blank\" href=\"https://sourcecode.cio.gov/Implementation/#code-repositories\">Section 7.4</a>&nbsp;of the Federal Source Code Policy states:</p>\n<blockquote>\n  <p>\n    Accessible, buildable, version-controlled repositories for the storage, discussion, and modification of custom-developed code are critical to both the Government-wide reuse and OSS pilot program sections of this policy. Agencies should utilize existing code repositories and common third-party repository platforms as necessary in order to satisfy the requirements of this policy.\n  </p>\n</blockquote>\n<p>Agencies can use the list of tools and resources provided here to become more fluent in the open source marketplace and best practices inside and outside of government.</p>\n<p><strong>Important:</strong> the tools and resources outlined here are not mandatory for agency use and are not endorsed by any part of the government. The purpose of this page is to provide broader context for agencies and to provide perspective into the breadth of tools available. Also, this list does not attempt to be exhaustive on any topic; new tools are constantly being developed and practices are constantly evolving.</p>\n<p>Individuals and companies that want to suggest tools for inclusion here can do so by opening an Issue or creating a Pull Request on the <a rel=\"noopener\" target=\"_blank\" href=\"https://github.com/presidential-innovation-fellows/code-gov-web\">Code.gov repository.</a></p>\n<h2>Choosing a Version Control System</h2>\n<p>There are a number of version control systems available that may be appropriate to meet your agency's needs. Some questions to ask when selecting such a system are:</p>\n<ul>\n<li>Does the system provide the ability to develop in the open?</li>\n<li>Does your agency need both private and public repositories, and does the system allow seamless integration between the two?</li>\n<li>Is the system interoperable with open source version control standards, such as <a external-link href=\"https://git-scm.com/\">git</a> or <a external-link href=\"https://www.mercurial-scm.org/\">mercurial</a>? Interoperability with an open standard is crucial to your agency's ability to collaborate with other agencies and the open source community and will greatly ease future platform integrations and migrations.</li>\n<li>To engage the open source community your agency may want to consider the social features of the system beyond version control. Does it provide features that will help your agency to promote and share its code? How vibrant is the existing user community?</li>\n</ul>\n<p>Agencies may want to take a look at the following version control systems based on their functionality and significant adoption by the open source community:</p>\n<ul>\n<li><a external-link href=\"https://github.com/\">Github</a></li>\n<li><a external-link href=\"https://gitlab.com/\">Gitlab</a></li>\n<li><a external-link href=\"https://bitbucket.org/\">Bitbucket</a></li>\n</ul>\n<h2>Code quality and security</h2>\n<p>A number of paid and free tools exist that agencies can use as part of their development process that, if used appropriately, should lower the risk that inappropriate or insecure content is released.&nbsp; Because these tools can help automate some processes that would otherwise be manual, they can simultaneously help lower costs overall.</p>\n<p>Increasingly, these tools can be configured to reflect the specific security policies of your agency and can be integrated directly into your agency's developer workflow, scanning code automatically whenever code is committed or pushed for passwords, keys, watchwords, and other potentially sensitive information. Some tools also provide broader capabilities related to coding standards and quality. In developing its overall source code strategy, your agency may want to consider integrating these kinds of tools into your developer workflow, contractually require their use by vendors, or use them to assess the quality and security of deliverables prior to accepting receipt.</p>\n<p>We are soliciting input from the development community in building out a list of tools. Agencies should feel free to join the conversation, make suggestions, and ask questions on the <a href=\"https://github.com/presidential-innovation-fellows/code-gov-web/issues/101\" rel=\"noopener\" target=\"_blank\">open Issue on the code.gov repository</a>.</p>\n<h2>Development practices for government</h2>\n<p>A number of communities of practice exist that agency staff can use to keep abreast of open source inside and outside of government, to raise questions, and to share their experiences.&nbsp;</p>\n<ul>\n<li>Open Source Listserv (GSA, open to government only)</li>\n<li>Security Listserv (GSA, open to government only)</li>\n<li>Digital Service Listserv (GSA, open to government only)</li>\n<li><a external-link href=\"https://github.com/government/welcome#readme\">Github for Government Community</a> (Not an official Government service)</li>\n</ul>\n<p>As a quick reminder, agency staff must comply with applicable law and regulations and should obtain the appropriate agency approvals prior to using any of the tools ans services discussed here.</p>\n"

/***/ },

/***/ "./src/app/components/policy-guide/docs/capacity/capacity-resources/index.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__("./src/app/components/policy-guide/docs/capacity/capacity-resources/capacity-resources.component.ts"));


/***/ },

/***/ "./src/app/components/policy-guide/docs/capacity/capacity-security/capacity-security.component.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var CapacitySecurityComponent = (function () {
    function CapacitySecurityComponent() {
    }
    return CapacitySecurityComponent;
}());
CapacitySecurityComponent = __decorate([
    core_1.Component({
        selector: 'security',
        template: __webpack_require__("./src/app/components/policy-guide/docs/capacity/capacity-security/capacity-security.template.html")
    }),
    __metadata("design:paramtypes", [])
], CapacitySecurityComponent);
exports.CapacitySecurityComponent = CapacitySecurityComponent;


/***/ },

/***/ "./src/app/components/policy-guide/docs/capacity/capacity-security/capacity-security.template.html":
/***/ function(module, exports) {

module.exports = "<h1>Building Security into your Open Source Practice</h1>\n<p>One of the most common concerns raised by agencies related to opening code or developing in the open is information security.  There are a number of specific things that any open source project (governmental or otherwise) can do to protect the security of its sensitive information and its production systems. There are also quite a few myths and misconceptions about security in relation to open source that are worth debunking.</p>\n<h2>Opening an existing codebase</h2>\n<p>The first thing to understand when considering open sourcing code is that some types of code and data are categorically inappropriate to be made public.  Secure open source practices protect these kinds of content from publication.</p>\n<p>While there are always exceptions and the list isn’t exhaustive, agencies should carefully consider how to limit the risk that the following types of information could be make public as part of an open source offering:</p>\n<ul>\n<li>passwords</li>\n<li>private keys</li>\n<li>server configurations, network topology, and similar information</li>\n<li>national security and other sensitive information</li>\n<li>PII</li>\n<li>content such as inappropriate or offensive language, that could create reputational harm</li>\n</ul>\n<p>^ someone smarter than me has created a list like this. NIST?</p>\n<h2>Developing in the Open</h2>\n<p>Section 5.2.B of the Source Code Policy states that agencies should develop custom code in the open:</p>\n<blockquote>\n  <p>\n    Engage in Open Development: Software that is custom-developed for or by agencies should, to the extent possible and appropriate, be developed using open development practices. These practices provide an environment in which OSS can flourish and be repurposed. This principle, as well as the one below for releasing source code, include distributing a minimum viable product as OSS; engaging the public before official release; and drawing upon the public’s knowledge to make improvements to the project.\n  </p>\n</blockquote>\n<p>\n  At the most basic level, developing in the open means that developers maintain the up-to-date working copy of their code on a publicly accessible repository.\n</p>\n<h3>For developers</h3>\n<ul>\n<li>Make your main codebase open – even if a piece of something needs to remain private not everything needs to remain so.</li>\n<li>Develop modularly</li>\n<li>Don’t bifurcate your project where you don’t have to. i.e.:\n<ul>\n  <li>Content</li>\n  <li>Slows you down</li>\n  <li>Reviews</li>\n  <li>Workflow</li>\n  <li>Design</li>\n  <li>Versioning</li>\n</ul>\n</li>\n</ul>\n<h3>For Comms</h3>\n<ul>\n<li>Work with your Comms team\n<ul>\n<li>You can still have your “big reveal”</li>\n</ul>\n</li>\n<li>Set expectations at the outset of a project.\n<ul>\n<li>Declare a project “open” in your project charter.</li>\n<li>Staff for feedback and engagement with the public throughout the project\n<ul>\n<li>BENEFITS: Early feedback</li>\n</ul>\n</li>\n</ul>\n</li>\n</ul>\n<h3>For Security</h3>\n<p>If for some reason api keys etc do get published developing in the open makes that less risky by allowing that to happen earlier.\n</p>\n<h2>Organizational best practices</h2>\n<ul>\n<li>make sure there is a team (real, virtual) in your org who keep track of the open source and monitor and remediate issues, including escalating for security and including process/training improvements. this should be written down and there should be procedures.</li>\n<li></li>\n</ul>\n<h2>Workflow tips for security</h2>\n<ul>\n<li>gitignore</li>\n<li>educate your team</li>\n<li>environmental variables</li>\n<li>know your tools (aws, github), know the monitoring and notification services they provide, and make sure someone receives those emails.</li>\n<li>tools</li>\n<li>commit hooks\n<ul>\n<li>18F research on this.</li>\n</ul>\n</li>\n</ul>\n<h1>Myth Busting</h1>\n<ul>\n<li>Security through obscurity</li>\n<li></li>\n</ul>\n<h1>Case Studies</h1>\n<ul>\n<li>N-CATS pshtt - <a external-link href=\"https://github.com/dhs-ncats/pshtt\">https://github.com/dhs-ncats/pshtt</a></li>\n</ul>\n<h2>Licensing</h2>\n<h2>Developing in the open</h2>\n<ul>\n<li>Benefits of public feedback</li>\n</ul>\n<h2>Technical practices</h2>\n<ul>\n<li>Code versioning</li>\n<li>REQUIRED 7.4 Use common third-party repository platforms</li>\n<li>REQUIRED Integrate OSS practices into your agency’s day-to-day operations (7.1)</li>\n</ul>\n<h2>Communications</h2>\n<ul>\n<li>you can still have your big reveal\n<ul>\n<li>case study</li>\n</ul>\n</li>\n</ul>\n<ul>\n<li>open by default</li>\n<li>even if a piece of something needs to remain private not everything needs to remain so.</li>\n<li>modular devlopment</li>\n<li>set expectations at the outset of a project.\n<ul>\n<li>declare a project “open” in your project charter.</li>\n<li>staff for feedback and engagement with the public throughout the project\n<ul>\n<li>BENEFITS: early feedback</li>\n</ul>\n</li>\n</ul>\n</li>\n<li>don’t bifurcate your project where you don’t have to.</li>\n<li>i.e. content</li>\n<li>slows you down</li>\n<li>reviews</li>\n<li>workflow</li>\n<li>design</li>\n<li>versioning</li>\n<li>what can’t be made public?</li>\n<li>passwords</li>\n<li>sensitive data</li>\n<li></li>\n</ul>\n<p>#Github</p>\n<h2>Have a set of practices around using github</h2>\n<ul>\n<li>low sensitivity\n<ul>\n<li>procurement</li>\n<li>PII</li>\n<li></li>\n</ul>\n</li>\n<li>2fa</li>\n<li>use an avatar</li>\n<li>have a public contact email address</li>\n<li>have your actual name in there</li>\n<li>if you’re using your work computer - set gitconfig so that it’s using your work email</li>\n</ul>\n<h1>Communications and community engagement</h1>\n<p>Community contributions</p>\n<ul>\n<li>it has to be an expectation that comms won’t review every interaction online.</li>\n<li>accounts also associated with personal activities</li>\n</ul>\n<h1>Security</h1>\n<p>It is important to integrate strong security practices into your open source development practices to ensure that only code that is appropriate to share publicly is published.  Read here for more on this topic.</p>\n"

/***/ },

/***/ "./src/app/components/policy-guide/docs/capacity/capacity-security/index.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__("./src/app/components/policy-guide/docs/capacity/capacity-security/capacity-security.component.ts"));


/***/ },

/***/ "./src/app/components/policy-guide/docs/capacity/capacity.component.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var mobile_1 = __webpack_require__("./src/app/services/mobile/index.ts");
var CapacityComponent = (function () {
    function CapacityComponent(mobileService) {
        this.mobileService = mobileService;
        this.mobileService.hideMenu();
    }
    return CapacityComponent;
}());
CapacityComponent = __decorate([
    core_1.Component({
        selector: 'capacity',
        template: __webpack_require__("./src/app/components/policy-guide/docs/capacity/capacity.template.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof mobile_1.MobileService !== "undefined" && mobile_1.MobileService) === "function" && _a || Object])
], CapacityComponent);
exports.CapacityComponent = CapacityComponent;
var _a;


/***/ },

/***/ "./src/app/components/policy-guide/docs/capacity/capacity.template.html":
/***/ function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ },

/***/ "./src/app/components/policy-guide/docs/capacity/index.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__("./src/app/components/policy-guide/docs/capacity/capacity.component.ts"));


/***/ },

/***/ "./src/app/components/policy-guide/docs/compliance/compliance-acquiring-code/compliance-acquiring-code.component.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var ComplianceAcquiringCodeComponent = (function () {
    function ComplianceAcquiringCodeComponent() {
    }
    return ComplianceAcquiringCodeComponent;
}());
ComplianceAcquiringCodeComponent = __decorate([
    core_1.Component({
        selector: 'acquiring-code',
        template: __webpack_require__("./src/app/components/policy-guide/docs/compliance/compliance-acquiring-code/compliance-acquiring-code.template.html")
    }),
    __metadata("design:paramtypes", [])
], ComplianceAcquiringCodeComponent);
exports.ComplianceAcquiringCodeComponent = ComplianceAcquiringCodeComponent;


/***/ },

/***/ "./src/app/components/policy-guide/docs/compliance/compliance-acquiring-code/compliance-acquiring-code.template.html":
/***/ function(module, exports) {

module.exports = "<h1>Acquiring Code</h1>\n<p>\n  Content goes here.\n</p>\n"

/***/ },

/***/ "./src/app/components/policy-guide/docs/compliance/compliance-acquiring-code/index.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__("./src/app/components/policy-guide/docs/compliance/compliance-acquiring-code/compliance-acquiring-code.component.ts"));


/***/ },

/***/ "./src/app/components/policy-guide/docs/compliance/compliance-dashboard/compliance-dashboard.component.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var seo_1 = __webpack_require__("./src/app/services/seo/index.ts");
var ComplianceDashboardComponent = (function () {
    function ComplianceDashboardComponent(seoService) {
        this.seoService = seoService;
        seoService.setTitle('Policy Compliance - Dashboard', true);
        seoService.setMetaDescription('Dashboard illustrating federal agency compliance with the 90-day and 120-day policy requirements.');
        seoService.setMetaRobots('Index, Follow');
    }
    return ComplianceDashboardComponent;
}());
ComplianceDashboardComponent = __decorate([
    core_1.Component({
        selector: 'compliance-dashboard',
        template: __webpack_require__("./src/app/components/policy-guide/docs/compliance/compliance-dashboard/compliance-dashboard.template.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof seo_1.SeoService !== "undefined" && seo_1.SeoService) === "function" && _a || Object])
], ComplianceDashboardComponent);
exports.ComplianceDashboardComponent = ComplianceDashboardComponent;
var _a;


/***/ },

/***/ "./src/app/components/policy-guide/docs/compliance/compliance-dashboard/compliance-dashboard.template.html":
/***/ function(module, exports) {

module.exports = "<h1>Compliance Dashboard Criteria</h1>\n<p>\n  The Source Code Policy was issued on August 8, 2016 and requires both agencies and OMB to take specific actions within 90 and 120 days, as well as on an ongoing basis. This section is meant to help agencies meet those deadlines and boot up their overall source code strategy.\n</p>\n<h2>Up-to-date source code policy on digital strategy page (90-day requirement) </h2>\n<p>\n  November 6, 2016 marked 90 days from the issuance of the policy. \n</p>\n<ul>\n  <li>Green:\n    <ul>\n      <li>\n       Agency has posted an approved policy regarding compliance with the Federal Source Code Policy to its digital strategy page.\n      </li>\n    </ul>\n  </li>\n  <li>Yellow:\n    <ul>\n      <li>\n       Agency has submitted a draft of its policy to OMB and is awaiting final approval from agency counterparts prior to posting the policy to its digital strategy page.  Alternatively, agency has posted a paragraph on its digital strategy page describing where they are in the policy development process.\n      </li>\n    </ul>\n  </li>\n    <li>Red:\n    <ul>\n      <li>\n       Agency has not posted an approved policy or a progress updated to its digital strategy page and has not submitted a draft policy to OMB.\n      </li>\n    </ul>\n  </li>\n</ul>\n<h2>Up-to-date enterprise code inventory (120-day requirement)</h2>\n<p>December 6, 2016 marked 120 days from the issuance of the policy.</p>\n  <ul>\n  <li>\n    Green:\n    <ul>\n      <li>\n       Agency has successfully filled out its enterprise code inventory pursuant to the metadata schema on Code.gov without any errors or warnings.\n      </li>\n    </ul>\n  </li>\n    <li>\n    Yellow:\n    <ul>\n      <li>\n       Agency has filled out its enterprise code inventory pursuant to the metadata schema on Code.gov, but has produced at least one error or warning.\n      </li>\n    </ul>\n  </li>\n    <li>\n    Red:\n    <ul>\n      <li>\n       Agency has not filled out its enterprise code inventory pursuant to the metadata schema on Code.gov.\n      </li>\n    </ul>\n  </li>\n  \n</ul>\n<h1>Compliance Dashboard</h1>\n<table class=\" table table-striped table-bordered dataTable no-footer\"  style=\"color:#666666;\" cellspacing=0 border=1>\n\t\t\t\t\t<thead><tr>\n\t\t\t\t\t\t<th scope=\"row\" style=\"min-width:50px; text-align:center;\">Agency</th>\n\t\t\t\t\t\t<th scope=\"row\"style=\"min-width:50px; text-align:center; \">Up-to-date policy on digital strategy page</th>\n\t\t\t\t\t\t<th scope=\"row\" style=\"min-width:50px; text-align:center;\">Up-to-date enterprise code inventory</th>\n\t\t\t\t\t</tr>\n            </thead>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td style=\"min-width:50px;\">Dept. of Agriculture</td>\n\t\t\t\t\t\t<td style=\"min-width:50px; color:white;\"><div id=\"circle-red\"></div></td>\n\t\t\t\t\t\t<td style=\"min-width:50px; color:black;\"><div id=\"circle-yellow\"></div></td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td style=\"min-width:50px;\">Dept. of Commerce</td>\n\t\t\t\t\t\t<td style=\"min-width:50px; color:black;\"><div id=\"circle-green\"></div></td>\n\t\t\t\t\t\t<td style=\"min-width:50px; color:white;\"><div id=\"circle-red\"></div></td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td style=\"min-width:50px;\">Dept. of Defense</td>\n\t\t\t\t\t\t<td style=\"min-width:50px; color:white;\"><div id=\"circle-red\"></div></td>\n\t\t\t\t\t\t<td style=\"min-width:50px; color:white;\"><div id=\"circle-red\"></div></td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td style=\"min-width:50px;\">Dept. of Education</td>\n\t\t\t\t\t\t<td style=\"min-width:50px; color:black;\"><div id=\"circle-green\"></div></td>\n\t\t\t\t\t\t<td style=\"min-width:50px; color:black;\"><div id=\"circle-green\"></div></td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td style=\"min-width:50px;\">Dept. of Energy</td>\n\t\t\t\t\t\t<td style=\"min-width:50px; color:black;\"><div id=\"circle-yellow\"></div></td>\n\t\t\t\t\t\t<td style=\"min-width:50px; color:white;\"><div id=\"circle-red\"></div></td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td style=\"min-width:50px;\">Dept. of Health and Human Services</td>\n\t\t\t\t\t\t<td style=\"min-width:50px; color:white;\"><div id=\"circle-red\"></div></td>\n\t\t\t\t\t\t<td style=\"min-width:50px; color:black;\"><div id=\"circle-yellow\"></div></td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td style=\"min-width:50px;\">Dept. of Homeland Security</td>\n\t\t\t\t\t\t<td style=\"min-width:50px; color:black;\"><div id=\"circle-yellow\"></div></td>\n\t\t\t\t\t\t<td style=\"min-width:50px; color:white;\"><div id=\"circle-red\"></div></td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td style=\"min-width:50px;\">Dept. of Housing and Urban Development</td>\n\t\t\t\t\t\t<td style=\"min-width:50px; color:black;\"><div id=\"circle-yellow\"></div></td>\n\t\t\t\t\t\t<td style=\"min-width:50px; color:black;\"><div id=\"circle-green\"></div></td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td style=\"min-width:50px;\">Dept. of Interior</td>\n\t\t\t\t\t\t<td style=\"min-width:50px; color:black;\"><div id=\"circle-yellow\"></div></td>\n\t\t\t\t\t\t<td style=\"min-width:50px; color:white;\"><div id=\"circle-red\"></div></td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td style=\"min-width:50px;\">Dept. of Justice</td>\n\t\t\t\t\t\t<td style=\"min-width:50px; color:black;\"><div id=\"circle-yellow\"></div></td>\n\t\t\t\t\t\t<td style=\"min-width:50px; color:white;\"><div id=\"circle-red\"></div></td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td style=\"min-width:50px;\">Dept. of Labor</td>\n\t\t\t\t\t\t<td style=\"min-width:50px; color:white;\"><div id=\"circle-red\"></div></td>\n\t\t\t\t\t\t<td style=\"min-width:50px; color:white;\"><div id=\"circle-red\"></div></td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td style=\"min-width:50px;\">Dept. of State</td>\n\t\t\t\t\t\t<td style=\"min-width:50px; color:white;\"><div id=\"circle-red\"></div></td>\n\t\t\t\t\t\t<td style=\"min-width:50px; color:black;\"><div id=\"circle-yellow\"></div></td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td style=\"min-width:50px;\">Dept. of Transportation</td>\n\t\t\t\t\t\t<td style=\"min-width:50px; color:black;\"><div id=\"circle-yellow\"></div></td>\n\t\t\t\t\t\t<td style=\"min-width:50px; color:black;\"><div id=\"circle-yellow\"></div></td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td style=\"min-width:50px;\">Dept. of Treasury</td>\n\t\t\t\t\t\t<td style=\"min-width:50px; color:white;\"><div id=\"circle-red\"></div></td>\n\t\t\t\t\t\t<td style=\"min-width:50px; color:white;\"><div id=\"circle-red\"></div></td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td style=\"min-width:50px;\">Dept. of Veterans Affairs</td>\n\t\t\t\t\t\t<td style=\"min-width:50px; color:white;\"><div id=\"circle-red\"></div></td>\n\t\t\t\t\t\t<td style=\"min-width:50px; color:white;\"><div id=\"circle-red\"></div></td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td style=\"min-width:50px;\">Environmental Protection Agency</td>\n\t\t\t\t\t\t<td style=\"min-width:50px; color:white;\"><div id=\"circle-red\"></div></td>\n\t\t\t\t\t\t<td style=\"min-width:50px; color:white;\"><div id=\"circle-red\"></div></td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td style=\"min-width:50px;\">General Services Administration</td>\n\t\t\t\t\t\t<td style=\"min-width:50px; color:black;\"><div id=\"circle-green\"></div></td>\n\t\t\t\t\t\t<td style=\"min-width:50px; color:black;\"><div id=\"circle-yellow\"></div></td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td style=\"min-width:50px;\">NASA</td>\n\t\t\t\t\t\t<td style=\"min-width:50px; color:black;\"><div id=\"circle-green\"></div></td>\n\t\t\t\t\t\t<td style=\"min-width:50px; color:black;\"><div id=\"circle-yellow\"></div></td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td style=\"min-width:50px;\">National Archives and Records Administration</td>\n\t\t\t\t\t\t<td style=\"min-width:50px; color:black;\"><div id=\"circle-green\"></div></td>\n\t\t\t\t\t\t<td style=\"min-width:50px; color:black;\"><div id=\"circle-yellow\"></div></td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td style=\"min-width:50px;\">National Science Foundation</td>\n\t\t\t\t\t\t<td style=\"min-width:50px; color:black;\"><div id=\"circle-green\"></div></td>\n\t\t\t\t\t\t<td style=\"min-width:50px; color:black;\"><div id=\"circle-green\"></div></td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td style=\"min-width:50px;\">Nuclear Regulatory Commission</td>\n\t\t\t\t\t\t<td style=\"min-width:50px; color:black;\"><div id=\"circle-green\"></div></td>\n\t\t\t\t\t\t<td style=\"min-width:50px; color:black;\"><div id=\"circle-green\"></div></td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td style=\"min-width:50px;\">Office of Personnel Management</td>\n\t\t\t\t\t\t<td style=\"min-width:50px; color:black;\"><div id=\"circle-yellow\"></div></td>\n\t\t\t\t\t\t<td style=\"min-width:50px; color:white;\"><div id=\"circle-red\"></div></td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td style=\"min-width:50px;\">Small Business Administration</td>\n\t\t\t\t\t\t<td style=\"min-width:50px; color:black;\"><div id=\"circle-green\"></div></td>\n\t\t\t\t\t\t<td style=\"min-width:50px; color:white;\"><div id=\"circle-red\"></div></td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td style=\"min-width:50px;\">Social Security Administration</td>\n\t\t\t\t\t\t<td style=\"min-width:50px; color:black;\"><div id=\"circle-green\"></div></td>\n\t\t\t\t\t\t<td style=\"min-width:50px; color:black;\"><div id=\"circle-green\"></div></td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td style=\"min-width:50px;\">US Agency for International Development</td>\n\t\t\t\t\t\t<td style=\"min-width:50px; color:black;\"><div id=\"circle-green\"></div></td>\n\t\t\t\t\t\t<td style=\"min-width:50px; color:white;\"><div id=\"circle-red\"></div></td>\n\t\t\t\t\t</tr>\n\t\t\t\t</table>"

/***/ },

/***/ "./src/app/components/policy-guide/docs/compliance/compliance-dashboard/index.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__("./src/app/components/policy-guide/docs/compliance/compliance-dashboard/compliance-dashboard.component.ts"));


/***/ },

/***/ "./src/app/components/policy-guide/docs/compliance/compliance-inventory-code/compliance-inventory-code.component.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var seo_1 = __webpack_require__("./src/app/services/seo/index.ts");
var ComplianceInventoryCodeComponent = (function () {
    function ComplianceInventoryCodeComponent(seoService) {
        this.seoService = seoService;
        seoService.setTitle('Creating your enterprise code inventory', true);
        seoService.setMetaDescription('Learn how to create your enterprise code inventory and read up on the code.json metadata schema.');
        seoService.setMetaRobots('Index, Follow');
    }
    return ComplianceInventoryCodeComponent;
}());
ComplianceInventoryCodeComponent = __decorate([
    core_1.Component({
        selector: 'inventory-code',
        template: __webpack_require__("./src/app/components/policy-guide/docs/compliance/compliance-inventory-code/compliance-inventory-code.template.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof seo_1.SeoService !== "undefined" && seo_1.SeoService) === "function" && _a || Object])
], ComplianceInventoryCodeComponent);
exports.ComplianceInventoryCodeComponent = ComplianceInventoryCodeComponent;
var _a;


/***/ },

/***/ "./src/app/components/policy-guide/docs/compliance/compliance-inventory-code/compliance-inventory-code.template.html":
/***/ function(module, exports) {

module.exports = "<h1>Creating your enterprise code inventory</h1>\n<h2>Overview</h2>\n\n<p>Section <a href=\"https://sourcecode.cio.gov/Implementation/#code-inventories-and-discovery\">7.2</a> and <a href=\"https://sourcecode.cio.gov/Implementation/#codegov\">7.3</a> of the Source Code Policy require agencies to provide an inventory of their 'custom-developed code' to support government-wide reuse and make Federal open source code easier to find.</p>\n\n<p>Using these inventories, <a href=\"https://Code.gov\">Code.gov</a> will provide a platform to find custom-developed source code including that released as open source software and that which isn't open source but is available for government-wide reuse. It will compile an aggregate source code inventory for the Federal government.</p>\n\n<h2>Publishing Your Agency's Inventory</h2>\n\n<p>Agencies are required publish their inventories using a standard metadata schema - a JSON file that they'll make available on their agency websites. Versions 1.0.0 and 1.0.1 of the schema are now available. Agencies are strongly encouraged to use version 1.0.1 of the schema, which is described below. This version includes minor tweaks that make your inventory much more useful and intuitive.</p>\n\n<p>Agencies should make the <a href=\"https://github.com/presidential-innovation-fellows/code-gov-web/blob/master/src/assets/sample_code.json\">“code.json”</a> available in the root folder of their website (e.g., https://www.agency.gov/code.json). Code.gov will then retrieve these JSON files daily and compile them.</p>\n\n<h2>Metadata Schema version 1.0.1</h2>\n\n<h3>File location and contents:</h3>\n\n<ul>\n\t<li><code>code.json</code> must live in the root directory of your agency’s website.</li>\n\t<li><code>code.json</code> must include a single object represented as JSON, with key-value pairs according to the list below.</li>\n</ul>\n\n<h3>Fields:</h3>\n\n<h4>Required</h4>\n\n<ul>\n\t<li><code>version</code>: [string] The version of the metadata schema in use. For example \"1.0.1\"</li>\n\t<li><code>agency</code>: [string] The agency acronym. For example \"GSA\" or \"DOD\"</li>\n\t<li><code>projects</code>: [object] Contains objects representing each software project</li>\n\t<ul>\n\t\t<li>\n\t\t\t<code>name</code>: [string] The project name\n\t\t</li>\n\t\t<li>\n\t\t\t<code>repository</code>: [string] The URL of the public project repository for open source repositories.<br>\n      ** For repositories that are only available as government-wide reuse or are closed, pursuant to one of the exemptions, this field will not be required.\n\t\t</li>\n\t\t<li>\n\t\t\t<code>description</code>: [string] A description of the project\n\t\t</li>\n\t\t<li>\n\t\t\t<code>license</code>: [<code>null</code> or string] The URL of the project license, if available. <code>null</code> should be used if not.\n\t\t</li>\n\t\t<li>\n\t\t\t<code>openSourceProject</code>: [integer] A value indicating whether or not the project is open source.\n\t\t</li>\n\t\t<ul>\n\t\t<li>\n\t\t\t<code>0</code>: The project is not open source.\n\t\t</li>\n\t\t<li>\n\t\t\t<code>1</code>: The project is open source.\n\t\t</li>\n\t\t</ul>\n\t\t<li>\n\t\t\t<code>governmentWideReuseProject</code>: [integer] A value indicating whether or not the project is built for government-wide reuse.\n\t\t</li>\n\t\t\t<ul>\n\t\t\t\t<li><code>0</code>: The project is not built for government-wide reuse.</li>\n\t\t\t\t<li><code>1</code>: The project is built for government-wide reuse.</li>\n\t\t\t</ul>\n\t\t<li>\n\t\t\t<code>tags</code>: [array] A list of string alphanumeric keywords that identify the project.\n\t\t</li>\n\t\t<li>\n\t\t\t<code>contact</code>: [object] Information about contacting the project.\n\t\t\t<ul>\n\t\t\t\t<li><code>email</code>: [string] An email address to contact the project.</li>\n\t\t\t</ul>\n\t\t</li>\n\t</ul>\n</ul>\n\n<h4>Optional</h4>\n\n<ul>\n\t<li>Optional fields for project objects within <code>projects</code>: \n\t\t<ul>\n\t\t\t<li><code>organization</code>: [string] The organization within the agency that the projects listed belong to. For example, \"18F\" or \"Navy\".</li>\n\t\t\t<li><code>status</code>: [string] The development status of the project\n\t\t\t\t<ul>\n\t\t\t\t\t<li><code>\"Ideation\"</code> - brainstorming phase.</li>\n\t\t\t\t\t<li><code>\"Alpha\"</code> - initial prototyping phase and internal testing.</li>\n\t\t\t\t\t<li><code>\"Beta\"</code> - a project is being tested in public.</li>\n\t\t\t\t\t<li><code>\"Production\"</code> - finished project, with development and maintenance ongoing.</li>\n\t\t\t\t\t<li><code>\"Archival\"</code> - finished project, but no longer actively maintained.</li>\n\t\t\t\t</ul>\n\t\t\t</li>\n\t\t\t<li><code>vcs</code>: [string] A lowercase string with the name of the Version Control System in use on the project.</li>\n\t\t\t<li><code>homepage</code>: [string] The URL of the public project homepage</li>\n\t\t\t<li><code>downloadURL</code>: [string] The URL where a distribution of the project can be found.</li>\n\t\t\t<li><code>languages</code>: [array] A list of strings with the names of the programming languages in use on the project.</li>\n\t\t\t<li><code>contact</code>: [object] Information about contacting the project.\n\t\t\t\t<ul>\n\t\t\t\t\t<li><code>name</code>: [string] The name of a contact or department for the project</li>\n\t\t\t\t\t<li><code>twitter</code>: [string] The username of the project’s Twitter account</li>\n\t\t\t\t\t<li><code>phone</code>: [string] The phone number to contact a project.</li>\n\t\t\t\t</ul>\n\t\t\t</li>\n\t\t\t<li><code>partners</code>: [array] An array of objects including an acronym for each agency partnering on the project and the contact email at such agency.\n\t\t  \t\t<ul>\n\t\t  \t\t\t<li><code>name</code>: [string] The acronym describing the partner agency.</li>\n\t\t    \t\t<li><code>email</code>: [string] The email address for the point of contact at the partner agency.</li>\n\t\t  \t\t</ul>\n\t\t  \t</li>\n\t\t\t<li><code>exemption</code>: [integer] The exemption that excuses the project from government-wide reuse. Possible values and the exemption they correspond to from the policy are:</li>\n\t\t\t<ul>\n\t\t\t\t<li><code>1</code>: \"The sharing of the source code is restricted by law or regulation, including—but not limited to—patent or intellectual property law, the Export Asset Regulations, the International Traffic in Arms Regulation, and the Federal laws and regulations governing classified information.\"</li>\n\t\t\t\t<li><code>2</code>: \"The sharing of the source code would create an identifiable risk to the detriment of national security, confidentiality of Government information, or individual privacy.\"</li>\n\t\t\t\t<li><code>3</code>: \"The sharing of the source code would create an identifiable risk to the stability, security, or integrity of the agency’s systems or personnel.\"</li>\n\t\t\t\t<li><code>4</code>: \"The sharing of the source code would create an identifiable risk to agency mission, programs, or operations.\"</li>\n\t\t\t\t<li><code>5</code>: \"The CIO believes it is in the national interest to exempt sharing the source code.\"</li>\n\t\t\t</ul>\n\t\t\t<li><code>exemptionText</code>: [string] A brief narrative explanation for the exception requested in the 'exemption' field.</li>\n\t\t\t<li><code>updated</code>: [object] Dates that the project and metadata have been updated.\n\t\t\t\t<ul>\n\t\t\t\t\t<li><code>metadataLastUpdated</code>: [string] A date in YYYY-MM-DD or ISO 8601 format indicating when the metadata in this file was last updated.</li>\n\t\t\t\t\t<li><code>lastCommit</code>: [string] A date in ISO 8601 format indicating when the last commit to the project repository was.</li>\n\t\t\t\t\t<li><code>sourceCodeLastModified</code>: [string] A field intended for closed-source software and software outside of a VCS. The date in YYYY-MM-DD or ISO 8601 format that the source code or package was last updated.</li>\n\t\t\t\t</ul>\n\t\t\t</li>\n\t\t</ul>\n\t</li>\n</ul>\n<h2>Example code.json file</h2>\n\n<p>We’ve created a <a href=\"https://github.com/presidential-innovation-fellows/code-gov-web/blob/master/src/assets/sample_code.json\">sample code.json</a>.</p>\n\n<h2>Changelog</h2>\n<h3>December 2016 - Version 1.0.1</h3>\n<p>This revision includes minor tweaks that are aimed at clarifying certain fields and increasing the overall utility of the schema content.</p>\n<h4>Changes in v1.0.1</h4>\n<ul>\n\t<li>'version': The first official iteration of the code.gov metadata schema will be version 1.0.1. Adding a version number to the schema makes it easier to track and manage changes between versions of the metadata schema.</li>\n\n\t<li>‘organization’: The ‘organization’ field, which holds the name of the sub-agency responsible for a particular repository or project, is now optional. It has also been moved into the ‘projects’ object. This enables agencies to identify the appropriate organization that owns the repository within the agency.</li>\n\n\t<li>‘projects’: This guide previously referred to a ‘project’ field in the metadata schema, while the sample code.json referred to the plural form ‘projects’. This guide has been updated to refer to the plural form ‘projects’.</li>\n\n\t<li>‘repository’: The link to the open source repository will be considered a required field for all open source repositories. For repositories that are only available as government-wide reuse or are closed, pursuant to one of the exemptions, this field is not required.</li>\n\n\t<li>‘exemptionText’: This field allows agencies to provide a brief narrative explanation for the exception requested in the 'exemption' field.</li>\n</ul>\n"

/***/ },

/***/ "./src/app/components/policy-guide/docs/compliance/compliance-inventory-code/index.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__("./src/app/components/policy-guide/docs/compliance/compliance-inventory-code/compliance-inventory-code.component.ts"));


/***/ },

/***/ "./src/app/components/policy-guide/docs/compliance/compliance-licensing/compliance-licensing.component.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var ComplianceLicensingComponent = (function () {
    function ComplianceLicensingComponent() {
    }
    return ComplianceLicensingComponent;
}());
ComplianceLicensingComponent = __decorate([
    core_1.Component({
        selector: 'licensing',
        template: __webpack_require__("./src/app/components/policy-guide/docs/compliance/compliance-licensing/compliance-licensing.template.html")
    }),
    __metadata("design:paramtypes", [])
], ComplianceLicensingComponent);
exports.ComplianceLicensingComponent = ComplianceLicensingComponent;


/***/ },

/***/ "./src/app/components/policy-guide/docs/compliance/compliance-licensing/compliance-licensing.template.html":
/***/ function(module, exports) {

module.exports = "<h1>Licensing</h1>\n<p>\n  Content goes here.\n</p>\n"

/***/ },

/***/ "./src/app/components/policy-guide/docs/compliance/compliance-licensing/index.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__("./src/app/components/policy-guide/docs/compliance/compliance-licensing/compliance-licensing.component.ts"));


/***/ },

/***/ "./src/app/components/policy-guide/docs/compliance/compliance-measuring-code/compliance-measuring-code.component.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var seo_1 = __webpack_require__("./src/app/services/seo/index.ts");
var ComplianceMeasuringCodeComponent = (function () {
    function ComplianceMeasuringCodeComponent(seoService) {
        this.seoService = seoService;
        seoService.setTitle('Measuring Source Code', true);
        seoService.setMetaDescription('Learn about different ways to measure source code and how to choose the best method for your agency.');
        seoService.setMetaRobots('Index, Follow');
    }
    return ComplianceMeasuringCodeComponent;
}());
ComplianceMeasuringCodeComponent = __decorate([
    core_1.Component({
        selector: 'measuring-code',
        template: __webpack_require__("./src/app/components/policy-guide/docs/compliance/compliance-measuring-code/compliance-measuring-code.template.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof seo_1.SeoService !== "undefined" && seo_1.SeoService) === "function" && _a || Object])
], ComplianceMeasuringCodeComponent);
exports.ComplianceMeasuringCodeComponent = ComplianceMeasuringCodeComponent;
var _a;


/***/ },

/***/ "./src/app/components/policy-guide/docs/compliance/compliance-measuring-code/compliance-measuring-code.template.html":
/***/ function(module, exports) {

module.exports = "<h1>Measuring Source Code</h1>\n<p>As part of the Open Source Pilot Program the Federal Source Code Policy requires that:</p>\n<blockquote class=\"usa-quote\">\n\t<p>Each agency shall release as OSS at least 20 percent of its new custom-developed code each year.</p>\n</blockquote>\n<p>Broadly, to satisfy this requirement agencies will need to do two things:</p>\n<ul>\n<li>Choose a method of measuring the size of code</li>\n<li>Apply the measurement method to the total enterprise code inventory to establish a baseline</li>\n</ul>\n<h2>Choosing a measure</h2>\n<p>Having established an inventory of new custom-developed code, agencies will still need to determine their method of measuring the amount of code it represents. The Open Source community and Federal developers have suggested a number of options that agencies may choose from. These include:</p>\n<ul>\n<li>Source lines of code</li>\n<li>Number of self-contained modules</li>\n<li>Cost</li>\n<li>Number of software projects</li>\n<li>System certification and accreditation boundaries</li>\n</ul>\n<p>This list is not exhaustive and agencies should choose the most appropriate measure for their organization. When choosing a measure, agencies should consider the following factors:</p>\n<ul>\n<li>Automation. Is it possible to collect the data for the measure automatically or automate aspects of the collection process? For example, can a script be developed to tabulate the number of lines of source code in your repositories?</li>\n<li>Existing processes. Does your agency already collect data or collect systems information that can be repurposed to meet this requirement?</li>\n<li>Approximation. Given the difficulty in definitively calculating most reasonable measures related to this requirement, the Federal Source Code Policy leaves room for agencies to use approximate or \"estimated\" measures. For example, the number of source lines of code in a particular codebase may fluctuate day to day. Or if cost is your measure, the development of a particular codebase may have been purchased in combination with other services. Agencies may use approximation in measuring their code but should do so according to a documented, justifiable process that is applied consistently and considers the overall goals of the policy.</li>\n<li>To the extent practicable, agencies should use a consistent measure across their organization.</li>\n</ul>\n<h2>Measuring your code for the first time</h2>\n<p>Having chosen a measure, your agency will need to measure the size of its codebases that are under active development to establish a baseline.</p>\n<p>Things to consider include:</p>\n<ul>\n<li>This requirement complements the requirement to account for 100% of new custom-developed code in your agency&rsquo;s enterprise code inventory (or in the form of exemptions from inclusion in the inventory). Importantly, for the purposes of calculating your total amount of custom code, agencies <em>should include </em>code that is unlikely or certain not to be released for reasons of national security or the other exemptions related to the enterprise code inventory.</li>\n<li>Remember that the Federal Source Code Policy requires each agency to release \"20% of its new custom-developed code each year for the term of the pilot program\" and does not apply retroactively. However, making such code available for Government-wide reuse or as OSS, to the extent practicable, is strongly encouraged.</li>\n<li>In defining \"custom code\", the Federal Source Code Policy allows agencies to exclude \"code that is truly exploratory or disposable in nature, such as that written by a developer experimenting with a new language or library.\" As with measuring the size of code, agencies should adopt a consistent, justifiable approach to determining whether code qualifies and can be excluded from the enterprise code inventory and open source pilot. In that context, agencies should err on the side of including code.</li>\n</ul>\n"

/***/ },

/***/ "./src/app/components/policy-guide/docs/compliance/compliance-measuring-code/index.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__("./src/app/components/policy-guide/docs/compliance/compliance-measuring-code/compliance-measuring-code.component.ts"));


/***/ },

/***/ "./src/app/components/policy-guide/docs/compliance/compliance-whats-required/compliance-whats-required.component.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var seo_1 = __webpack_require__("./src/app/services/seo/index.ts");
var ComplianceWhatsRequiredComponent = (function () {
    function ComplianceWhatsRequiredComponent(seoService) {
        this.seoService = seoService;
        seoService.setTitle('Policy Compliance - What\'s Required?', true);
        seoService.setMetaDescription('Learn about the requirements of the Federal Source Code Policy and when they have to be completed.');
        seoService.setMetaRobots('Index, Follow');
    }
    return ComplianceWhatsRequiredComponent;
}());
ComplianceWhatsRequiredComponent = __decorate([
    core_1.Component({
        selector: 'compliance-whats-required',
        template: __webpack_require__("./src/app/components/policy-guide/docs/compliance/compliance-whats-required/compliance-whats-required.template.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof seo_1.SeoService !== "undefined" && seo_1.SeoService) === "function" && _a || Object])
], ComplianceWhatsRequiredComponent);
exports.ComplianceWhatsRequiredComponent = ComplianceWhatsRequiredComponent;
var _a;


/***/ },

/***/ "./src/app/components/policy-guide/docs/compliance/compliance-whats-required/compliance-whats-required.template.html":
/***/ function(module, exports) {

module.exports = "<h1>What’s Required?</h1>\n<p>\n  The Source Code Policy was issued on August 8, 2016 and requires both agencies and OMB to take specific actions within 90 and 120 days, as well as on an ongoing basis. This section is meant to help agencies meet those deadlines and boot up their overall source code strategy.\n</p>\n<h2>Milestone - 90 Days</h2>\n<p>\n  November 6, 2016 will mark 90 days from the issuance of the policy. By November 6, 2016, the following must be accomplished:\n</p>\n<ul>\n  <li>\n    OMB must:\n    <ul>\n      <li>Launch <a href=\"//Code.gov\">Code.gov</a></li>\n      <li>Provide content on <a href=\"//Code.gov\">Code.gov</a> regarding:\n        <ul>\n          <li>\n            How best to measure source code (<a rel=\"noopener\" target=\"_blank\" href=\"https://sourcecode.cio.gov/OSS/#pilot-program-publication-of-custom-developed-code-as-oss\">Section 5.1</a>)\n          </li>\n          <li>\n            Advice on how agencies can strengthen internal capacity to efficiently and securely deliver OSS as part of regular operations (<a rel=\"noopener\" target=\"_blank\" href=\"https://sourcecode.cio.gov/Implementation/#roles-and-responsibilities\">Section 7.1</a>)\n          </li>\n          <li>\n            Advice on existing code repositories and common third-party repository platforms that agencies can use to satisfy the requirements of this policy (<a rel=\"noopener\" target=\"_blank\" href=\"https://sourcecode.cio.gov/Implementation/#code-repositories\">Section 7.4</a>)\n          </li>\n          <li>\n            Advice on various open source licenses that agencies can use when releasing custom-developed code as OSS (<a rel=\"noopener\" target=\"_blank\" href=\"https://sourcecode.cio.gov/Implementation/#licensing\">Section 7.5</a>)\n          </li>\n          <li>\n            Insight into how agency implementation of this policy will be assessed by OMB (<a rel=\"noopener\" target=\"_blank\" href=\"https://sourcecode.cio.gov/Implementation/#accountability-mechanisms\">Section 7.7</a>)\n          </li>\n        </ul>\n      </li>\n    </ul>\n  </li>\n  <li>Agencies must:\n    <ul>\n      <li>\n        Develop an agency-wide policy that addresses the requirements of the Source Code Policy and correct or amend any policies that are inconsistent with the requirements of the Source Code Policy (<a rel=\"noopener\" target=\"_blank\" href=\"https://sourcecode.cio.gov/Implementation/#agency-policy\">Section 7.6</a>)\n      </li>\n    </ul>\n  </li>\n</ul>\n<h2>Milestone - 120 Days</h2>\n<p>December 6, 2016 will mark 120 days from the issuance of the policy. By December 6, 2016 the following must be accomplished:</p>\n  <ul>\n  <li>\n    OMB must:\n    <ul>\n      <li>Provide content on <a href=\"//Code.gov\">Code.gov</a> regarding:\n        <ul>\n          <li>\n            Metrics to assess the impact of the pilot program (<a rel=\"noopener\" target=\"_blank\" href=\"https://sourcecode.cio.gov/OSS/#pilot-program-publication-of-custom-developed-code-as-oss\">Section 5.1</a>)\n          </li>\n          <li>\n            Metadata schema to help agencies fill out their enterprise code inventories (<a rel=\"noopener\" target=\"_blank\" href=\"https://sourcecode.cio.gov/Implementation/#code-inventories-and-discovery\">Section 7.2</a>)\n          </li>\n        </ul>\n      </li>\n    </ul>\n  </li>\n  <li>\n    Agencies must:\n    <ul>\n      <li>\n        Update their enterprise code inventories using the metadata schema provided by OMB (<a rel=\"noopener\" target=\"_blank\" href=\"https://sourcecode.cio.gov/Implementation/#code-inventories-and-discovery\">Section 7.2</a>)\n      </li>\n    </ul>\n  </li>\n</ul>\n<h1>Day 121 and onward</h1>\n<p>After these initial deliverables have been met, OMB and agencies will work together to implement the policy and build overall capacity for code reuse and open source across the Executive Branch. Generally, agencies should plan to:</p>\n<ul>\n  <li>Update, refine, and expand their code inventories to promote government-wide sharing and reuse of code; and</li>\n  <li>Build their internal open source pipeline in order to efficiently develop and publish open source code as part of the Open Source Pilot Program.</li>\n</ul>\n"

/***/ },

/***/ "./src/app/components/policy-guide/docs/compliance/compliance-whats-required/index.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__("./src/app/components/policy-guide/docs/compliance/compliance-whats-required/compliance-whats-required.component.ts"));


/***/ },

/***/ "./src/app/components/policy-guide/docs/compliance/compliance.component.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var mobile_1 = __webpack_require__("./src/app/services/mobile/index.ts");
var ComplianceComponent = (function () {
    function ComplianceComponent(mobileService) {
        this.mobileService = mobileService;
        this.mobileService.hideMenu();
    }
    return ComplianceComponent;
}());
ComplianceComponent = __decorate([
    core_1.Component({
        selector: 'compliance',
        template: __webpack_require__("./src/app/components/policy-guide/docs/compliance/compliance.template.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof mobile_1.MobileService !== "undefined" && mobile_1.MobileService) === "function" && _a || Object])
], ComplianceComponent);
exports.ComplianceComponent = ComplianceComponent;
var _a;


/***/ },

/***/ "./src/app/components/policy-guide/docs/compliance/compliance.template.html":
/***/ function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ },

/***/ "./src/app/components/policy-guide/docs/compliance/index.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__("./src/app/components/policy-guide/docs/compliance/compliance.component.ts"));


/***/ },

/***/ "./src/app/components/policy-guide/docs/docs.component.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var mobile_1 = __webpack_require__("./src/app/services/mobile/index.ts");
var DocsComponent = (function () {
    function DocsComponent(mobileService) {
        var _this = this;
        this.mobileService = mobileService;
        this.menuActive = false;
        this.activeMenuSub = mobileService.activeMobileMenu$.subscribe(function (menuStatus) {
            _this.menuActive = menuStatus;
        });
    }
    DocsComponent.prototype.ngOnDestroy = function () {
        if (this.activeMenuSub)
            this.activeMenuSub.unsubscribe();
    };
    return DocsComponent;
}());
DocsComponent = __decorate([
    core_1.Component({
        selector: 'docs',
        styles: [__webpack_require__("./src/app/components/policy-guide/docs/docs.style.scss")],
        template: __webpack_require__("./src/app/components/policy-guide/docs/docs.template.html"),
        encapsulation: core_1.ViewEncapsulation.None
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof mobile_1.MobileService !== "undefined" && mobile_1.MobileService) === "function" && _a || Object])
], DocsComponent);
exports.DocsComponent = DocsComponent;
var _a;


/***/ },

/***/ "./src/app/components/policy-guide/docs/docs.style.scss":
/***/ function(module, exports) {

module.exports = "html {\n  box-sizing: border-box; }\n\n*, *::after, *::before {\n  box-sizing: inherit; }\n\n@-webkit-keyframes fadeInUp {\n  from {\n    -webkit-transform: translateY(0.5em);\n    opacity: 0;\n    visibility: hidden; }\n  to {\n    -webkit-transform: translateY(0);\n    opacity: 1;\n    visibility: visible; } }\n\n@-moz-keyframes fadeInUp {\n  from {\n    -moz-transform: translateY(0.5em);\n    opacity: 0;\n    visibility: hidden; }\n  to {\n    -moz-transform: translateY(0);\n    opacity: 1;\n    visibility: visible; } }\n\n@keyframes fadeInUp {\n  from {\n    -webkit-transform: translateY(0.5em);\n    -moz-transform: translateY(0.5em);\n    -ms-transform: translateY(0.5em);\n    -o-transform: translateY(0.5em);\n    transform: translateY(0.5em);\n    opacity: 0;\n    visibility: hidden; }\n  to {\n    -webkit-transform: translateY(0);\n    -moz-transform: translateY(0);\n    -ms-transform: translateY(0);\n    -o-transform: translateY(0);\n    transform: translateY(0);\n    opacity: 1;\n    visibility: visible; } }\n\n@-webkit-keyframes fadeIn {\n  from {\n    opacity: 0;\n    visibility: hidden; }\n  to {\n    opacity: 1;\n    visibility: visible; } }\n\n@-moz-keyframes fadeIn {\n  from {\n    opacity: 0;\n    visibility: hidden; }\n  to {\n    opacity: 1;\n    visibility: visible; } }\n\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n    visibility: hidden; }\n  to {\n    opacity: 1;\n    visibility: visible; } }\n\n@-webkit-keyframes blink {\n  from, to {\n    color: transparent; }\n  50% {\n    color: #23c0ba; } }\n\n@-moz-keyframes blink {\n  from, to {\n    color: transparent; }\n  50% {\n    color: #23c0ba; } }\n\n@keyframes blink {\n  from, to {\n    color: transparent; }\n  50% {\n    color: #23c0ba; } }\n\nbody {\n  -webkit-font-feature-settings: \"kern\", \"liga\", \"pnum\";\n  -moz-font-feature-settings: \"kern\", \"liga\", \"pnum\";\n  -ms-font-feature-settings: \"kern\", \"liga\", \"pnum\";\n  font-feature-settings: \"kern\", \"liga\", \"pnum\";\n  -webkit-font-smoothing: antialiased; }\n\nlabel {\n  -webkit-font-feature-settings: \"kern\", \"liga\", \"pnum\";\n  -moz-font-feature-settings: \"kern\", \"liga\", \"pnum\";\n  -ms-font-feature-settings: \"kern\", \"liga\", \"pnum\";\n  font-feature-settings: \"kern\", \"liga\", \"pnum\";\n  -webkit-font-smoothing: antialiased; }\n\na:focus {\n  box-shadow: 0 0 3px rgba(50, 58, 69, 0.25), 0 0 7px rgba(50, 58, 69, 0.25);\n  outline: 0; }\n\nh1,\nh2,\nh3,\nh4,\nh5\nh6 {\n  color: #323a45;\n  font-family: \"TT Lakes\", \"Helvetica Neue\", \"Helvetica\", \"Roboto\", \"Arial\", sans-serif;\n  font-weight: 500; }\n  h1:first-child,\n  h2:first-child,\n  h3:first-child,\n  h4:first-child,\n  h5\nh6:first-child {\n    margin-top: 0; }\n\np {\n  color: #5b616b; }\n  @media screen and (min-width: 40em) {\n    p {\n      font-size: 1.1em; } }\n\n.usa-button,\n.usa-button.usa-button-big,\n.usa-button-primary.usa-button-big,\n.usa-button:visited.usa-button-big,\n.usa-button-primary:visited.usa-button-big,\nbutton.usa-button-big,\n[type=\"button\"].usa-button-big,\n[type=\"submit\"].usa-button-big,\n[type=\"reset\"].usa-button-big,\n[type=\"image\"].usa-button-big {\n  -webkit-transition: all 0.2s ease;\n  -moz-transition: all 0.2s ease;\n  transition: all 0.2s ease; }\n  .usa-button:hover,\n  .usa-button.usa-button-big:hover,\n  .usa-button-primary.usa-button-big:hover,\n  .usa-button:visited.usa-button-big:hover,\n  .usa-button-primary:visited.usa-button-big:hover,\n  button.usa-button-big:hover,\n  [type=\"button\"].usa-button-big:hover,\n  [type=\"submit\"].usa-button-big:hover,\n  [type=\"reset\"].usa-button-big:hover,\n  [type=\"image\"].usa-button-big:hover {\n    -webkit-transform: translateY(-2px);\n    -moz-transform: translateY(-2px);\n    -ms-transform: translateY(-2px);\n    -o-transform: translateY(-2px);\n    transform: translateY(-2px); }\n\n.docs-content {\n  background-color: #ffffff;\n  padding: 1em 1em 2em; }\n  @media screen and (min-width: 40em) {\n    .docs-content {\n      float: left;\n      display: block;\n      margin-right: 2.35765%;\n      width: 74.41059%;\n      padding: 2em 2em 3em; }\n      .docs-content:last-child {\n        margin-right: 0; } }\n  @media screen and (min-width: 64em) {\n    .docs-content {\n      padding: 2.5em 2em; } }\n  .docs-content a {\n    color: #1b9590;\n    text-decoration: none; }\n    .docs-content a:hover {\n      color: #136a66; }\n  .docs-content blockquote {\n    background-color: #f6f6f6;\n    border-left: 6px solid #42519F;\n    color: #4d525a;\n    margin: 1.5em 0;\n    padding: 1em 1em 1em 2.5em; }\n    .docs-content blockquote p {\n      font-size: 0.95em; }\n      .docs-content blockquote p:first-child {\n        margin-top: 0; }\n      .docs-content blockquote p:last-child {\n        margin-bottom: 0; }\n  .docs-content code {\n    background-color: #485568;\n    border-radius: 3px;\n    color: #23c0ba;\n    font-size: 0.9em;\n    padding: 2px 3px; }\n  .docs-content li {\n    color: #5b616b; }\n    .docs-content li p {\n      font-size: 1em; }\n    .docs-content li ul {\n      margin-top: 0.2em;\n      padding-left: 1.25em; }\n\n.menu-icon {\n  -webkit-transform: rotate(0deg);\n  -moz-transform: rotate(0deg);\n  -ms-transform: rotate(0deg);\n  -o-transform: rotate(0deg);\n  transform: rotate(0deg);\n  -webkit-transition: 0.3s ease-in-out;\n  -moz-transition: 0.3s ease-in-out;\n  transition: 0.3s ease-in-out;\n  cursor: pointer;\n  display: inline-block;\n  height: 16px;\n  position: relative;\n  width: 18px; }\n  @media screen and (min-width: 40em) {\n    .menu-icon {\n      display: none; } }\n  .menu-icon .line {\n    -webkit-transform: rotate(0deg);\n    -moz-transform: rotate(0deg);\n    -ms-transform: rotate(0deg);\n    -o-transform: rotate(0deg);\n    transform: rotate(0deg);\n    -webkit-transition: 0.2s ease-in-out;\n    -moz-transition: 0.2s ease-in-out;\n    transition: 0.2s ease-in-out;\n    background: white;\n    border-radius: 3px;\n    display: block;\n    height: 2px;\n    left: 0;\n    opacity: 1;\n    position: absolute;\n    width: 100%; }\n    .menu-icon .line:nth-child(1) {\n      top: 0; }\n    .menu-icon .line:nth-child(2), .menu-icon .line:nth-child(3) {\n      top: 6px; }\n    .menu-icon .line:nth-child(4) {\n      top: 12px; }\n\n.menu-text {\n  display: inline-block;\n  margin-left: 0.2em;\n  vertical-align: top; }\n\n.policy-guide-subnav {\n  position: relative; }\n  @media screen and (min-width: 40em) {\n    .policy-guide-subnav {\n      float: left;\n      display: block;\n      margin-right: 2.35765%;\n      width: 23.23176%; }\n      .policy-guide-subnav:last-child {\n        margin-right: 0; } }\n  .policy-guide-subnav.active .usa-sidenav-list {\n    display: block; }\n  .policy-guide-subnav.active .menu-icon .line:nth-child(1) {\n    left: 50%;\n    top: 6px;\n    width: 0%; }\n  .policy-guide-subnav.active .menu-icon .line:nth-child(2) {\n    -webkit-transform: rotate(45deg);\n    -moz-transform: rotate(45deg);\n    -ms-transform: rotate(45deg);\n    -o-transform: rotate(45deg);\n    transform: rotate(45deg); }\n  .policy-guide-subnav.active .menu-icon .line:nth-child(3) {\n    -webkit-transform: rotate(-45deg);\n    -moz-transform: rotate(-45deg);\n    -ms-transform: rotate(-45deg);\n    -o-transform: rotate(-45deg);\n    transform: rotate(-45deg); }\n  .policy-guide-subnav.active .menu-icon .line:nth-child(4) {\n    left: 50%;\n    top: 6px;\n    width: 0%; }\n  .policy-guide-subnav .mobile-submenu {\n    font-size: 0.95em;\n    margin-bottom: 1.25em;\n    padding: 0.75em 0.5em 0.65em;\n    width: auto; }\n    @media screen and (min-width: 40em) {\n      .policy-guide-subnav .mobile-submenu {\n        display: none; } }\n  .policy-guide-subnav .usa-sidenav-list {\n    background-color: #333c4a;\n    display: none;\n    padding: 1em;\n    position: relative;\n    width: 100%; }\n    .policy-guide-subnav .usa-sidenav-list::before {\n      border-bottom: 10px solid #333c4a;\n      border-left: 10px solid transparent;\n      border-right: 10px solid transparent;\n      content: \"\";\n      height: 0;\n      left: 1em;\n      position: absolute;\n      top: -10px;\n      width: 0; }\n      @media screen and (min-width: 40em) {\n        .policy-guide-subnav .usa-sidenav-list::before {\n          display: none; } }\n    @media screen and (min-width: 40em) {\n      .policy-guide-subnav .usa-sidenav-list {\n        background-color: transparent;\n        display: block;\n        left: auto;\n        padding: 0;\n        position: static;\n        opacity: 1;\n        visibility: visible; } }\n    .policy-guide-subnav .usa-sidenav-list a {\n      color: #f1f1f1; }\n  .policy-guide-subnav a {\n    font-size: 0.95em;\n    text-decoration: none; }\n    .policy-guide-subnav a:focus {\n      box-shadow: 0 0 3px rgba(18, 21, 25, 0.25), 0 0 7px rgba(18, 21, 25, 0.25);\n      outline: 0; }\n    .policy-guide-subnav a:hover {\n      color: #ffffff; }\n  .policy-guide-subnav li {\n    font-size: 1em; }\n  .policy-guide-subnav .usa-current .usa-sidenav-sub_list {\n    display: block; }\n  .policy-guide-subnav .usa-sidenav-list a:hover {\n    background-color: #333c4a; }\n  .policy-guide-subnav .usa-sidenav-sub_list {\n    display: none; }\n"

/***/ },

/***/ "./src/app/components/policy-guide/docs/docs.template.html":
/***/ function(module, exports) {

module.exports = "<nav [ngClass]=\"{active: menuActive}\" class=\"policy-guide-subnav docs-nav\" role=\"navigation\">\n  <button toggle-menu class=\"mobile-submenu\" role=\"button\" aria-pressed=\"false\">\n    <span class=\"menu-icon\">\n      <span class=\"line\"></span>\n      <span class=\"line\"></span>\n      <span class=\"line\"></span>\n      <span class=\"line\"></span>\n    </span>\n    <span class=\"menu-text\">\n      Menu\n    </span>\n  </button>\n  <ul class=\"usa-sidenav-list\">\n    <li routerLinkActive=\"usa-current\">\n      <a routerLink=\"overview\" routerLinkActive=\"usa-current\">Overview</a>\n      <ul class=\"usa-sidenav-sub_list\">\n        <li>\n          <a routerLink=\"overview/introduction\" routerLinkActive=\"usa-current\">\n            Introduction\n          </a>\n        </li>\n        <li>\n          <a routerLink=\"overview/tracking-progress\" routerLinkActive=\"usa-current\">\n            Tracking Progress\n          </a>\n        </li>\n      </ul>\n    </li>\n    <li routerLinkActive=\"usa-current\">\n      <a routerLink=\"compliance\" routerLinkActive=\"usa-current\">Compliance</a>\n      <ul class=\"usa-sidenav-sub_list\">\n        <li>\n          <a routerLink=\"compliance/whats-required\" routerLinkActive=\"usa-current\">\n            What’s Required\n          </a>\n        </li>\n        <li>\n          <a routerLink=\"compliance/inventory-code\" routerLinkActive=\"usa-current\">\n            Inventory Code\n          </a>\n        </li>\n        <li>\n          <a routerLink=\"compliance/measuring-code\" routerLinkActive=\"usa-current\">\n            Measuring Code\n          </a>\n        </li>\n        <li>\n          <a routerLink=\"compliance/dashboard\" routerLinkActive=\"usa-current\">\n            Compliance Dashboard\n          </a>\n        </li>\n      </ul>\n    </li>\n    <li routerLinkActive=\"usa-current\">\n      <a routerLink=\"open-source\" routerLinkActive=\"usa-current\">Open Source</a>\n      <ul class=\"usa-sidenav-sub_list\">\n        <li>\n          <a routerLink=\"open-source/introduction\" routerLinkActive=\"usa-current\">\n            Introduction\n          </a>\n        </li>\n        <li>\n          <a routerLink=\"open-source/resources\" routerLinkActive=\"usa-current\">\n            Tools and Resources\n          </a>\n        </li>\n      </ul>\n    </li>\n  </ul>\n</nav>\n\n<section class=\"docs-content\">\n  <router-outlet></router-outlet>\n</section>\n"

/***/ },

/***/ "./src/app/components/policy-guide/docs/index.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__("./src/app/components/policy-guide/docs/docs.component.ts"));


/***/ },

/***/ "./src/app/components/policy-guide/docs/overview/index.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__("./src/app/components/policy-guide/docs/overview/overview.component.ts"));


/***/ },

/***/ "./src/app/components/policy-guide/docs/overview/introduction/index.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__("./src/app/components/policy-guide/docs/overview/introduction/introduction.component.ts"));


/***/ },

/***/ "./src/app/components/policy-guide/docs/overview/introduction/introduction.component.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var seo_1 = __webpack_require__("./src/app/services/seo/index.ts");
var IntroductionComponent = (function () {
    function IntroductionComponent(seoService) {
        this.seoService = seoService;
        seoService.setTitle('Policy Implementation Introduction', true);
        seoService.setMetaDescription('Start here for an overview of the Federal Open Source Code Policy.');
        seoService.setMetaRobots('Index, Follow');
    }
    return IntroductionComponent;
}());
IntroductionComponent = __decorate([
    core_1.Component({
        selector: 'introduction',
        template: __webpack_require__("./src/app/components/policy-guide/docs/overview/introduction/introduction.template.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof seo_1.SeoService !== "undefined" && seo_1.SeoService) === "function" && _a || Object])
], IntroductionComponent);
exports.IntroductionComponent = IntroductionComponent;
var _a;


/***/ },

/***/ "./src/app/components/policy-guide/docs/overview/introduction/introduction.template.html":
/***/ function(module, exports) {

module.exports = "<h1>Introduction</h1>\n<h2>About the Source Code Policy</h2>\n<p>\n  The President is committed to a 21st Century digital government – one that is designed to improve the lives of Americans and spur innovation with the best that technology has to offer. From helping students and families make more informed decisions about college selection to modernizing our country’s immigration system to opening up thousands of data sets and collections for Americans to leverage, this work has reimagined how government services and resources should be provided to the public.\n</p>\n<p>\n  The <a href=\"https://sourcecode.cio.gov\">Federal Source Code Policy</a> is designed to support reuse and public access to custom-developed Federal source code. It requires new custom-developed source code developed specifically by or for the Federal Government to be made available for sharing and re-use across all Federal agencies. It also includes an Open Source Pilot Program that requires agencies to release at least 20% of new custom-developed Federal source code to the public.\n</p>\n<p>\n  By making source code available for sharing and re-use across Federal agencies, we can avoid duplicative custom software purchases and promote innovation and collaboration across Federal agencies. By opening more of our code to the brightest minds inside and outside of government, we can enable them to work together to ensure that the code is reliable and effective in furthering our national objectives. And we can do all of this while remaining consistent with the Federal Government’s long-standing policy of technology neutrality, through which we seek to ensure that Federal investments in IT are merit-based, improve the performance of our government, and create value for the American people.\n</p>\n<h2>How we'll get there</h2>\n\n<p>\n This section of code.gov is designed to help agencies understand what is required by the policy and provide advice on how best to get there. Whether you're a developer, a Chief Information Officer, or an acquisition officer, this guide is for you.  Use it to better understand exactly what is required and how to maximize the benefits your agency will realize from implementation of the policy.</p>\n\n<p>Most importantly, unlike the policy itself, the content here is going to evolve and expand quickly. Check back often for new and improved articles. But better still, please consider this site yours. Use the <a href=\"https://github.com/presidential-innovation-fellows/code-gov-web/\">open source repository for this site</a> to ask questions by opening issues and suggest changes to the content using an Issue or Pull Request. If something is confusing or you have a question that isn't addressed, let's fix that together.</p>\n\n<p>On a final but important note, agencies should always treat the content here as purely advisory and rely primarily on the text of the policy itself to satisfy their obligations.</p>"

/***/ },

/***/ "./src/app/components/policy-guide/docs/overview/overview-inventory/index.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__("./src/app/components/policy-guide/docs/overview/overview-inventory/overview-inventory.component.ts"));


/***/ },

/***/ "./src/app/components/policy-guide/docs/overview/overview-inventory/overview-inventory.component.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var OverviewInventoryComponent = (function () {
    function OverviewInventoryComponent() {
    }
    OverviewInventoryComponent.prototype.ngOnInit = function () {
    };
    return OverviewInventoryComponent;
}());
OverviewInventoryComponent = __decorate([
    core_1.Component({
        selector: 'overview-inventory',
        template: __webpack_require__("./src/app/components/policy-guide/docs/overview/overview-inventory/overview-inventory.template.html")
    }),
    __metadata("design:paramtypes", [])
], OverviewInventoryComponent);
exports.OverviewInventoryComponent = OverviewInventoryComponent;


/***/ },

/***/ "./src/app/components/policy-guide/docs/overview/overview-inventory/overview-inventory.template.html":
/***/ function(module, exports) {

module.exports = "<h1>Inventorying and Sharing Code</h1>\n<p>\n  Content goes here.\n</p>\n"

/***/ },

/***/ "./src/app/components/policy-guide/docs/overview/overview-pilot/index.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__("./src/app/components/policy-guide/docs/overview/overview-pilot/overview-pilot.component.ts"));


/***/ },

/***/ "./src/app/components/policy-guide/docs/overview/overview-pilot/overview-pilot.component.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var OverviewPilotComponent = (function () {
    function OverviewPilotComponent() {
    }
    OverviewPilotComponent.prototype.ngOnInit = function () {
    };
    return OverviewPilotComponent;
}());
OverviewPilotComponent = __decorate([
    core_1.Component({
        selector: 'overview-pilot',
        template: __webpack_require__("./src/app/components/policy-guide/docs/overview/overview-pilot/overview-pilot.template.html")
    }),
    __metadata("design:paramtypes", [])
], OverviewPilotComponent);
exports.OverviewPilotComponent = OverviewPilotComponent;


/***/ },

/***/ "./src/app/components/policy-guide/docs/overview/overview-pilot/overview-pilot.template.html":
/***/ function(module, exports) {

module.exports = "<h1>Open Source Pilot</h1>\n<p>\n  Content goes here.\n</p>\n"

/***/ },

/***/ "./src/app/components/policy-guide/docs/overview/overview-tracking-progress/index.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__("./src/app/components/policy-guide/docs/overview/overview-tracking-progress/overview-tracking-progress.component.ts"));


/***/ },

/***/ "./src/app/components/policy-guide/docs/overview/overview-tracking-progress/overview-tracking-progress.component.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var seo_1 = __webpack_require__("./src/app/services/seo/index.ts");
var OverviewTrackingProgressComponent = (function () {
    function OverviewTrackingProgressComponent(seoService) {
        this.seoService = seoService;
        seoService.setTitle('How OMB Will Assess Agency Progress', true);
        seoService.setMetaDescription('Learn how agency progress implementing the Source Code Policy will be tracked and measured.');
        seoService.setMetaRobots('Index, Follow');
    }
    return OverviewTrackingProgressComponent;
}());
OverviewTrackingProgressComponent = __decorate([
    core_1.Component({
        selector: 'overview-tracking-progress',
        template: __webpack_require__("./src/app/components/policy-guide/docs/overview/overview-tracking-progress/overview-tracking-progress.template.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof seo_1.SeoService !== "undefined" && seo_1.SeoService) === "function" && _a || Object])
], OverviewTrackingProgressComponent);
exports.OverviewTrackingProgressComponent = OverviewTrackingProgressComponent;
var _a;


/***/ },

/***/ "./src/app/components/policy-guide/docs/overview/overview-tracking-progress/overview-tracking-progress.template.html":
/***/ function(module, exports) {

module.exports = "<h1>How OMB Will Assess Agency Progress</h1>\n<p>\n  <a href=\"https://sourcecode.cio.gov/Implementation/#accountability-mechanisms\">\n    Section 7.7\n  </a>\n  of the Federal Source Code Policy states that:\n</p>\n<blockquote class=\"usa-quote\">\n  <p>\n    Progress on agency implementation of this policy will be primarily assessed by OMB through an analysis of each agency’s internal Government repositories, public OSS repositories, and code inventories on Code.gov, as well as data obtained through the quarterly Integrated Data Collection (IDC), quarterly PortfolioStat sessions, the IT Dashboard, and additional mechanisms [..]\n  </p>\n</blockquote>\n<p>\n  Generally, OMB's approach to assessing agency progress in meeting the Federal Source Code Policy's requirements can be broken into two categories:\n</p>\n<ol>\n  <li>\n    analysis of agencies' enterprise code inventories, individual code repositories, and open sourced code, with a\n  </li>\n  <li>\n    (2) comparison of that information against overall operational and financial data already collected by OMB.\n  </li>\n</ol>\n<p>OMB will provide additional information about its assessment mechanisms over time.</p>\n<h2>Analysis of Each Agency’s Custom Code</h2>\n<p>\n  OMB will regularly review each agency&rsquo;s enterprise code inventory to ensure that the agency is satisfying the requirements of the Source Code Policy. This review will include both the agency&rsquo;s internal Government repositories and public open source repositories to ensure that each agency&rsquo;s enterprise code inventory is properly reflected on &ndash; and easily discoverable through &ndash; this website.\n</p>\n<h2>Analysis of Overall Data</h2>\n<p>\n  OMB collects agency data through a number of existing mechanisms, including quarterly PortfolioStat sessions and the Integrated Data Collection. Much of this data is publicly available on <a href=\"https://itdashboard.gov\">ITDashboard.gov</a>. OMB will use this data and other relevant information to better understand the overall impact of the Source Code Policy over time.\n</p>\n\n"

/***/ },

/***/ "./src/app/components/policy-guide/docs/overview/overview.component.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var mobile_1 = __webpack_require__("./src/app/services/mobile/index.ts");
var OverviewComponent = (function () {
    function OverviewComponent(mobileService) {
        this.mobileService = mobileService;
        this.mobileService.hideMenu();
    }
    return OverviewComponent;
}());
OverviewComponent = __decorate([
    core_1.Component({
        selector: 'overview',
        template: __webpack_require__("./src/app/components/policy-guide/docs/overview/overview.template.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof mobile_1.MobileService !== "undefined" && mobile_1.MobileService) === "function" && _a || Object])
], OverviewComponent);
exports.OverviewComponent = OverviewComponent;
var _a;


/***/ },

/***/ "./src/app/components/policy-guide/docs/overview/overview.template.html":
/***/ function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ },

/***/ "./src/app/components/policy-guide/index.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__("./src/app/components/policy-guide/policy-guide.component.ts"));


/***/ },

/***/ "./src/app/components/policy-guide/policy-guide.component.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var state_1 = __webpack_require__("./src/app/services/state/index.ts");
var PolicyGuideComponent = (function () {
    function PolicyGuideComponent(stateService) {
        this.stateService = stateService;
        this.stateService.set('section', 'policy-guide');
    }
    return PolicyGuideComponent;
}());
PolicyGuideComponent = __decorate([
    core_1.Component({
        selector: 'policy-guide',
        styles: [__webpack_require__("./src/app/components/policy-guide/policy-guide.style.scss")],
        template: __webpack_require__("./src/app/components/policy-guide/policy-guide.template.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof state_1.StateService !== "undefined" && state_1.StateService) === "function" && _a || Object])
], PolicyGuideComponent);
exports.PolicyGuideComponent = PolicyGuideComponent;
var _a;


/***/ },

/***/ "./src/app/components/policy-guide/policy-guide.style.scss":
/***/ function(module, exports) {

module.exports = "html {\n  box-sizing: border-box; }\n\n*, *::after, *::before {\n  box-sizing: inherit; }\n\n@-webkit-keyframes fadeInUp {\n  from {\n    -webkit-transform: translateY(0.5em);\n    opacity: 0;\n    visibility: hidden; }\n  to {\n    -webkit-transform: translateY(0);\n    opacity: 1;\n    visibility: visible; } }\n\n@-moz-keyframes fadeInUp {\n  from {\n    -moz-transform: translateY(0.5em);\n    opacity: 0;\n    visibility: hidden; }\n  to {\n    -moz-transform: translateY(0);\n    opacity: 1;\n    visibility: visible; } }\n\n@keyframes fadeInUp {\n  from {\n    -webkit-transform: translateY(0.5em);\n    -moz-transform: translateY(0.5em);\n    -ms-transform: translateY(0.5em);\n    -o-transform: translateY(0.5em);\n    transform: translateY(0.5em);\n    opacity: 0;\n    visibility: hidden; }\n  to {\n    -webkit-transform: translateY(0);\n    -moz-transform: translateY(0);\n    -ms-transform: translateY(0);\n    -o-transform: translateY(0);\n    transform: translateY(0);\n    opacity: 1;\n    visibility: visible; } }\n\n@-webkit-keyframes fadeIn {\n  from {\n    opacity: 0;\n    visibility: hidden; }\n  to {\n    opacity: 1;\n    visibility: visible; } }\n\n@-moz-keyframes fadeIn {\n  from {\n    opacity: 0;\n    visibility: hidden; }\n  to {\n    opacity: 1;\n    visibility: visible; } }\n\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n    visibility: hidden; }\n  to {\n    opacity: 1;\n    visibility: visible; } }\n\n@-webkit-keyframes blink {\n  from, to {\n    color: transparent; }\n  50% {\n    color: #23c0ba; } }\n\n@-moz-keyframes blink {\n  from, to {\n    color: transparent; }\n  50% {\n    color: #23c0ba; } }\n\n@keyframes blink {\n  from, to {\n    color: transparent; }\n  50% {\n    color: #23c0ba; } }\n\nbody {\n  -webkit-font-feature-settings: \"kern\", \"liga\", \"pnum\";\n  -moz-font-feature-settings: \"kern\", \"liga\", \"pnum\";\n  -ms-font-feature-settings: \"kern\", \"liga\", \"pnum\";\n  font-feature-settings: \"kern\", \"liga\", \"pnum\";\n  -webkit-font-smoothing: antialiased; }\n\nlabel {\n  -webkit-font-feature-settings: \"kern\", \"liga\", \"pnum\";\n  -moz-font-feature-settings: \"kern\", \"liga\", \"pnum\";\n  -ms-font-feature-settings: \"kern\", \"liga\", \"pnum\";\n  font-feature-settings: \"kern\", \"liga\", \"pnum\";\n  -webkit-font-smoothing: antialiased; }\n\na:focus {\n  box-shadow: 0 0 3px rgba(50, 58, 69, 0.25), 0 0 7px rgba(50, 58, 69, 0.25);\n  outline: 0; }\n\nh1,\nh2,\nh3,\nh4,\nh5\nh6 {\n  color: #323a45;\n  font-family: \"TT Lakes\", \"Helvetica Neue\", \"Helvetica\", \"Roboto\", \"Arial\", sans-serif;\n  font-weight: 500; }\n  h1:first-child,\n  h2:first-child,\n  h3:first-child,\n  h4:first-child,\n  h5\nh6:first-child {\n    margin-top: 0; }\n\np {\n  color: #5b616b; }\n  @media screen and (min-width: 40em) {\n    p {\n      font-size: 1.1em; } }\n\n.usa-button,\n.usa-button.usa-button-big,\n.usa-button-primary.usa-button-big,\n.usa-button:visited.usa-button-big,\n.usa-button-primary:visited.usa-button-big,\nbutton.usa-button-big,\n[type=\"button\"].usa-button-big,\n[type=\"submit\"].usa-button-big,\n[type=\"reset\"].usa-button-big,\n[type=\"image\"].usa-button-big {\n  -webkit-transition: all 0.2s ease;\n  -moz-transition: all 0.2s ease;\n  transition: all 0.2s ease; }\n  .usa-button:hover,\n  .usa-button.usa-button-big:hover,\n  .usa-button-primary.usa-button-big:hover,\n  .usa-button:visited.usa-button-big:hover,\n  .usa-button-primary:visited.usa-button-big:hover,\n  button.usa-button-big:hover,\n  [type=\"button\"].usa-button-big:hover,\n  [type=\"submit\"].usa-button-big:hover,\n  [type=\"reset\"].usa-button-big:hover,\n  [type=\"image\"].usa-button-big:hover {\n    -webkit-transform: translateY(-2px);\n    -moz-transform: translateY(-2px);\n    -ms-transform: translateY(-2px);\n    -o-transform: translateY(-2px);\n    transform: translateY(-2px); }\n\n.policy-guide-content {\n  background-color: #485568;\n  padding: 0.75em 0 3em; }\n  @media screen and (min-width: 40em) {\n    .policy-guide-content {\n      padding: 2em 0 3em; } }\n"

/***/ },

/***/ "./src/app/components/policy-guide/policy-guide.template.html":
/***/ function(module, exports) {

module.exports = "<nav class=\"policy-guide-nav subnav\" role=\"navigation\">\n  <div class=\"usa-grid\">\n    <ul class=\"usa-unstyled-list\">\n      <li>\n        <a routerLink=\"docs\" routerLinkActive=\"active\">\n          How To\n        </a>\n      </li>\n      <li>\n        <a href=\"https://sourcecode.cio.gov/\" target=\"_blank\" rel=\"noopener\">\n          Read the Policy\n          <i class=\"fa fa-external-link\">\n          </i>\n        </a>\n      </li>\n    </ul>\n  </div>\n</nav>\n\n<div class=\"policy-guide-content\">\n  <div class=\"usa-grid\">\n    <router-outlet></router-outlet>\n  </div>\n</div>\n\n<modal></modal>\n"

/***/ },

/***/ "./src/app/components/privacy-policy/index.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__("./src/app/components/privacy-policy/privacy-policy.component.ts"));


/***/ },

/***/ "./src/app/components/privacy-policy/privacy-policy.component.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var state_1 = __webpack_require__("./src/app/services/state/index.ts");
var seo_1 = __webpack_require__("./src/app/services/seo/index.ts");
var PrivacyPolicyComponent = (function () {
    function PrivacyPolicyComponent(seoService, stateService) {
        this.seoService = seoService;
        this.stateService = stateService;
        this.stateService.set('section', 'privacy-policy');
        this.seoService.setTitle('Privacy Policy', true);
        this.seoService.setMetaDescription('Learn about how Code.gov is using cookies and analytics.');
        this.seoService.setMetaRobots('Index, Follow');
    }
    return PrivacyPolicyComponent;
}());
PrivacyPolicyComponent = __decorate([
    core_1.Component({
        selector: 'privacy-policy',
        styles: [__webpack_require__("./src/app/components/privacy-policy/privacy-policy.style.scss")],
        template: __webpack_require__("./src/app/components/privacy-policy/privacy-policy.template.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof seo_1.SeoService !== "undefined" && seo_1.SeoService) === "function" && _a || Object, typeof (_b = typeof state_1.StateService !== "undefined" && state_1.StateService) === "function" && _b || Object])
], PrivacyPolicyComponent);
exports.PrivacyPolicyComponent = PrivacyPolicyComponent;
var _a, _b;


/***/ },

/***/ "./src/app/components/privacy-policy/privacy-policy.style.scss":
/***/ function(module, exports) {

module.exports = "html {\n  box-sizing: border-box; }\n\n*, *::after, *::before {\n  box-sizing: inherit; }\n\n@-webkit-keyframes fadeInUp {\n  from {\n    -webkit-transform: translateY(0.5em);\n    opacity: 0;\n    visibility: hidden; }\n  to {\n    -webkit-transform: translateY(0);\n    opacity: 1;\n    visibility: visible; } }\n\n@-moz-keyframes fadeInUp {\n  from {\n    -moz-transform: translateY(0.5em);\n    opacity: 0;\n    visibility: hidden; }\n  to {\n    -moz-transform: translateY(0);\n    opacity: 1;\n    visibility: visible; } }\n\n@keyframes fadeInUp {\n  from {\n    -webkit-transform: translateY(0.5em);\n    -moz-transform: translateY(0.5em);\n    -ms-transform: translateY(0.5em);\n    -o-transform: translateY(0.5em);\n    transform: translateY(0.5em);\n    opacity: 0;\n    visibility: hidden; }\n  to {\n    -webkit-transform: translateY(0);\n    -moz-transform: translateY(0);\n    -ms-transform: translateY(0);\n    -o-transform: translateY(0);\n    transform: translateY(0);\n    opacity: 1;\n    visibility: visible; } }\n\n@-webkit-keyframes fadeIn {\n  from {\n    opacity: 0;\n    visibility: hidden; }\n  to {\n    opacity: 1;\n    visibility: visible; } }\n\n@-moz-keyframes fadeIn {\n  from {\n    opacity: 0;\n    visibility: hidden; }\n  to {\n    opacity: 1;\n    visibility: visible; } }\n\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n    visibility: hidden; }\n  to {\n    opacity: 1;\n    visibility: visible; } }\n\n@-webkit-keyframes blink {\n  from, to {\n    color: transparent; }\n  50% {\n    color: #23c0ba; } }\n\n@-moz-keyframes blink {\n  from, to {\n    color: transparent; }\n  50% {\n    color: #23c0ba; } }\n\n@keyframes blink {\n  from, to {\n    color: transparent; }\n  50% {\n    color: #23c0ba; } }\n\nbody {\n  -webkit-font-feature-settings: \"kern\", \"liga\", \"pnum\";\n  -moz-font-feature-settings: \"kern\", \"liga\", \"pnum\";\n  -ms-font-feature-settings: \"kern\", \"liga\", \"pnum\";\n  font-feature-settings: \"kern\", \"liga\", \"pnum\";\n  -webkit-font-smoothing: antialiased; }\n\nlabel {\n  -webkit-font-feature-settings: \"kern\", \"liga\", \"pnum\";\n  -moz-font-feature-settings: \"kern\", \"liga\", \"pnum\";\n  -ms-font-feature-settings: \"kern\", \"liga\", \"pnum\";\n  font-feature-settings: \"kern\", \"liga\", \"pnum\";\n  -webkit-font-smoothing: antialiased; }\n\na:focus {\n  box-shadow: 0 0 3px rgba(50, 58, 69, 0.25), 0 0 7px rgba(50, 58, 69, 0.25);\n  outline: 0; }\n\nh1,\nh2,\nh3,\nh4,\nh5\nh6 {\n  color: #323a45;\n  font-family: \"TT Lakes\", \"Helvetica Neue\", \"Helvetica\", \"Roboto\", \"Arial\", sans-serif;\n  font-weight: 500; }\n  h1:first-child,\n  h2:first-child,\n  h3:first-child,\n  h4:first-child,\n  h5\nh6:first-child {\n    margin-top: 0; }\n\np {\n  color: #5b616b; }\n  @media screen and (min-width: 40em) {\n    p {\n      font-size: 1.1em; } }\n\n.usa-button,\n.usa-button.usa-button-big,\n.usa-button-primary.usa-button-big,\n.usa-button:visited.usa-button-big,\n.usa-button-primary:visited.usa-button-big,\nbutton.usa-button-big,\n[type=\"button\"].usa-button-big,\n[type=\"submit\"].usa-button-big,\n[type=\"reset\"].usa-button-big,\n[type=\"image\"].usa-button-big {\n  -webkit-transition: all 0.2s ease;\n  -moz-transition: all 0.2s ease;\n  transition: all 0.2s ease; }\n  .usa-button:hover,\n  .usa-button.usa-button-big:hover,\n  .usa-button-primary.usa-button-big:hover,\n  .usa-button:visited.usa-button-big:hover,\n  .usa-button-primary:visited.usa-button-big:hover,\n  button.usa-button-big:hover,\n  [type=\"button\"].usa-button-big:hover,\n  [type=\"submit\"].usa-button-big:hover,\n  [type=\"reset\"].usa-button-big:hover,\n  [type=\"image\"].usa-button-big:hover {\n    -webkit-transform: translateY(-2px);\n    -moz-transform: translateY(-2px);\n    -ms-transform: translateY(-2px);\n    -o-transform: translateY(-2px);\n    transform: translateY(-2px); }\n\n.privacy-content a {\n  color: #0071bc; }\n  .privacy-content a:hover {\n    color: #005289; }\n\n.privacy-content li {\n  color: #5b616b;\n  font-size: 1.1em; }\n\n.usa-grid {\n  padding-bottom: 6em;\n  padding-top: 2em; }\n"

/***/ },

/***/ "./src/app/components/privacy-policy/privacy-policy.template.html":
/***/ function(module, exports) {

module.exports = "<div class=\"usa-grid privacy-content\">\n  <div class=\"usa-width-three-fourths\">\n    <h1>Privacy Policy</h1>\n    <h2>PROTECTING PRIVACY AND SECURITY</h2>\n    <p>\n      Protecting the privacy and security of individuals’ personal information is very important to us. We do not collect any information that directly identifies you when you visit Code.gov unless you choose to provide that information by contacting us. However, the website may collect a limited amount of information about your visit for the purposes of website analytics and customization. Please read this notice to understand what we do with the limited amount of information about your visit that we may collect.\n    </p>\n    <h3>Information Collected and Stored Automatically</h3>\n    <p>\n      We collect limited information about visits to Code.gov. This information is used to measure the number of visitors to the various sections of our website and to identify performance or problem areas. We also use this information to help us develop the site, analyze patterns of usage, and to make the site more useful. We do not share or sell visitor data for the purposes of advertising, marketing, or any other commercial purpose. This information is not used for associating search terms or patterns of site navigation with individual users. The information that is automatically collected and stored concerning your visit includes:\n    </p>\n    <ul>\n      <li>\n        The domain from which you access the Internet (i.e., HHS.gov if you are connecting from a HHS account, or GMU.edu if you are connecting from George Mason University’s domain);\n      </li>\n      <li>The date and time of your visit;</li>\n      <li>Your location, as approximated by GPS, and other sensors;</li>\n      <li>The type of device you used to access Code.gov (i.e., mobile or desktop);</li>\n      <li>The operating system of the device you used to access Code.gov;</li>\n      <li>The pages you visit on Code.gov;</li>\n      <li>\n        The Internet address of the website you came from if it linked you directly to Code.gov; and\n      </li>\n      <li>\n        Aany search terms that you may enter when searching Code.gov.\n      </li>\n    </ul>\n    <h3>How Code.gov uses Cookies</h3>\n    <p>\n      When you visit a website, its server may generate a piece of text known as a “cookie” to place on your device. The cookie, which is unique to your browser, allows the server to “remember” specific information about your visit while you are connected.</p>\n    <p>There are two types of cookies – single session (temporary) and multi-session (persistent). Single session cookies last only as long as your Web browser is open. Once you close your browser, the session cookie disappears. Persistent cookies are stored on your device for longer periods. Both types of cookies create an identifier that is unique to your device. The Office of Management and Budget Memorandum M-10-22, Guidance for Online Use of Web Measurement and Customization Technologies, allows Federal entities to use both session and persistent cookies to improve the delivery of services.</p>\n    <ul>\n    <li>Session Cookies: We may use session cookies for technical purposes, such as to allow better navigation through our site. These cookies let our server know that you are continuing a visit to our site. Our use of session cookies qualifies as “Usage Tier 1–Single Session,” as defined in the OMB M-10-22 guidance.</li>\n    <li>Persistent Cookies: We may use persistent cookies to understand the differences between new and returning visitors to Code.gov. Persistent cookies remain on your device between visits to our site until they expire or are removed by the user. Our use of persistent cookies qualifies as “Usage Tier 2–Multi-session without personally identifiable information,” as defined in the OMB M-10-22 guidance. The policy states, “This tier encompasses any use of multi-session Web measurement and customization technologies when no [personally identifiable information] is collected.” We do not use persistent cookies to collect personally identifiable information.</li>\n    </ul>\n    <p>If you do not want to accept cookies, you can edit your browser’s options to stop accepting persistent cookies or to prompt you before accepting a cookie from the websites you visit. Here are instructions for how you can disable cookies and/or Google Demographic and Interests reports.</p>\n    <h3>Google Analytics</h3>\n    <p>Code.gov participates in the U.S. Digital Analytics Program, (DAP) which utilizes a unified Google Analytics account for Federal agencies. This program helps Federal agencies understand how people find, access, and use government services online.</p>\n    <p>The DAP is a hosted shared service provided by the General Services Administration’s (GSA’s) Office of Citizen Services and Innovative Technologies, and the protocol and information collected are the same for all websites participating in the DAP. As a participant in GSA’s DAP program, this website’s Google Analytics traffic data is automatically reported to GSA.</p>\n    <p>Google Analytics is a third-party web measurement and customization technology as defined in OMB M-10-22 (PDF).</p>\n    <p>Here is how it works: Google Analytics sets one or more cookies on your computer so that it can recognize your computer if you visit the Code.gov website in the future. These cookies doe not collect personally identifiable information. This is considered a Tier 2 usage, as defined in the OMB guidance.</p>\n    <p>Google Analytics does not collect personally identifiable information through its cookies. The program does not track individuals and anonymizes the IP addresses of visitors. Common Questions about DAP (FAQ) provides more information about how IP addresses are anonymized. According to GSA’s Common Questions About DAP, “none of the federal government data tracked as part of the Data Analytics Program will be shared with or available to Google’s corporate advertising partners.”</p>\n    <p>A limited number of authorized individuals will have user accounts that will allow them to log in to the Google Analytics dashboard and view or run reports regarding visits to Code.gov and the other web metrics available from the DAP.</p>\n    <p>Visitors who choose to disable this web measurement tool will still have full access to Code.gov. While the details vary from browser to browser, most modern browsers can be set up to accept, reject, or request user intervention when a site asks to set a cookie.</p>\n    <p>You can view web metrics information at <a href=\"https://analytics.usa.gov\">https://analytics.usa.gov/</a>.</p>\n    <h3>Contacting the Office of the Federal Chief Information Officer about Code.gov</h3>\n    <p>Users of this website may send the Office of the Federal Chief Information Officer feedback or report an issue by sending an email to code@gsa.gov. If you choose to send us your personally identifiable information, we will only use that information to respond to your message. We only share the information you give us with another government agency if your question relates to that agency, or as otherwise required by law. Code.gov never collects information or creates individual profiles for the purposes of advertising, marketing, or any other commercial purpose. When you contact us, any personally identifiable information you provide is voluntary. Please do not include sensitive personally identifiable information or other sensitive information in the content of your email.</p>\n    <h3>Children and Privacy on Code.gov</h3>\n    <p>We believe in the importance of protecting the privacy of children online. The Children’s Online Privacy Protection Act (COPPA) governs information gathered online from or about children under the age of 13. This site is not intended to solicit or collection information of any kind from children under age 13. If you believe that we have received information from a child under age 13, please contact us at code@gsa.gov.</p>\n    <h3>Security</h3>\n    <p>This website was built using GitHub Pages, a service provided by GitHub, Inc. (GitHub) designed to enable the rapid deployment of government websites in a secure and readily accessible environment.</p>\n    <p>The terms of service applicable to Federal users of GitHub states that it “will, in good faith, exercise due diligence using generally accepted commercial business practices for IT security, to ensure that systems are operated and maintained in a secure manner, and that management, operational and technical controls will be employed to ensure security of systems and data. Recognizing the changing nature of the Web, [GitHub] will continuously work with users to ensure that its products and services are operated and maintained in a secure manner. [GitHub] agrees to discuss implementing additional security controls as deemed necessary by the Agency to conform to the Federal Information Security Management Act (FISMA), 44 U.S.C. 3541 et seq.”</p>\n    <p>We encourage you to visit <a external-link href=\"https://help.github.com/articles/github-terms-of-service/\">GitHub</a> if you have additional questions about the service.</p>\n    <h3>Questions about the Privacy Policy</h3>\n    <p>Write to the Code.gov team at: <a href=\"mailto:code@gsa.gov\">code@gsa.gov</a></p>\n  </div>\n</div>\n<modal></modal>\n"

/***/ },

/***/ "./src/app/components/repo-list-item/index.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__("./src/app/components/repo-list-item/repo-list-item.component.ts"));


/***/ },

/***/ "./src/app/components/repo-list-item/repo-list-item.component.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var RepoListItemComponent = (function () {
    function RepoListItemComponent() {
    }
    return RepoListItemComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], RepoListItemComponent.prototype, "repo", void 0);
RepoListItemComponent = __decorate([
    core_1.Component({
        selector: 'repo-list-item',
        styles: [__webpack_require__("./src/app/components/repo-list-item/repo-list-item.styles.scss")],
        template: __webpack_require__("./src/app/components/repo-list-item/repo-list-item.template.html")
    }),
    __metadata("design:paramtypes", [])
], RepoListItemComponent);
exports.RepoListItemComponent = RepoListItemComponent;


/***/ },

/***/ "./src/app/components/repo-list-item/repo-list-item.styles.scss":
/***/ function(module, exports) {

module.exports = "html {\n  box-sizing: border-box; }\n\n*, *::after, *::before {\n  box-sizing: inherit; }\n\n@-webkit-keyframes fadeInUp {\n  from {\n    -webkit-transform: translateY(0.5em);\n    opacity: 0;\n    visibility: hidden; }\n  to {\n    -webkit-transform: translateY(0);\n    opacity: 1;\n    visibility: visible; } }\n\n@-moz-keyframes fadeInUp {\n  from {\n    -moz-transform: translateY(0.5em);\n    opacity: 0;\n    visibility: hidden; }\n  to {\n    -moz-transform: translateY(0);\n    opacity: 1;\n    visibility: visible; } }\n\n@keyframes fadeInUp {\n  from {\n    -webkit-transform: translateY(0.5em);\n    -moz-transform: translateY(0.5em);\n    -ms-transform: translateY(0.5em);\n    -o-transform: translateY(0.5em);\n    transform: translateY(0.5em);\n    opacity: 0;\n    visibility: hidden; }\n  to {\n    -webkit-transform: translateY(0);\n    -moz-transform: translateY(0);\n    -ms-transform: translateY(0);\n    -o-transform: translateY(0);\n    transform: translateY(0);\n    opacity: 1;\n    visibility: visible; } }\n\n@-webkit-keyframes fadeIn {\n  from {\n    opacity: 0;\n    visibility: hidden; }\n  to {\n    opacity: 1;\n    visibility: visible; } }\n\n@-moz-keyframes fadeIn {\n  from {\n    opacity: 0;\n    visibility: hidden; }\n  to {\n    opacity: 1;\n    visibility: visible; } }\n\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n    visibility: hidden; }\n  to {\n    opacity: 1;\n    visibility: visible; } }\n\n@-webkit-keyframes blink {\n  from, to {\n    color: transparent; }\n  50% {\n    color: #23c0ba; } }\n\n@-moz-keyframes blink {\n  from, to {\n    color: transparent; }\n  50% {\n    color: #23c0ba; } }\n\n@keyframes blink {\n  from, to {\n    color: transparent; }\n  50% {\n    color: #23c0ba; } }\n\nbody {\n  -webkit-font-feature-settings: \"kern\", \"liga\", \"pnum\";\n  -moz-font-feature-settings: \"kern\", \"liga\", \"pnum\";\n  -ms-font-feature-settings: \"kern\", \"liga\", \"pnum\";\n  font-feature-settings: \"kern\", \"liga\", \"pnum\";\n  -webkit-font-smoothing: antialiased; }\n\nlabel {\n  -webkit-font-feature-settings: \"kern\", \"liga\", \"pnum\";\n  -moz-font-feature-settings: \"kern\", \"liga\", \"pnum\";\n  -ms-font-feature-settings: \"kern\", \"liga\", \"pnum\";\n  font-feature-settings: \"kern\", \"liga\", \"pnum\";\n  -webkit-font-smoothing: antialiased; }\n\na:focus {\n  box-shadow: 0 0 3px rgba(50, 58, 69, 0.25), 0 0 7px rgba(50, 58, 69, 0.25);\n  outline: 0; }\n\nh1,\nh2,\nh3,\nh4,\nh5 h6 {\n  color: #323a45;\n  font-family: \"TT Lakes\", \"Helvetica Neue\", \"Helvetica\", \"Roboto\", \"Arial\", sans-serif;\n  font-weight: 500; }\n  h1:first-child,\n  h2:first-child,\n  h3:first-child,\n  h4:first-child,\n  h5 h6:first-child {\n    margin-top: 0; }\n\np {\n  color: #5b616b; }\n  @media screen and (min-width: 40em) {\n    p {\n      font-size: 1.1em; } }\n\n.usa-button,\n.usa-button.usa-button-big,\n.usa-button-primary.usa-button-big,\n.usa-button:visited.usa-button-big,\n.usa-button-primary:visited.usa-button-big,\nbutton.usa-button-big,\n[type=\"button\"].usa-button-big,\n[type=\"submit\"].usa-button-big,\n[type=\"reset\"].usa-button-big,\n[type=\"image\"].usa-button-big {\n  -webkit-transition: all 0.2s ease;\n  -moz-transition: all 0.2s ease;\n  transition: all 0.2s ease; }\n  .usa-button:hover,\n  .usa-button.usa-button-big:hover,\n  .usa-button-primary.usa-button-big:hover,\n  .usa-button:visited.usa-button-big:hover,\n  .usa-button-primary:visited.usa-button-big:hover,\n  button.usa-button-big:hover,\n  [type=\"button\"].usa-button-big:hover,\n  [type=\"submit\"].usa-button-big:hover,\n  [type=\"reset\"].usa-button-big:hover,\n  [type=\"image\"].usa-button-big:hover {\n    -webkit-transform: translateY(-2px);\n    -moz-transform: translateY(-2px);\n    -ms-transform: translateY(-2px);\n    -o-transform: translateY(-2px);\n    transform: translateY(-2px); }\n\na {\n  background-color: #ffffff;\n  border: 1px solid #e9e9e9;\n  box-sizing: border-box;\n  padding: 0.5em; }\n  @media screen and (min-width: 40em) {\n    a {\n      padding: 1em; } }\n\na {\n  -webkit-transition: all 0.2s ease;\n  -moz-transition: all 0.2s ease;\n  transition: all 0.2s ease;\n  color: #5b616b;\n  display: block;\n  font-size: 0.95em;\n  margin-bottom: 1em;\n  text-decoration: none; }\n  a:hover {\n    box-shadow: 0 3px 4px rgba(50, 58, 69, 0.2); }\n    a:hover h3 {\n      color: #0071bc; }\n\nh3 {\n  margin-bottom: 0.2em; }\n\np {\n  font-size: 0.95em;\n  margin: 0; }\n\n.repo-features {\n  margin-top: 0.2em; }\n  .repo-features i {\n    color: #23c0ba; }\n  .repo-features li {\n    display: inline-block;\n    margin-right: 0.75em; }\n    .repo-features li:last-child {\n      margin-right: 0; }\n      .repo-features li:last-child i {\n        margin-right: 0.2em; }\n"

/***/ },

/***/ "./src/app/components/repo-list-item/repo-list-item.template.html":
/***/ function(module, exports) {

module.exports = "<a routerLink=\"/repos/{{repo.repoID}}\">\n  <h3 class=\"repo-name\">{{ repo.name }}</h3>\n  <p class=\"repo-description\">\n    {{ repo.description | truncate : 200 }}\n  </p>\n  <ul class=\"usa-unstyled-list repo-features\">\n    <li *ngFor=\"let language of repo.codeLanguage\" class=\"language\">\n      <i class=\"devicons devicons-{{language.language | lowercase | languageIcon }}\"></i>\n      <span>{{ language.language }}</span>\n    </li>\n    <li *ngIf=\"repo.openSourceProject === 1\">\n      <i class=\"fa fa-code\"></i><span>Open Source</span>\n    </li>\n    <li *ngIf=\"repo.governmentWideReuseProject === 1\">\n      <i class=\"fa fa-refresh\"></i><span>Gov-wide Reuse</span>\n    </li>\n  </ul>\n</a>\n"

/***/ },

/***/ "./src/app/components/repo-list/index.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__("./src/app/components/repo-list/repo-list.component.ts"));


/***/ },

/***/ "./src/app/components/repo-list/repo-list.component.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
__webpack_require__("./node_modules/rxjs/add/operator/map.js");
var search_1 = __webpack_require__("./src/app/services/search/index.ts");
var RepoListComponent = (function () {
    function RepoListComponent(searchService) {
        this.searchService = searchService;
        this.hasRepos = false;
        this.showLoadMore = false;
        this.numberOfReposToFetch = 15;
        this.reposTotal = 0;
        this.scrollTriggered = false;
        this.searchStart = 0;
    }
    RepoListComponent.prototype.checkRepos = function () {
        return this.repos != null && this.repos.length > 0;
    };
    RepoListComponent.prototype.getMoreRepos = function () {
        var _this = this;
        this.searchService.search(this.searchStart, this.numberOfReposToFetch, this.query)
            .subscribe(function (result) {
            if (result) {
                _this.scrollTriggered = true;
                _this.loadedRepos = result['repos'];
            }
            else {
                console.log("No Repos Found");
            }
        }, function (error) {
            console.log(error);
        });
    };
    RepoListComponent.prototype.loadMore = function () {
        if (this.remainingRepos()) {
            var returnedReposCount = this.loadedRepos.length;
            (_a = this.repos).push.apply(_a, this.loadedRepos);
            this.searchStart += returnedReposCount;
            if (this.remainingRepos()) {
                this.scrollTriggered = false;
            }
            else {
                this.showLoadMore = false;
            }
        }
        var _a;
    };
    RepoListComponent.prototype.newSearch = function () {
        return this.searchService.search(this.searchStart, this.numberOfReposToFetch, this.query);
    };
    RepoListComponent.prototype.newSearchSubscription = function () {
        var _this = this;
        return this.newSearch().subscribe(function (response) {
            _this.searchStart = response.repos.length;
            _this.reposTotal = response.total;
            _this.repos = response.repos;
            _this.hasRepos = _this.checkRepos();
            _this.showLoadMore = _this.remainingRepos();
        });
    };
    RepoListComponent.prototype.ngOnChanges = function () {
        this.reposTotal = 0;
        this.searchStart = 0;
        this.reposSub = this.newSearchSubscription();
    };
    RepoListComponent.prototype.ngOnDestroy = function () {
        if (typeof this.reposSub !== 'undefined') {
            this.reposSub.unsubscribe();
        }
    };
    RepoListComponent.prototype.onScroll = function () {
        //Triggered by Infinite Scroll
        if (this.scrollTriggered === false) {
            this.getMoreRepos();
        }
    };
    RepoListComponent.prototype.remainingRepos = function () {
        return this.searchStart < this.reposTotal;
    };
    return RepoListComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], RepoListComponent.prototype, "query", void 0);
RepoListComponent = __decorate([
    core_1.Component({
        selector: 'repo-list',
        template: __webpack_require__("./src/app/components/repo-list/repo-list.template.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof search_1.SearchService !== "undefined" && search_1.SearchService) === "function" && _a || Object])
], RepoListComponent);
exports.RepoListComponent = RepoListComponent;
var _a;


/***/ },

/***/ "./src/app/components/repo-list/repo-list.template.html":
/***/ function(module, exports) {

module.exports = "<div *ngIf=\"hasRepos\" class=\"repos-container\">\n  <p class=\"repos-count\">\n    We found {{ reposTotal }} {{ \"Repositories\" | pluralize : reposTotal }}\n  </p>\n  <ul class=\"repos-list usa-unstyled-list\"\n    infinite-scroll\n    [infiniteScrollDistance]=\"2\"\n    [infiniteScrollThrottle]=\"500\"\n    (scrolled)=\"onScroll()\">\n    <li *ngFor=\"let repo of repos\" class=\"repo\">\n     <repo-list-item [repo]=\"repo\"></repo-list-item>\n    </li>\n  </ul>\n  <button *ngIf=\"showLoadMore\" (click)=\"loadMore()\" class=\"load-more-button\">\n    Load More Repos\n  </button>\n</div>\n\n<div *ngIf=\"!hasRepos\" class=\"no-repos\">\n  <p>\n    No repositories found.\n  </p>\n</div>\n"

/***/ },

/***/ "./src/app/components/repo/index.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__("./src/app/components/repo/repo.component.ts"));


/***/ },

/***/ "./src/app/components/repo/repo.component.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/index.js");
var agency_1 = __webpack_require__("./src/app/services/agency/index.ts");
var repo_1 = __webpack_require__("./src/app/services/repo/index.ts");
var seo_1 = __webpack_require__("./src/app/services/seo/index.ts");
var RepoComponent = (function () {
    function RepoComponent(route, router, agencyService, repoService, seoService) {
        this.route = route;
        this.router = router;
        this.agencyService = agencyService;
        this.repoService = repoService;
        this.seoService = seoService;
    }
    RepoComponent.prototype.navigateTo404 = function () {
        this.router.navigateByUrl('404');
    };
    RepoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.eventSub = this.route.params.subscribe(function (params) {
            var id = params['id'];
            _this.getRepo(id);
        });
    };
    RepoComponent.prototype.ngOnDestroy = function () {
        if (this.eventSub)
            this.eventSub.unsubscribe();
        if (this.repoSub)
            this.repoSub.unsubscribe();
    };
    RepoComponent.prototype.getRepo = function (id) {
        var _this = this;
        this.repoSub = this.repoService.getRepo(id).subscribe(function (result) {
            if (result) {
                _this.repo = result;
                _this.seoService.setTitle(_this.repo.name, true);
                _this.seoService.setMetaDescription(_this.repo.description);
                _this.seoService.setMetaRobots('Index, Follow');
            }
            else {
                _this.navigateTo404();
            }
        }, function (error) {
            _this.navigateTo404();
        });
    };
    return RepoComponent;
}());
RepoComponent = __decorate([
    core_1.Component({
        selector: 'repo',
        styles: [__webpack_require__("./src/app/components/repo/repo.styles.scss")],
        template: __webpack_require__("./src/app/components/repo/repo.template.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof router_1.ActivatedRoute !== "undefined" && router_1.ActivatedRoute) === "function" && _a || Object, typeof (_b = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _b || Object, typeof (_c = typeof agency_1.AgencyService !== "undefined" && agency_1.AgencyService) === "function" && _c || Object, typeof (_d = typeof repo_1.RepoService !== "undefined" && repo_1.RepoService) === "function" && _d || Object, typeof (_e = typeof seo_1.SeoService !== "undefined" && seo_1.SeoService) === "function" && _e || Object])
], RepoComponent);
exports.RepoComponent = RepoComponent;
var _a, _b, _c, _d, _e;


/***/ },

/***/ "./src/app/components/repo/repo.styles.scss":
/***/ function(module, exports) {

module.exports = "html {\n  box-sizing: border-box; }\n\n*, *::after, *::before {\n  box-sizing: inherit; }\n\n@-webkit-keyframes fadeInUp {\n  from {\n    -webkit-transform: translateY(0.5em);\n    opacity: 0;\n    visibility: hidden; }\n  to {\n    -webkit-transform: translateY(0);\n    opacity: 1;\n    visibility: visible; } }\n\n@-moz-keyframes fadeInUp {\n  from {\n    -moz-transform: translateY(0.5em);\n    opacity: 0;\n    visibility: hidden; }\n  to {\n    -moz-transform: translateY(0);\n    opacity: 1;\n    visibility: visible; } }\n\n@keyframes fadeInUp {\n  from {\n    -webkit-transform: translateY(0.5em);\n    -moz-transform: translateY(0.5em);\n    -ms-transform: translateY(0.5em);\n    -o-transform: translateY(0.5em);\n    transform: translateY(0.5em);\n    opacity: 0;\n    visibility: hidden; }\n  to {\n    -webkit-transform: translateY(0);\n    -moz-transform: translateY(0);\n    -ms-transform: translateY(0);\n    -o-transform: translateY(0);\n    transform: translateY(0);\n    opacity: 1;\n    visibility: visible; } }\n\n@-webkit-keyframes fadeIn {\n  from {\n    opacity: 0;\n    visibility: hidden; }\n  to {\n    opacity: 1;\n    visibility: visible; } }\n\n@-moz-keyframes fadeIn {\n  from {\n    opacity: 0;\n    visibility: hidden; }\n  to {\n    opacity: 1;\n    visibility: visible; } }\n\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n    visibility: hidden; }\n  to {\n    opacity: 1;\n    visibility: visible; } }\n\n@-webkit-keyframes blink {\n  from, to {\n    color: transparent; }\n  50% {\n    color: #23c0ba; } }\n\n@-moz-keyframes blink {\n  from, to {\n    color: transparent; }\n  50% {\n    color: #23c0ba; } }\n\n@keyframes blink {\n  from, to {\n    color: transparent; }\n  50% {\n    color: #23c0ba; } }\n\nbody {\n  -webkit-font-feature-settings: \"kern\", \"liga\", \"pnum\";\n  -moz-font-feature-settings: \"kern\", \"liga\", \"pnum\";\n  -ms-font-feature-settings: \"kern\", \"liga\", \"pnum\";\n  font-feature-settings: \"kern\", \"liga\", \"pnum\";\n  -webkit-font-smoothing: antialiased; }\n\nlabel {\n  -webkit-font-feature-settings: \"kern\", \"liga\", \"pnum\";\n  -moz-font-feature-settings: \"kern\", \"liga\", \"pnum\";\n  -ms-font-feature-settings: \"kern\", \"liga\", \"pnum\";\n  font-feature-settings: \"kern\", \"liga\", \"pnum\";\n  -webkit-font-smoothing: antialiased; }\n\na:focus {\n  box-shadow: 0 0 3px rgba(50, 58, 69, 0.25), 0 0 7px rgba(50, 58, 69, 0.25);\n  outline: 0; }\n\nh1,\nh2,\nh3,\nh4,\nh5\nh6 {\n  color: #323a45;\n  font-family: \"TT Lakes\", \"Helvetica Neue\", \"Helvetica\", \"Roboto\", \"Arial\", sans-serif;\n  font-weight: 500; }\n  h1:first-child,\n  h2:first-child,\n  h3:first-child,\n  h4:first-child,\n  h5\nh6:first-child {\n    margin-top: 0; }\n\np {\n  color: #5b616b; }\n  @media screen and (min-width: 40em) {\n    p {\n      font-size: 1.1em; } }\n\n.usa-button,\n.usa-button.usa-button-big,\n.usa-button-primary.usa-button-big,\n.usa-button:visited.usa-button-big,\n.usa-button-primary:visited.usa-button-big,\nbutton.usa-button-big,\n[type=\"button\"].usa-button-big,\n[type=\"submit\"].usa-button-big,\n[type=\"reset\"].usa-button-big,\n[type=\"image\"].usa-button-big {\n  -webkit-transition: all 0.2s ease;\n  -moz-transition: all 0.2s ease;\n  transition: all 0.2s ease; }\n  .usa-button:hover,\n  .usa-button.usa-button-big:hover,\n  .usa-button-primary.usa-button-big:hover,\n  .usa-button:visited.usa-button-big:hover,\n  .usa-button-primary:visited.usa-button-big:hover,\n  button.usa-button-big:hover,\n  [type=\"button\"].usa-button-big:hover,\n  [type=\"submit\"].usa-button-big:hover,\n  [type=\"reset\"].usa-button-big:hover,\n  [type=\"image\"].usa-button-big:hover {\n    -webkit-transform: translateY(-2px);\n    -moz-transform: translateY(-2px);\n    -ms-transform: translateY(-2px);\n    -o-transform: translateY(-2px);\n    transform: translateY(-2px); }\n\n.repo-container {\n  background-color: #ffffff;\n  padding: 1em 1em 2em; }\n  .repo-container::after {\n    clear: both;\n    content: \"\";\n    display: block; }\n  @media screen and (min-width: 40em) {\n    .repo-container {\n      padding: 2em 2em 3em; } }\n  .repo-container code {\n    background-color: #485568;\n    border-radius: 3px;\n    color: #23c0ba;\n    font-size: 0.9em;\n    padding: 2px 3px; }\n  .repo-container h2 {\n    font-size: 1em; }\n  .repo-container header {\n    margin-bottom: 1em;\n    padding-bottom: 1em;\n    position: relative; }\n    .repo-container header::after {\n      clear: both;\n      content: \"\";\n      display: block; }\n  .repo-container .usa-button {\n    background-color: #21b3ad; }\n\n.repo-actions li {\n  display: inline-block; }\n  .repo-actions li:last-child .usa-button {\n    background-color: #42519F; }\n\n.repo-features-list {\n  margin-bottom: 3em; }\n  .repo-features-list::after {\n    clear: both;\n    content: \"\";\n    display: block; }\n  .repo-features-list a {\n    color: #1c4772;\n    font-weight: bold;\n    padding-bottom: 0.1em;\n    text-decoration: none; }\n    .repo-features-list a:hover {\n      border-bottom: 2px solid #1c4772; }\n  .repo-features-list h3 {\n    font-size: 1.2em;\n    font-weight: 500;\n    margin: 0; }\n  .repo-features-list li {\n    border: 1px solid #e9e9e9;\n    margin-bottom: 1em;\n    padding: 1em 1em 1em 2.5em;\n    position: relative; }\n    @media screen and (min-width: 40em) {\n      .repo-features-list li {\n        margin-bottom: 0; } }\n    .repo-features-list li .feature-icon {\n      color: #23c0ba;\n      left: 1em;\n      position: absolute;\n      top: 1em; }\n  .repo-features-list p {\n    font-size: 0.95em;\n    margin-top: 0; }\n\n.repo-header-container h1 {\n  margin: 0 0 0.25em; }\n\n.repo-header-container h3 {\n  font-weight: normal;\n  margin: 0; }\n  .repo-header-container h3 a {\n    color: #5b616b;\n    font-size: 0.95em;\n    text-decoration: none; }\n    .repo-header-container h3 a:hover {\n      border-bottom: 3px solid #23c0ba;\n      color: #323a45; }\n\n.repo-header-container p {\n  font-size: 1em;\n  margin: 0; }\n"

/***/ },

/***/ "./src/app/components/repo/repo.template.html":
/***/ function(module, exports) {

module.exports = "<section *ngIf=\"repo\" class=\"repo-container\">\n  <header>\n    <div class=\"repo-header-container\">\n      <h3>\n        <a routerLink=\"/explore-code/agencies/{{repo.agency.acronym}}\">\n          {{ repo.agency.name }}\n        </a>\n      </h3>\n      <h1>{{ repo.name }}</h1>\n      <p *ngIf=\"repo.description | isdefined\">{{ repo.description }}</p>\n    </div>\n    <div class=\"repo-actions\">\n      <ul class=\"usa-unstyled-list\">\n        <li *ngIf=\"repo.homepage | isdefined\">\n          <a external-link class=\"usa-button\" href=\"{{repo.homepage}}\">\n            Homepage\n          </a>\n        </li>\n\n        <li *ngIf=\"repo.repository | isdefined\">\n          <a external-link class=\"usa-button\" href=\"{{ repo.repository }}\">\n            Visit Repo\n          </a>\n        </li>\n      </ul>\n    </div>\n  </header>\n\n  <div class=\"repo-content\">\n    <div class=\"repo-features>\">\n      <h2>Highlights</h2>\n      <ul class=\"usa-unstyled-list repo-features-list\">\n        <li class=\"repo-language usa-width-one-half\">\n          <div *ngIf=\"repo.codeLanguage | isdefined\">\n            <div *ngFor=\"let language of repo.codeLanguage\" class=\"feature-icon\">\n              <i class=\"devicons devicons-{{language.language | languageIcon }}\">\n              </i>\n            </div>\n            <h3>Language</h3>\n            <p>\n              This repo is built in\n              <span *ngFor=\"let language of repo.codeLanguage\" class=\"language\">\n                {{ language.language }}.\n              </span>\n            </p>\n          </div>\n          <div *ngIf=\"!repo.codeLanguage | isdefined\">\n            <div class=\"feature-icon\">\n              <i class=\"fa fa-question\"></i>\n            </div>\n            <h3>Language</h3>\n            <p>\n              We’re not sure what this repo is built in. Try making a pull\n              request that updates this repo’s <code>code.json</code> file.\n            </p>\n          </div>\n        </li>\n        <li class=\"repo-license usa-width-one-half\">\n          <div *ngIf=\"repo.license && repo.license_name | isdefined\">\n            <div class=\"feature-icon\">\n              <i class=\"fa fa-file-text-o \"></i>\n            </div>\n            <h3>License</h3>\n            <p>\n              This repo uses the\n              <a external-link href=\"{{repo.license}}\">\n                {{repo.license_name}} license.\n              </a>\n            </p>\n          </div>\n          <div *ngIf=\"!repo.license || !repo.license_name\">\n            <div class=\"feature-icon\">\n              <i class=\"fa fa-question\"></i>\n            </div>\n            <h3>License</h3>\n            <p>\n              We’re not sure what license this repo has. Try making a pull\n              request that updates this repo’s <code>code.json</code> file.\n            </p>\n          </div>\n        </li>\n      </ul>\n    </div>\n\n    <div class=\"activity-container\">\n      <h2>Activity</h2>\n      <ul class=\"usa-unstyled-list\">\n        <activity-list  *ngIf=\"repo\" [eventRepo]=\"repo\"></activity-list>\n      </ul>\n    </div>\n  </div>\n</section>\n<modal></modal>\n"

/***/ },

/***/ "./src/app/components/repos-search/index.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__("./src/app/components/repos-search/repos-search.component.ts"));


/***/ },

/***/ "./src/app/components/repos-search/repos-search.component.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/index.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/index.js");
var search_1 = __webpack_require__("./src/app/services/search/index.ts");
var ReposSearchComponent = (function () {
    function ReposSearchComponent(formBuilder, searchService, router) {
        this.formBuilder = formBuilder;
        this.searchService = searchService;
        this.router = router;
        this.autocompleteVisible = false;
        this.queryInputValue = '';
    }
    ReposSearchComponent.prototype.hasQuery = function () {
        if (this.queryInputValue) {
            return true;
        }
        else {
            return false;
        }
    };
    ReposSearchComponent.prototype.ngOnInit = function () {
        this.searchForm = this.formBuilder.group({
            query: [''],
        });
    };
    ReposSearchComponent.prototype.onKey = function (event) {
        this.queryInputValue = event.target.value;
    };
    ReposSearchComponent.prototype.onSubmit = function (form) {
        this.search(form.query);
    };
    ReposSearchComponent.prototype.search = function (query) {
        this.router.navigateByUrl('/search?q=' + query);
    };
    ReposSearchComponent.prototype.toggleAutocomplete = function (boolean) {
        this.autocompleteVisible = boolean;
    };
    return ReposSearchComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ReposSearchComponent.prototype, "queryValue", void 0);
ReposSearchComponent = __decorate([
    core_1.Component({
        selector: 'repos-search',
        template: __webpack_require__("./src/app/components/repos-search/repos-search.template.html"),
        styles: [__webpack_require__("./src/app/components/repos-search/repos-search.style.scss")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof forms_1.FormBuilder !== "undefined" && forms_1.FormBuilder) === "function" && _a || Object, typeof (_b = typeof search_1.SearchService !== "undefined" && search_1.SearchService) === "function" && _b || Object, typeof (_c = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _c || Object])
], ReposSearchComponent);
exports.ReposSearchComponent = ReposSearchComponent;
var _a, _b, _c;


/***/ },

/***/ "./src/app/components/repos-search/repos-search.style.scss":
/***/ function(module, exports) {

module.exports = "html {\n  box-sizing: border-box; }\n\n*, *::after, *::before {\n  box-sizing: inherit; }\n\n@-webkit-keyframes fadeInUp {\n  from {\n    -webkit-transform: translateY(0.5em);\n    opacity: 0;\n    visibility: hidden; }\n  to {\n    -webkit-transform: translateY(0);\n    opacity: 1;\n    visibility: visible; } }\n\n@-moz-keyframes fadeInUp {\n  from {\n    -moz-transform: translateY(0.5em);\n    opacity: 0;\n    visibility: hidden; }\n  to {\n    -moz-transform: translateY(0);\n    opacity: 1;\n    visibility: visible; } }\n\n@keyframes fadeInUp {\n  from {\n    -webkit-transform: translateY(0.5em);\n    -moz-transform: translateY(0.5em);\n    -ms-transform: translateY(0.5em);\n    -o-transform: translateY(0.5em);\n    transform: translateY(0.5em);\n    opacity: 0;\n    visibility: hidden; }\n  to {\n    -webkit-transform: translateY(0);\n    -moz-transform: translateY(0);\n    -ms-transform: translateY(0);\n    -o-transform: translateY(0);\n    transform: translateY(0);\n    opacity: 1;\n    visibility: visible; } }\n\n@-webkit-keyframes fadeIn {\n  from {\n    opacity: 0;\n    visibility: hidden; }\n  to {\n    opacity: 1;\n    visibility: visible; } }\n\n@-moz-keyframes fadeIn {\n  from {\n    opacity: 0;\n    visibility: hidden; }\n  to {\n    opacity: 1;\n    visibility: visible; } }\n\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n    visibility: hidden; }\n  to {\n    opacity: 1;\n    visibility: visible; } }\n\n@-webkit-keyframes blink {\n  from, to {\n    color: transparent; }\n  50% {\n    color: #23c0ba; } }\n\n@-moz-keyframes blink {\n  from, to {\n    color: transparent; }\n  50% {\n    color: #23c0ba; } }\n\n@keyframes blink {\n  from, to {\n    color: transparent; }\n  50% {\n    color: #23c0ba; } }\n\nbody {\n  -webkit-font-feature-settings: \"kern\", \"liga\", \"pnum\";\n  -moz-font-feature-settings: \"kern\", \"liga\", \"pnum\";\n  -ms-font-feature-settings: \"kern\", \"liga\", \"pnum\";\n  font-feature-settings: \"kern\", \"liga\", \"pnum\";\n  -webkit-font-smoothing: antialiased; }\n\nlabel {\n  -webkit-font-feature-settings: \"kern\", \"liga\", \"pnum\";\n  -moz-font-feature-settings: \"kern\", \"liga\", \"pnum\";\n  -ms-font-feature-settings: \"kern\", \"liga\", \"pnum\";\n  font-feature-settings: \"kern\", \"liga\", \"pnum\";\n  -webkit-font-smoothing: antialiased; }\n\na:focus {\n  box-shadow: 0 0 3px rgba(50, 58, 69, 0.25), 0 0 7px rgba(50, 58, 69, 0.25);\n  outline: 0; }\n\nh1,\nh2,\nh3,\nh4,\nh5\nh6 {\n  color: #323a45;\n  font-family: \"TT Lakes\", \"Helvetica Neue\", \"Helvetica\", \"Roboto\", \"Arial\", sans-serif;\n  font-weight: 500; }\n  h1:first-child,\n  h2:first-child,\n  h3:first-child,\n  h4:first-child,\n  h5\nh6:first-child {\n    margin-top: 0; }\n\np {\n  color: #5b616b; }\n  @media screen and (min-width: 40em) {\n    p {\n      font-size: 1.1em; } }\n\n.usa-button,\n.usa-button.usa-button-big,\n.usa-button-primary.usa-button-big,\n.usa-button:visited.usa-button-big,\n.usa-button-primary:visited.usa-button-big,\nbutton.usa-button-big,\n[type=\"button\"].usa-button-big,\n[type=\"submit\"].usa-button-big,\n[type=\"reset\"].usa-button-big,\n[type=\"image\"].usa-button-big {\n  -webkit-transition: all 0.2s ease;\n  -moz-transition: all 0.2s ease;\n  transition: all 0.2s ease; }\n  .usa-button:hover,\n  .usa-button.usa-button-big:hover,\n  .usa-button-primary.usa-button-big:hover,\n  .usa-button:visited.usa-button-big:hover,\n  .usa-button-primary:visited.usa-button-big:hover,\n  button.usa-button-big:hover,\n  [type=\"button\"].usa-button-big:hover,\n  [type=\"submit\"].usa-button-big:hover,\n  [type=\"reset\"].usa-button-big:hover,\n  [type=\"image\"].usa-button-big:hover {\n    -webkit-transform: translateY(-2px);\n    -moz-transform: translateY(-2px);\n    -ms-transform: translateY(-2px);\n    -o-transform: translateY(-2px);\n    transform: translateY(-2px); }\n\ninput {\n  float: left;\n  display: block;\n  margin-right: 2.35765%;\n  width: 74.41059%;\n  margin-bottom: 0;\n  margin-top: 0; }\n  input:last-child {\n    margin-right: 0; }\n  input[type=\"text\"] {\n    border: 1px solid #aeb0b5; }\n  input[type=\"submit\"] {\n    float: left;\n    display: block;\n    margin-right: 2.35765%;\n    width: 23.23176%;\n    padding-left: 0;\n    padding-right: 0; }\n    input[type=\"submit\"]:last-child {\n      margin-right: 0; }\n\ninput,\nlabel {\n  max-width: none; }\n\nlabel {\n  height: 0px;\n  margin: 0;\n  overflow: none;\n  text-align: left;\n  text-indent: -9999px; }\n\n.autocomplete-container {\n  float: left;\n  display: block;\n  margin-right: 2.35765%;\n  width: 74.41059%;\n  position: relative; }\n  .autocomplete-container:last-child {\n    margin-right: 0; }\n\n.search-form::after {\n  clear: both;\n  content: \"\";\n  display: block; }\n"

/***/ },

/***/ "./src/app/components/repos-search/repos-search.template.html":
/***/ function(module, exports) {

module.exports = " <form class=\"search-form\" [formGroup]=\"searchForm\" (ngSubmit)=\"onSubmit(searchForm.value) (focus)\">\n  <label for=\"searchQuery\">Query</label>\n  <input id=\"searchQuery\" type=\"text\" required class=\"form-control\" value=\"{{queryValue}}\" [formControl]=\"searchForm.controls['query']\" (focus)=\"this.toggleAutocomplete(true)\" (keyup)=\"onKey($event)\" placeholder=\"Search Code.gov\" autofocus autocomplete=\"off\"/>\n  <input type=\"submit\" value=\"Search\" />\n</form>\n<div *ngIf=\"hasQuery() && autocompleteVisible\" class=\"autocomplete-container\">\n  <autocomplete [query]='queryInputValue'></autocomplete>\n</div>\n"

/***/ },

/***/ "./src/app/components/repos/index.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__("./src/app/components/repos/repos-component.ts"));


/***/ },

/***/ "./src/app/components/repos/repos-component.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var ReposComponent = (function () {
    function ReposComponent() {
    }
    return ReposComponent;
}());
ReposComponent = __decorate([
    core_1.Component({
        selector: 'repos',
        styles: [__webpack_require__("./src/app/components/repos/repos.styles.scss")],
        template: __webpack_require__("./src/app/components/repos/repos.template.html")
    }),
    __metadata("design:paramtypes", [])
], ReposComponent);
exports.ReposComponent = ReposComponent;


/***/ },

/***/ "./src/app/components/repos/repos.styles.scss":
/***/ function(module, exports) {

module.exports = "html {\n  box-sizing: border-box; }\n\n*, *::after, *::before {\n  box-sizing: inherit; }\n\n@-webkit-keyframes fadeInUp {\n  from {\n    -webkit-transform: translateY(0.5em);\n    opacity: 0;\n    visibility: hidden; }\n  to {\n    -webkit-transform: translateY(0);\n    opacity: 1;\n    visibility: visible; } }\n\n@-moz-keyframes fadeInUp {\n  from {\n    -moz-transform: translateY(0.5em);\n    opacity: 0;\n    visibility: hidden; }\n  to {\n    -moz-transform: translateY(0);\n    opacity: 1;\n    visibility: visible; } }\n\n@keyframes fadeInUp {\n  from {\n    -webkit-transform: translateY(0.5em);\n    -moz-transform: translateY(0.5em);\n    -ms-transform: translateY(0.5em);\n    -o-transform: translateY(0.5em);\n    transform: translateY(0.5em);\n    opacity: 0;\n    visibility: hidden; }\n  to {\n    -webkit-transform: translateY(0);\n    -moz-transform: translateY(0);\n    -ms-transform: translateY(0);\n    -o-transform: translateY(0);\n    transform: translateY(0);\n    opacity: 1;\n    visibility: visible; } }\n\n@-webkit-keyframes fadeIn {\n  from {\n    opacity: 0;\n    visibility: hidden; }\n  to {\n    opacity: 1;\n    visibility: visible; } }\n\n@-moz-keyframes fadeIn {\n  from {\n    opacity: 0;\n    visibility: hidden; }\n  to {\n    opacity: 1;\n    visibility: visible; } }\n\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n    visibility: hidden; }\n  to {\n    opacity: 1;\n    visibility: visible; } }\n\n@-webkit-keyframes blink {\n  from, to {\n    color: transparent; }\n  50% {\n    color: #23c0ba; } }\n\n@-moz-keyframes blink {\n  from, to {\n    color: transparent; }\n  50% {\n    color: #23c0ba; } }\n\n@keyframes blink {\n  from, to {\n    color: transparent; }\n  50% {\n    color: #23c0ba; } }\n\nbody {\n  -webkit-font-feature-settings: \"kern\", \"liga\", \"pnum\";\n  -moz-font-feature-settings: \"kern\", \"liga\", \"pnum\";\n  -ms-font-feature-settings: \"kern\", \"liga\", \"pnum\";\n  font-feature-settings: \"kern\", \"liga\", \"pnum\";\n  -webkit-font-smoothing: antialiased; }\n\nlabel {\n  -webkit-font-feature-settings: \"kern\", \"liga\", \"pnum\";\n  -moz-font-feature-settings: \"kern\", \"liga\", \"pnum\";\n  -ms-font-feature-settings: \"kern\", \"liga\", \"pnum\";\n  font-feature-settings: \"kern\", \"liga\", \"pnum\";\n  -webkit-font-smoothing: antialiased; }\n\na:focus {\n  box-shadow: 0 0 3px rgba(50, 58, 69, 0.25), 0 0 7px rgba(50, 58, 69, 0.25);\n  outline: 0; }\n\nh1,\nh2,\nh3,\nh4,\nh5\nh6 {\n  color: #323a45;\n  font-family: \"TT Lakes\", \"Helvetica Neue\", \"Helvetica\", \"Roboto\", \"Arial\", sans-serif;\n  font-weight: 500; }\n  h1:first-child,\n  h2:first-child,\n  h3:first-child,\n  h4:first-child,\n  h5\nh6:first-child {\n    margin-top: 0; }\n\np {\n  color: #5b616b; }\n  @media screen and (min-width: 40em) {\n    p {\n      font-size: 1.1em; } }\n\n.usa-button,\n.usa-button.usa-button-big,\n.usa-button-primary.usa-button-big,\n.usa-button:visited.usa-button-big,\n.usa-button-primary:visited.usa-button-big,\nbutton.usa-button-big,\n[type=\"button\"].usa-button-big,\n[type=\"submit\"].usa-button-big,\n[type=\"reset\"].usa-button-big,\n[type=\"image\"].usa-button-big {\n  -webkit-transition: all 0.2s ease;\n  -moz-transition: all 0.2s ease;\n  transition: all 0.2s ease; }\n  .usa-button:hover,\n  .usa-button.usa-button-big:hover,\n  .usa-button-primary.usa-button-big:hover,\n  .usa-button:visited.usa-button-big:hover,\n  .usa-button-primary:visited.usa-button-big:hover,\n  button.usa-button-big:hover,\n  [type=\"button\"].usa-button-big:hover,\n  [type=\"submit\"].usa-button-big:hover,\n  [type=\"reset\"].usa-button-big:hover,\n  [type=\"image\"].usa-button-big:hover {\n    -webkit-transform: translateY(-2px);\n    -moz-transform: translateY(-2px);\n    -ms-transform: translateY(-2px);\n    -o-transform: translateY(-2px);\n    transform: translateY(-2px); }\n\n@media screen and (min-width: 40em) {\n  .content-col {\n    float: left;\n    display: block;\n    margin-right: 2.35765%;\n    width: 74.41059%; }\n    .content-col:last-child {\n      margin-right: 0; } }\n\n.repos-container {\n  background-color: #f6f6f6;\n  padding: 0.75em 0 3em; }\n  @media screen and (min-width: 40em) {\n    .repos-container {\n      padding: 2em 0 3em; } }\n\n.search-container {\n  background-color: #e4e4e4;\n  padding: 0.5em 0; }\n"

/***/ },

/***/ "./src/app/components/repos/repos.template.html":
/***/ function(module, exports) {

module.exports = "<div class=\"search-container\">\n  <div class=\"usa-grid\">\n    <div class=\"content-col\">\n      <repos-search></repos-search>\n    </div>\n  </div>\n</div>\n<div class=\"repos-container\">\n  <div class=\"usa-grid\">\n    <router-outlet></router-outlet>\n  </div>\n</div>\n"

/***/ },

/***/ "./src/app/components/search-results/index.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__("./src/app/components/search-results/search-results.component.ts"));


/***/ },

/***/ "./src/app/components/search-results/search-results.component.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/index.js");
__webpack_require__("./node_modules/rxjs/add/operator/map.js");
var search_1 = __webpack_require__("./src/app/services/search/index.ts");
var state_1 = __webpack_require__("./src/app/services/state/index.ts");
var SearchResultsComponent = (function () {
    function SearchResultsComponent(stateService, activatedRoute, searchService) {
        this.stateService = stateService;
        this.activatedRoute = activatedRoute;
        this.searchService = searchService;
        this.searchQuery = '';
        this.queryValue = '';
        this.stateService.set('section', 'explore-code');
    }
    SearchResultsComponent.prototype.activeRoute$ = function () {
        return this.activatedRoute.queryParams;
    };
    SearchResultsComponent.prototype.newRouteSubscription = function () {
        var _this = this;
        return this.activeRoute$().subscribe(function (response) {
            _this.queryValue = response.q;
            _this.searchQuery = '_fulltext=' + _this.queryValue;
        });
    };
    SearchResultsComponent.prototype.ngOnDestroy = function () {
        if (typeof this.activeRouteSub !== 'undefined') {
            this.activeRouteSub.unsubscribe();
        }
    };
    SearchResultsComponent.prototype.ngOnInit = function () {
        this.activeRouteSub = this.newRouteSubscription();
    };
    return SearchResultsComponent;
}());
SearchResultsComponent = __decorate([
    core_1.Component({
        selector: 'search-results',
        styles: [__webpack_require__("./src/app/components/search-results/search-results.styles.scss")],
        template: __webpack_require__("./src/app/components/search-results/search-results.template.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof state_1.StateService !== "undefined" && state_1.StateService) === "function" && _a || Object, typeof (_b = typeof router_1.ActivatedRoute !== "undefined" && router_1.ActivatedRoute) === "function" && _b || Object, typeof (_c = typeof search_1.SearchService !== "undefined" && search_1.SearchService) === "function" && _c || Object])
], SearchResultsComponent);
exports.SearchResultsComponent = SearchResultsComponent;
var _a, _b, _c;


/***/ },

/***/ "./src/app/components/search-results/search-results.styles.scss":
/***/ function(module, exports) {

module.exports = "html {\n  box-sizing: border-box; }\n\n*, *::after, *::before {\n  box-sizing: inherit; }\n\n@-webkit-keyframes fadeInUp {\n  from {\n    -webkit-transform: translateY(0.5em);\n    opacity: 0;\n    visibility: hidden; }\n  to {\n    -webkit-transform: translateY(0);\n    opacity: 1;\n    visibility: visible; } }\n\n@-moz-keyframes fadeInUp {\n  from {\n    -moz-transform: translateY(0.5em);\n    opacity: 0;\n    visibility: hidden; }\n  to {\n    -moz-transform: translateY(0);\n    opacity: 1;\n    visibility: visible; } }\n\n@keyframes fadeInUp {\n  from {\n    -webkit-transform: translateY(0.5em);\n    -moz-transform: translateY(0.5em);\n    -ms-transform: translateY(0.5em);\n    -o-transform: translateY(0.5em);\n    transform: translateY(0.5em);\n    opacity: 0;\n    visibility: hidden; }\n  to {\n    -webkit-transform: translateY(0);\n    -moz-transform: translateY(0);\n    -ms-transform: translateY(0);\n    -o-transform: translateY(0);\n    transform: translateY(0);\n    opacity: 1;\n    visibility: visible; } }\n\n@-webkit-keyframes fadeIn {\n  from {\n    opacity: 0;\n    visibility: hidden; }\n  to {\n    opacity: 1;\n    visibility: visible; } }\n\n@-moz-keyframes fadeIn {\n  from {\n    opacity: 0;\n    visibility: hidden; }\n  to {\n    opacity: 1;\n    visibility: visible; } }\n\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n    visibility: hidden; }\n  to {\n    opacity: 1;\n    visibility: visible; } }\n\n@-webkit-keyframes blink {\n  from, to {\n    color: transparent; }\n  50% {\n    color: #23c0ba; } }\n\n@-moz-keyframes blink {\n  from, to {\n    color: transparent; }\n  50% {\n    color: #23c0ba; } }\n\n@keyframes blink {\n  from, to {\n    color: transparent; }\n  50% {\n    color: #23c0ba; } }\n\nbody {\n  -webkit-font-feature-settings: \"kern\", \"liga\", \"pnum\";\n  -moz-font-feature-settings: \"kern\", \"liga\", \"pnum\";\n  -ms-font-feature-settings: \"kern\", \"liga\", \"pnum\";\n  font-feature-settings: \"kern\", \"liga\", \"pnum\";\n  -webkit-font-smoothing: antialiased; }\n\nlabel {\n  -webkit-font-feature-settings: \"kern\", \"liga\", \"pnum\";\n  -moz-font-feature-settings: \"kern\", \"liga\", \"pnum\";\n  -ms-font-feature-settings: \"kern\", \"liga\", \"pnum\";\n  font-feature-settings: \"kern\", \"liga\", \"pnum\";\n  -webkit-font-smoothing: antialiased; }\n\na:focus {\n  box-shadow: 0 0 3px rgba(50, 58, 69, 0.25), 0 0 7px rgba(50, 58, 69, 0.25);\n  outline: 0; }\n\nh1,\nh2,\nh3,\nh4,\nh5\nh6 {\n  color: #323a45;\n  font-family: \"TT Lakes\", \"Helvetica Neue\", \"Helvetica\", \"Roboto\", \"Arial\", sans-serif;\n  font-weight: 500; }\n  h1:first-child,\n  h2:first-child,\n  h3:first-child,\n  h4:first-child,\n  h5\nh6:first-child {\n    margin-top: 0; }\n\np {\n  color: #5b616b; }\n  @media screen and (min-width: 40em) {\n    p {\n      font-size: 1.1em; } }\n\n.usa-button,\n.usa-button.usa-button-big,\n.usa-button-primary.usa-button-big,\n.usa-button:visited.usa-button-big,\n.usa-button-primary:visited.usa-button-big,\nbutton.usa-button-big,\n[type=\"button\"].usa-button-big,\n[type=\"submit\"].usa-button-big,\n[type=\"reset\"].usa-button-big,\n[type=\"image\"].usa-button-big {\n  -webkit-transition: all 0.2s ease;\n  -moz-transition: all 0.2s ease;\n  transition: all 0.2s ease; }\n  .usa-button:hover,\n  .usa-button.usa-button-big:hover,\n  .usa-button-primary.usa-button-big:hover,\n  .usa-button:visited.usa-button-big:hover,\n  .usa-button-primary:visited.usa-button-big:hover,\n  button.usa-button-big:hover,\n  [type=\"button\"].usa-button-big:hover,\n  [type=\"submit\"].usa-button-big:hover,\n  [type=\"reset\"].usa-button-big:hover,\n  [type=\"image\"].usa-button-big:hover {\n    -webkit-transform: translateY(-2px);\n    -moz-transform: translateY(-2px);\n    -ms-transform: translateY(-2px);\n    -o-transform: translateY(-2px);\n    transform: translateY(-2px); }\n\n@media screen and (min-width: 40em) {\n  .content-col {\n    float: left;\n    display: block;\n    margin-right: 2.35765%;\n    width: 74.41059%; }\n    .content-col:last-child {\n      margin-right: 0; } }\n\n.load-more-button {\n  font-size: 1.1em;\n  margin-top: 1em;\n  padding: 0.75em 2em; }\n\n.no-repos {\n  margin-top: 3em; }\n\n.repos-count {\n  font-size: 1.1em;\n  font-weight: bold; }\n\n.search-container {\n  background-color: #e4e4e4;\n  padding: 0.5em 0; }\n\n.search-results-content {\n  padding-bottom: 4em; }\n  @media screen and (min-width: 40em) {\n    .search-results-content {\n      min-height: 25em; } }\n"

/***/ },

/***/ "./src/app/components/search-results/search-results.template.html":
/***/ function(module, exports) {

module.exports = "<div class=\"search-results-content\">\n  <div class=\"search-container\">\n    <div class=\"usa-grid\">\n      <div class=\"content-col\">\n        <repos-search [queryValue]=\"queryValue\"></repos-search>\n      </div>\n    </div>\n  </div>\n  <div class=\"usa-grid\">\n    <div class=\"content-col\">\n      <repo-list [query]=\"searchQuery\"></repo-list>\n    </div>\n  </div>\n</div>\n"

/***/ },

/***/ "./src/app/directives/external-link/external-link.directive.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var angulartics2_1 = __webpack_require__("./node_modules/angulartics2/dist/index.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var modal_1 = __webpack_require__("./src/app/services/modal/index.ts");
var ExternalLinkDirective = (function () {
    function ExternalLinkDirective(angulartics2, el, modalService) {
        this.angulartics2 = angulartics2;
        this.el = el;
        this.modalService = modalService;
        this.modalContent = {
            description: 'But you probably knew that already.',
            description2: 'Continue to the link below:',
            title: 'You are now leaving Code.gov',
            url: ''
        };
    }
    ExternalLinkDirective.prototype.isExternalLink = function (url) {
        return !this.url.match(/(.+\.)?([^.]+)\.(?:gov|mil)$/);
    };
    ExternalLinkDirective.prototype.onClick = function (event) {
        this.url = this.el.nativeElement.getAttribute('href');
        this.angulartics2.eventTrack.next({ action: 'Click', properties: { category: 'External Link' } });
        if (this.isExternalLink(this.url)) {
            event.preventDefault();
            this.modalContent['url'] = this.url;
            this.modalService.showModal(this.modalContent);
        }
    };
    return ExternalLinkDirective;
}());
ExternalLinkDirective = __decorate([
    core_1.Directive({
        selector: '[external-link]',
        host: {
            '(click)': 'onClick($event)'
        }
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof angulartics2_1.Angulartics2 !== "undefined" && angulartics2_1.Angulartics2) === "function" && _a || Object, typeof (_b = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _b || Object, typeof (_c = typeof modal_1.ModalService !== "undefined" && modal_1.ModalService) === "function" && _c || Object])
], ExternalLinkDirective);
exports.ExternalLinkDirective = ExternalLinkDirective;
var _a, _b, _c;


/***/ },

/***/ "./src/app/directives/external-link/index.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__("./src/app/directives/external-link/external-link.directive.ts"));


/***/ },

/***/ "./src/app/directives/toggle-menu/index.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__("./src/app/directives/toggle-menu/toggle-menu.directive.ts"));


/***/ },

/***/ "./src/app/directives/toggle-menu/toggle-menu.directive.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/index.js");
var mobile_1 = __webpack_require__("./src/app/services/mobile/index.ts");
var ToggleMenuDirective = (function () {
    function ToggleMenuDirective(el, mobileService, router) {
        var _this = this;
        this.el = el;
        this.mobileService = mobileService;
        this.router = router;
        this.toggle = JSON.parse(this.el.nativeElement.getAttribute('aria-pressed'));
        this.eventSub = this.router.events.subscribe(function (evt) {
            if (!(evt instanceof router_1.NavigationEnd)) {
                return;
            }
            _this.mobileService.hideMenu();
            _this.toggle = false;
            _this.el.nativeElement.setAttribute('aria-pressed', _this.toggle);
        });
    }
    ToggleMenuDirective.prototype.ngOnDestroy = function () {
        if (this.eventSub)
            this.eventSub.unsubscribe();
    };
    ToggleMenuDirective.prototype.onClick = function (event) {
        event.preventDefault();
        this.mobileService.toggleMenu();
        this.togglePressed();
    };
    ToggleMenuDirective.prototype.togglePressed = function () {
        this.toggle = !this.toggle;
        this.el.nativeElement.setAttribute('aria-pressed', this.toggle);
    };
    return ToggleMenuDirective;
}());
ToggleMenuDirective = __decorate([
    core_1.Directive({
        selector: '[toggle-menu]',
        host: {
            '(click)': 'onClick($event)'
        }
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _a || Object, typeof (_b = typeof mobile_1.MobileService !== "undefined" && mobile_1.MobileService) === "function" && _b || Object, typeof (_c = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _c || Object])
], ToggleMenuDirective);
exports.ToggleMenuDirective = ToggleMenuDirective;
var _a, _b, _c;


/***/ },

/***/ "./src/app/environment.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
// Angular 2
// rc2 workaround
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/index.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
// Environment Providers
var PROVIDERS = [];
// Angular debug tools in the dev console
// https://github.com/angular/angular/blob/86405345b781a9dc2438c0fbe3e9409245647019/TOOLS_JS.md
var _decorateModuleRef = function identity(value) { return value; };
if (false) {
    // Production
    platform_browser_1.disableDebugTools();
    core_1.enableProdMode();
    PROVIDERS = PROVIDERS.slice();
}
else {
    _decorateModuleRef = function (modRef) {
        var appRef = modRef.injector.get(core_1.ApplicationRef);
        var cmpRef = appRef.components[0];
        var _ng = window.ng;
        platform_browser_1.enableDebugTools(cmpRef);
        window.ng.probe = _ng.probe;
        window.ng.coreTokens = _ng.coreTokens;
        return modRef;
    };
    // Development
    PROVIDERS = PROVIDERS.slice();
}
exports.decorateModuleRef = _decorateModuleRef;
exports.ENV_PROVIDERS = PROVIDERS.slice();


/***/ },

/***/ "./src/app/index.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
// App
__export(__webpack_require__("./src/app/app.module.ts"));


/***/ },

/***/ "./src/app/pipes/is-defined/index.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__("./src/app/pipes/is-defined/is-defined.pipe.ts"));


/***/ },

/***/ "./src/app/pipes/is-defined/is-defined.pipe.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
/**
 * Pipe used in boolean expressions in a template to signify
 * that the pipe value argument is defined using the
 * transform() method.
 *
 * If the transform() argument is defined, then the method
 * will return true. However, if the argument to transform()
 * is a string and it can be trimmed to an empty string,
 * then false is returned. Also, if the argument to tranform()
 * is a string with a trimmed value of 'null' or 'undefined;,
 * then false is returned.
 *
 */
var IsDefinedPipe = (function () {
    function IsDefinedPipe() {
    }
    /**
     * Test method used to implement PipeTransform
     * where the actual define check is done.
     *
     * @param value - The value to check if it is a defined value
     * @param args - Not used by this pipe
     * @return true if value is defined or if a string
     * that the trimmed value is not an empty string
     * or one whose value is 'null' or 'undefined', otherwise false.
     */
    IsDefinedPipe.prototype.transform = function (value, args) {
        if (typeof value === 'string') {
            return this.isDefinedString(value);
        }
        else if (typeof value === 'number') {
            return this.isDefinedNumber(value);
        }
        else if (value) {
            return true;
        }
        return false;
    };
    IsDefinedPipe.prototype.isDefinedString = function (value) {
        value = value.trim();
        if (value === 'null') {
            return false;
        }
        else if (value === 'undefined') {
            return false;
        }
        else {
            if (value) {
                return true;
            }
        }
    };
    IsDefinedPipe.prototype.isDefinedNumber = function (value) {
        // In this case, zero is truthy,
        //  since in JavaScript, zero is false/falsy
        if (value === 0) {
            return true;
        }
        else {
            if (value) {
                return true;
            }
        }
    };
    return IsDefinedPipe;
}());
IsDefinedPipe = __decorate([
    core_1.Pipe({
        name: 'isdefined'
    }),
    __metadata("design:paramtypes", [])
], IsDefinedPipe);
exports.IsDefinedPipe = IsDefinedPipe;


/***/ },

/***/ "./src/app/pipes/language-icon/index.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__("./src/app/pipes/language-icon/language-icon.pipe.ts"));
__export(__webpack_require__("./src/app/pipes/language-icon/language-list.ts"));


/***/ },

/***/ "./src/app/pipes/language-icon/language-icon.pipe.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var _1 = __webpack_require__("./src/app/pipes/language-icon/index.ts");
var LanguageIconPipe = (function () {
    function LanguageIconPipe() {
    }
    LanguageIconPipe.prototype.parameterize = function (value) {
        var lowercasedValue = value.toLowerCase();
        return lowercasedValue.replace(/ /g, "_");
    };
    LanguageIconPipe.prototype.transform = function (value) {
        var sanitizedValue = this.parameterize(value);
        switch (sanitizedValue) {
            case 'html':
                sanitizedValue = 'html5';
                break;
            case 'css':
                sanitizedValue = 'css3';
                break;
            default:
                break;
        }
        if (_1.LANGUAGES.indexOf(sanitizedValue) > -1) {
            return sanitizedValue;
        }
        else {
            return 'code_badge';
        }
    };
    return LanguageIconPipe;
}());
LanguageIconPipe = __decorate([
    core_1.Pipe({
        name: 'languageIcon'
    }),
    __metadata("design:paramtypes", [])
], LanguageIconPipe);
exports.LanguageIconPipe = LanguageIconPipe;


/***/ },

/***/ "./src/app/pipes/language-icon/language-list.ts":
/***/ function(module, exports) {

"use strict";
"use strict";
exports.LANGUAGES = [
    'android',
    'angular',
    'appcelerator',
    'apple',
    'appstore',
    'aptana',
    'asterisk',
    'atlassian',
    'atom',
    'aws',
    'backbone',
    'bing_small',
    'bintray',
    'bitbucket',
    'blackberry',
    'bootstrap',
    'bower',
    'brackets',
    'bugsense',
    'celluloid',
    'chrome',
    'cisco',
    'clojure',
    'clojure_alt',
    'cloud9',
    'coda',
    'code',
    'codeigniter',
    'codepen',
    'code_badge',
    'codrops',
    'coffeescript',
    'compass',
    'composer',
    'creativecommons',
    'creativecommons_badgespan',
    'css3',
    'css3_full',
    'cssdeck',
    'css_tricks',
    'dart',
    'database',
    'debian',
    'digital-ocean',
    'django',
    'dlang',
    'docker',
    'doctrine',
    'dojo',
    'dotnet',
    'dreamweaver',
    'dropbox',
    'drupal',
    'eclipse',
    'ember',
    'envato',
    'erlang',
    'extjs',
    'firebase',
    'firefox',
    'fsharp',
    'ghost',
    'ghost_small',
    'github',
    'github_alt',
    'github_badge',
    'github_full',
    'git_branch',
    'git_commitgit_pull_request',
    'git_compare',
    'git_merge',
    'gnu',
    'go',
    'google-cloud-platform',
    'google_drive',
    'grails',
    'groovy',
    'grunt',
    'gulp',
    'hackernews',
    'haskell',
    'heroku',
    'html5',
    'html5_3d_effects',
    'html5_connectivity',
    'html5_device_access',
    'html5_multimedia',
    'ie',
    'illustrator',
    'intellij',
    'ionic',
    'java',
    'javascript',
    'javascript_badge',
    'javascript_shield',
    'jekyll_small',
    'jenkins',
    'jira',
    'joomla',
    'jquery',
    'jquery_ui',
    'komodo',
    'krakenjs',
    'krakenjs_badge',
    'laravel',
    'less',
    'linux',
    'magento',
    'mailchimp',
    'markdown',
    'materializecss',
    'meteor',
    'meteorfull',
    'mitlicence',
    'modernizr',
    'mongodb',
    'mootools',
    'mootools_badge',
    'mozilla',
    'msql_server',
    'mysql',
    'nancy',
    'netbeans',
    'netmagazine',
    'nginx',
    'nodejs',
    'nodejs_small',
    'npm',
    'onedrive',
    'openshift',
    'opensource',
    'opera',
    'perl',
    'phonegap',
    'photoshop',
    'php',
    'postgresql',
    'prolog',
    'python',
    'rackspace',
    'raphael',
    'rasberry_pi',
    'react',
    'redhat',
    'redis',
    'requirejs',
    'responsive',
    'ruby',
    'ruby_on_rails',
    'ruby_rough',
    'rust',
    'safari',
    'sass',
    'scala',
    'scriptcs',
    'scrum',
    'senchatouch',
    'sizzlejs',
    'smashing_magazine',
    'snap_svg',
    'sqllite',
    'stackoverflow',
    'streamline',
    'stylus',
    'sublime',
    'swift',
    'symfony',
    'symfony_badge',
    'techcrunch',
    'terminal',
    'terminal_badge',
    'travis',
    'trello',
    'typo3',
    'ubuntu',
    'uikit',
    'unity_small',
    'vim',
    'visualstudio',
    'w3c',
    'webplatform',
    'windows',
    'wordpress',
    'yahoo',
    'yahoo_small',
    'yeoman',
    'yii',
    'zend'
];


/***/ },

/***/ "./src/app/pipes/pluralize/index.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__("./src/app/pipes/pluralize/pluralize.pipe.ts"));


/***/ },

/***/ "./src/app/pipes/pluralize/pluralize.pipe.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Pluralize = __webpack_require__("./node_modules/pluralize/pluralize.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var PluralizePipe = (function () {
    function PluralizePipe() {
    }
    PluralizePipe.prototype.transform = function (value, arg) {
        var pluralize = Pluralize;
        return pluralize(value, arg);
    };
    return PluralizePipe;
}());
PluralizePipe = __decorate([
    core_1.Pipe({
        name: 'pluralize'
    }),
    __metadata("design:paramtypes", [])
], PluralizePipe);
exports.PluralizePipe = PluralizePipe;


/***/ },

/***/ "./src/app/pipes/truncate/index.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__("./src/app/pipes/truncate/truncate.pipe.ts"));


/***/ },

/***/ "./src/app/pipes/truncate/truncate.pipe.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var TruncatePipe = (function () {
    function TruncatePipe() {
    }
    TruncatePipe.prototype.transform = function (value, arg) {
        /*
          This check follows the same behavior as Angular 2 standard
          pipes that handle strings such as UppercasePipe.
          Note that a returned null value gets converted to an
          empty string in the template where this pipe is used, which prevents
          problems if this pipe is chained with others. See truncate.pipe.spec.ts
          for tests that illustrate this behavior.
        */
        if (value == null) {
            return null;
        }
        var limit = parseInt(arg, 10) || 10;
        var trail = '...';
        return value.length > limit ? value.substring(0, limit) + trail : value;
    };
    return TruncatePipe;
}());
TruncatePipe = __decorate([
    core_1.Pipe({
        name: 'truncate'
    }),
    __metadata("design:paramtypes", [])
], TruncatePipe);
exports.TruncatePipe = TruncatePipe;


/***/ },

/***/ "./src/app/routes/agencies/agencies.routes.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var app_components_1 = __webpack_require__("./src/app/utils/app-components/index.ts");
exports.AGENCY_ROUTES = [
    {
        path: 'agencies',
        component: app_components_1.AgenciesComponent,
        children: [
            { path: ':id', component: app_components_1.AgencyComponent }
        ]
    }
];


/***/ },

/***/ "./src/app/routes/agencies/index.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__("./src/app/routes/agencies/agencies.routes.ts"));


/***/ },

/***/ "./src/app/routes/explore-code/explore-code.routes.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var app_components_1 = __webpack_require__("./src/app/utils/app-components/index.ts");
exports.EXPLORE_CODE_ROUTES = [
    {
        path: 'explore-code',
        component: app_components_1.ExploreCodeComponent
    }
];


/***/ },

/***/ "./src/app/routes/explore-code/index.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__("./src/app/routes/explore-code/explore-code.routes.ts"));


/***/ },

/***/ "./src/app/routes/policy-guide/index.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__("./src/app/routes/policy-guide/policy-guide.routes.ts"));


/***/ },

/***/ "./src/app/routes/policy-guide/policy-guide.routes.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var app_components_1 = __webpack_require__("./src/app/utils/app-components/index.ts");
exports.POLICY_GUIDE_ROUTES = [
    {
        path: 'policy-guide',
        component: app_components_1.PolicyGuideComponent,
        children: [
            { path: '', redirectTo: 'docs/overview/introduction' },
            {
                path: 'docs',
                component: app_components_1.DocsComponent,
                children: [
                    { path: '', redirectTo: 'overview/introduction' },
                    {
                        path: 'compliance',
                        component: app_components_1.ComplianceComponent,
                        children: [
                            { path: '', redirectTo: 'whats-required' },
                            {
                                path: 'acquiring-code',
                                component: app_components_1.ComplianceAcquiringCodeComponent
                            },
                            {
                                path: 'inventory-code',
                                component: app_components_1.ComplianceInventoryCodeComponent
                            },
                            {
                                path: 'licensing',
                                component: app_components_1.ComplianceLicensingComponent
                            },
                            {
                                path: 'measuring-code',
                                component: app_components_1.ComplianceMeasuringCodeComponent
                            },
                            {
                                path: 'whats-required',
                                component: app_components_1.ComplianceWhatsRequiredComponent
                            },
                            {
                                path: 'dashboard',
                                component: app_components_1.ComplianceDashboardComponent
                            }
                        ]
                    },
                    {
                        path: 'open-source',
                        component: app_components_1.CapacityComponent,
                        children: [
                            { path: '', redirectTo: 'introduction' },
                            { path: 'basics', component: app_components_1.CapacityBasicsComponent },
                            {
                                path: 'collaboration',
                                component: app_components_1.CapacityCollaborationComponent
                            },
                            {
                                path: 'interagency-sharing',
                                component: app_components_1.CapacityInteragencySharingComponent
                            },
                            {
                                path: 'introduction',
                                component: app_components_1.CapacityIntroductionComponent
                            },
                            { path: 'resources', component: app_components_1.CapacityResourcesComponent },
                            { path: 'security', component: app_components_1.CapacitySecurityComponent }
                        ]
                    },
                    {
                        path: 'overview',
                        component: app_components_1.OverviewComponent,
                        children: [
                            { path: '', redirectTo: 'introduction' },
                            { path: 'introduction', component: app_components_1.IntroductionComponent },
                            { path: 'inventory', component: app_components_1.OverviewInventoryComponent },
                            { path: 'pilot', component: app_components_1.OverviewPilotComponent },
                            {
                                path: 'tracking-progress',
                                component: app_components_1.OverviewTrackingProgressComponent
                            }
                        ]
                    }
                ]
            }
        ]
    }
];


/***/ },

/***/ "./src/app/routes/repos/index.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__("./src/app/routes/repos/repos.routes.ts"));


/***/ },

/***/ "./src/app/routes/repos/repos.routes.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var app_components_1 = __webpack_require__("./src/app/utils/app-components/index.ts");
exports.REPO_ROUTES = [
    {
        path: 'repos',
        component: app_components_1.ReposComponent,
        children: [
            { path: ':id', component: app_components_1.RepoComponent }
        ]
    }
];


/***/ },

/***/ "./src/app/services/agency/agency.service.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/index.js");
var api_1 = __webpack_require__("./src/app/services/api/index.ts");
var AgencyService = (function (_super) {
    __extends(AgencyService, _super);
    function AgencyService(http) {
        var _this = _super.call(this, http) || this;
        _this.http = http;
        return _this;
    }
    AgencyService.prototype.getAgency = function (term, value) {
        return this.agencies.filter(function (agency) { return agency[term].toLowerCase() === value.toLowerCase(); })[0];
    };
    AgencyService.prototype.getAgencies = function () {
        var query = '?size=100';
        return _super.prototype.fetch.call(this, 'agencies', query);
    };
    AgencyService.prototype.setAgencies = function (agencies) {
        this.agencies = agencies;
    };
    return AgencyService;
}(api_1.ApiService));
AgencyService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof http_1.Http !== "undefined" && http_1.Http) === "function" && _a || Object])
], AgencyService);
exports.AgencyService = AgencyService;
var _a;


/***/ },

/***/ "./src/app/services/agency/index.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__("./src/app/services/agency/agency.service.ts"));


/***/ },

/***/ "./src/app/services/api/api.service.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var http_1 = __webpack_require__("./node_modules/@angular/http/index.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
__webpack_require__("./node_modules/rxjs/add/operator/map.js");
var ApiService = (function () {
    function ApiService(apiHttp) {
        this.apiHttp = apiHttp;
    }
    ApiService.prototype.fetch = function (endpoint, query) {
        var queryUrl = "http://localhost:3001/api/0.1/" + endpoint + '?' + query;
        return this.apiHttp.get(queryUrl).map(function (res) {
            return res.json();
        });
    };
    return ApiService;
}());
ApiService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof http_1.Http !== "undefined" && http_1.Http) === "function" && _a || Object])
], ApiService);
exports.ApiService = ApiService;
var _a;


/***/ },

/***/ "./src/app/services/api/index.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__("./src/app/services/api/api.service.ts"));


/***/ },

/***/ "./src/app/services/mobile/index.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__("./src/app/services/mobile/mobile.service.ts"));


/***/ },

/***/ "./src/app/services/mobile/mobile.service.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var Subject_1 = __webpack_require__("./node_modules/rxjs/Subject.js");
var MobileService = (function () {
    function MobileService() {
        this.mobileMenuActive = new Subject_1.Subject();
        this.activeMobileMenu$ = this.mobileMenuActive.asObservable();
        this.active = false;
    }
    MobileService.prototype.changeMenuStatus = function () {
        this.mobileMenuActive.next(this.active);
    };
    MobileService.prototype.hideMenu = function () {
        this.active = false;
        this.changeMenuStatus();
    };
    MobileService.prototype.toggleMenu = function () {
        this.active = !this.active;
        this.changeMenuStatus();
    };
    return MobileService;
}());
MobileService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], MobileService);
exports.MobileService = MobileService;


/***/ },

/***/ "./src/app/services/modal/index.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__("./src/app/services/modal/modal.service.ts"));


/***/ },

/***/ "./src/app/services/modal/modal.service.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var Subject_1 = __webpack_require__("./node_modules/rxjs/Subject.js");
var ModalService = (function () {
    function ModalService() {
        this.modalActivation = new Subject_1.Subject();
        // tslint:disable-next-line:member-ordering
        this.modalActivated$ = this.modalActivation.asObservable();
    }
    ModalService.prototype.showModal = function (modalData) {
        this.modalActivation.next(modalData);
    };
    return ModalService;
}());
ModalService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], ModalService);
exports.ModalService = ModalService;


/***/ },

/***/ "./src/app/services/repo/index.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__("./src/app/services/repo/repo.service.ts"));


/***/ },

/***/ "./src/app/services/repo/repo.service.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var http_1 = __webpack_require__("./node_modules/@angular/http/index.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
__webpack_require__("./node_modules/rxjs/add/operator/map.js");
var RepoService = (function () {
    function RepoService(http) {
        this.http = http;
    }
    RepoService.prototype.getRepo = function (id) {
        var repoUrl = "http://localhost:3001/api/0.1/" + 'repo/' + id;
        return this.http.get(repoUrl).map(function (res) { return res.json(); });
    };
    return RepoService;
}());
RepoService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof http_1.Http !== "undefined" && http_1.Http) === "function" && _a || Object])
], RepoService);
exports.RepoService = RepoService;
var _a;


/***/ },

/***/ "./src/app/services/search/index.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__("./src/app/services/search/search.service.ts"));


/***/ },

/***/ "./src/app/services/search/search.service.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var http_1 = __webpack_require__("./node_modules/@angular/http/index.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
__webpack_require__("./node_modules/rxjs/add/operator/map.js");
var SearchService = (function () {
    function SearchService(http) {
        this.http = http;
    }
    SearchService.prototype.search = function (from, size, query) {
        var queryParams = '?' + query + '&from=' + from + '&size=' + size;
        var queryUrl = "http://localhost:3001/api/0.1/" + 'repos' + queryParams;
        return this.http.get(queryUrl).map(function (res) {
            return res.json();
        });
    };
    return SearchService;
}());
SearchService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof http_1.Http !== "undefined" && http_1.Http) === "function" && _a || Object])
], SearchService);
exports.SearchService = SearchService;
var _a;


/***/ },

/***/ "./src/app/services/seo/index.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__("./src/app/services/seo/seo.service.ts"));


/***/ },

/***/ "./src/app/services/seo/seo.service.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/index.js");
var dom_adapter_1 = __webpack_require__("./node_modules/@angular/platform-browser/src/dom/dom_adapter.js");
var SeoService = (function () {
    function SeoService(titleService) {
        this.baseTitle = '· Code.gov';
        this.titleService = titleService;
        this.DOM = dom_adapter_1.getDOM();
        this.headElement = this.DOM.query('head');
        this.metaDescription = this.getOrCreateMetaElement('description');
        this.robots = this.getOrCreateMetaElement('robots');
    }
    SeoService.prototype.getTitle = function () {
        return this.titleService.getTitle();
    };
    SeoService.prototype.setTitle = function (newTitle, baseTitle) {
        if (baseTitle === void 0) { baseTitle = false; }
        if (baseTitle === true)
            newTitle += ' · Code.gov';
        this.titleService.setTitle(newTitle);
    };
    SeoService.prototype.getMetaDescription = function () {
        return this.metaDescription.getAttribute('content');
    };
    SeoService.prototype.setMetaDescription = function (description) {
        this.metaDescription.setAttribute('content', description);
    };
    SeoService.prototype.getMetaRobots = function () {
        return this.robots.getAttribute('content');
    };
    SeoService.prototype.setMetaRobots = function (robots) {
        this.robots.setAttribute('content', robots);
    };
    SeoService.prototype.getOrCreateMetaElement = function (name) {
        var el;
        el = this.DOM.query('meta[name=' + name + ']');
        if (el === null) {
            el = this.DOM.createElement('meta');
            el.setAttribute('name', name);
            this.headElement.appendChild(el);
        }
        return el;
    };
    return SeoService;
}());
SeoService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof platform_browser_1.Title !== "undefined" && platform_browser_1.Title) === "function" && _a || Object])
], SeoService);
exports.SeoService = SeoService;
var _a;


/***/ },

/***/ "./src/app/services/state/index.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__("./src/app/services/state/state.service.ts"));


/***/ },

/***/ "./src/app/services/state/state.service.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var StateService = (function () {
    function StateService() {
        this._state = {};
    }
    Object.defineProperty(StateService.prototype, "state", {
        // already return a clone of the current state
        get: function () {
            return this._state = this._clone(this._state);
        },
        // never allow mutation
        set: function (value) {
            throw new Error('do not mutate the `.state` directly');
        },
        enumerable: true,
        configurable: true
    });
    StateService.prototype.get = function (prop) {
        // use our state getter for the clone
        var state = this.state;
        return state.hasOwnProperty(prop) ? state[prop] : state;
    };
    StateService.prototype.set = function (prop, value) {
        // internally mutate our state
        return this._state[prop] = value;
    };
    StateService.prototype._clone = function (object) {
        // simple object clone
        return JSON.parse(JSON.stringify(object));
    };
    return StateService;
}());
StateService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], StateService);
exports.StateService = StateService;


/***/ },

/***/ "./src/app/services/term/index.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__("./src/app/services/term/term.service.ts"));


/***/ },

/***/ "./src/app/services/term/term.service.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var http_1 = __webpack_require__("./node_modules/@angular/http/index.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
__webpack_require__("./node_modules/rxjs/add/operator/map.js");
var api_1 = __webpack_require__("./src/app/services/api/index.ts");
var TermService = (function (_super) {
    __extends(TermService, _super);
    function TermService(http) {
        var _this = _super.call(this, http) || this;
        _this.http = http;
        _this.terms = [];
        return _this;
    }
    TermService.prototype.addTerm = function (term) {
        this.terms.push(term);
    };
    TermService.prototype.getTerms = function (query) {
        return _super.prototype.fetch.call(this, 'terms', query);
    };
    TermService.prototype.resetTerms = function () {
        this.terms = [];
    };
    TermService.prototype.uniqueTerm = function (name) {
        return this.terms.filter(function (term) { return term['name'].toLowerCase() === name.toLowerCase(); }).length === 0;
    };
    return TermService;
}(api_1.ApiService));
TermService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof http_1.Http !== "undefined" && http_1.Http) === "function" && _a || Object])
], TermService);
exports.TermService = TermService;
var _a;


/***/ },

/***/ "./src/app/utils/app-components/app-components.util.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__("./src/app/components/activity-list/index.ts"));
__export(__webpack_require__("./src/app/components/agencies/index.ts"));
__export(__webpack_require__("./src/app/components/agency/index.ts"));
__export(__webpack_require__("./src/app/components/agency-sidebar/index.ts"));
__export(__webpack_require__("./src/app/components/autocomplete/index.ts"));
__export(__webpack_require__("./src/app/components/autocomplete-result/index.ts"));
__export(__webpack_require__("./src/app/components/app/index.ts"));
__export(__webpack_require__("./src/app/components/explore-code/index.ts"));
__export(__webpack_require__("./src/app/components/four-oh-four/index.ts"));
__export(__webpack_require__("./src/app/components/home/index.ts"));
__export(__webpack_require__("./src/app/components/home/banner-art/index.ts"));
__export(__webpack_require__("./src/app/components/modal/index.ts"));
__export(__webpack_require__("./src/app/components/privacy-policy/index.ts"));
__export(__webpack_require__("./src/app/components/repo/index.ts"));
__export(__webpack_require__("./src/app/components/repo-list/index.ts"));
__export(__webpack_require__("./src/app/components/repo-list-item/index.ts"));
__export(__webpack_require__("./src/app/components/repos/index.ts"));
__export(__webpack_require__("./src/app/components/repos-search/index.ts"));
__export(__webpack_require__("./src/app/components/search-results/index.ts"));
__export(__webpack_require__("./src/app/components/policy-guide/index.ts"));
__export(__webpack_require__("./src/app/components/policy-guide/docs/index.ts"));
__export(__webpack_require__("./src/app/components/policy-guide/docs/capacity/index.ts"));
__export(__webpack_require__("./src/app/components/policy-guide/docs/capacity/capacity-basics/index.ts"));
__export(__webpack_require__("./src/app/components/policy-guide/docs/capacity/capacity-collaboration/index.ts"));
__export(__webpack_require__("./src/app/components/policy-guide/docs/capacity/capacity-interagency-sharing/index.ts"));
__export(__webpack_require__("./src/app/components/policy-guide/docs/capacity/capacity-introduction/index.ts"));
__export(__webpack_require__("./src/app/components/policy-guide/docs/capacity/capacity-resources/index.ts"));
__export(__webpack_require__("./src/app/components/policy-guide/docs/capacity/capacity-security/index.ts"));
__export(__webpack_require__("./src/app/components/policy-guide/docs/compliance/index.ts"));
__export(__webpack_require__("./src/app/components/policy-guide/docs/compliance/compliance-acquiring-code/index.ts"));
__export(__webpack_require__("./src/app/components/policy-guide/docs/compliance/compliance-inventory-code/index.ts"));
__export(__webpack_require__("./src/app/components/policy-guide/docs/compliance/compliance-licensing/index.ts"));
__export(__webpack_require__("./src/app/components/policy-guide/docs/compliance/compliance-measuring-code/index.ts"));
__export(__webpack_require__("./src/app/components/policy-guide/docs/compliance/compliance-whats-required/index.ts"));
__export(__webpack_require__("./src/app/components/policy-guide/docs/compliance/compliance-dashboard/index.ts"));
__export(__webpack_require__("./src/app/components/policy-guide/docs/overview/introduction/index.ts"));
__export(__webpack_require__("./src/app/components/policy-guide/docs/overview/index.ts"));
__export(__webpack_require__("./src/app/components/policy-guide/docs/overview/overview-inventory/index.ts"));
__export(__webpack_require__("./src/app/components/policy-guide/docs/overview/overview-pilot/index.ts"));
__export(__webpack_require__("./src/app/components/policy-guide/docs/overview/overview-tracking-progress/index.ts"));


/***/ },

/***/ "./src/app/utils/app-components/components-array.util.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var app_components_util_1 = __webpack_require__("./src/app/utils/app-components/app-components.util.ts");
exports.APP_COMPONENTS = [
    app_components_util_1.ActivityListComponent,
    app_components_util_1.AgenciesComponent,
    app_components_util_1.AgencyComponent,
    app_components_util_1.AgencySidebarComponent,
    app_components_util_1.AppComponent,
    app_components_util_1.AutocompleteComponent,
    app_components_util_1.AutocompleteResultComponent,
    app_components_util_1.BannerArtComponent,
    app_components_util_1.CapacityComponent,
    app_components_util_1.CapacityBasicsComponent,
    app_components_util_1.CapacityCollaborationComponent,
    app_components_util_1.CapacityInteragencySharingComponent,
    app_components_util_1.CapacityIntroductionComponent,
    app_components_util_1.CapacityResourcesComponent,
    app_components_util_1.CapacitySecurityComponent,
    app_components_util_1.ComplianceComponent,
    app_components_util_1.ComplianceAcquiringCodeComponent,
    app_components_util_1.ComplianceInventoryCodeComponent,
    app_components_util_1.ComplianceLicensingComponent,
    app_components_util_1.ComplianceMeasuringCodeComponent,
    app_components_util_1.ComplianceDashboardComponent,
    app_components_util_1.ComplianceWhatsRequiredComponent,
    app_components_util_1.DocsComponent,
    app_components_util_1.ExploreCodeComponent,
    app_components_util_1.FourOhFourComponent,
    app_components_util_1.HomeComponent,
    app_components_util_1.IntroductionComponent,
    app_components_util_1.ModalComponent,
    app_components_util_1.OverviewComponent,
    app_components_util_1.OverviewInventoryComponent,
    app_components_util_1.OverviewPilotComponent,
    app_components_util_1.OverviewTrackingProgressComponent,
    app_components_util_1.PolicyGuideComponent,
    app_components_util_1.PrivacyPolicyComponent,
    app_components_util_1.RepoComponent,
    app_components_util_1.RepoListComponent,
    app_components_util_1.RepoListItemComponent,
    app_components_util_1.ReposComponent,
    app_components_util_1.ReposSearchComponent,
    app_components_util_1.SearchResultsComponent
];


/***/ },

/***/ "./src/app/utils/app-components/index.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__("./src/app/utils/app-components/app-components.util.ts"));
__export(__webpack_require__("./src/app/utils/app-components/components-array.util.ts"));


/***/ },

/***/ "./src/main.browser.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
/*
 * Angular bootstraping
 */
var platform_browser_dynamic_1 = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/index.js");
var environment_1 = __webpack_require__("./src/app/environment.ts");
var hmr_1 = __webpack_require__("./node_modules/@angularclass/hmr/dist/index.js");
/*
 * App Module
 * our top level module that holds all of our components
 */
var app_1 = __webpack_require__("./src/app/index.ts");
/*
 * Bootstrap our Angular app with a top level NgModule
 */
function main() {
    return platform_browser_dynamic_1.platformBrowserDynamic()
        .bootstrapModule(app_1.AppModule).then(function(MODULE_REF) {
  if (false) {
    module["hot"]["accept"]();
    
    if (MODULE_REF.instance["hmrOnInit"]) {
      module["hot"]["data"] && MODULE_REF.instance["hmrOnInit"](module["hot"]["data"]);
    }
    if (MODULE_REF.instance["hmrOnStatus"]) {
      module["hot"]["apply"](function(status) {
        MODULE_REF.instance["hmrOnStatus"](status);
      });
    }
    if (MODULE_REF.instance["hmrOnCheck"]) {
      module["hot"]["check"](function(err, outdatedModules) {
        MODULE_REF.instance["hmrOnCheck"](err, outdatedModules);
      });
    }
    if (MODULE_REF.instance["hmrOnDecline"]) {
      module["hot"]["decline"](function(dependencies) {
        MODULE_REF.instance["hmrOnDecline"](dependencies);
      });
    }
    module["hot"]["dispose"](function(store) {
      MODULE_REF.instance["hmrOnDestroy"] && MODULE_REF.instance["hmrOnDestroy"](store);
      MODULE_REF.destroy();
      MODULE_REF.instance["hmrAfterDestroy"] && MODULE_REF.instance["hmrAfterDestroy"](store);
    });
  }
  return MODULE_REF;
})
        .then(environment_1.decorateModuleRef)
        .catch(function (err) { return console.error(err); });
}
exports.main = main;
hmr_1.bootloader(main);


/***/ }

},["./src/main.browser.ts"]);
//# sourceMappingURL=main.map