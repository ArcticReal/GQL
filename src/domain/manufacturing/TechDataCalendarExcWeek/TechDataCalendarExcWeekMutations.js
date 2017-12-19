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
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createTechDataCalendarExcWeek = {
  type: GraphQLString,
  description: 'mutation for ofbiz createTechDataCalendarExcWeek method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`manufacturing/techDataCalendar/techDataCalendarExcWeeks/add?`, null, req);
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
