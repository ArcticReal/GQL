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

const TechDataCalendarExcDayInputType = new GraphQLInputObjectType({
  name: 'TechDataCalendarExcDayInputType',
  description: 'input type for TechDataCalendarExcDay',

  fields: () => ({
    calendarId: {type: GraphQLString},
    description: {type: GraphQLString},
    exceptionCapacity: {type: GraphQLFloat},
    exceptionDateStartTime: {type: GraphQLString},
    usedCapacity: {type: GraphQLFloat}
  })
});

export {TechDataCalendarExcDayInputType};
    