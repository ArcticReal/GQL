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


const createCalendar = {
  type: ResponseType,
  description: 'mutation for ofbiz createCalendar method',
  args:{calendarId: {type: GraphQLString},calendarWeekId: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/manufacturingCalendar/createCalendar?calendarId=${args.calendarId}&calendarWeekId=${args.calendarWeekId}&description=${args.description}&`, null, req);
  }
};
export {createCalendar};


const createCalendarExceptionDay = {
  type: ResponseType,
  description: 'mutation for ofbiz createCalendarExceptionDay method',
  args:{exceptionDateStartTime: {type: GraphQLString},calendarId: {type: GraphQLString},exceptionCapacity: {type: GraphQLFloat},usedCapacity: {type: GraphQLFloat},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/manufacturingCalendar/createCalendarExceptionDay?exceptionDateStartTime=${args.exceptionDateStartTime}&calendarId=${args.calendarId}&exceptionCapacity=${args.exceptionCapacity}&usedCapacity=${args.usedCapacity}&description=${args.description}&`, null, req);
  }
};
export {createCalendarExceptionDay};


const createCalendarExceptionWeek = {
  type: ResponseType,
  description: 'mutation for ofbiz createCalendarExceptionWeek method',
  args:{exceptionDateStart: {type: GraphQLString},calendarId: {type: GraphQLString},calendarWeekId: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/manufacturingCalendar/createCalendarExceptionWeek?exceptionDateStart=${args.exceptionDateStart}&calendarId=${args.calendarId}&calendarWeekId=${args.calendarWeekId}&description=${args.description}&`, null, req);
  }
};
export {createCalendarExceptionWeek};


const createCalendarWeek = {
  type: ResponseType,
  description: 'mutation for ofbiz createCalendarWeek method',
  args:{calendarWeekId: {type: GraphQLString},sundayCapacity: {type: GraphQLFloat},wednesdayStartTime: {type: GraphQLString},thursdayCapacity: {type: GraphQLFloat},tuesdayStartTime: {type: GraphQLString},wednesdayCapacity: {type: GraphQLFloat},fridayStartTime: {type: GraphQLString},description: {type: GraphQLString},saturdayCapacity: {type: GraphQLFloat},mondayCapacity: {type: GraphQLFloat},mondayStartTime: {type: GraphQLString},saturdayStartTime: {type: GraphQLString},thursdayStartTime: {type: GraphQLString},sundayStartTime: {type: GraphQLString},fridayCapacity: {type: GraphQLFloat},tuesdayCapacity: {type: GraphQLFloat}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/manufacturingCalendar/createCalendarWeek?calendarWeekId=${args.calendarWeekId}&sundayCapacity=${args.sundayCapacity}&wednesdayStartTime=${args.wednesdayStartTime}&thursdayCapacity=${args.thursdayCapacity}&tuesdayStartTime=${args.tuesdayStartTime}&wednesdayCapacity=${args.wednesdayCapacity}&fridayStartTime=${args.fridayStartTime}&description=${args.description}&saturdayCapacity=${args.saturdayCapacity}&mondayCapacity=${args.mondayCapacity}&mondayStartTime=${args.mondayStartTime}&saturdayStartTime=${args.saturdayStartTime}&thursdayStartTime=${args.thursdayStartTime}&sundayStartTime=${args.sundayStartTime}&fridayCapacity=${args.fridayCapacity}&tuesdayCapacity=${args.tuesdayCapacity}&`, null, req);
  }
};
export {createCalendarWeek};


const removeCalendar = {
  type: ResponseType,
  description: 'mutation for ofbiz removeCalendar method',
  args:{calendarId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/manufacturingCalendar/removeCalendar?calendarId=${args.calendarId}&`, null, req);
  }
};
export {removeCalendar};


const removeCalendarExceptionDay = {
  type: ResponseType,
  description: 'mutation for ofbiz removeCalendarExceptionDay method',
  args:{exceptionDateStartTime: {type: GraphQLString},calendarId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/manufacturingCalendar/removeCalendarExceptionDay?exceptionDateStartTime=${args.exceptionDateStartTime}&calendarId=${args.calendarId}&`, null, req);
  }
};
export {removeCalendarExceptionDay};


const removeCalendarExceptionWeek = {
  type: ResponseType,
  description: 'mutation for ofbiz removeCalendarExceptionWeek method',
  args:{exceptionDateStart: {type: GraphQLString},calendarId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/manufacturingCalendar/removeCalendarExceptionWeek?exceptionDateStart=${args.exceptionDateStart}&calendarId=${args.calendarId}&`, null, req);
  }
};
export {removeCalendarExceptionWeek};


const removeCalendarWeek = {
  type: ResponseType,
  description: 'mutation for ofbiz removeCalendarWeek method',
  args:{calendarWeekId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/manufacturingCalendar/removeCalendarWeek?calendarWeekId=${args.calendarWeekId}&`, null, req);
  }
};
export {removeCalendarWeek};


const updateCalendar = {
  type: ResponseType,
  description: 'mutation for ofbiz updateCalendar method',
  args:{calendarId: {type: GraphQLString},calendarWeekId: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/manufacturingCalendar/updateCalendar?calendarId=${args.calendarId}&calendarWeekId=${args.calendarWeekId}&description=${args.description}&`, null, req);
  }
};
export {updateCalendar};


const updateCalendarExceptionDay = {
  type: ResponseType,
  description: 'mutation for ofbiz updateCalendarExceptionDay method',
  args:{exceptionDateStartTime: {type: GraphQLString},calendarId: {type: GraphQLString},exceptionCapacity: {type: GraphQLFloat},usedCapacity: {type: GraphQLFloat},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/manufacturingCalendar/updateCalendarExceptionDay?exceptionDateStartTime=${args.exceptionDateStartTime}&calendarId=${args.calendarId}&exceptionCapacity=${args.exceptionCapacity}&usedCapacity=${args.usedCapacity}&description=${args.description}&`, null, req);
  }
};
export {updateCalendarExceptionDay};


const updateCalendarExceptionWeek = {
  type: ResponseType,
  description: 'mutation for ofbiz updateCalendarExceptionWeek method',
  args:{exceptionDateStart: {type: GraphQLString},calendarId: {type: GraphQLString},calendarWeekId: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/manufacturingCalendar/updateCalendarExceptionWeek?exceptionDateStart=${args.exceptionDateStart}&calendarId=${args.calendarId}&calendarWeekId=${args.calendarWeekId}&description=${args.description}&`, null, req);
  }
};
export {updateCalendarExceptionWeek};


const updateCalendarWeek = {
  type: ResponseType,
  description: 'mutation for ofbiz updateCalendarWeek method',
  args:{calendarWeekId: {type: GraphQLString},sundayCapacity: {type: GraphQLFloat},wednesdayStartTime: {type: GraphQLString},thursdayCapacity: {type: GraphQLFloat},tuesdayStartTime: {type: GraphQLString},wednesdayCapacity: {type: GraphQLFloat},fridayStartTime: {type: GraphQLString},description: {type: GraphQLString},saturdayCapacity: {type: GraphQLFloat},mondayCapacity: {type: GraphQLFloat},mondayStartTime: {type: GraphQLString},saturdayStartTime: {type: GraphQLString},thursdayStartTime: {type: GraphQLString},sundayStartTime: {type: GraphQLString},fridayCapacity: {type: GraphQLFloat},tuesdayCapacity: {type: GraphQLFloat}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/manufacturingCalendar/updateCalendarWeek?calendarWeekId=${args.calendarWeekId}&sundayCapacity=${args.sundayCapacity}&wednesdayStartTime=${args.wednesdayStartTime}&thursdayCapacity=${args.thursdayCapacity}&tuesdayStartTime=${args.tuesdayStartTime}&wednesdayCapacity=${args.wednesdayCapacity}&fridayStartTime=${args.fridayStartTime}&description=${args.description}&saturdayCapacity=${args.saturdayCapacity}&mondayCapacity=${args.mondayCapacity}&mondayStartTime=${args.mondayStartTime}&saturdayStartTime=${args.saturdayStartTime}&thursdayStartTime=${args.thursdayStartTime}&sundayStartTime=${args.sundayStartTime}&fridayCapacity=${args.fridayCapacity}&tuesdayCapacity=${args.tuesdayCapacity}&`, null, req);
  }
};
export {updateCalendarWeek};
