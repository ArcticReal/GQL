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

const TechDataCalendarExcWeekInputType = new GraphQLInputObjectType({
  name: 'TechDataCalendarExcWeekInputType',
  description: 'input type for TechDataCalendarExcWeek',

  fields: () => ({
    calendarId: {type: GraphQLString},
    calendarWeekId: {type: GraphQLString},
    description: {type: GraphQLString},
    exceptionDateStart: {type: GraphQLString}
  })
});

export {TechDataCalendarExcWeekInputType};
    