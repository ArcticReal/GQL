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

const FixedAssetIdentTypeResponseType = new GraphQLObjectType({
  name: 'FixedAssetIdentTypeResponseType',
  description: 'response type for FixedAssetIdentType',

  fields: () => ({
    description: {type: GraphQLString},
    fixedAssetIdentTypeId: {type: GraphQLString}
  })
});

export {FixedAssetIdentTypeResponseType};
    