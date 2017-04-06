"use strict";
var Option = (function () {
    function Option(opt, description, type, defaultValue) {
        this.opt = opt;
        this.description = description;
        this.type = type;
        if (defaultValue != null) {
            this.defaultValue = defaultValue;
        }
    }
    Option.prototype.getValue_ = function () {
        if (typeof this.value !== 'undefined') {
            return this.value;
        }
        else {
            return this.defaultValue;
        }
    };
    Option.prototype.getNumber = function () {
        var value = this.getValue_();
        if (value != null && (typeof value === 'number' || typeof value === 'string')) {
            return +value;
        }
        else {
            return null;
        }
    };
    Option.prototype.getString = function () {
        var value = this.getValue_();
        if (value != null) {
            return '' + this.getValue_();
        }
        else {
            return '';
        }
    };
    Option.prototype.getBoolean = function () {
        var value = this.getValue_();
        if (value != null) {
            if (typeof value === 'string') {
                return !(value === '0' || value === 'false');
            }
            else if (typeof value === 'number') {
                return value !== 0;
            }
            else {
                return value;
            }
        }
        return false;
    };
    return Option;
}());
exports.Option = Option;
function unparseOptions(options) {
    var args = [];
    for (var name_1 in options) {
        var value = options[name_1].getValue_();
        if (value !== options[name_1].defaultValue) {
            args.push('--' + name_1, '' + value);
        }
    }
    return args;
}
exports.unparseOptions = unparseOptions;
;
//# sourceMappingURL=options.js.map