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

const TechDataCalendarExcWeekResponseType = new GraphQLObjectType({
  name: 'TechDataCalendarExcWeekResponseType',
  description: 'response type for TechDataCalendarExcWeek',

  fields: () => ({
    calendarId: {type: GraphQLString},
    calendarWeekId: {type: GraphQLString},
    description: {type: GraphQLString},
    exceptionDateStart: {type: GraphQLString}
  })
});

export {TechDataCalendarExcWeekResponseType};
    