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

const EmplPositionResponsibilityResponseType = new GraphQLObjectType({
  name: 'EmplPositionResponsibilityResponseType',
  description: 'response type for EmplPositionResponsibility',

  fields: () => ({
    comments: {type: GraphQLString},
    emplPositionId: {type: GraphQLString},
    fromDate: {type: GraphQLString},
    responsibilityTypeId: {type: GraphQLString},
    thruDate: {type: GraphQLString}
  })
});

export {EmplPositionResponsibilityResponseType};
    