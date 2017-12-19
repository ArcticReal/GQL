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

const FixedAssetTypeAttrInputType = new GraphQLInputObjectType({
  name: 'FixedAssetTypeAttrInputType',
  description: 'input type for FixedAssetTypeAttr',

  fields: () => ({
    attrName: {type: GraphQLString},
    description: {type: GraphQLString},
    fixedAssetTypeId: {type: GraphQLString}
  })
});

export {FixedAssetTypeAttrInputType};
    