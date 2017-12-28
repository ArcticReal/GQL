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
import {TechDataCalendarWeekInputType} from '../../manufacturing/TechDataCalendarWeek/TechDataCalendarWeekInputType.js';
import {TechDataCalendarWeekResponseType} from '../../manufacturing/TechDataCalendarWeek/TechDataCalendarWeekResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createTechDataCalendarWeek = {
  type: TechDataCalendarWeekResponseType,
  description: 'mutation for ofbiz createTechDataCalendarWeek method',
  args:{techDataCalendarWeekToBeAdded: {type: TechDataCalendarWeekInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`manufacturing/techDataCalendar/techDataCalendarWeeks/add?`, args.techDataCalendarWeekToBeAdded, req);
  }
};
export {createTechDataCalendarWeek};


const updateTechDataCalendarWeek = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateTechDataCalendarWeek method',
  args:{techDataCalendarWeekToBeUpdated: {type: TechDataCalendarWeekInputType},calendarWeekId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`manufacturing/techDataCalendar/techDataCalendarWeeks/${args.calendarWeekId}?`, args.techDataCalendarWeekToBeUpdated, req);
  }
};
export {updateTechDataCalendarWeek};


const deleteTechDataCalendarWeekByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteTechDataCalendarWeekByIdUpdated method',
  args:{techDataCalendarWeekId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`manufacturing/techDataCalendar/techDataCalendarWeeks/${args.techDataCalendarWeekId}?`, null, req);
  }
};
export {deleteTechDataCalendarWeekByIdUpdated};
