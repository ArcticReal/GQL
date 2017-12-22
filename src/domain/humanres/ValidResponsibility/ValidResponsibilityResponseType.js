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

const ValidResponsibilityResponseType = new GraphQLObjectType({
  name: 'ValidResponsibilityResponseType',
  description: 'response type for ValidResponsibility',

  fields: () => ({
    comments: {type: GraphQLString},
    emplPositionTypeId: {type: GraphQLString},
    fromDate: {type: GraphQLString},
    responsibilityTypeId: {type: GraphQLString},
    thruDate: {type: GraphQLString}
  })
});

export {ValidResponsibilityResponseType};
    