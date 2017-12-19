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

const ValidResponsibilityInputType = new GraphQLInputObjectType({
  name: 'ValidResponsibilityInputType',
  description: 'input type for ValidResponsibility',

  fields: () => ({
    comments: {type: GraphQLString},
    emplPositionTypeId: {type: GraphQLString},
    fromDate: {type: GraphQLString},
    responsibilityTypeId: {type: GraphQLString},
    thruDate: {type: GraphQLString}
  })
});

export {ValidResponsibilityInputType};
    