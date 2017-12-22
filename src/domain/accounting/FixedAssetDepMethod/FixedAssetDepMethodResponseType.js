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

const FixedAssetDepMethodResponseType = new GraphQLObjectType({
  name: 'FixedAssetDepMethodResponseType',
  description: 'response type for FixedAssetDepMethod',

  fields: () => ({
    depreciationCustomMethodId: {type: GraphQLString},
    fixedAssetId: {type: GraphQLString},
    fromDate: {type: GraphQLString},
    thruDate: {type: GraphQLString}
  })
});

export {FixedAssetDepMethodResponseType};
    