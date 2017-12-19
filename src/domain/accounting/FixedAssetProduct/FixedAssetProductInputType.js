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

const FixedAssetProductInputType = new GraphQLInputObjectType({
  name: 'FixedAssetProductInputType',
  description: 'input type for FixedAssetProduct',

  fields: () => ({
    comments: {type: GraphQLString},
    fixedAssetId: {type: GraphQLString},
    fixedAssetProductTypeId: {type: GraphQLString},
    fromDate: {type: GraphQLString},
    productId: {type: GraphQLString},
    quantity: {type: GraphQLFloat},
    quantityUomId: {type: GraphQLString},
    sequenceNum: {type: GraphQLInt},
    thruDate: {type: GraphQLString}
  })
});

export {FixedAssetProductInputType};
    