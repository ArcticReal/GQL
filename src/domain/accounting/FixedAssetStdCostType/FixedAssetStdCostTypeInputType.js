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

const FixedAssetStdCostTypeInputType = new GraphQLInputObjectType({
  name: 'FixedAssetStdCostTypeInputType',
  description: 'input type for FixedAssetStdCostType',

  fields: () => ({
    description: {type: GraphQLString},
    fixedAssetStdCostTypeId: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    parentTypeId: {type: GraphQLString}
  })
});

export {FixedAssetStdCostTypeInputType};
    