import { MatchReader } from './MatchReader';
import { Summary } from './Summary';
import { ConsoleReport } from './reportTargets/ConsoleReports';
import { OutcomeAnalysis } from './analyzers/OutcomeAnalysis';
import { MatchResult } from './MatchResult';

const matchReader = MatchReader.fromCsv('football.csv');
// const summary = Summary.winsAnalysisWithHtmlReport('Man United');
const summary = new Summary(
  new OutcomeAnalysis('Newcastle', MatchResult.Win),
  new ConsoleReport()
);

matchReader.load();
summary.buildAndPrintReport(matchReader.matches);
