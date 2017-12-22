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

const FixedAssetProductTypeResponseType = new GraphQLObjectType({
  name: 'FixedAssetProductTypeResponseType',
  description: 'response type for FixedAssetProductType',

  fields: () => ({
    description: {type: GraphQLString},
    fixedAssetProductTypeId: {type: GraphQLString}
  })
});

export {FixedAssetProductTypeResponseType};
    