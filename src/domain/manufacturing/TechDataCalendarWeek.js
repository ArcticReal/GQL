
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

import {TechDataCalendarExcWeekType} from '../manufacturing/TechDataCalendarExcWeek.js';
import {TechDataCalendarType} from '../manufacturing/TechDataCalendar.js';


const TechDataCalendarWeekType = new GraphQLObjectType({
  name: 'TechDataCalendarWeekType',
  description: 'Type for TechDataCalendarWeek in manufacturing',

  fields: () => ({
    calendarWeekId: {type: GraphQLString},
    sundayCapacity: {type: GraphQLFloat},
    wednesdayStartTime: {type: GraphQLString},
    thursdayCapacity: {type: GraphQLFloat},
    tuesdayStartTime: {type: GraphQLString},
    wednesdayCapacity: {type: GraphQLFloat},
    fridayStartTime: {type: GraphQLString},
    description: {type: GraphQLString},
    saturdayCapacity: {type: GraphQLFloat},
    mondayCapacity: {type: GraphQLFloat},
    mondayStartTime: {type: GraphQLString},
    saturdayStartTime: {type: GraphQLString},
    thursdayStartTime: {type: GraphQLString},
    sundayStartTime: {type: GraphQLString},
    fridayCapacity: {type: GraphQLFloat},
    tuesdayCapacity: {type: GraphQLFloat},
    techDataCalendarExcWeeks: {
      type: new GraphQLList(TechDataCalendarExcWeekType),
      args : {calendarWeekId: {type: GraphQLString}},
      resolve: (techDataCalendarWeek, args, {loaders}) => loaders.ofbizArray.load(`techDataCalendarExcWeeks/find?calendarWeekId=${techDataCalendarWeek.calendarWeekId}`)
    },
    techDataCalendars: {
      type: new GraphQLList(TechDataCalendarType),
      args : {calendarWeekId: {type: GraphQLString}},
      resolve: (techDataCalendarWeek, args, {loaders}) => loaders.ofbizArray.load(`techDataCalendars/find?calendarWeekId=${techDataCalendarWeek.calendarWeekId}`)
    }
  })
});

export {TechDataCalendarWeekType};
    




const TechDataCalendarWeekInputType = new GraphQLInputObjectType({
  name: 'TechDataCalendarWeekInputType',
  description: 'input type for TechDataCalendarWeek in manufacturing',

  fields: () => ({
    calendarWeekId: {type: GraphQLString},
    sundayCapacity: {type: GraphQLFloat},
    wednesdayStartTime: {type: GraphQLString},
    thursdayCapacity: {type: GraphQLFloat},
    tuesdayStartTime: {type: GraphQLString},
    wednesdayCapacity: {type: GraphQLFloat},
    fridayStartTime: {type: GraphQLString},
    description: {type: GraphQLString},
    saturdayCapacity: {type: GraphQLFloat},
    mondayCapacity: {type: GraphQLFloat},
    mondayStartTime: {type: GraphQLString},
    saturdayStartTime: {type: GraphQLString},
    thursdayStartTime: {type: GraphQLString},
    sundayStartTime: {type: GraphQLString},
    fridayCapacity: {type: GraphQLFloat},
    tuesdayCapacity: {type: GraphQLFloat}
  })
});

export {TechDataCalendarWeekInputType};
    