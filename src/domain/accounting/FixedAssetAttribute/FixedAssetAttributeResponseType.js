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

const FixedAssetAttributeResponseType = new GraphQLObjectType({
  name: 'FixedAssetAttributeResponseType',
  description: 'response type for FixedAssetAttribute',

  fields: () => ({
    attrDescription: {type: GraphQLString},
    attrName: {type: GraphQLString},
    attrValue: {type: GraphQLString},
    fixedAssetId: {type: GraphQLString}
  })
});

export {FixedAssetAttributeResponseType};
    