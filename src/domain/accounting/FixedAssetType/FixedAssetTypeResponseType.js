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

const FixedAssetTypeResponseType = new GraphQLObjectType({
  name: 'FixedAssetTypeResponseType',
  description: 'response type for FixedAssetType',

  fields: () => ({
    description: {type: GraphQLString},
    fixedAssetTypeId: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    parentTypeId: {type: GraphQLString}
  })
});

export {FixedAssetTypeResponseType};
    