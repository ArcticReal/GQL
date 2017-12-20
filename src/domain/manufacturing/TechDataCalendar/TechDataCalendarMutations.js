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
import {TechDataCalendarInputType} from '../../manufacturing/TechDataCalendar/TechDataCalendarInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createTechDataCalendar = {
  type: ResopnseType,
  description: 'mutation for ofbiz createTechDataCalendar method',
  args:{techDataCalendarToBeAdded: {type: TechDataCalendarInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`manufacturing/techDataCalendars/add?`, args.techDataCalendarToBeAdded, req);
  }
};
export {createTechDataCalendar};


const updateTechDataCalendar = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateTechDataCalendar method',
  args:{techDataCalendarToBeUpdated: {type: TechDataCalendarInputType},calendarId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`manufacturing/techDataCalendars/${args.calendarId}?`, args.techDataCalendarToBeUpdated, req);
  }
};
export {updateTechDataCalendar};


const deleteTechDataCalendarByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteTechDataCalendarByIdUpdated method',
  args:{techDataCalendarId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`manufacturing/techDataCalendars/${args.techDataCalendarId}?`, null, req);
  }
};
export {deleteTechDataCalendarByIdUpdated};
