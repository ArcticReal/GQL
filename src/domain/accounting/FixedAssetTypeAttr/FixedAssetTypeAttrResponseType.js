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

const FixedAssetTypeAttrResponseType = new GraphQLObjectType({
  name: 'FixedAssetTypeAttrResponseType',
  description: 'response type for FixedAssetTypeAttr',

  fields: () => ({
    attrName: {type: GraphQLString},
    description: {type: GraphQLString},
    fixedAssetTypeId: {type: GraphQLString}
  })
});

export {FixedAssetTypeAttrResponseType};
    