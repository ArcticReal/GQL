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

const EmplPositionTypeClassResponseType = new GraphQLObjectType({
  name: 'EmplPositionTypeClassResponseType',
  description: 'response type for EmplPositionTypeClass',

  fields: () => ({
    emplPositionClassTypeId: {type: GraphQLString},
    emplPositionTypeId: {type: GraphQLString},
    fromDate: {type: GraphQLString},
    standardHoursPerWeek: {type: GraphQLFloat},
    thruDate: {type: GraphQLString}
  })
});

export {EmplPositionTypeClassResponseType};
    