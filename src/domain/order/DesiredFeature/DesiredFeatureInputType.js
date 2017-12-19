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

const DesiredFeatureInputType = new GraphQLInputObjectType({
  name: 'DesiredFeatureInputType',
  description: 'input type for DesiredFeature',

  fields: () => ({
    desiredFeatureId: {type: GraphQLString},
    optionalInd: {type: GraphQLBoolean},
    productFeatureId: {type: GraphQLString},
    requirementId: {type: GraphQLString}
  })
});

export {DesiredFeatureInputType};
    