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
import {TechDataCalendarExcDayInputType} from '../../manufacturing/TechDataCalendarExcDay/TechDataCalendarExcDayInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createTechDataCalendarExcDay = {
  type: ResopnseType,
  description: 'mutation for ofbiz createTechDataCalendarExcDay method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`manufacturing/techDataCalendar/techDataCalendarExcDays/add?`, null, req);
  }
};
export {createTechDataCalendarExcDay};


const updateTechDataCalendarExcDay = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateTechDataCalendarExcDay method',
  args:{techDataCalendarExcDayToBeUpdated: {type: TechDataCalendarExcDayInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`manufacturing/techDataCalendar/techDataCalendarExcDays/${args.nullVal}?`, args.techDataCalendarExcDayToBeUpdated, req);
  }
};
export {updateTechDataCalendarExcDay};


const deleteTechDataCalendarExcDayByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteTechDataCalendarExcDayByIdUpdated method',
  args:{techDataCalendarExcDayId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`manufacturing/techDataCalendar/techDataCalendarExcDays/${args.techDataCalendarExcDayId}?`, null, req);
  }
};
export {deleteTechDataCalendarExcDayByIdUpdated};
