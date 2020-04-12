import { PriceType } from './price-types';
import { TimeframeType } from './timeframes';
import { FormatType } from './format';
import { InstrumentType } from './instruments';
import { OptionalKeys } from 'utility-types';
export interface Config {
    instrument: InstrumentType;
    dates: {
        from: string;
        to: string;
    };
    timeframe?: TimeframeType;
    priceType?: PriceType;
    utcOffset?: number;
    volumes?: boolean;
    ignoreFlats?: boolean;
    format?: FormatType;
}
export declare type DefaultConfig = Required<Pick<Config, OptionalKeys<Config>>>;
