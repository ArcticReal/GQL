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

const FixedAssetStdCostTypeResponseType = new GraphQLObjectType({
  name: 'FixedAssetStdCostTypeResponseType',
  description: 'response type for FixedAssetStdCostType',

  fields: () => ({
    description: {type: GraphQLString},
    fixedAssetStdCostTypeId: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    parentTypeId: {type: GraphQLString}
  })
});

export {FixedAssetStdCostTypeResponseType};
    