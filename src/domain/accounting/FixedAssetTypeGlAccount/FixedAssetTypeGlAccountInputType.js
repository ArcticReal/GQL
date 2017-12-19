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

const FixedAssetTypeGlAccountInputType = new GraphQLInputObjectType({
  name: 'FixedAssetTypeGlAccountInputType',
  description: 'input type for FixedAssetTypeGlAccount',

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

export {FixedAssetTypeGlAccountInputType};
    