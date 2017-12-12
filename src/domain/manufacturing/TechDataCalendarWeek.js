
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
      args : {},
      resolve: (techDataCalendarWeek, args, {loaders}) => loaders.ofbizArray.load(`manufacturing/techDataCalendar/techDataCalendarExcWeeks/find?calendarWeekId=${techDataCalendarWeek.calendarWeekId}`)
    },
    techDataCalendars: {
      type: new GraphQLList(TechDataCalendarType),
      args : {},
      resolve: (techDataCalendarWeek, args, {loaders}) => loaders.ofbizArray.load(`manufacturing/techDataCalendars/find?calendarWeekId=${techDataCalendarWeek.calendarWeekId}`)
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
    