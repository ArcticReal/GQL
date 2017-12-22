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

const SupplierRatingTypeResponseType = new GraphQLObjectType({
  name: 'SupplierRatingTypeResponseType',
  description: 'response type for SupplierRatingType',

  fields: () => ({
    description: {type: GraphQLString},
    supplierRatingTypeId: {type: GraphQLString}
  })
});

export {SupplierRatingTypeResponseType};
    