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

const FixedAssetIdentInputType = new GraphQLInputObjectType({
  name: 'FixedAssetIdentInputType',
  description: 'input type for FixedAssetIdent',

  fields: () => ({
    fixedAssetId: {type: GraphQLString},
    fixedAssetIdentTypeId: {type: GraphQLString},
    idValue: {type: GraphQLString}
  })
});

export {FixedAssetIdentInputType};
    