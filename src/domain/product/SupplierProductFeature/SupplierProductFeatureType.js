
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



const SupplierProductFeatureType = new GraphQLObjectType({
  name: 'SupplierProductFeatureType',
  description: 'Type for SupplierProductFeature in product',

  fields: () => ({
    idCode: {type: GraphQLString},
    productFeatureId: {type: GraphQLString},
    description: {type: GraphQLString},
    uomId: {type: GraphQLString},
    partyId: {type: GraphQLString}
  })
});

export {SupplierProductFeatureType};
    