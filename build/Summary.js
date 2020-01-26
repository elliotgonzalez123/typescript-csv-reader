"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var OutcomeAnalysis_1 = require("./analyzers/OutcomeAnalysis");
var HtmlReport_1 = require("./reportTargets/HtmlReport");
var MatchResult_1 = require("./MatchResult");
var Summary = /** @class */ (function () {
    function Summary(analyzer, outputTarget) {
        this.analyzer = analyzer;
        this.outputTarget = outputTarget;
    }
    Summary.winsAnalysisWithHtmlReport = function (team) {
        return new Summary(new OutcomeAnalysis_1.OutcomeAnalysis(team, MatchResult_1.MatchResult.Win), new HtmlReport_1.HtmlReport());
    };
    Summary.prototype.buildAndPrintReport = function (matches) {
        var report = this.analyzer.run(matches);
        this.outputTarget.print(report);
    };
    return Summary;
}());
exports.Summary = Summary;
