
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

import {TechDataCalendarExcDayType} from '../../manufacturing/TechDataCalendarExcDay/TechDataCalendarExcDayType.js';
import {TechDataCalendarExcWeekType} from '../../manufacturing/TechDataCalendarExcWeek/TechDataCalendarExcWeekType.js';
import {FixedAssetType} from '../../accounting/FixedAsset/FixedAssetType.js';
import {TechDataCalendarWeekType} from '../../manufacturing/TechDataCalendarWeek/TechDataCalendarWeekType.js';


const TechDataCalendarType = new GraphQLObjectType({
  name: 'TechDataCalendarType',
  description: 'Type for TechDataCalendar in manufacturing',

  fields: () => ({
    calendarWeek: {
      type: TechDataCalendarWeekType,
      args : {calendarWeekId: {type: GraphQLString}},
      resolve: (techDataCalendar, args, {loaders}) => loaders.ofbiz.load(`manufacturing/techDataCalendar/techDataCalendarWeeks/find?calendarWeekId=${techDataCalendar.calendarWeekId}`)
    },
    calendarId: {type: GraphQLString},
    description: {type: GraphQLString},
    techDataCalendarExcWeeks: {
      type: new GraphQLList(TechDataCalendarExcWeekType),
      args : {},
      resolve: (techDataCalendar, args, {loaders}) => loaders.ofbizArray.load(`manufacturing/techDataCalendar/techDataCalendarExcWeeks/find?calendarId=${techDataCalendar.calendarId}`)
    },
    techDataCalendarExcDaies: {
      type: new GraphQLList(TechDataCalendarExcDayType),
      args : {},
      resolve: (techDataCalendar, args, {loaders}) => loaders.ofbizArray.load(`manufacturing/techDataCalendar/techDataCalendarExcDays/find?calendarId=${techDataCalendar.calendarId}`)
    },
    fixedAssets: {
      type: new GraphQLList(FixedAssetType),
      args : {},
      resolve: (techDataCalendar, args, {loaders}) => loaders.ofbizArray.load(`accounting/fixedAssets/find?calendarId=${techDataCalendar.calendarId}`)
    }
  })
});

export {TechDataCalendarType};
    