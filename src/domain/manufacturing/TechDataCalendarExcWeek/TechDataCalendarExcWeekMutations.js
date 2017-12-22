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
import {TechDataCalendarExcWeekInputType} from '../../manufacturing/TechDataCalendarExcWeek/TechDataCalendarExcWeekInputType.js';
import {TechDataCalendarExcWeekResponseType} from '../../manufacturing/TechDataCalendarExcWeek/TechDataCalendarExcWeekResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createTechDataCalendarExcWeek = {
  type: TechDataCalendarExcWeekResponseType,
  description: 'mutation for ofbiz createTechDataCalendarExcWeek method',
  args:{techDataCalendarExcWeekToBeAdded: {type: TechDataCalendarExcWeekInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`manufacturing/techDataCalendar/techDataCalendarExcWeeks/add?`, args.techDataCalendarExcWeekToBeAdded, req);
  }
};
export {createTechDataCalendarExcWeek};


const updateTechDataCalendarExcWeek = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateTechDataCalendarExcWeek method',
  args:{techDataCalendarExcWeekToBeUpdated: {type: TechDataCalendarExcWeekInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`manufacturing/techDataCalendar/techDataCalendarExcWeeks/${args.nullVal}?`, args.techDataCalendarExcWeekToBeUpdated, req);
  }
};
export {updateTechDataCalendarExcWeek};


const deleteTechDataCalendarExcWeekByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteTechDataCalendarExcWeekByIdUpdated method',
  args:{techDataCalendarExcWeekId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`manufacturing/techDataCalendar/techDataCalendarExcWeeks/${args.techDataCalendarExcWeekId}?`, null, req);
  }
};
export {deleteTechDataCalendarExcWeekByIdUpdated};
