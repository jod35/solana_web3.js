"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.transferSOL = void 0;
var web3_js_1 = require("@solana/web3.js");
var create_wallet_1 = require("../create_wallet");
var showBalance_1 = require("../showBalance");
var transferSOL = function (from, to, amount) { return __awaiter(void 0, void 0, void 0, function () {
    var connection, transaction, instruction, secret, fromkeypair, topublicKey;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                connection = new web3_js_1.Connection("http://localhost:8899", "confirmed");
                transaction = new web3_js_1.Transaction();
                instruction = web3_js_1.SystemProgram.transfer({
                    toPubkey: to,
                    fromPubkey: from.publicKey,
                    lamports: web3_js_1.LAMPORTS_PER_SOL * amount
                });
                transaction.add(instruction);
                return [4 /*yield*/, (0, web3_js_1.sendAndConfirmTransaction)(connection, transaction, [
                        from
                    ])];
            case 1:
                _a.sent();
                console.log("Done");
                secret = Uint8Array.from([117, 166, 43, 10, 182, 229, 164, 186, 118, 180, 168, 112, 103, 201, 81, 188, 208, 165, 97, 212, 153, 0, 232, 14, 221, 0, 115, 55, 82, 175, 37, 183, 32, 44, 61, 50, 255, 229, 132, 74, 85, 208, 245, 89, 14, 154, 110, 137, 242, 14, 102, 241, 59, 70, 127, 116, 153, 118, 97, 33, 71, 63, 115, 62]);
                fromkeypair = web3_js_1.Keypair.fromSecretKey(secret);
                topublicKey = new web3_js_1.PublicKey("9zBRc1ayMn1QYpcxUdU8oYqkGYGBVy6CZ5d7UraDXLCk");
                (function () { return __awaiter(void 0, void 0, void 0, function () {
                    var initialBalanceFrom, initialBalanceTo;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, (0, showBalance_1.showBalance)(fromkeypair.publicKey.toString())];
                            case 1:
                                initialBalanceFrom = _a.sent();
                                return [4 /*yield*/, (0, create_wallet_1.airdrop)(fromkeypair.publicKey.toString(), 4)];
                            case 2:
                                _a.sent();
                                console.log("Initial balance of this wallet ".concat(initialBalanceFrom));
                                return [4 /*yield*/, (0, showBalance_1.showBalance)(fromkeypair.publicKey.toString())];
                            case 3:
                                initialBalanceTo = _a.sent();
                                console.log("Initial balance of this wallet ".concat(initialBalanceTo));
                                return [4 /*yield*/, (0, exports.transferSOL)(fromkeypair, topublicKey, 1)];
                            case 4:
                                _a.sent();
                                setTimeout(function () { return __awaiter(void 0, void 0, void 0, function () {
                                    var postBalanceFrom, postBalanceTo;
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0: return [4 /*yield*/, (0, showBalance_1.showBalance)(fromkeypair.publicKey.toString())];
                                            case 1:
                                                postBalanceFrom = _a.sent();
                                                return [4 /*yield*/, (0, create_wallet_1.airdrop)(fromkeypair.publicKey.toString(), 4)];
                                            case 2:
                                                _a.sent();
                                                console.log("Initial balance of this wallet ".concat(postBalanceFrom));
                                                return [4 /*yield*/, (0, showBalance_1.showBalance)(fromkeypair.publicKey.toString())];
                                            case 3:
                                                postBalanceTo = _a.sent();
                                                console.log("Initial balance of this wallet ".concat(postBalanceTo));
                                                return [2 /*return*/];
                                        }
                                    });
                                }); }, 3000);
                                return [2 /*return*/];
                        }
                    });
                }); })();
                return [2 /*return*/];
        }
    });
}); };
exports.transferSOL = transferSOL;
