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

const FixedAssetIdentTypeInputType = new GraphQLInputObjectType({
  name: 'FixedAssetIdentTypeInputType',
  description: 'input type for FixedAssetIdentType',

  fields: () => ({
    description: {type: GraphQLString},
    fixedAssetIdentTypeId: {type: GraphQLString}
  })
});

export {FixedAssetIdentTypeInputType};
    