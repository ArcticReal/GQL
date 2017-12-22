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

const FixedAssetTypeGlAccountResponseType = new GraphQLObjectType({
  name: 'FixedAssetTypeGlAccountResponseType',
  description: 'response type for FixedAssetTypeGlAccount',

  fields: () => ({
    accDepGlAccountId: {type: GraphQLString},
    assetGlAccountId: {type: GraphQLString},
    depGlAccountId: {type: GraphQLString},
    fixedAssetId: {type: GraphQLString},
    fixedAssetTypeId: {type: GraphQLString},
    lossGlAccountId: {type: GraphQLString},
    organizationPartyId: {type: GraphQLString},
    profitGlAccountId: {type: GraphQLString}
  })
});

export {FixedAssetTypeGlAccountResponseType};
    