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

const FixedAssetAttributeInputType = new GraphQLInputObjectType({
  name: 'FixedAssetAttributeInputType',
  description: 'input type for FixedAssetAttribute',

  fields: () => ({
    attrDescription: {type: GraphQLString},
    attrName: {type: GraphQLString},
    attrValue: {type: GraphQLString},
    fixedAssetId: {type: GraphQLString}
  })
});

export {FixedAssetAttributeInputType};
    