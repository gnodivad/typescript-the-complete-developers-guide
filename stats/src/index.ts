import fs from 'fs';
import { MatchResult } from './MatchResult';
import { CsvFileReader } from './CsvFileReader';
import { MatchReader } from './MatchReader';

const csvFileReader = new CsvFileReader('football.csv');
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

console.log(`Man United won ${manUnitedWins} games`);
