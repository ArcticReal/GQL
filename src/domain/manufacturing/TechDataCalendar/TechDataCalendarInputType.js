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

const TechDataCalendarInputType = new GraphQLInputObjectType({
  name: 'TechDataCalendarInputType',
  description: 'input type for TechDataCalendar',

  fields: () => ({
    calendarId: {type: GraphQLString},
    calendarWeekId: {type: GraphQLString},
    description: {type: GraphQLString}
  })
});

export {TechDataCalendarInputType};
    