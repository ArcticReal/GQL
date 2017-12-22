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

const TechDataCalendarExcDayResponseType = new GraphQLObjectType({
  name: 'TechDataCalendarExcDayResponseType',
  description: 'response type for TechDataCalendarExcDay',

  fields: () => ({
    calendarId: {type: GraphQLString},
    description: {type: GraphQLString},
    exceptionCapacity: {type: GraphQLFloat},
    exceptionDateStartTime: {type: GraphQLString},
    usedCapacity: {type: GraphQLFloat}
  })
});

export {TechDataCalendarExcDayResponseType};
    