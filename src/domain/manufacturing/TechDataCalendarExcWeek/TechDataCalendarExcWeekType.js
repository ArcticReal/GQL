
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

import {TechDataCalendarWeekType} from '../../manufacturing/TechDataCalendarWeek/TechDataCalendarWeekType.js';
import {TechDataCalendarType} from '../../manufacturing/TechDataCalendar/TechDataCalendarType.js';


const TechDataCalendarExcWeekType = new GraphQLObjectType({
  name: 'TechDataCalendarExcWeekType',
  description: 'Type for TechDataCalendarExcWeek in manufacturing',

  fields: () => ({
    calendarWeek: {
      type: TechDataCalendarWeekType,
      args : {calendarWeekId: {type: GraphQLString}},
      resolve: (techDataCalendarExcWeek, args, {loaders}) => loaders.ofbiz.load(`manufacturing/techDataCalendar/techDataCalendarWeeks/find?calendarWeekId=${techDataCalendarExcWeek.calendarWeekId}`)
    },
    exceptionDateStart: {type: GraphQLString},
    calendar: {
      type: TechDataCalendarType,
      args : {calendarId: {type: GraphQLString}},
      resolve: (techDataCalendarExcWeek, args, {loaders}) => loaders.ofbiz.load(`manufacturing/techDataCalendars/find?calendarId=${techDataCalendarExcWeek.calendarId}`)
    },
    description: {type: GraphQLString}
  })
});

export {TechDataCalendarExcWeekType};
    