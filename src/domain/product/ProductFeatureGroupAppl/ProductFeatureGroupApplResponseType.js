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

const ProductFeatureGroupApplResponseType = new GraphQLObjectType({
  name: 'ProductFeatureGroupApplResponseType',
  description: 'response type for ProductFeatureGroupAppl',

  fields: () => ({
    fromDate: {type: GraphQLString},
    productFeatureGroupId: {type: GraphQLString},
    productFeatureId: {type: GraphQLString},
    sequenceNum: {type: GraphQLInt},
    thruDate: {type: GraphQLString}
  })
});

export {ProductFeatureGroupApplResponseType};
    