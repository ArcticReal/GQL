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

const TechDataCalendarWeekInputType = new GraphQLInputObjectType({
  name: 'TechDataCalendarWeekInputType',
  description: 'input type for TechDataCalendarWeek',

  fields: () => ({
    calendarWeekId: {type: GraphQLString},
    description: {type: GraphQLString},
    fridayCapacity: {type: GraphQLFloat},
    fridayStartTime: {type: GraphQLString},
    mondayCapacity: {type: GraphQLFloat},
    mondayStartTime: {type: GraphQLString},
    saturdayCapacity: {type: GraphQLFloat},
    saturdayStartTime: {type: GraphQLString},
    sundayCapacity: {type: GraphQLFloat},
    sundayStartTime: {type: GraphQLString},
    thursdayCapacity: {type: GraphQLFloat},
    thursdayStartTime: {type: GraphQLString},
    tuesdayCapacity: {type: GraphQLFloat},
    tuesdayStartTime: {type: GraphQLString},
    wednesdayCapacity: {type: GraphQLFloat},
    wednesdayStartTime: {type: GraphQLString}
  })
});

export {TechDataCalendarWeekInputType};
    