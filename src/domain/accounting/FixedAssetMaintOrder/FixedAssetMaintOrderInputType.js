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

const FixedAssetMaintOrderInputType = new GraphQLInputObjectType({
  name: 'FixedAssetMaintOrderInputType',
  description: 'input type for FixedAssetMaintOrder',

  fields: () => ({
    fixedAssetId: {type: GraphQLString},
    maintHistSeqId: {type: GraphQLString},
    orderId: {type: GraphQLString},
    orderItemSeqId: {type: GraphQLString}
  })
});

export {FixedAssetMaintOrderInputType};
    