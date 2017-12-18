
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {WorkEffortType} from '../workeffort/WorkEffort.js';
import {InvoiceItemType} from '../accounting/InvoiceItem.js';
import {PartyType} from '../party/Party.js';
import {TimesheetType} from '../workeffort/Timesheet.js';
import {RateTypeType} from '../accounting/RateType.js';


const TimeEntryType = new GraphQLObjectType({
  name: 'TimeEntryType',
  description: 'Type for TimeEntry in workeffort',

  fields: () => ({
    fromDate: {type: GraphQLString},
    workEffort: {
      type: WorkEffortType,
      args : {workEffortId: {type: GraphQLString}},
      resolve: (timeEntry, args, {loaders}) => loaders.ofbiz.load(`workeffort/workEfforts/find?workEffortId=${timeEntry.workEffortId}`)
    },
    timesheet: {
      type: TimesheetType,
      args : {timesheetId: {type: GraphQLString}},
      resolve: (timeEntry, args, {loaders}) => loaders.ofbiz.load(`workeffort/timesheets/find?timesheetId=${timeEntry.timesheetId}`)
    },
    rateType: {
      type: RateTypeType,
      args : {rateTypeId: {type: GraphQLString}},
      resolve: (timeEntry, args, {loaders}) => loaders.ofbiz.load(`accounting/rateTypes/find?rateTypeId=${timeEntry.rateTypeId}`)
    },
    hours: {type: GraphQLFloat},
    comments: {type: GraphQLString},
    timeEntryId: {type: GraphQLString},
    invoice: {
      type: InvoiceItemType,
      args : {invoiceId: {type: GraphQLString}},
      resolve: (timeEntry, args, {loaders}) => loaders.ofbiz.load(`accounting/invoice/invoiceItems/find?invoiceId=${timeEntry.invoiceId}`)
    },
    invoiceItemSeqId: {type: GraphQLString},
    party: {
      type: PartyType,
      args : {partyId: {type: GraphQLString}},
      resolve: (timeEntry, args, {loaders}) => loaders.ofbiz.load(`/partys/find?partyId=${timeEntry.partyId}`)
    },
    thruDate: {type: GraphQLString}
  })
});

export {TimeEntryType};
    




const TimeEntryInputType = new GraphQLInputObjectType({
  name: 'TimeEntryInputType',
  description: 'input type for TimeEntry',

  fields: () => ({
    comments: {type: GraphQLString},
    fromDate: {type: GraphQLString},
    hours: {type: GraphQLFloat},
    invoiceId: {type: GraphQLString},
    invoiceItemSeqId: {type: GraphQLString},
    partyId: {type: GraphQLString},
    rateTypeId: {type: GraphQLString},
    thruDate: {type: GraphQLString},
    timeEntryId: {type: GraphQLString},
    timesheetId: {type: GraphQLString},
    workEffortId: {type: GraphQLString}
  })
});

export {TimeEntryInputType};
    