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

const FixedAssetIdentResponseType = new GraphQLObjectType({
  name: 'FixedAssetIdentResponseType',
  description: 'response type for FixedAssetIdent',

  fields: () => ({
    fixedAssetId: {type: GraphQLString},
    fixedAssetIdentTypeId: {type: GraphQLString},
    idValue: {type: GraphQLString}
  })
});

export {FixedAssetIdentResponseType};
    