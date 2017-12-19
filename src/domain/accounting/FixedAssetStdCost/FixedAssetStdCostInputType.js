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

const FixedAssetStdCostInputType = new GraphQLInputObjectType({
  name: 'FixedAssetStdCostInputType',
  description: 'input type for FixedAssetStdCost',

  fields: () => ({
    amount: {type: GraphQLFloat},
    amountUomId: {type: GraphQLString},
    fixedAssetId: {type: GraphQLString},
    fixedAssetStdCostTypeId: {type: GraphQLString},
    fromDate: {type: GraphQLString},
    thruDate: {type: GraphQLString}
  })
});

export {FixedAssetStdCostInputType};
    