
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';



const SupplierRatingType = new GraphQLObjectType({
  name: 'SupplierRatingTypeType',
  description: 'Type for SupplierRatingType in product',

  fields: () => ({
    supplierRatingTypeId: {type: GraphQLString},
    description: {type: GraphQLString}
  })
});

export {SupplierRatingType};
    