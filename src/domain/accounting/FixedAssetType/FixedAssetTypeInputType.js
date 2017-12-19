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

const FixedAssetTypeInputType = new GraphQLInputObjectType({
  name: 'FixedAssetTypeInputType',
  description: 'input type for FixedAssetType',

  fields: () => ({
    description: {type: GraphQLString},
    fixedAssetTypeId: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    parentTypeId: {type: GraphQLString}
  })
});

export {FixedAssetTypeInputType};
    