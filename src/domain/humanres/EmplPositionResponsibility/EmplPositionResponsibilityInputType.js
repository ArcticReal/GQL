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

const EmplPositionResponsibilityInputType = new GraphQLInputObjectType({
  name: 'EmplPositionResponsibilityInputType',
  description: 'input type for EmplPositionResponsibility',

  fields: () => ({
    comments: {type: GraphQLString},
    emplPositionId: {type: GraphQLString},
    fromDate: {type: GraphQLString},
    responsibilityTypeId: {type: GraphQLString},
    thruDate: {type: GraphQLString}
  })
});

export {EmplPositionResponsibilityInputType};
    