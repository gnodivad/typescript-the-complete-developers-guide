import { CsvFileReader } from './CsvFileReader';
import { MatchReader } from './MatchReader';
import { Summary } from './Summary';
import { WinsAnalysis } from './analyzers/WindsAnalysis';
import { ConsoleReport } from './reportTargets/ConsoleReport';

const csvFileReader = new CsvFileReader('football.csv');
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

const summary = new Summary(new WinsAnalysis('Chelsea'), new ConsoleReport());
summary.buildAndPrintReport(matchReader.matches);
