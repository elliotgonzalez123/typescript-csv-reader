import { Analyzer } from '../Summary';
import { MatchData } from '../MatchData';
import { MatchResult } from '../MatchResult';

export class OutcomeAnalysis implements Analyzer {
  constructor(public team: string, public result: MatchResult) {}

  run(matches: MatchData[]): string {
    let wins = 0;
    let losses = 0;
    for (let i = 0; i < matches.length; i++) {
      let match = matches[i];
      if (match[1] === this.team && match[5] === MatchResult.HomeWin) {
        wins++;
      } else if (match[2] === this.team && match[5] === MatchResult.AwayWin) {
        wins++;
      } else if (match[1] === this.team && match[5] === MatchResult.AwayWin) {
        losses++;
      } else if (match[2] === this.team && match[5] === MatchResult.HomeWin) {
        losses++;
      }
    }
    return this.result === MatchResult.Win
      ? `Team: ${this.team} won ${wins} games`
      : `Team: ${this.team} lost ${losses} games`;
  }
}
