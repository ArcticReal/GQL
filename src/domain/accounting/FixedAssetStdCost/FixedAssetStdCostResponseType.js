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

const FixedAssetStdCostResponseType = new GraphQLObjectType({
  name: 'FixedAssetStdCostResponseType',
  description: 'response type for FixedAssetStdCost',

  fields: () => ({
    amount: {type: GraphQLFloat},
    amountUomId: {type: GraphQLString},
    fixedAssetId: {type: GraphQLString},
    fixedAssetStdCostTypeId: {type: GraphQLString},
    fromDate: {type: GraphQLString},
    thruDate: {type: GraphQLString}
  })
});

export {FixedAssetStdCostResponseType};
    