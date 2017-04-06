"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var binary_1 = require("../binaries/binary");
/**
 * The downloaded binary is the binary with the list of versions downloaded.
 */
var DownloadedBinary = (function (_super) {
    __extends(DownloadedBinary, _super);
    function DownloadedBinary(binary) {
        var _this = _super.call(this) || this;
        _this.versions = [];
        _this.binary = binary;
        _this.name = binary.name;
        _this.versionCustom = binary.versionCustom;
        return _this;
    }
    DownloadedBinary.prototype.id = function () {
        return this.binary.id();
    };
    return DownloadedBinary;
}(binary_1.Binary));
exports.DownloadedBinary = DownloadedBinary;
//# sourceMappingURL=downloaded_binary.js.map