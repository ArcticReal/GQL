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

const DesiredFeatureResponseType = new GraphQLObjectType({
  name: 'DesiredFeatureResponseType',
  description: 'response type for DesiredFeature',

  fields: () => ({
    desiredFeatureId: {type: GraphQLString},
    optionalInd: {type: GraphQLBoolean},
    productFeatureId: {type: GraphQLString},
    requirementId: {type: GraphQLString}
  })
});

export {DesiredFeatureResponseType};
    