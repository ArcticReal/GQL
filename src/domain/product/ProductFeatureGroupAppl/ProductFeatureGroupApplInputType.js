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

const ProductFeatureGroupApplInputType = new GraphQLInputObjectType({
  name: 'ProductFeatureGroupApplInputType',
  description: 'input type for ProductFeatureGroupAppl',

  fields: () => ({
    fromDate: {type: GraphQLString},
    productFeatureGroupId: {type: GraphQLString},
    productFeatureId: {type: GraphQLString},
    sequenceNum: {type: GraphQLInt},
    thruDate: {type: GraphQLString}
  })
});

export {ProductFeatureGroupApplInputType};
    