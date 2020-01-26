"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchResult_1 = require("../MatchResult");
var OutcomeAnalysis = /** @class */ (function () {
    function OutcomeAnalysis(team, result) {
        this.team = team;
        this.result = result;
    }
    OutcomeAnalysis.prototype.run = function (matches) {
        var wins = 0;
        var losses = 0;
        for (var i = 0; i < matches.length; i++) {
            var match = matches[i];
            if (match[1] === this.team && match[5] === MatchResult_1.MatchResult.HomeWin) {
                wins++;
            }
            else if (match[2] === this.team && match[5] === MatchResult_1.MatchResult.AwayWin) {
                wins++;
            }
            else if (match[1] === this.team && match[5] === MatchResult_1.MatchResult.AwayWin) {
                losses++;
            }
            else if (match[2] === this.team && match[5] === MatchResult_1.MatchResult.HomeWin) {
                losses++;
            }
        }
        return this.result === MatchResult_1.MatchResult.Win
            ? "Team: " + this.team + " won " + wins + " games"
            : "Team: " + this.team + " lost " + losses + " games";
    };
    return OutcomeAnalysis;
}());
exports.OutcomeAnalysis = OutcomeAnalysis;
