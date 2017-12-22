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

const TechDataCalendarResponseType = new GraphQLObjectType({
  name: 'TechDataCalendarResponseType',
  description: 'response type for TechDataCalendar',

  fields: () => ({
    calendarId: {type: GraphQLString},
    calendarWeekId: {type: GraphQLString},
    description: {type: GraphQLString}
  })
});

export {TechDataCalendarResponseType};
    