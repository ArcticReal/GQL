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

const FixedAssetDepMethodInputType = new GraphQLInputObjectType({
  name: 'FixedAssetDepMethodInputType',
  description: 'input type for FixedAssetDepMethod',

  fields: () => ({
    depreciationCustomMethodId: {type: GraphQLString},
    fixedAssetId: {type: GraphQLString},
    fromDate: {type: GraphQLString},
    thruDate: {type: GraphQLString}
  })
});

export {FixedAssetDepMethodInputType};
    