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

const FixedAssetProductTypeInputType = new GraphQLInputObjectType({
  name: 'FixedAssetProductTypeInputType',
  description: 'input type for FixedAssetProductType',

  fields: () => ({
    description: {type: GraphQLString},
    fixedAssetProductTypeId: {type: GraphQLString}
  })
});

export {FixedAssetProductTypeInputType};
    