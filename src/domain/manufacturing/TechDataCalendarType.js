
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {TechDataCalendarExcDayType} from '../manufacturing/TechDataCalendarExcDayType.js';
import {TechDataCalendarExcWeekType} from '../manufacturing/TechDataCalendarExcWeekType.js';
import {FixedAssetType} from '../accounting/FixedAssetType.js';
import {TechDataCalendarWeekType} from '../manufacturing/TechDataCalendarWeekType.js';


const TechDataCalendarType = new GraphQLObjectType({
  name: 'TechDataCalendarType',
  description: 'Type for TechDataCalendar in manufacturing',

  fields: () => ({
    calendarWeek: {
      type: TechDataCalendarWeekType,
      args : {calendarWeekId: {type: GraphQLString}},
      resolve: (techDataCalendar, args, {loaders}) => loaders.ofbiz.load(`techDataCalendarWeeks/find?calendarWeekId=${techDataCalendar.calendarWeekId}`)
    },
    calendarId: {type: GraphQLString},
    description: {type: GraphQLString},
    techDataCalendarExcWeek: {
      type: new GraphQLList(TechDataCalendarExcWeekType),
      args : {calendarId: {type: GraphQLString}},
      resolve: (techDataCalendar, args, {loaders}) => loaders.ofbizArray.load(`techDataCalendarExcWeeks/find?calendarId=${techDataCalendar.calendarId}`)
    },
    techDataCalendarExcDay: {
      type: new GraphQLList(TechDataCalendarExcDayType),
      args : {calendarId: {type: GraphQLString}},
      resolve: (techDataCalendar, args, {loaders}) => loaders.ofbizArray.load(`techDataCalendarExcDays/find?calendarId=${techDataCalendar.calendarId}`)
    },
    fixedAsset: {
      type: new GraphQLList(FixedAssetType),
      args : {calendarId: {type: GraphQLString}},
      resolve: (techDataCalendar, args, {loaders}) => loaders.ofbizArray.load(`fixedAssets/find?calendarId=${techDataCalendar.calendarId}`)
    }
  })
});

export {TechDataCalendarType};
    