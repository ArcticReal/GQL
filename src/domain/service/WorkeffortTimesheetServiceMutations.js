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
import {postToUrl,deleteToUrl,putToUrl} from '../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../framework/helpTypes.js';


const addTimesheetToInvoice = {
  type: ResponseType,
  description: 'mutation for ofbiz addTimesheetToInvoice method',
  args:{timesheetId: {type: GraphQLString},invoiceId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/workeffortTimesheet/addTimesheetToInvoice?timesheetId=${args.timesheetId}invoiceId=${args.invoiceId}`, null, req);
  }
};
export {addTimesheetToInvoice};


const addTimesheetToNewInvoice = {
  type: ResponseType,
  description: 'mutation for ofbiz addTimesheetToNewInvoice method',
  args:{timesheetId: {type: GraphQLString},partyIdFrom: {type: GraphQLString},partyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/workeffortTimesheet/addTimesheetToNewInvoice?timesheetId=${args.timesheetId}partyIdFrom=${args.partyIdFrom}partyId=${args.partyId}`, null, req);
  }
};
export {addTimesheetToNewInvoice};


const addWorkEffortTimeToInvoice = {
  type: ResponseType,
  description: 'mutation for ofbiz addWorkEffortTimeToInvoice method',
  args:{workEffortId: {type: GraphQLString},invoiceId: {type: GraphQLString},combineInvoiceItem: {type: GraphQLString},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/workeffortTimesheet/addWorkEffortTimeToInvoice?workEffortId=${args.workEffortId}invoiceId=${args.invoiceId}combineInvoiceItem=${args.combineInvoiceItem}thruDate=${args.thruDate}`, null, req);
  }
};
export {addWorkEffortTimeToInvoice};


const addWorkEffortTimeToNewInvoice = {
  type: ResponseType,
  description: 'mutation for ofbiz addWorkEffortTimeToNewInvoice method',
  args:{workEffortId: {type: GraphQLString},partyIdFrom: {type: GraphQLString},partyId: {type: GraphQLString},combineInvoiceItem: {type: GraphQLString},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/workeffortTimesheet/addWorkEffortTimeToNewInvoice?workEffortId=${args.workEffortId}partyIdFrom=${args.partyIdFrom}partyId=${args.partyId}combineInvoiceItem=${args.combineInvoiceItem}thruDate=${args.thruDate}`, null, req);
  }
};
export {addWorkEffortTimeToNewInvoice};


const createTimeEntry = {
  type: ResponseType,
  description: 'mutation for ofbiz createTimeEntry method',
  args:{fromDate: {type: GraphQLString},workEffortId: {type: GraphQLString},timesheetId: {type: GraphQLString},rateTypeId: {type: GraphQLString},hours: {type: GraphQLFloat},comments: {type: GraphQLString},invoiceId: {type: GraphQLString},invoiceItemSeqId: {type: GraphQLString},partyId: {type: GraphQLString},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/workeffortTimesheet/createTimeEntry?fromDate=${args.fromDate}workEffortId=${args.workEffortId}timesheetId=${args.timesheetId}rateTypeId=${args.rateTypeId}hours=${args.hours}comments=${args.comments}invoiceId=${args.invoiceId}invoiceItemSeqId=${args.invoiceItemSeqId}partyId=${args.partyId}thruDate=${args.thruDate}`, null, req);
  }
};
export {createTimeEntry};


const createTimesheet = {
  type: ResponseType,
  description: 'mutation for ofbiz createTimesheet method',
  args:{fromDate: {type: GraphQLString},comments: {type: GraphQLString},statusId: {type: GraphQLString},approvedByUserLoginId: {type: GraphQLString},partyId: {type: GraphQLString},clientPartyId: {type: GraphQLString},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/workeffortTimesheet/createTimesheet?fromDate=${args.fromDate}comments=${args.comments}statusId=${args.statusId}approvedByUserLoginId=${args.approvedByUserLoginId}partyId=${args.partyId}clientPartyId=${args.clientPartyId}thruDate=${args.thruDate}`, null, req);
  }
};
export {createTimesheet};


const createTimesheetForThisWeek = {
  type: ResponseType,
  description: 'mutation for ofbiz createTimesheetForThisWeek method',
  args:{comments: {type: GraphQLString},statusId: {type: GraphQLString},approvedByUserLoginId: {type: GraphQLString},requiredDate: {type: GraphQLString},partyId: {type: GraphQLString},clientPartyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/workeffortTimesheet/createTimesheetForThisWeek?comments=${args.comments}statusId=${args.statusId}approvedByUserLoginId=${args.approvedByUserLoginId}requiredDate=${args.requiredDate}partyId=${args.partyId}clientPartyId=${args.clientPartyId}`, null, req);
  }
};
export {createTimesheetForThisWeek};


const createTimesheetRole = {
  type: ResponseType,
  description: 'mutation for ofbiz createTimesheetRole method',
  args:{timesheetId: {type: GraphQLString},roleTypeId: {type: GraphQLString},partyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/workeffortTimesheet/createTimesheetRole?timesheetId=${args.timesheetId}roleTypeId=${args.roleTypeId}partyId=${args.partyId}`, null, req);
  }
};
export {createTimesheetRole};


const createTimesheets = {
  type: ResponseType,
  description: 'mutation for ofbiz createTimesheets method',
  args:{fromDate: {type: GraphQLString},comments: {type: GraphQLString},clientPartyId: {type: GraphQLString},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/workeffortTimesheet/createTimesheets?fromDate=${args.fromDate}partyIdList=${args.partyIdList}comments=${args.comments}clientPartyId=${args.clientPartyId}thruDate=${args.thruDate}`, null, req);
  }
};
export {createTimesheets};


const deleteTimeEntry = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteTimeEntry method',
  args:{timeEntryId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/workeffortTimesheet/deleteTimeEntry?timeEntryId=${args.timeEntryId}`, null, req);
  }
};
export {deleteTimeEntry};


const deleteTimesheet = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteTimesheet method',
  args:{timesheetId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/workeffortTimesheet/deleteTimesheet?timesheetId=${args.timesheetId}`, null, req);
  }
};
export {deleteTimesheet};


const deleteTimesheetRole = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteTimesheetRole method',
  args:{timesheetId: {type: GraphQLString},roleTypeId: {type: GraphQLString},partyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/workeffortTimesheet/deleteTimesheetRole?timesheetId=${args.timesheetId}roleTypeId=${args.roleTypeId}partyId=${args.partyId}`, null, req);
  }
};
export {deleteTimesheetRole};


const getTimeEntryRate = {
  type: ResponseType,
  description: 'mutation for ofbiz getTimeEntryRate method',
  args:{timeEntryId: {type: GraphQLString},currencyUomId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/workeffortTimesheet/getTimeEntryRate?timeEntryId=${args.timeEntryId}currencyUomId=${args.currencyUomId}`, null, req);
  }
};
export {getTimeEntryRate};


const unlinkInvoiceFromTimeEntry = {
  type: ResponseType,
  description: 'mutation for ofbiz unlinkInvoiceFromTimeEntry method',
  args:{timeEntryId: {type: GraphQLString},invoiceId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/workeffortTimesheet/unlinkInvoiceFromTimeEntry?timeEntryId=${args.timeEntryId}invoiceId=${args.invoiceId}`, null, req);
  }
};
export {unlinkInvoiceFromTimeEntry};


const updateTimeEntry = {
  type: ResponseType,
  description: 'mutation for ofbiz updateTimeEntry method',
  args:{timeEntryId: {type: GraphQLString},fromDate: {type: GraphQLString},workEffortId: {type: GraphQLString},timesheetId: {type: GraphQLString},rateTypeId: {type: GraphQLString},hours: {type: GraphQLFloat},comments: {type: GraphQLString},invoiceId: {type: GraphQLString},invoiceItemSeqId: {type: GraphQLString},partyId: {type: GraphQLString},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/workeffortTimesheet/updateTimeEntry?timeEntryId=${args.timeEntryId}fromDate=${args.fromDate}workEffortId=${args.workEffortId}timesheetId=${args.timesheetId}rateTypeId=${args.rateTypeId}hours=${args.hours}comments=${args.comments}invoiceId=${args.invoiceId}invoiceItemSeqId=${args.invoiceItemSeqId}partyId=${args.partyId}thruDate=${args.thruDate}`, null, req);
  }
};
export {updateTimeEntry};


const updateTimesheet = {
  type: ResponseType,
  description: 'mutation for ofbiz updateTimesheet method',
  args:{timesheetId: {type: GraphQLString},fromDate: {type: GraphQLString},comments: {type: GraphQLString},statusId: {type: GraphQLString},approvedByUserLoginId: {type: GraphQLString},partyId: {type: GraphQLString},clientPartyId: {type: GraphQLString},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/workeffortTimesheet/updateTimesheet?timesheetId=${args.timesheetId}fromDate=${args.fromDate}comments=${args.comments}statusId=${args.statusId}approvedByUserLoginId=${args.approvedByUserLoginId}partyId=${args.partyId}clientPartyId=${args.clientPartyId}thruDate=${args.thruDate}`, null, req);
  }
};
export {updateTimesheet};


const updateTimesheetToInProcess = {
  type: ResponseType,
  description: 'mutation for ofbiz updateTimesheetToInProcess method',
  args:{timesheetId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/workeffortTimesheet/updateTimesheetToInProcess?timesheetId=${args.timesheetId}`, null, req);
  }
};
export {updateTimesheetToInProcess};
