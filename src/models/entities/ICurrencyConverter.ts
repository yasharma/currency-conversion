
import { IWorkflowItem } from "./IWorkFlowTemplate";
import { ITag } from './IMetadata';

export interface ICurrencyConverter {
 rates: any;
 base: string;
 date: Date
}