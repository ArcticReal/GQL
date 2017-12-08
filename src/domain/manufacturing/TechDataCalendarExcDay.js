
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

import {TechDataCalendarType} from '../manufacturing/TechDataCalendar.js';


const TechDataCalendarExcDayType = new GraphQLObjectType({
  name: 'TechDataCalendarExcDayType',
  description: 'Type for TechDataCalendarExcDay in manufacturing',

  fields: () => ({
    exceptionDateStartTime: {type: GraphQLString},
    calendar: {
      type: TechDataCalendarType,
      args : {calendarId: {type: GraphQLString}},
      resolve: (techDataCalendarExcDay, args, {loaders}) => loaders.ofbiz.load(`techDataCalendars/find?calendarId=${techDataCalendarExcDay.calendarId}`)
    },
    exceptionCapacity: {type: GraphQLFloat},
    usedCapacity: {type: GraphQLFloat},
    description: {type: GraphQLString}
  })
});

export {TechDataCalendarExcDayType};
    




const TechDataCalendarExcDayInputType = new GraphQLInputObjectType({
  name: 'TechDataCalendarExcDayInputType',
  description: 'input type for TechDataCalendarExcDay in manufacturing',

  fields: () => ({
    exceptionDateStartTime: {type: GraphQLString},
    calendarId: {type: GraphQLString},
    exceptionCapacity: {type: GraphQLFloat},
    usedCapacity: {type: GraphQLFloat},
    description: {type: GraphQLString}
  })
});

export {TechDataCalendarExcDayInputType};
    